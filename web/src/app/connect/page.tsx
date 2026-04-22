"use client";

import { useEffect, useState } from "react";

import DashboardPreview from "@/components/DashboardPreview";
import Navbar from "@/components/Navbar";

interface WebhookRecord {
  id: number;
  source: string;
  payload: Record<string, unknown>;
  received_at: string;
}

interface WebhookListResponse {
  success: boolean;
  message: string;
  data?: {
    items: WebhookRecord[];
    total: number;
  };
}

export default function ConnectPage() {
  const [latestRecord, setLatestRecord] = useState<WebhookRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadWebhooks = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? "dev-key";
        const response = await fetch("/api/webhooks/", {
          headers: {
            "X-API-Key": apiKey,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch webhooks.");
        }
        const data = (await response.json()) as WebhookListResponse;
        const items = data.data?.items ?? [];
        const latest = items.length > 0 ? items[items.length - 1] : null;
        if (isMounted) {
          setLatestRecord(latest);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unexpected error loading webhooks.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadWebhooks();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-24">
        {loading ? (
          <section className="container mx-auto px-6 py-24">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-10 text-center">
              <p className="text-sm text-on-surface-variant">Connecting to GitHub webhooks…</p>
            </div>
          </section>
        ) : error ? (
          <section className="container mx-auto px-6 py-24">
            <div className="bg-error-container/20 text-error rounded-2xl border border-error/30 p-10 text-center">
              <p className="text-sm font-semibold">{error}</p>
            </div>
          </section>
        ) : (
          <DashboardPreview payload={latestRecord?.payload} />
        )}
      </main>
    </div>
  );
}
