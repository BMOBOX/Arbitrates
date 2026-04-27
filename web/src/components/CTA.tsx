import { signIn } from "@/auth";

export default function CTA() {
  return (
    <section className="py-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,140,97,0.14),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(191,109,255,0.15),transparent_40%)]" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-[#ffe7da] to-[#e2bbff]">
          Ship safer code with AI agents
        </h2>
        <p className="text-on-surface-variant text-lg md:text-xl mb-11 max-w-2xl mx-auto leading-relaxed">
          Join the next generation of software engineering teams using autonomous review
          infrastructure.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="emissive-gradient text-on-primary-fixed px-10 py-4 rounded-xl font-semibold text-lg glow-ember hover:brightness-110 transition-all"
          >
            Deploy Arbitrates
          </button>
        </form>
      </div>
    </section>
  );
}
