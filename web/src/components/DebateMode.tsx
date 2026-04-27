export default function DebateMode() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,140,97,0.11),transparent_34%),radial-gradient(circle_at_88%_78%,rgba(191,109,255,0.14),transparent_35%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-18">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/25 text-secondary text-[10px] font-label uppercase tracking-widest mb-6">
              Unique Feature
            </div>
            <h2 className="text-4xl font-headline font-bold mb-6">Agent Consensus Protocol</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              When agents disagree on a tradeoff—like Security vs. Performance—they enter
              <span className="font-semibold text-on-surface"> Debate Mode</span>. Our Supervisor Agent
              mediates the discussion to find the optimal path forward, just like a senior
              engineering lead would.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="check_circle">
                  check_circle
                </span>
                <p className="text-on-surface">Reduces bike-shedding in pull requests</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="check_circle">
                  check_circle
                </span>
                <p className="text-on-surface">Context-aware decision making</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass-card rounded-2xl p-6 md:p-7">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-error-container/25 border border-error/35 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-error text-sm" data-icon="security">
                      security
                    </span>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl rounded-tl-none border border-outline-variant/35">
                    <p className="text-xs font-label text-error mb-1">Security Agent</p>
                    <p className="text-sm text-on-surface/95">
                      &ldquo;We should use Argon2id for password hashing. It&apos;s much more resistant to
                      GPU-based cracking attacks.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <div className="bg-surface-container p-4 rounded-xl rounded-tr-none border border-outline-variant/35 text-right">
                    <p className="text-xs font-label text-primary mb-1">Performance Agent</p>
                    <p className="text-sm text-on-surface/95">
                      &ldquo;Argon2id increases latency by 400ms per request. Our target p99 is 200ms. I
                      suggest PBKDF2 with high iterations as a middle ground.&rdquo;
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary-container/30 border border-primary/35 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" data-icon="bolt">
                      bolt
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-outline-variant/40">
                  <div className="flex gap-4 items-center">
                    <div className="w-11 h-11 rounded-full emissive-gradient flex items-center justify-center glow-ember">
                      <span
                        className="material-symbols-outlined text-on-primary-fixed"
                        data-icon="gavel"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        gavel
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-label text-on-surface-variant">Arbitrates Judge</p>
                      <p className="text-sm font-medium text-on-surface/95">
                        &ldquo;Decision: Implement Argon2id on a separate auth microservice to isolate
                        latency. Security is non-negotiable for this endpoint.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
