import docker 

client = docker.from_env()



def run_container(repo_url):
    commands = [
       f"git clone {repo_url} /repo",
        "cd /repo",
        "ls -la"
    ]

    # Join with && so it stops on first failure
    command_str = " && ".join(commands)
    container = client.containers.run(
        "bitnami/git",
        command=["sh", "-c", command_str],
        detach=True,
        mem_limit="512m",
        network_mode="host",
    )

    # Stream the output live
    for line in container.logs(stream=True):
        print(line.decode(), end="")

    # Wait for it to finish
    result = container.wait()

    print("Exit code:", result["StatusCode"])

    # Clean up
    container.remove(force=True)

