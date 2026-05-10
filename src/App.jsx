import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import CompanyCard from './components/CompanyCard.jsx';
import Home from './components/Home.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { getCompany } from './data/companies.js';

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const handler = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return route;
}

function MenuIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      {open ? (
        // X (close)
        <>
          <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        // Hamburger
        <>
          <line x1="2" y1="4"  x2="14" y2="4"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="8"  x2="14" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function App() {
  const route = useHashRoute();
  const match = route.match(/^#\/c\/([\w-]+)/);
  const activeId = match?.[1] || null;
  const company = activeId ? getCompany(activeId) : null;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = (id) => {
    window.location.hash = id ? `#/c/${id}` : '#/';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar — slides in/out */}
      <div
        className={`shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-0'
        }`}
      >
        <Sidebar
          activeId={activeId}
          onSelect={(id) => { navigate(id); }}
          onHome={() => navigate(null)}
        />
      </div>

      <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="hairline flex items-center gap-4 border-b px-4 py-4">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex h-7 w-7 items-center justify-center rounded text-paper-muted transition-colors hover:text-paper-accent dark:text-ink-muted dark:hover:text-ink-accent"
            aria-label={sidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
          >
            <MenuIcon open={sidebarOpen} />
          </button>

          <div className="label flex-1">
            {company ? `${company.ticker} · ${company.name}` : 'index'}
          </div>

          <ThemeToggle />
        </div>

        {company ? (
          <CompanyCard company={company} onNavigate={navigate} />
        ) : (
          <Home onSelect={navigate} />
        )}

        <footer className="hairline mx-auto mt-16 max-w-3xl border-t px-6 py-8 md:px-10">
          <p className="label">
            data is illustrative · verify weights and metrics against current
            index sheets and IR filings before drawing conclusions
          </p>
        </footer>
      </main>
    </div>
  );
}
