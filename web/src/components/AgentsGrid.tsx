const agents = [
  {
    title: "Security Sentinel",
    icon: "shield",
    iconColor: "text-error",
    iconBg: "bg-error-container/20 border-error/20",
    noteColor: "text-error/80",
    description:
      "Scans for injection vulnerabilities, leaked secrets, and broken access controls using deep semantic analysis.",
    calloutTitle: "Potential SQLi detected at line 42.",
    calloutDetail: "Reasoning: User-controlled input flows directly to db.query()...",
    badge: "[!]",
  },
  {
    title: "Runtime Optimizer",
    icon: "speed",
    iconColor: "text-primary-container",
    iconBg: "bg-primary-container/20 border-primary-container/20",
    noteColor: "text-primary-container/80",
    description:
      "Identifies N+1 queries, memory leaks, and inefficient algorithms before they hit production environments.",
    calloutTitle: "O(n²) complexity in sorting loop.",
    calloutDetail: "Refactor suggest: Use Map for O(1) lookups.",
    badge: "[*]",
  },
  {
    title: "Style Architect",
    icon: "palette",
    iconColor: "text-tertiary-fixed-dim",
    iconBg: "bg-tertiary-container/20 border-tertiary-container/20",
    noteColor: "text-tertiary-fixed-dim/80",
    description:
      "Enforces project-specific conventions and readability standards without the rigidity of traditional linters.",
    calloutTitle: "Naming mismatch in class 'UserSvc'.",
    calloutDetail: "Convention: Domain services should end in 'Service'.",
    badge: "[i]",
  },
  {
    title: "Logic Validator",
    icon: "account_tree",
    iconColor: "text-secondary",
    iconBg: "bg-secondary-container/20 border-secondary-container/20",
    noteColor: "text-secondary/80",
    description:
      "Cross-references code changes with technical requirements to ensure business logic remains intact.",
    calloutTitle: "Edge case: Empty array not handled.",
    calloutDetail: "Impact: IndexOutOfBounds exception expected.",
    badge: "[?]",
  },
];

export default function AgentsGrid() {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-headline font-bold mb-4">The Specialist Swarm</h2>
        <p className="text-on-surface-variant max-w-xl">
          Each agent is fine-tuned for a specific domain of code quality, operating in parallel to
          reduce review cycles by 70%.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.title}
            className="glass-card p-8 rounded-xl flex flex-col h-full group hover:bg-surface-container-high transition-colors"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 border ${agent.iconBg}`}
            >
              <span className={`material-symbols-outlined ${agent.iconColor}`} data-icon={agent.icon}>
                {agent.icon}
              </span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">{agent.title}</h3>
            <p className="text-sm text-on-surface-variant mb-6 flex-grow">{agent.description}</p>
            <div
              className={`bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/10 font-label text-[10px] ${agent.noteColor}`}
            >
              <div className="flex gap-2 mb-1">
                <span>{agent.badge}</span>
                <span>{agent.calloutTitle}</span>
              </div>
              <div className="text-on-surface-variant opacity-40">{agent.calloutDetail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
