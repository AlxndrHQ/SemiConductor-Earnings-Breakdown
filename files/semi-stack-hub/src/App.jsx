import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import CompanyCard from './components/CompanyCard.jsx';
import Home from './components/Home.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { getCompany } from './data/companies.js';

// Simple hash router so GitHub Pages doesn't need server-side rewrites.
// Routes: '#/' (home) and '#/c/<id>' (company entry)
function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const handler = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  const match = route.match(/^#\/c\/([\w-]+)/);
  const activeId = match?.[1] || null;
  const company = activeId ? getCompany(activeId) : null;

  const navigate = (id) => {
    window.location.hash = id ? `#/c/${id}` : '#/';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeId={activeId}
        onSelect={navigate}
        onHome={() => navigate(null)}
      />
      <main className="flex-1">
        {/* Top bar */}
        <div className="hairline flex items-center justify-between border-b px-6 py-4">
          <div className="label">
            {company ? `c / ${company.id}` : 'index'}
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
