function isValidJobId(jobId: string) {
  return /^[A-Za-z0-9_-]+$/.test(jobId);
}

export default async function JobPage({
  params,
}: PageProps<"/[job_id]">) {
  const { job_id: jobId } = await params;

  if (!isValidJobId(jobId)) {
    return <main>Invalid job id</main>;
  }

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src={`/embed/jobs/${jobId}`}
        title={`Job ${jobId}`}
        style={{ border: 0, width: "100%", height: "100%" }}
        sandbox="allow-scripts allow-same-origin"
      />
    </main>
  );
}
