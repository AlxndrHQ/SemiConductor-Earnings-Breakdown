import React from 'react';
import { getCompany } from '../data/companies.js';
import LiveTicker from './LiveTicker.jsx';

/**
 * CompanyCard
 * Renders a full company entry in an Obsidian-note aesthetic:
 * serif headline, monospace metadata labels, hairline section dividers.
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
    ir = {},
  } = company;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10 md:py-16">
      {/* Frontmatter — Obsidian-style note metadata */}
      <header className="mb-10">
        <div className="label mb-3 flex items-center gap-3">
          <span>{category}</span>
          <span className="hairline h-px w-8 border-t" />
          <span>{ticker}</span>
        </div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {name}
        </h1>
        {/* Live price — shown beneath the headline */}
        <div className="mt-4">
          <LiveTicker ticker={ticker} etfTicker={etf} />
        </div>
      </header>

      {/* Baseline Stats */}
      <Section title="Baseline">
        <Dl>
          <Dt>Ticker</Dt>
          <Dd>
            <code className="font-mono">{ticker}</code>
          </Dd>
          <Dt>Live Quote</Dt>
          <Dd>
            <LiveTicker ticker={ticker} etfTicker={etf} />
          </Dd>
          <Dt>Index Weight</Dt>
          <Dd>
            <span className="font-mono">{weight.value}</span>{' '}
            <span className="text-paper-muted dark:text-ink-muted">
              ({weight.index})
            </span>
          </Dd>
          <Dt>Stack Position</Dt>
          <Dd>{stackPosition}</Dd>
        </Dl>
      </Section>

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
            <li
              key={i}
              className="flex gap-3 font-mono text-[13px] leading-relaxed"
            >
              <span className="select-none text-paper-muted dark:text-ink-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The Nexus */}
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

/* ───── primitives ───── */

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
  return (
    <dt className="label whitespace-nowrap pt-0.5">{children}</dt>
  );
}
function Dd({ children }) {
  return <dd className="text-paper-text dark:text-ink-text">{children}</dd>;
}
