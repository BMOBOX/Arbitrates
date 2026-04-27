function getBackendBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
}

function getServerApiKey() {
  return process.env.NEXT_SERVER_API_KEY ?? process.env.API_KEY;
}

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: RouteContext<"/api/webhooks/[[...path]]">,
) {
  const { path } = await params;
  const pathSuffix = path?.length ? `${path.join("/")}` : "";
  const backendUrl = new URL(`${getBackendBaseUrl()}/api/webhooks/${pathSuffix}`);
  backendUrl.search = new URL(req.url).search;

  const headers = new Headers();
  const apiKey = getServerApiKey();
  if (apiKey) {
    headers.set("X-API-Key", apiKey);
  }

  const response = await fetch(backendUrl, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("content-type") ?? "application/json",
      "Cache-Control": "no-store",
    },
  });
}
