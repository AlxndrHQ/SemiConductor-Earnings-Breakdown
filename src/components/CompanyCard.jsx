import React, { useState } from 'react';
import { getCompany } from '../data/companies.js';

/**
 * CompanyCard
 * Renders a full company entry in the Obsidian-note aesthetic.
 * If `company.tacticalEntry` is present, renders the TacticalBlock panel
 * below the Nexus section — amber-accented, "trading desk" register.
 *
 * Props:
 *   company    — company object from data/companies.js
 *   onNavigate — (id: string) => void, handler for nexus wikilinks
 */
export default function CompanyCard({ company, onNavigate }) {
  if (!company) return null;

  const {
    name,
    ticker,
    category,
    weight,
    stackPosition,
    thematic,
    constraints = [],
    nexus = [],
    ir = {},
    tacticalEntry,
  } = company;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10 md:py-16">

      {/* ── Frontmatter ─────────────────────────────────────────────────── */}
      <header className="mb-10">
        <div className="label mb-3 flex items-center gap-3">
          <span>{category}</span>
          <span className="hairline h-px w-8 border-t" />
          <span>{ticker}</span>
        </div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {name}
        </h1>
      </header>

      {/* ── Baseline Stats ──────────────────────────────────────────────── */}
      <Section title="Baseline">
        <Dl>
          <Dt>Ticker</Dt>
          <Dd><code className="font-mono">{ticker}</code></Dd>

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

      {/* ── Thematic Story ──────────────────────────────────────────────── */}
      <Section title="Thematic Story">
        <p className="font-display text-lg leading-[1.7] text-paper-text/90 dark:text-ink-text/90">
          {thematic}
        </p>
      </Section>

      {/* ── Constraints ─────────────────────────────────────────────────── */}
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

      {/* ── The Nexus ───────────────────────────────────────────────────── */}
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

      {/* ── Tactical Execution Architecture (conditional) ───────────────── */}
      {tacticalEntry && <TacticalBlock entry={tacticalEntry} />}

      {/* ── Historical Reports ──────────────────────────────────────────── */}
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

/* ─────────────────────────────────────────────────────────────────────────
 * TacticalBlock
 * A visually distinct "trading desk" panel surfaced when tacticalEntry
 * data is present. Amber left-border accent separates it from the static
 * reference sections above. Collapsible so it doesn't dominate the card.
 * ───────────────────────────────────────────────────────────────────────── */
function TacticalBlock({ entry }) {
  const [open, setOpen] = useState(true);
  const { idealEntry, leapStructure, catalyst, thesis } = entry;

  return (
    <section className="mb-12">
      {/* Section header — same pattern as other sections but amber-tinted */}
      <div className="mb-0 flex items-center gap-3">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400">
          Tactical Execution Architecture
        </h2>
        <span className="h-px flex-1 border-t border-amber-300/60 dark:border-amber-700/50" />
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[10px] uppercase tracking-widest text-amber-600/70 dark:text-amber-500/70 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          aria-expanded={open}
        >
          {open ? '−' : '+'}
        </button>
      </div>

      {open && (
        <div
          className="
            mt-4 border-l-2 border-amber-400/70 dark:border-amber-500/50
            pl-5 space-y-6
          "
        >
          {/* Disclaimer */}
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber-600/60 dark:text-amber-500/50">
            Illustrative framework only · not investment advice · verify with current data
          </p>

          {/* Ideal Entry */}
          <TacticalRow
            glyph="◎"
            label="Ideal Entry Zone"
            value={idealEntry}
          />

          {/* LEAP Structure */}
          <TacticalRow
            glyph="◈"
            label="LEAP Structure"
            value={leapStructure}
          />

          {/* Catalysts */}
          {catalyst && (
            <TacticalRow
              glyph="◇"
              label="Key Catalysts"
              value={catalyst}
            />
          )}

          {/* Thesis */}
          <div>
            <div className="label mb-1.5 flex items-center gap-2 text-amber-600/80 dark:text-amber-400/80">
              <span className="text-[11px]">▸</span>
              <span>Conviction Thesis</span>
            </div>
            <p className="font-display text-base leading-[1.75] text-paper-text/85 dark:text-ink-text/85">
              {thesis}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function TacticalRow({ glyph, label, value }) {
  return (
    <div>
      <div className="label mb-1.5 flex items-center gap-2 text-amber-600/80 dark:text-amber-400/80">
        <span className="text-[11px]">{glyph}</span>
        <span>{label}</span>
      </div>
      <p className="font-mono text-[13px] leading-relaxed text-paper-text dark:text-ink-text">
        {value}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Layout primitives (unchanged from original)
 * ───────────────────────────────────────────────────────────────────────── */
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
