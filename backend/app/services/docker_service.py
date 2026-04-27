import docker
import boto3
import os
import shutil
import uuid
from dotenv import load_dotenv

load_dotenv()

client = docker.from_env()

r2 = boto3.client("s3",
    endpoint_url          = f"https://{os.getenv('CF_ACCOUNT_ID')}.r2.cloudflarestorage.com",  # ← remove hyperlink formatting
    aws_access_key_id     = os.getenv("R2_ACCESS_KEY"),
    aws_secret_access_key = os.getenv("R2_SECRET_KEY"),
)

def upload_to_r2(file_path: str, job_id: str) -> str:
    r2.upload_file(
        file_path, "arbirates-static-html", f"graphs/{job_id}.html",
        ExtraArgs={"ContentType": "text/html"}
    )
    return f"https://769d9b840a54ce5ef3b6c831ab33fdf4.r2.cloudflarestorage.com/graphs/{job_id}.html"

def run_container(repo_url, job_id):
    commands = [
        f"git clone {repo_url} /repo",   # ← fixed path, no ./work/repo
        "graphify install",
        "graphify update /repo",          # ← correct command, no "install"
        "cp /repo/graphify-out/graph.html /work/output/graph.html",
        "cp /repo/graphify-out/graph.json /work/output/graph.json",
    ]
    command_str = " && ".join(commands)

    output_dir = os.path.abspath(f"/tmp/graphify/{job_id}")
    os.makedirs(output_dir, exist_ok=True)   # ← removed the rmtree that deleted it right after

    try:
        container = client.containers.run(
            "graphify-runner",
            command=["sh", "-c", command_str],
            volumes={
                output_dir: {
                    "bind": "/work/output",
                    "mode": "rw"
                }
            },
            environment={
                "ANTHROPIC_API_KEY": os.getenv("ANTHROPIC_API_KEY"),  # ← required for LLM extraction
            },
            detach=True,
            remove=False,
            mem_limit="512m",
            network_mode="host",
        )

        for line in container.logs(stream=True):
            print(line.decode(), end="")

        result = container.wait()
        print("Exit code:", result["StatusCode"])
        container.remove(force=True)

        files = os.listdir(output_dir)

        html_files = [f for f in files if f.endswith(".html")]  # ← fixed: was html_file then checked html_files
        if not html_files:
            raise Exception(f"graphify produced no HTML. Files: {files}. Check API key is set.")

        html_path = os.path.join(output_dir, html_files[0])
        graph_url = upload_to_r2(html_path, job_id)

        return {"job_id": job_id, "graph_url": graph_url}

    finally:
        shutil.rmtree(output_dir, ignore_errors=True)
