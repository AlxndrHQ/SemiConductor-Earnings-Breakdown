import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Mermaid graph for the AI stack flow:
// Power -> Equipment/ASML -> Foundry/TSMC -> Logic + Memory -> Cloud
const GRAPH = `
flowchart LR
  PWR["Power & Grid"]:::infra
  ASML["ASML<br/><span style='font-size:10px'>EUV / High-NA</span>"]:::equip
  TSMC["TSMC<br/><span style='font-size:10px'>N3 · N2 · CoWoS</span>"]:::foundry
  NVDA["NVIDIA<br/><span style='font-size:10px'>Blackwell · Rubin</span>"]:::logic
  AVGO["Broadcom<br/><span style='font-size:10px'>ASIC · Networking</span>"]:::logic
  HBM["HBM3E / HBM4"]:::memory
  SKHX["SK Hynix"]:::memory
  MU["Micron"]:::memory
  CLOUD["Hyperscalers<br/><span style='font-size:10px'>MSFT · GOOG · AMZN · META</span>"]:::cloud

  PWR --> CLOUD
  ASML --> TSMC
  TSMC --> NVDA
  TSMC --> AVGO
  SKHX --> HBM
  MU --> HBM
  HBM --> NVDA
  HBM --> AVGO
  NVDA --> CLOUD
  AVGO --> CLOUD

  classDef infra fill:transparent,stroke:#6b6960,stroke-width:1px,color:inherit;
  classDef equip fill:transparent,stroke:#8a5a2b,stroke-width:1px,color:inherit;
  classDef foundry fill:transparent,stroke:#8a5a2b,stroke-width:1.5px,color:inherit;
  classDef logic fill:transparent,stroke:#1f1d18,stroke-width:1.5px,color:inherit;
  classDef memory fill:transparent,stroke:#1f1d18,stroke-width:1px,color:inherit;
  classDef cloud fill:transparent,stroke:#6b6960,stroke-width:1px,color:inherit;
`;

export default function StackFlow() {
  const ref = useRef(null);

  useEffect(() => {
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
      const id = 'stack-flow-' + Math.random().toString(36).slice(2, 9);
      try {
        const { svg } = await mermaid.render(id, GRAPH);
        ref.current.innerHTML = svg;
      } catch (e) {
        ref.current.innerHTML =
          '<pre class="font-mono text-xs">Diagram failed to render.</pre>';
        console.error(e);
      }
    };
    render();

    // Re-render on theme toggle
    const obs = new MutationObserver(render);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hairline rounded-sm border p-4 md:p-6">
      <div className="label mb-4">Flow · Power → Compute</div>
      <div ref={ref} className="mermaid-host overflow-x-auto" />
    </div>
  );
}
