import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-background text-on-background pt-24 px-6">
      <div className="container mx-auto max-w-3xl rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-8">
        <h1 className="text-3xl font-headline font-bold mb-2">Dashboard</h1>
        <p className="text-on-surface-variant mb-6">
          Signed in as {session.user?.name ?? session.user?.email ?? "GitHub user"}
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg px-4 py-2 bg-surface-container-high text-on-surface"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
