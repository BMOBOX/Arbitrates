export default function Footer() {
  return (
    <footer className="bg-neutral-950 w-full py-12 px-8">
      <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent h-[1px] mb-12" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 font-inter text-sm">
        <div className="space-y-4">
          <div className="text-lg font-black text-neutral-200">Arbitrates AI</div>
          <p className="text-neutral-500 max-w-xs">
            Autonomous code review infrastructure for the modern enterprise.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <p className="font-bold text-neutral-100">Product</p>
            <a className="block text-neutral-500 hover:text-cyan-400 transition-colors" href="#">
              Documentation
            </a>
            <a className="block text-neutral-500 hover:text-cyan-400 transition-colors" href="#">
              Changelog
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-neutral-100">Legal</p>
            <a className="block text-neutral-500 hover:text-cyan-400 transition-colors" href="#">
              Security
            </a>
            <a className="block text-neutral-500 hover:text-cyan-400 transition-colors" href="#">
              Status
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 text-center md:text-left text-neutral-600 text-xs">
        © 2024 Arbitrates AI. Engineered for the Celestial Architect.
      </div>
    </footer>
  );
}
