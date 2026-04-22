import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dim via-transparent to-surface-dim pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/20 bg-surface-container-low mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
            v2.4 Engine Now Live
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-on-background via-primary-fixed to-secondary">
          AI-Powered Multi-Agent
          <br />
          Code Reviews at Scale
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-light mb-10">
          Deploy a swarm of specialized autonomous expert agents that audit every commit. Security,
          performance, and style addressed simultaneously before you even hit merge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/connect"
            className="emissive-gradient text-on-primary-fixed px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 glow-cyan hover:brightness-110 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">terminal</span>
            Connect GitHub
          </Link>
          <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-bright transition-all active:scale-95">
            View Demo
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-primary-container/10 to-transparent blur-3xl opacity-50" />
    </section>
  );
}
