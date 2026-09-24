// src/components/FounderCard.jsx
//
// Collapsible "Founder DNA" panel — drop it inside CompanyCard.jsx
// just below the TacticalBlock and above Historical Reports.
//
// Usage in CompanyCard.jsx:
//   import FounderCard from './FounderCard.jsx';
//   import { getFounderProfile } from '../data/founderProfiles.js';
//
//   const founderProfile = getFounderProfile(company.id);
//   ...
//   {founderProfile && <FounderCard profile={founderProfile} />}

import React, { useState } from 'react';

// ── status badge ────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    active:     { label: 'Active',     classes: 'text-emerald-600 dark:text-emerald-400 border-emerald-400/30 bg-emerald-500/5' },
    retired:    { label: 'Retired',    classes: 'text-paper-muted dark:text-ink-muted border-paper-border dark:border-ink-border bg-transparent' },
    historical: { label: 'Historical', classes: 'text-paper-muted dark:text-ink-muted border-paper-border dark:border-ink-border bg-transparent' },
  };
  const { label, classes } = map[status] || map.historical;
  return (
    <span className={`rounded-sm border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${classes}`}>
      {label}
    </span>
  );
}

// ── data row ────────────────────────────────────────────────────────────────
function FounderRow({ glyph, label, children }) {
  return (
    <div>
      <div className="label mb-1 flex items-center gap-2 text-violet-600/80 dark:text-violet-400/80">
        <span className="text-[11px]">{glyph}</span>
        <span>{label}</span>
      </div>
      <div className="font-mono text-[13px] leading-relaxed text-paper-text dark:text-ink-text">
        {children}
      </div>
    </div>
  );
}

// ── main component ──────────────────────────────────────────────────────────
export default function FounderCard({ profile }) {
  const [open, setOpen] = useState(true);

  if (!profile) return null;

  const {
    name,
    role,
    status,
    born,
    origin,
    education = [],
    foundedYear,
    priorStops = [],
    founderMove,
    architectThesis,
    legacy,
    note,
  } = profile;

  return (
    <section className="mb-12">

      {/* ── Section header — violet accent ─────────────────────────────── */}
      <div className="mb-0 flex items-center gap-3">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400">
          Founder DNA
        </h2>
        <span className="h-px flex-1 border-t border-violet-300/50 dark:border-violet-700/40" />
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[10px] uppercase tracking-widest text-violet-600/60 dark:text-violet-400/60 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          aria-expanded={open}
        >
          {open ? '−' : '+'}
        </button>
      </div>

      {open && (
        <div className="mt-4 border-l-2 border-violet-400/60 dark:border-violet-500/40 pl-5 space-y-6">

          {/* ── Name + role + status ──────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <span className="font-display text-2xl leading-tight">{name}</span>
              <StatusBadge status={status} />
            </div>
            <p className="font-mono text-[12px] text-paper-muted dark:text-ink-muted">
              {role} · {foundedYear}
            </p>
          </div>

          {/* ── Origin + education ───────────────────────────────────── */}
          <FounderRow glyph="◉" label="Origin">
            <p>{born} · {origin}</p>
            <ul className="mt-1.5 space-y-0.5">
              {education.map((e, i) => (
                <li key={i} className="before:content-['↳_'] before:text-paper-muted before:dark:text-ink-muted">
                  {e}
                </li>
              ))}
            </ul>
          </FounderRow>

          {/* ── Prior stops ──────────────────────────────────────────── */}
          {priorStops.length > 0 && (
            <FounderRow glyph="◈" label="Before the Bet">
              <ul className="space-y-0.5">
                {priorStops.map((stop, i) => (
                  <li key={i} className="before:content-['→_'] before:text-paper-muted before:dark:text-ink-muted">
                    {stop}
                  </li>
                ))}
              </ul>
            </FounderRow>
          )}

          {/* ── The founding move ────────────────────────────────────── */}
          <FounderRow glyph="◎" label="The Founding Move">
            {founderMove}
          </FounderRow>

          {/* ── Architect thesis ─────────────────────────────────────── */}
          <div>
            <div className="label mb-1.5 flex items-center gap-2 text-violet-600/80 dark:text-violet-400/80">
              <span className="text-[11px]">▸</span>
              <span>Architect Thesis</span>
            </div>
            <p className="font-display text-base leading-[1.75] text-paper-text/85 dark:text-ink-text/85">
              {architectThesis}
            </p>
          </div>

          {/* ── Legacy line ──────────────────────────────────────────── */}
          <div className="rounded-sm bg-violet-500/5 border border-violet-400/20 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-violet-600/70 dark:text-violet-400/60 mb-1">
              Structural Legacy
            </p>
            <p className="font-mono text-[13px] leading-relaxed text-paper-text dark:text-ink-text">
              {legacy}
            </p>
          </div>

          {/* ── Succession / correction note (optional) ──────────────── */}
          {note && (
            <p className="font-mono text-[11px] leading-relaxed text-paper-muted dark:text-ink-muted border-t border-paper-border dark:border-ink-border pt-3">
              ⚑ {note}
            </p>
          )}

        </div>
      )}
    </section>
  );
}
