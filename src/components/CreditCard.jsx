import { CREDIT_TIERS } from '../data/creditProfiles.js';

function Row({ label, value }) {
  if (!value) return null;
  return (
    <>
      <dt className="label whitespace-nowrap pt-0.5">{label}</dt>
      <dd className="font-mono text-[13px] leading-relaxed text-paper-text dark:text-ink-text">{value}</dd>
    </>
  );
}

/**
 * CreditCard
 * Shows how credit-market stress reaches a company.
 *
 * Props:
 *   profile: entry from data/creditProfiles.js
 */
export default function CreditCard({ profile }) {
  const { tier, totalDebt, debtAsOf, rating, maturities, offBalanceSheet, transmission, sources = [] } = profile;

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="label">Credit Exposure</h2>
        <span className="hairline h-px flex-1 border-t" />
        <span className="rounded border border-paper-muted/30 dark:border-ink-muted/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-paper-accent dark:text-ink-accent">
          {CREDIT_TIERS[tier] ?? tier}
        </span>
      </div>

      <p className="font-display mb-5 text-lg leading-[1.7] text-paper-text/90 dark:text-ink-text/90">
        {transmission}
      </p>

      <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2">
        <Row label="Total Debt" value={totalDebt && (debtAsOf ? `${totalDebt} · ${debtAsOf}` : totalDebt)} />
        <Row label="Rating" value={rating} />
        <Row label="Maturities" value={maturities} />
        <Row label="Off-Balance-Sheet" value={offBalanceSheet} />
      </dl>

      {sources.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="wikilink font-mono text-[11px]">
                ↗ {s.label}{s.date ? ` (${s.date})` : ''}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
