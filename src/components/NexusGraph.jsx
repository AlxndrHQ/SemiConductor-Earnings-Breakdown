import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { COMPANIES } from '../data/companies.js';

/**
 * Build a Mermaid flowchart definition for a single company.
 * - Center node (gold border) = this company
 * - Outbound (warm brown) = companies this one depends on
 * - Inbound (muted gray) = companies that depend on this one
 */
function buildGraph(company) {
  const { id, name, ticker, nexus = [] } = company;

  // Companies that list this company in their own nexus
  const inbound = COMPANIES.filter(
    (c) => c.id !== id && c.nexus?.some((n) => n.to === id)
  ).slice(0, 4);

  const nodeMap = new Map(); // id → { label, cls }
  const edges = [];

  const addNode = (nid, n, t, cls) => {
    if (!nodeMap.has(nid)) {
      const label = `${n}<br/>${t}`.replace(/"/g, "'");
      nodeMap.set(nid, { label, cls });
    }
  };

  addNode(id, name, ticker, 'center');

  nexus.forEach(({ to, label }) => {
    const target = COMPANIES.find((c) => c.id === to);
    if (!target) return;
    addNode(to, target.name, target.ticker, 'outbound');
    edges.push({ from: id, to, label: label.slice(0, 28) });
  });

  inbound.forEach((c) => {
    addNode(c.id, c.name, c.ticker, 'inbound');
    const link = c.nexus?.find((n) => n.to === id);
    if (link) edges.push({ from: c.id, to: id, label: link.label.slice(0, 28) });
  });

  let def = 'flowchart LR\n';

  nodeMap.forEach(({ label, cls }, nid) => {
    def += `  ${nid}["${label}"]:::${cls}\n`;
  });

  edges.forEach(({ from, to, label }) => {
    def += `  ${from} -->|"${label.replace(/"/g, "'")}"| ${to}\n`;
  });

  def += `  classDef center   fill:transparent,stroke:#c9a875,stroke-width:2px,color:inherit;\n`;
  def += `  classDef outbound fill:transparent,stroke:#8a5a2b,stroke-width:1px,color:inherit;\n`;
  def += `  classDef inbound  fill:transparent,stroke:#6b6960,stroke-width:1px,color:inherit;\n`;

  return def;
}

export default function NexusGraph({ company }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!company || !ref.current) return;

    const isDark = document.documentElement.classList.contains('dark');

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      fontFamily: 'JetBrains Mono, SF Mono, Menlo, monospace',
      themeVariables: {
        background: 'transparent',
        primaryColor: 'transparent',
        primaryTextColor: isDark ? '#e8e6df' : '#1f1d18',
        primaryBorderColor: isDark ? '#26262b' : '#e8e6df',
        lineColor: isDark ? '#7a7a82' : '#6b6960',
        edgeLabelBackground: 'transparent',
      },
    });

    const render = async () => {
      if (!ref.current) return;
      const graphDef = buildGraph(company);
      const uid = `nexus-${company.id}-${Math.random().toString(36).slice(2, 8)}`;
      try {
        const { svg } = await mermaid.render(uid, graphDef);
        ref.current.innerHTML = svg;
      } catch (e) {
        ref.current.innerHTML =
          '<p class="font-mono text-xs opacity-40">Graph unavailable.</p>';
        console.error('NexusGraph:', e);
      }
    };

    render();

    const obs = new MutationObserver(render);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, [company?.id]); // re-render when company changes

  return (
    <div className="hairline rounded-sm border p-4 md:p-6">
      <div className="label mb-1">Supply Chain Nexus</div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-paper-muted dark:text-ink-muted mb-4">
        Gold&nbsp;=&nbsp;{company?.name}&nbsp;&nbsp;·&nbsp;&nbsp;
        Warm&nbsp;=&nbsp;Dependencies&nbsp;&nbsp;·&nbsp;&nbsp;
        Gray&nbsp;=&nbsp;Dependents
      </p>
      <div ref={ref} className="overflow-x-auto" />
    </div>
  );
}
