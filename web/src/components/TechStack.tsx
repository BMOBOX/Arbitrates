const stack = [
  { label: "LangGraph", icon: "hub" },
  { label: "Claude 3.5", icon: "memory" },
  { label: "GitHub Actions", icon: "source" },
  { label: "AWS Bedrock", icon: "cloud" },
  { label: "GraphQL", icon: "api" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {stack.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl" data-icon={item.icon}>
                {item.icon}
              </span>
              <span className="font-headline font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
