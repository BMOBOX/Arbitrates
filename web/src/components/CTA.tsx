export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 emissive-gradient opacity-5" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8">
          Ship safer code with AI agents
        </h2>
        <p className="text-on-surface-variant text-xl mb-12 max-w-xl mx-auto">
          Join the next generation of software engineering teams using autonomous review
          infrastructure.
        </p>
        <button className="emissive-gradient text-on-primary-fixed px-10 py-5 rounded-xl font-bold text-lg glow-cyan hover:scale-105 transition-all">
          Deploy Arbitrates
        </button>
      </div>
    </section>
  );
}
