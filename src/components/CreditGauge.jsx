import { useEffect, useState } from 'react';

// Same key resolution as LiveTicker.
const FINNHUB_API_KEY =
  import.meta.env.VITE_FINNHUB_KEY ?? import.meta.env.VITE_FINNHUB_API_KEY ?? '';

// ETF proxies for credit conditions. These show price moves, not credit spreads.
const PROXIES = [
  { symbol: 'HYG',  label: 'High Yield' },
  { symbol: 'LQD',  label: 'Inv. Grade' },
  { symbol: 'BKLN', label: 'Lev. Loans' },
  { symbol: 'BIZD', label: 'Private Credit (BDCs)' },
];

const CACHE_TTL_MS = 5 * 60 * 1000;

// Module-level cache so the strip doesn't refetch on every company navigation.
let cache = null;

async function fetchQuote(symbol) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${FINNHUB_API_KEY}`
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.c ? json : null;
  } catch {
    return null;
  }
}

function Cell({ label, symbol, quote }) {
  const up = quote && quote.dp >= 0;
  return (
    <div className="min-w-0">
      <div className="truncate font-mono text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-2 font-mono text-xs tabular-nums">
        <span className="text-paper-text dark:text-ink-text">{symbol}</span>
        {quote ? (
          <span className={up ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'}>
            {up ? '+' : ''}{quote.dp.toFixed(2)}%
          </span>
        ) : (
          <span className="text-paper-muted dark:text-ink-muted">---</span>
        )}
      </div>
    </div>
  );
}

/**
 * CreditGauge
 * One-line read of credit conditions from ETF proxies, for Home and CompanyCard.
 * Renders nothing when no API key is configured.
 */
export default function CreditGauge() {
  const [quotes, setQuotes] = useState(() => cache?.quotes ?? null);

  useEffect(() => {
    if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') return;
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) return;

    let cancelled = false;
    Promise.all(PROXIES.map((p) => fetchQuote(p.symbol))).then((results) => {
      const next = Object.fromEntries(PROXIES.map((p, i) => [p.symbol, results[i]]));
      cache = { quotes: next, at: Date.now() };
      if (!cancelled) setQuotes(next);
    });
    return () => { cancelled = true; };
  }, []);

  if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') return null;

  return (
    <div className="hairline rounded-sm border px-4 py-3">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <span className="label">Credit Conditions</span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted">
          ETF proxies · daily % · not spreads
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
        {PROXIES.map((p) => (
          <Cell key={p.symbol} label={p.label} symbol={p.symbol} quote={quotes?.[p.symbol] ?? null} />
        ))}
      </div>
    </div>
  );
}
