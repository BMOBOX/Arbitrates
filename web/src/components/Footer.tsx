export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-14 pb-10 px-8 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-sm">
        <div className="space-y-4">
          <div className="text-lg font-headline font-bold text-on-surface">Arbitrates AI</div>
          <p className="text-on-surface-variant max-w-xs leading-relaxed">
            Autonomous code review infrastructure for engineering teams shipping at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <p className="font-semibold text-on-surface">Product</p>
            <a className="block text-on-surface-variant hover:text-primary transition-colors" href="#">
              Documentation
            </a>
            <a className="block text-on-surface-variant hover:text-primary transition-colors" href="#">
              Changelog
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-on-surface">Legal</p>
            <a className="block text-on-surface-variant hover:text-primary transition-colors" href="#">
              Security
            </a>
            <a className="block text-on-surface-variant hover:text-primary transition-colors" href="#">
              Status
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center md:text-left text-on-surface-variant/70 text-xs">
        © 2026 Arbitrates AI. Built for teams who ship with confidence.
      </div>
    </footer>
  );
}
