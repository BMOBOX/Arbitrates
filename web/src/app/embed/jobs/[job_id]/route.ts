import { GetObjectCommand } from "@aws-sdk/client-s3";

import { r2 } from "@/lib/r2";

const BUCKET = "arbirates-static-html";

function isValidJobId(jobId: string) {
  return /^[A-Za-z0-9_-]+$/.test(jobId);
}

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: RouteContext<"/embed/jobs/[job_id]">,
) {
  const { job_id: jobId } = await params;

  if (!isValidJobId(jobId)) {
    return new Response("Invalid job id", { status: 400 });
  }

  const key = `graphs/${jobId}.html`;

  try {
    const object = await r2.send(
      new GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
      }),
    );

    const html = await object.Body?.transformToString();
    if (!html) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": object.ContentType ?? "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
