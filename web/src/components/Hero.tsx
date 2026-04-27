import { signIn } from "@/auth";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(242,140,97,0.20),transparent_40%),radial-gradient(circle_at_80%_5%,rgba(191,109,255,0.22),transparent_45%)]" />
      <div className="container mx-auto px-6 relative z-10 py-28 md:py-36 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/35 bg-primary-container/35 mb-8 text-primary-fixed">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-label uppercase tracking-[0.18em]">v2.4 Engine Now Live</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight mb-7 bg-clip-text text-transparent bg-gradient-to-r from-[#ffe8dc] via-[#ffc2a6] to-[#e0b8ff]">
          AI-Powered Multi-Agent
          <br />
          Code Reviews at Scale
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-xl text-on-surface-variant font-light mb-11 leading-relaxed">
          Deploy a swarm of specialized autonomous expert agents that audit every commit. Security,
          performance, and style addressed simultaneously before you even hit merge.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dashboard" });
            }}
          >
            <button
              type="submit"
              className="emissive-gradient text-on-primary-fixed px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 glow-ember hover:brightness-110 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">terminal</span>
              Connect GitHub
            </button>
          </form>

          <button className="bg-surface-container-high/80 border border-outline-variant/60 text-on-surface px-8 py-4 rounded-xl font-semibold hover:bg-surface-bright/70 transition-all active:scale-95">
            View Demo
          </button>
        </div>
      </div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-[radial-gradient(circle,rgba(242,140,97,0.2),transparent_60%)] blur-3xl opacity-75" />
    </section>
  );
}
