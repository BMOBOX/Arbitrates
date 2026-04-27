import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/45 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto h-18 px-6 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-headline font-bold tracking-tight text-on-background">
          Arbitrates
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">
            Product
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Agents
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Infrastructure
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-lg border border-outline-variant/60 bg-surface-container text-sm font-semibold text-on-surface hover:border-primary/60 hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg emissive-gradient text-on-primary-fixed text-sm font-semibold glow-ember hover:brightness-110 transition"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/dashboard" });
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 rounded-lg emissive-gradient text-on-primary-fixed text-sm font-semibold glow-ember hover:brightness-110 transition flex items-center gap-2"
              >
                <svg aria-hidden="true" className="flex-shrink-0" fill="currentColor" height="18" viewBox="0 0 16 16" width="18">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                </svg>
                Connect GitHub
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
