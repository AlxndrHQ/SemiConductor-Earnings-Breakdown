import React from 'react';
import StackFlow from './StackFlow.jsx';
import { COMPANIES } from '../data/companies.js';

export default function Home({ onSelect }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10 md:py-16">
      <header className="mb-12">
        <div className="label mb-3">Reference · v0.1</div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          The Logic + Memory Nexus
        </h1>
        <p className="font-display mt-6 max-w-prose text-lg leading-[1.7] text-paper-text/90 dark:text-ink-text/90">
          A technical reference for the 2026 AI buildout. Each entry tracks where a
          company sits in the stack, what bottlenecks it faces, and what it depends
          on. The thesis: the cycle is gated not by demand but by the throughput of
          a small number of non-substitutable nodes — lithography, advanced packaging,
          HBM.
        </p>
      </header>

      <section className="mb-14">
        <StackFlow />
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <h2 className="label">Index</h2>
          <span className="hairline h-px flex-1 border-t" />
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {COMPANIES.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onSelect(c.id)}
                className="group flex w-full items-baseline justify-between text-left"
              >
                <span className="font-display text-lg group-hover:text-paper-accent dark:group-hover:text-ink-accent">
                  {c.name}
                </span>
                <span className="font-mono text-[11px] text-paper-muted dark:text-ink-muted">
                  {c.ticker}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
