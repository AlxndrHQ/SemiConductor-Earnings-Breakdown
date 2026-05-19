import React from 'react';
import { COMPANIES, CATEGORIES } from '../data/companies.js';

export default function Sidebar({ activeId, onSelect, onHome }) {
  const grouped = Object.values(CATEGORIES).map((cat) => ({
    cat,
    items: COMPANIES.filter((c) => c.category === cat),
  }));

  return (
    <aside className="hairline sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r px-6 py-8">
      <button
        onClick={onHome}
        className="mb-10 block text-left"
      >
        <div className="font-display text-lg leading-tight">
          Semiconductor Earnings Discussion
        </div>
        <div className="label mt-1">2026 · AI Buildout</div>
      </button>

      <nav className="space-y-7">
        {grouped.map(({ cat, items }) => (
          <div key={cat}>
            <div className="label mb-2">{cat}</div>
            <ul className="space-y-1">
              {items.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onSelect(c.id)}
                    className={`block w-full text-left text-sm transition-colors ${
                      activeId === c.id
                        ? 'text-paper-accent dark:text-ink-accent'
                        : 'text-paper-text hover:text-paper-accent dark:text-ink-text dark:hover:text-ink-accent'
                    }`}
                  >
                    <span className="font-display">{c.name}</span>
                    <span className="ml-2 font-mono text-[10px] text-paper-muted dark:text-ink-muted">
                      {c.ticker}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
