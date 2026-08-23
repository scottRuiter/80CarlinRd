"use client";

import { useEffect, useState, type ReactNode } from "react";
import { property } from "@/lib/property";

type Quote = {
  ethUsd: number;
  btcUsd: number;
  fetchedAt: number;
};

const PRICE_PAGES = {
  eth: "https://www.coinbase.com/price/ethereum",
  btc: "https://www.coinbase.com/price/bitcoin",
};

async function fetchSpots(): Promise<Pick<Quote, "ethUsd" | "btcUsd">> {
  const [ethRes, btcRes] = await Promise.all([
    fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot"),
    fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot"),
  ]);

  const readCoinbase = async (response: Response) => {
    if (!response.ok) return NaN;
    const body = (await response.json()) as { data?: { amount?: string } };
    return Number(body.data?.amount);
  };

  let ethUsd = await readCoinbase(ethRes);
  let btcUsd = await readCoinbase(btcRes);

  if (ethUsd > 0 && btcUsd > 0) return { ethUsd, btcUsd };

  const gecko = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd",
  );
  if (!gecko.ok) throw new Error("Crypto quote failed");
  const body = (await gecko.json()) as {
    ethereum?: { usd?: number };
    bitcoin?: { usd?: number };
  };
  if (!(ethUsd > 0)) ethUsd = Number(body.ethereum?.usd);
  if (!(btcUsd > 0)) btcUsd = Number(body.bitcoin?.usd);
  if (!(ethUsd > 0) || !(btcUsd > 0)) throw new Error("Crypto quote empty");
  return { ethUsd, btcUsd };
}

function formatCoin(usd: number, usdPerCoin: number) {
  const amount = usd / usdPerCoin;
  if (amount >= 10) return amount.toFixed(2);
  if (amount >= 1) return amount.toFixed(3);
  if (amount >= 0.1) return amount.toFixed(4);
  return amount.toFixed(5);
}

function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function PriceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber underline-offset-4 transition hover:underline"
    >
      {children}
    </a>
  );
}

export function EthQuote({ variant = "hero" }: { variant?: "hero" | "lease" }) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const spots = await fetchSpots();
        if (!cancelled) {
          setQuote({ ...spots, fetchedAt: Date.now() });
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
        Live crypto quote unavailable — rent is {property.rent} in USD.
      </p>
    );
  }

  if (!quote) {
    return <p className="mt-2 text-sm text-muted">Fetching live ETH and BTC quotes…</p>;
  }

  const cryptoUsd = property.rentAmount * (1 - property.cryptoDiscount);
  const eth = formatCoin(cryptoUsd, quote.ethUsd);
  const btc = formatCoin(cryptoUsd, quote.btcUsd);
  const off = Math.round(property.cryptoDiscount * 100);
  const stamp = new Date(quote.fetchedAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (variant === "lease") {
    return (
      <div className="mt-4 max-w-md text-lg">
        <p>
          <PriceLink href={PRICE_PAGES.eth}>{eth} ETH</PriceLink>
          <span className="text-muted"> / month</span>
          <span className="text-muted"> · </span>
          <PriceLink href={PRICE_PAGES.btc}>{btc} BTC</PriceLink>
        </p>
        <p className="mt-1 text-sm text-muted">
          {off}% off in ETH or BTC · {formatUsd(cryptoUsd)} · ETH{" "}
          {formatUsd(quote.ethUsd)} · BTC {formatUsd(quote.btcUsd)} · {stamp}.
          Asking rent is $2,500 USD.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        <a
          href={PRICE_PAGES.eth}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1.5 text-sm font-semibold text-amber transition hover:border-amber hover:bg-amber/20"
        >
          {eth} ETH <span aria-hidden="true">↗</span>
        </a>
        <a
          href={PRICE_PAGES.btc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1.5 text-sm font-semibold text-amber transition hover:border-amber hover:bg-amber/20"
        >
          {btc} BTC <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="mt-2 text-xs text-muted">
        {off}% off in crypto · live · {stamp}
      </p>
    </div>
  );
}
