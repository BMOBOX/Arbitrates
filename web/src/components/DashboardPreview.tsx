type WebhookPayload = {
  action?: string;
  pull_request?: {
    number?: number;
    title?: string;
    html_url?: string;
    additions?: number;
    deletions?: number;
    changed_files?: number;
    commits?: number;
    comments?: number;
    merged?: boolean;
    draft?: boolean;
    state?: string;
  };
  repository?: {
    full_name?: string;
    html_url?: string;
  };
  sender?: {
    login?: string;
    avatar_url?: string;
  };
};

interface WebhookRecord {
  payload: WebhookPayload;
}

interface DashboardPreviewProps {
  payload?: WebhookPayload | null;
  record?: WebhookRecord | null;
}

export default function DashboardPreview({ payload, record }: DashboardPreviewProps) {
  const sampleWebhook: WebhookPayload = {
    action: "closed",
    pull_request: {
      number: 482,
      title: "feat: async database-connector",
      html_url: "https://github.com/acme/arbiter/pull/482",
      additions: 214,
      deletions: 57,
      changed_files: 12,
      commits: 6,
      comments: 9,
      merged: true,
      draft: false,
      state: "closed",
    },
    repository: {
      full_name: "acme/arbiter",
      html_url: "https://github.com/acme/arbiter",
    },
    sender: {
      login: "sandra-dev",
      avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    },
  };

  const webhook = payload ?? record?.payload ?? sampleWebhook;
  const pullRequest = webhook.pull_request ?? {};
  const repository = webhook.repository ?? {};
  const sender = webhook.sender ?? {};

  const status = pullRequest.merged
    ? "Merged"
    : pullRequest.state === "closed"
      ? "Closed"
      : pullRequest.draft
        ? "Draft"
        : "Open";

  const statusStyles = pullRequest.merged
    ? "bg-primary-container/20 text-primary-container"
    : pullRequest.state === "closed"
      ? "bg-error-container/20 text-error"
      : pullRequest.draft
        ? "bg-surface-container-high text-on-surface-variant"
        : "bg-tertiary-container/20 text-on-tertiary-container";

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-2xl">
        <div className="bg-surface-container px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-error/40" />
              <div className="w-3 h-3 rounded-full bg-secondary/40" />
              <div className="w-3 h-3 rounded-full bg-primary-container/40" />
            </div>
            <span className="text-xs font-label text-on-surface-variant">
              PR #{pullRequest.number ?? "—"} — {pullRequest.title ?? "Untitled"}
            </span>
          </div>
          <div className={`px-3 py-1 rounded text-[10px] font-bold uppercase ${statusStyles}`}>
            {status}
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div>
              <h3 className="text-2xl font-headline font-semibold text-on-surface">
                {pullRequest.title ?? "Untitled"}
              </h3>
              <p className="text-sm text-on-surface-variant mt-2">
                #{pullRequest.number ?? "—"} · {repository.full_name ?? "Unknown repo"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={sender.avatar_url ?? sampleWebhook.sender?.avatar_url}
                alt={sender.login ?? "GitHub user"}
                className="w-12 h-12 rounded-full border border-outline-variant/40"
              />
              <div>
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                  Author
                </p>
                <p className="text-sm font-semibold text-on-surface">{sender.login ?? "Unknown"}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-surface-container-high/40">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Additions
              </p>
              <p className="text-lg font-semibold text-primary-container">
                +{pullRequest.additions ?? 0}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-high/40">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Deletions
              </p>
              <p className="text-lg font-semibold text-error">-{pullRequest.deletions ?? 0}</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-high/40">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Files
              </p>
              <p className="text-lg font-semibold text-on-surface">
                {pullRequest.changed_files ?? 0}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-high/40">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Commits
              </p>
              <p className="text-lg font-semibold text-on-surface">
                {pullRequest.commits ?? 0}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-high/40">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Comments
              </p>
              <p className="text-lg font-semibold text-on-surface">
                {pullRequest.comments ?? 0}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-high/40 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">
                check_circle
              </span>
              <div>
                <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                  Status
                </p>
                <p className="text-sm font-semibold text-on-surface">{status}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container/20 text-primary-container text-sm font-semibold"
              href={pullRequest.html_url ?? sampleWebhook.pull_request?.html_url ?? "#"}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-base" data-icon="open_in_new">
                open_in_new
              </span>
              View Pull Request
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 text-on-surface text-sm font-semibold"
              href={repository.html_url ?? sampleWebhook.repository?.html_url ?? "#"}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-base" data-icon="folder">
                folder
              </span>
              View Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
