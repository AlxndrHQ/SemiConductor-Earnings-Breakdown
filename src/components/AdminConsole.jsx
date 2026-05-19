import { COMPANIES, NEXT_EARNINGS } from '../data/companies.js';

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

const STATUS_COLOR = {
  Beat: 'text-emerald-500 dark:text-emerald-400',
  Meet: 'text-amber-500 dark:text-amber-400',
  Miss: 'text-red-500 dark:text-red-400',
};

export default function AdminConsole({ onNavigate }) {
  const now = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const stats = {
    total: COMPANIES.length,
    beat: COMPANIES.filter((c) => c.earnings?.status === 'Beat').length,
    meet: COMPANIES.filter((c) => c.earnings?.status === 'Meet').length,
    miss: COMPANIES.filter((c) => c.earnings?.status === 'Miss').length,
    withTactical: COMPANIES.filter((c) => c.tacticalEntry).length,
    withEarnings: COMPANIES.filter((c) => c.earnings).length,
  };

  const categories = [...new Set(COMPANIES.map((c) => c.category))];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10 md:py-16">

      {/* Header */}
      <header className="mb-10">
        <div className="label mb-3">Admin Console · {now}</div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Dashboard
        </h1>
      </header>

      {/* Summary stats */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <h2 className="label">Coverage Summary</h2>
          <span className="hairline h-px flex-1 border-t" />
        </div>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { label: 'Companies', value: stats.total },
            { label: 'Beat', value: stats.beat, cls: 'text-emerald-500 dark:text-emerald-400' },
            { label: 'Meet', value: stats.meet, cls: 'text-amber-500 dark:text-amber-400' },
            { label: 'Miss', value: stats.miss, cls: 'text-red-500 dark:text-red-400' },
            { label: 'Tactical', value: `${stats.withTactical}/${stats.total}` },
            { label: 'Earnings', value: `${stats.withEarnings}/${stats.total}` },
          ].map(({ label, value, cls }) => (
            <div key={label} className="rounded border border-paper-muted/20 dark:border-ink-muted/20 px-4 py-3">
              <dt className="label text-[10px]">{label}</dt>
              <dd className={`font-display text-2xl mt-1 ${cls || ''}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Company table by category */}
      {categories.map((cat) => {
        const cos = COMPANIES.filter((c) => c.category === cat);
        return (
          <section key={cat} className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="label">{cat}</h2>
              <span className="hairline h-px flex-1 border-t" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[12px]">
                <thead>
                  <tr className="border-b border-paper-muted/20 dark:border-ink-muted/20 text-left">
                    <th className="label pb-2 pr-6 text-[10px] font-normal">Ticker</th>
                    <th className="label pb-2 pr-6 text-[10px] font-normal">Name</th>
                    <th className="label pb-2 pr-6 text-[10px] font-normal">Earnings</th>
                    <th className="label pb-2 pr-6 text-[10px] font-normal">Next Report</th>
                    <th className="label pb-2 pr-6 text-[10px] font-normal">Tactical</th>
                    <th className="label pb-2 text-[10px] font-normal">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {cos.map((c) => {
                    const days = daysUntil(NEXT_EARNINGS[c.id]);
                    const dateStr = NEXT_EARNINGS[c.id]
                      ? new Date(NEXT_EARNINGS[c.id]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                      : '—';
                    const daysLabel =
                      days === null ? '' :
                      days < 0 ? ' (past)' :
                      days === 0 ? ' (today)' :
                      ` (${days}d)`;
                    return (
                      <tr
                        key={c.id}
                        className="border-b border-paper-muted/10 dark:border-ink-muted/10 hover:bg-paper-muted/5 dark:hover:bg-ink-muted/5"
                      >
                        <td className="py-2.5 pr-6">
                          <button
                            onClick={() => onNavigate(c.id)}
                            className="font-mono font-semibold text-paper-accent dark:text-ink-accent hover:underline"
                          >
                            {c.ticker}
                          </button>
                        </td>
                        <td className="py-2.5 pr-6 text-paper-text dark:text-ink-text">{c.name}</td>
                        <td className={`py-2.5 pr-6 ${STATUS_COLOR[c.earnings?.status] || 'text-paper-muted dark:text-ink-muted'}`}>
                          {c.earnings?.status || '—'}
                        </td>
                        <td className={`py-2.5 pr-6 ${days !== null && days <= 7 && days >= 0 ? 'text-amber-500 dark:text-amber-400' : 'text-paper-text dark:text-ink-text'}`}>
                          {dateStr}{daysLabel}
                        </td>
                        <td className="py-2.5 pr-6">
                          {c.tacticalEntry
                            ? <span className="text-emerald-500 dark:text-emerald-400">✓</span>
                            : <span className="text-paper-muted dark:text-ink-muted">—</span>}
                        </td>
                        <td className="py-2.5 text-paper-muted dark:text-ink-muted">{c.weight.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      {/* Upcoming earnings (next 30 days) */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <h2 className="label">Upcoming Earnings · Next 30 Days</h2>
          <span className="hairline h-px flex-1 border-t" />
        </div>
        <ul className="space-y-2">
          {COMPANIES
            .map((c) => ({ c, days: daysUntil(NEXT_EARNINGS[c.id]), dateStr: NEXT_EARNINGS[c.id] }))
            .filter(({ days }) => days !== null && days >= 0 && days <= 30)
            .sort((a, b) => a.days - b.days)
            .map(({ c, days, dateStr }) => (
              <li key={c.id} className="flex items-center gap-4 font-mono text-[12px]">
                <span className={`w-12 text-right ${days <= 3 ? 'text-amber-500 dark:text-amber-400' : 'text-paper-muted dark:text-ink-muted'}`}>
                  {days === 0 ? 'today' : `${days}d`}
                </span>
                <button
                  onClick={() => onNavigate(c.id)}
                  className="font-semibold text-paper-accent dark:text-ink-accent hover:underline w-16"
                >
                  {c.ticker}
                </button>
                <span className="text-paper-text dark:text-ink-text">{c.name}</span>
                <span className="text-paper-muted dark:text-ink-muted ml-auto">
                  {new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </li>
            ))}
          {COMPANIES.filter((c) => {
            const d = daysUntil(NEXT_EARNINGS[c.id]);
            return d !== null && d >= 0 && d <= 30;
          }).length === 0 && (
            <li className="font-mono text-[12px] text-paper-muted dark:text-ink-muted">No earnings in the next 30 days.</li>
          )}
        </ul>
      </section>

    </div>
  );
}
