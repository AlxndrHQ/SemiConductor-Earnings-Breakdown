import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import CompanyCard from './components/CompanyCard.jsx';
import Home from './components/Home.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import AdminConsole from './components/AdminConsole.jsx';
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
        <>
          <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="2" y1="4"  x2="14" y2="4"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="8"  x2="14" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ─── Modal content ─── */
const MODAL_CONTENT = {
  about: {
    title: 'About',
    body: (
      <div className="space-y-4 font-display text-base leading-[1.75] text-paper-text/90 dark:text-ink-text/90">
        <p>
          <strong>Semiconductor Earnings Discussion</strong> is a technical reference platform for the 2026 AI buildout cycle. It tracks where each company sits in the semiconductor supply chain, the bottlenecks each faces, and the dependencies that connect them.
        </p>
        <p>
          Coverage spans Logic (SMH), Memory (DRAM), Equipment &amp; Lithography, AI Services &amp; Infrastructure, Energy Infrastructure, and Optical &amp; Photonics — the full stack from fab tooling to hyperscaler deployment.
        </p>
        <p>
          Each company card includes thematic narrative, earnings summaries, supply chain nexus maps, and a Tactical Execution Architecture panel for tracking entry levels, LEAP structures, and near-term catalysts.
        </p>
        <p className="font-mono text-[11px] text-paper-muted dark:text-ink-muted uppercase tracking-widest">
          Data is illustrative · verify all metrics against current IR filings before drawing conclusions
        </p>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: (
      <div className="space-y-4 font-display text-base leading-[1.75] text-paper-text/90 dark:text-ink-text/90">
        <p>
          This site does not collect, store, or transmit any personal information. There are no accounts, no login requirements, and no tracking cookies of any kind.
        </p>
        <p>
          Live price quotes are fetched directly from the Finnhub API using a client-side API key. No query data is stored or logged by this application. Finnhub's own privacy policy governs their data handling.
        </p>
        <p>
          All application state (theme preference, sidebar state) is stored locally in your browser's memory and is not persisted between sessions.
        </p>
        <p className="font-mono text-[11px] text-paper-muted dark:text-ink-muted uppercase tracking-widest">
          Last updated · May 2026
        </p>
      </div>
    ),
  },
  terms: {
    title: 'Terms of Use',
    body: (
      <div className="space-y-4 font-display text-base leading-[1.75] text-paper-text/90 dark:text-ink-text/90">
        <p>
          All content on this platform — including thematic narratives, earnings summaries, tactical entry levels, LEAP structures, and conviction theses — is <strong>illustrative and educational only</strong>. Nothing here constitutes investment advice, a solicitation to buy or sell any security, or a recommendation of any kind.
        </p>
        <p>
          Tactical entry levels, LEAP structures, and price targets are frameworks for thinking, not financial recommendations. Verify all data against current market prices, IR filings, and index data sheets before making any investment decision.
        </p>
        <p>
          Options trading involves significant risk of loss and is not appropriate for all investors. LEAP structures shown are illustrative — actual options availability, pricing, and Greeks will differ.
        </p>
        <p>
          By using this platform you acknowledge that you are solely responsible for your own investment decisions and that this site bears no liability for any losses incurred.
        </p>
        <p className="font-mono text-[11px] text-paper-muted dark:text-ink-muted uppercase tracking-widest">
          Last updated · May 2026
        </p>
      </div>
    ),
  },
};

function Modal({ type, onClose }) {
  const content = MODAL_CONTENT[type];
  if (!content) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded bg-paper-bg dark:bg-ink-bg border border-paper-muted/30 dark:border-ink-muted/30 px-8 py-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl">{content.title}</h2>
          <button
            onClick={onClose}
            className="font-mono text-[11px] uppercase tracking-widest text-paper-muted dark:text-ink-muted hover:text-paper-text dark:hover:text-ink-text transition-colors"
          >
            close ×
          </button>
        </div>
        {content.body}
      </div>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();
  const isAdmin = route === '#/admin';
  const match = !isAdmin && route.match(/^#\/c\/([\w-]+)/);
  const activeId = match?.[1] || null;
  const company = activeId ? getCompany(activeId) : null;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modal, setModal] = useState(null);

  const navigate = (id) => {
    window.location.hash = id ? `#/c/${id}` : '#/';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goAdmin = () => {
    window.location.hash = '#/admin';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const breadcrumb = isAdmin
    ? 'admin console'
    : company
    ? `${company.ticker} · ${company.name}`
    : 'index';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-0'
        }`}
      >
        <Sidebar
          activeId={activeId}
          isAdmin={isAdmin}
          onSelect={(id) => { navigate(id); }}
          onHome={() => navigate(null)}
          onAdmin={goAdmin}
          onOpenModal={setModal}
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

          <div className="label flex-1">{breadcrumb}</div>

          <ThemeToggle />
        </div>

        {isAdmin ? (
          <AdminConsole onNavigate={navigate} />
        ) : company ? (
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

      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
    </div>
  );
}
