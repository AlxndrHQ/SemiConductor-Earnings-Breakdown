import { useState, useEffect } from 'react';

const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

function formatPrice(n) {
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatChange(d, dp) {
  const sign = d >= 0 ? '+' : '';
  return `${sign}${d.toFixed(2)} (${sign}${dp.toFixed(2)}%)`;
}

function Quote({ symbol, data }) {
  const up = data.d >= 0;
  return (
    <div className="flex items-baseline gap-2 font-mono text-xs leading-none">
      <span className="text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted">
        {symbol}
      </span>
      <span className="text-paper-accent dark:text-ink-accent font-semibold tabular-nums">
        ${formatPrice(data.c)}
      </span>
      <span
        className={
          up
            ? 'text-emerald-600 dark:text-emerald-400 tabular-nums'
            : 'text-red-500 dark:text-red-400 tabular-nums'
        }
      >
        {formatChange(data.d, data.dp)}
      </span>
    </div>
  );
}

/**
 * LiveTicker
 *
 * Props:
 *   ticker    — company stock ticker (e.g. "NVDA")
 *   etfTicker — sector ETF ticker (e.g. "SMH", "AIS", "ENFR", "DRAM")
 */
export default function LiveTicker({ ticker, etfTicker }) {
  const [stockData, setStockData] = useState(null);
  const [etfData, setEtfData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ok | error | unconfigured

  useEffect(() => {
    if (!ticker) return;

    if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') {
      setStatus('unconfigured');
      return;
    }

    const fetchQuote = async (sym) => {
      const res = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(sym)}&token=${FINNHUB_API_KEY}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      // Finnhub returns c:0 for unknown symbols or outside market hours with no data
      if (!json.c) throw new Error('no data');
      return json;
    };

    setStatus('loading');
    setStockData(null);
    setEtfData(null);

    Promise.all([
      fetchQuote(ticker),
      etfTicker ? fetchQuote(etfTicker).catch(() => null) : Promise.resolve(null),
    ])
      .then(([stock, etf]) => {
        setStockData(stock);
        setEtfData(etf);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, [ticker, etfTicker]);

  // ── Render states ──────────────────────────────────────────────────────────

  if (status === 'unconfigured') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded border border-dashed border-paper-muted/40 dark:border-ink-muted/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-paper-muted/50 dark:bg-ink-muted/50" />
        LIVE · API KEY REQUIRED
      </span>
    );
  }

  if (status === 'loading') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted animate-pulse">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-paper-accent/50 dark:bg-ink-accent/50 animate-pulse" />
        FETCHING…
      </span>
    );
  }

  if (status === 'error' || !stockData) {
    return (
      <span className="font-mono text-[9px] uppercase tracking-widest text-red-400 dark:text-red-500">
        QUOTE UNAVAILABLE
      </span>
    );
  }

  return (
    <div className="inline-flex flex-col gap-1 rounded border border-paper-muted/20 dark:border-ink-muted/20 bg-paper-bg dark:bg-ink-bg px-3 py-1.5">
      <Quote symbol={ticker} data={stockData} />
      {etfTicker && etfData && <Quote symbol={etfTicker} data={etfData} />}
    </div>
  );
}
