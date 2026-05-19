import { getCompany, NEXT_EARNINGS } from '../data/companies.js';
import LiveTicker from './LiveTicker.jsx';
import NexusGraph from './NexusGraph.jsx';

function daysUntil(dateStr) {
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function EarningsDate({ id }) {
  const dateStr = NEXT_EARNINGS[id];
  if (!dateStr) return <span className="text-paper-muted dark:text-ink-muted">—</span>;

  const days = daysUntil(dateStr);
  const formatted = new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  const urgency =
    days < 0   ? 'text-paper-muted dark:text-ink-muted line-through' :
    days <= 14  ? 'text-amber-500 dark:text-amber-400' :
    days <= 45  ? 'text-paper-text dark:text-ink-text' :
                  'text-paper-muted dark:text-ink-muted';

  const badge =
    days < 0   ? null :
    days <= 14  ? <span className="ml-2 rounded border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-amber-500 dark:text-amber-400">{days}d</span> :
                  <span className="ml-2 font-mono text-[9px] text-paper-muted dark:text-ink-muted">{days}d</span>;

  return (
    <span className={`font-mono text-sm ${urgency}`}>
      {formatted}{badge}
    </span>
  );
}

/**
 * CompanyCard
 * Renders a full company entry in an Obsidian-note aesthetic.
 *
 * Props:
 *   company: company object from data/companies.js
 *   onNavigate: (id) => void — handler for nexus wikilinks
 */
export default function CompanyCard({ company, onNavigate }) {
  if (!company) return null;

  const {
    name,
    ticker,
    etf,
    category,
    weight,
    stackPosition,
    thematic,
    constraints = [],
    nexus = [],
    earnings,
    ir = {},
  } = company;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10 md:py-16">

      {/* Header */}
      <header className="mb-10">
        <div className="label mb-3 flex items-center gap-3">
          <span>{category}</span>
          <span className="hairline h-px w-8 border-t" />
          <span>{ticker}</span>
        </div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {name}
        </h1>
        <div className="mt-4">
          <LiveTicker ticker={ticker} etfTicker={etf} />
        </div>
      </header>

      {/* Baseline Stats */}
      <Section title="Baseline">
        <Dl>
          <Dt>Ticker</Dt>
          <Dd><code className="font-mono">{ticker}</code></Dd>

          <Dt>Live Quote</Dt>
          <Dd><LiveTicker ticker={ticker} etfTicker={etf} /></Dd>

          <Dt>Index Weight</Dt>
          <Dd>
            <span className="font-mono">{weight.value}</span>{' '}
            <span className="text-paper-muted dark:text-ink-muted">({weight.index})</span>
          </Dd>

          <Dt>Stack Position</Dt>
          <Dd>{stackPosition}</Dd>

          <Dt>Next Earnings</Dt>
          <Dd><EarningsDate id={company.id} /></Dd>
        </Dl>
      </Section>

      {/* Earnings */}
      {earnings && <EarningsSection earnings={earnings} />}

      {/* Thematic Story */}
      <Section title="Thematic Story">
        <p className="font-display text-lg leading-[1.7] text-paper-text/90 dark:text-ink-text/90">
          {thematic}
        </p>
      </Section>

      {/* Constraints */}
      <Section title="Constraints">
        <ul className="space-y-2">
          {constraints.map((c, i) => (
            <li key={i} className="flex gap-3 font-mono text-[13px] leading-relaxed">
              <span className="select-none text-paper-muted dark:text-ink-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Supply Chain Nexus Graph */}
      <Section title="Supply Chain Map">
        <NexusGraph company={company} />
      </Section>

      {/* The Nexus — wikilinks */}
      <Section title="The Nexus">
        <p className="label mb-3">Connected to</p>
        <ul className="space-y-1.5">
          {nexus.map(({ to, label }) => {
            const target = getCompany(to);
            if (!target) return null;
            return (
              <li key={to} className="flex items-baseline gap-3">
                <button
                  onClick={() => onNavigate?.(to)}
                  className="wikilink font-display text-lg"
                >
                  [[{target.name}]]
                </button>
                <span className="font-mono text-xs text-paper-muted dark:text-ink-muted">
                  — {label}
                </span>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Historical Reports */}
      <Section title="Historical Reports">
        <ul className="space-y-1.5">
          {(ir.reports || []).map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="wikilink font-mono text-sm"
              >
                ↗ {r.label}
              </a>
            </li>
          ))}
        </ul>
        {ir.base && (
          <p className="label mt-4">
            IR root:{' '}
            <a
              href={ir.base}
              target="_blank"
              rel="noreferrer"
              className="wikilink normal-case tracking-normal"
            >
              {ir.base.replace(/^https?:\/\//, '')}
            </a>
          </p>
        )}
      </Section>
    </article>
  );
}

/* ───── Earnings Section ───── */

const STATUS_STYLES = {
  Beat: {
    badge: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/5',
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
    bullet: 'text-emerald-500 dark:text-emerald-400',
  },
  Meet: {
    badge: 'text-amber-400 border-amber-400/40 bg-amber-400/5',
    dot: 'bg-amber-400',
    text: 'text-amber-400',
    bullet: 'text-amber-500 dark:text-amber-400',
  },
  Miss: {
    badge: 'text-red-400 border-red-400/40 bg-red-400/5',
    dot: 'bg-red-400',
    text: 'text-red-400',
    bullet: 'text-red-500 dark:text-red-400',
  },
};

function EarningsSection({ earnings }) {
  const { status, guidance, breakdown = [] } = earnings;
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.Meet;

  return (
    <Section title="Earnings · Q1 2026">
      {/* Terminal panel */}
      <div className="rounded border border-paper-muted/20 dark:border-ink-muted/20 bg-paper-bg dark:bg-ink-bg font-mono text-xs">

        {/* Status bar */}
        <div className="flex items-center gap-3 border-b border-paper-muted/20 dark:border-ink-muted/20 px-4 py-2">
          <span className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] uppercase tracking-widest ${s.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
            {status}
          </span>
          <span className="text-paper-muted dark:text-ink-muted text-[10px] uppercase tracking-widest">
            Q1&nbsp;2026&nbsp;Results
          </span>
        </div>

        {/* Guidance */}
        <div className="border-b border-paper-muted/20 dark:border-ink-muted/20 px-4 py-3">
          <span className="text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted">
            Guidance&nbsp;›&nbsp;
          </span>
          <span className={s.text}>{guidance}</span>
        </div>

        {/* Breakdown bullets */}
        <ul className="space-y-1 px-4 py-3">
          {breakdown.map((line, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-paper-text dark:text-ink-text">
              <span className={`mt-px select-none ${s.bullet}`}>›</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
}

/* ───── Primitives ───── */

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="label">{title}</h2>
        <span className="hairline h-px flex-1 border-t" />
      </div>
      {children}
    </section>
  );
}

function Dl({ children }) {
  return (
    <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 text-sm">
      {children}
    </dl>
  );
}
function Dt({ children }) {
  return <dt className="label whitespace-nowrap pt-0.5">{children}</dt>;
}
function Dd({ children }) {
  return <dd className="text-paper-text dark:text-ink-text">{children}</dd>;
}
