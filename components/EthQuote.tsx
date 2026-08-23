"use client";

import { useEffect, useState } from "react";
import { property } from "@/lib/property";

type Quote = {
  usdPerEth: number;
  fetchedAt: number;
};

async function fetchSpot(): Promise<number> {
  const coinbase = await fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot");
  if (coinbase.ok) {
    const body = (await coinbase.json()) as { data?: { amount?: string } };
    const amount = Number(body.data?.amount);
    if (Number.isFinite(amount) && amount > 0) return amount;
  }

  const gecko = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
  );
  if (!gecko.ok) throw new Error("ETH quote failed");
  const body = (await gecko.json()) as { ethereum?: { usd?: number } };
  const amount = Number(body.ethereum?.usd);
  if (!Number.isFinite(amount) || amount <= 0) throw new Error("ETH quote empty");
  return amount;
}

function formatEth(usd: number, usdPerEth: number) {
  const eth = usd / usdPerEth;
  if (eth >= 10) return eth.toFixed(2);
  if (eth >= 1) return eth.toFixed(3);
  return eth.toFixed(4);
}

function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function EthQuote({ variant = "hero" }: { variant?: "hero" | "lease" }) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const usdPerEth = await fetchSpot();
        if (!cancelled) {
          setQuote({ usdPerEth, fetchedAt: Date.now() });
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    void load();
    const timer = window.setInterval(() => void load(), 30_000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  if (failed && !quote) {
    return (
      <p className="mt-2 text-sm text-muted">
        ETH quote unavailable — rent is {property.rent} in USD.
      </p>
    );
  }

  if (!quote) {
    return <p className="mt-2 text-sm text-muted">Fetching live ETH quote…</p>;
  }

  const eth = formatEth(property.rentAmount, quote.usdPerEth);
  const stamp = new Date(quote.fetchedAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (variant === "lease") {
    return (
      <p className="mt-4 max-w-md text-lg text-amber">
        {eth} ETH / month
        <span className="mt-1 block text-sm text-muted">
          Live quote · ETH {formatUsd(quote.usdPerEth)} · {stamp}. Asking rent is
          still $2,500 USD.
        </span>
      </p>
    );
  }

  return (
    <p className="mt-2 text-sm text-amber sm:text-base">
      {eth} ETH
      <span className="ml-2 text-muted">
        live · {formatUsd(quote.usdPerEth)}/ETH · {stamp}
      </span>
    </p>
  );
}
