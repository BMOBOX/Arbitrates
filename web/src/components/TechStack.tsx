const stack = [
  { label: "LangGraph", icon: "hub" },
  { label: "Claude 3.5", icon: "memory" },
  { label: "GitHub Actions", icon: "source" },
  { label: "AWS Bedrock", icon: "cloud" },
  { label: "GraphQL", icon: "api" },
];

export default function TechStack() {
  return (
    <section className="py-22 bg-surface-container-lowest border-y border-outline-variant/25">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-8">
          Built on battle-tested infrastructure
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {stack.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-outline-variant/25 bg-surface-container p-4 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-xl" data-icon={item.icon}>
                {item.icon}
              </span>
              <span className="font-headline font-semibold text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
