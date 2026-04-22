export default function DebateMode() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/10 border border-secondary-container/30 text-secondary text-[10px] font-label uppercase tracking-widest mb-6">
              Unique Feature
            </div>
            <h2 className="text-4xl font-headline font-bold mb-6">Agent Consensus Protocol</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              When agents disagree on a tradeoff—like Security vs. Performance—they enter
              <span className="font-semibold"> Debate Mode</span>. Our Supervisor Agent mediates the
              discussion to find the optimal path forward, just like a senior engineering lead would.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">
                  check_circle
                </span>
                <p className="text-on-surface">Reduces bike-shedding in pull requests</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">
                  check_circle
                </span>
                <p className="text-on-surface">Context-aware decision making</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="glass-card rounded-2xl p-6 relative">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-error-container/20 border border-error/30 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-error text-sm" data-icon="security">
                      security
                    </span>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl rounded-tl-none border border-outline-variant/10">
                    <p className="text-xs font-label text-error mb-1">Security Agent</p>
                    <p className="text-sm">
                      "We should use Argon2id for password hashing. It's much more resistant to
                      GPU-based cracking attacks."
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="bg-surface-container p-4 rounded-xl rounded-tr-none border border-outline-variant/10 text-right">
                    <p className="text-xs font-label text-primary-container mb-1">Performance Agent</p>
                    <p className="text-sm">
                      "Argon2id increases latency by 400ms per request. Our target p99 is 200ms. I
                      suggest PBKDF2 with high iterations as a middle ground."
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded bg-primary-container/20 border border-primary-container/30 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-sm" data-icon="bolt">
                      bolt
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full emissive-gradient flex items-center justify-center shadow-lg glow-cyan">
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
                      <p className="text-sm font-semibold">
                        "Decision: Implement Argon2id on a separate auth microservice to isolate
                        latency. Security is non-negotiable for this endpoint."
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
