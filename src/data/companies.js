// Single source of truth for company entries.
// Add new companies by appending to the COMPANIES array.
// `category` drives sidebar grouping. `id` is the URL slug.

export const CATEGORIES = {
  LOGIC: 'Logic (SMH)',
  MEMORY: 'Memory (DRAM)',
  EQUIPMENT: 'Equipment & Litho',
};

export const COMPANIES = [
  {
    id: 'nvda',
    name: 'NVIDIA',
    ticker: 'NVDA',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~16%' },
    stackPosition: 'Logic Design — AI Accelerators (GPU + System)',
    thematic:
      'NVIDIA owns the application layer of the AI buildout: every hyperscaler capex dollar that lands in 2026 lands first on a Hopper, Blackwell, or Rubin SKU. Its moat is no longer just CUDA — it is the rack-scale system (NVLink, networking, reference designs) that competitors cannot easily replicate. Whoever controls reference architecture controls the cycle.',
    constraints: [
      'CoWoS-L advanced packaging capacity at TSMC',
      'HBM3E / HBM4 allocation from SK Hynix and Micron',
      'Power delivery and grid interconnect at customer datacenters',
      'Export controls limiting China-bound SKUs',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry: 3nm/CoWoS' },
      { to: 'skhx', label: 'HBM3E primary supplier' },
      { to: 'mu', label: 'HBM3E secondary supplier' },
      { to: 'avgo', label: 'co-packaged optics, switching' },
    ],
    ir: {
      base: 'https://investor.nvidia.com',
      reports: [
        { label: 'Quarterly Results', href: 'https://investor.nvidia.com/financial-info/quarterly-results/default.aspx' },
        { label: 'Annual Reports', href: 'https://investor.nvidia.com/financial-info/annual-reports-and-proxies/default.aspx' },
        { label: 'SEC Filings', href: 'https://investor.nvidia.com/financial-info/sec-filings/default.aspx' },
      ],
    },
  },
  {
    id: 'tsm',
    name: 'TSMC',
    ticker: 'TSM',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~10%' },
    stackPosition: 'Foundry — Leading-edge Logic + Advanced Packaging',
    thematic:
      'TSMC is the single non-substitutable node in the AI stack: every meaningful accelerator in 2026 — NVIDIA, AMD, Broadcom ASICs, Apple, hyperscaler in-house silicon — is fabricated here on N3 or N2. CoWoS packaging has become as scarce as the wafers themselves, making TSMC the literal throughput governor on the entire supercycle. Geopolitical risk is the only real bear case.',
    constraints: [
      'CoWoS capacity expansion (target ~660k wafers/yr by end-2026)',
      'N2 ramp timing and yield curve',
      'Arizona Fab 21 staffing and yield parity with Taiwan',
      'Taiwan Strait geopolitical premium',
    ],
    nexus: [
      { to: 'asml', label: 'EUV/High-NA tooling' },
      { to: 'nvda', label: 'largest leading-edge customer' },
      { to: 'avgo', label: 'custom ASIC fabrication' },
    ],
    ir: {
      base: 'https://investor.tsmc.com',
      reports: [
        { label: 'Quarterly Results', href: 'https://investor.tsmc.com/english/quarterly-results' },
        { label: 'Annual Reports', href: 'https://investor.tsmc.com/english/annual-reports' },
        { label: 'Monthly Revenue', href: 'https://investor.tsmc.com/english/monthly-revenue' },
      ],
    },
  },
  {
    id: 'avgo',
    name: 'Broadcom',
    ticker: 'AVGO',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~9%' },
    stackPosition: 'Custom ASIC + Networking Silicon (Tomahawk, Jericho)',
    thematic:
      'Broadcom is the silent counterweight to NVIDIA: it builds the custom accelerators (Google TPU, Meta MTIA) that hyperscalers use to escape NVIDIA tax, and the Ethernet switch silicon that connects them. As training clusters scale past 100k GPUs, networking becomes the bottleneck — and Broadcom is on both sides of the trade. The XPU revenue line is the one to watch in 2026.',
    constraints: [
      'CoWoS allocation competing with NVIDIA',
      'Hyperscaler ASIC roadmap commitments',
      'Optical transceiver supply for 1.6T networking',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry partner' },
      { to: 'skhx', label: 'HBM for XPU' },
    ],
    ir: {
      base: 'https://investors.broadcom.com',
      reports: [
        { label: 'Quarterly Results', href: 'https://investors.broadcom.com/financial-information/quarterly-results' },
        { label: 'Annual Reports', href: 'https://investors.broadcom.com/financial-information/annual-reports' },
        { label: 'SEC Filings', href: 'https://investors.broadcom.com/financial-information/sec-filings' },
      ],
    },
  },
  {
    id: 'skhx',
    name: 'SK Hynix',
    ticker: '000660.KS',
    category: CATEGORIES.MEMORY,
    weight: { index: 'KODEX/DRAM peers', value: '~26% of HBM market' },
    stackPosition: 'HBM Leader — Primary HBM3E Supplier to NVIDIA',
    thematic:
      'SK Hynix is the only memory vendor that delivered HBM3E at scale on schedule, which is why it captures the majority of NVIDIA Blackwell HBM content. HBM is now sold out through 2026 on long-term agreements, turning a historically cyclical commodity into something closer to a contracted utility. The HBM4 transition is the next gating event for the entire AI cycle.',
    constraints: [
      'HBM3E 12-Hi yield rates',
      'TSV (through-silicon via) packaging throughput',
      'HBM4 base-die collaboration with TSMC',
      'DRAM wafer cannibalization (HBM consumes ~3x the wafers of standard DRAM per bit)',
    ],
    nexus: [
      { to: 'nvda', label: 'primary HBM customer' },
      { to: 'tsm', label: 'HBM4 base-die foundry' },
    ],
    ir: {
      base: 'https://www.skhynix.com/eng/ir',
      reports: [
        { label: 'Quarterly Earnings', href: 'https://www.skhynix.com/eng/ir/financialInformation.do' },
        { label: 'Annual Reports', href: 'https://www.skhynix.com/eng/ir/annualReports.do' },
        { label: 'IR Events', href: 'https://www.skhynix.com/eng/ir/irEvents.do' },
      ],
    },
  },
  {
    id: 'mu',
    name: 'Micron',
    ticker: 'MU',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM peers', value: '~18%' },
    stackPosition: 'HBM3E + DDR5 — Domestic (US) Memory Play',
    thematic:
      'Micron is the second source NVIDIA needs to avoid single-supplier risk on HBM, and the only HBM producer with major US-domestic capacity — a structural advantage as CHIPS Act dollars flow. Its HBM3E qualification on Blackwell pulled the company out of the 2023 commodity trough into a capacity-constrained growth story. The Idaho and New York fab ramps are the multi-year option value.',
    constraints: [
      'HBM3E qualification share at NVIDIA / AMD',
      'Idaho fab construction timeline',
      'TSV throughput catching up to SK Hynix',
    ],
    nexus: [
      { to: 'nvda', label: 'HBM3E secondary supplier' },
      { to: 'asml', label: 'DRAM lithography' },
    ],
    ir: {
      base: 'https://investors.micron.com',
      reports: [
        { label: 'Quarterly Results', href: 'https://investors.micron.com/financial-information/quarterly-results' },
        { label: 'Annual Reports', href: 'https://investors.micron.com/financial-information/annual-reports' },
        { label: 'SEC Filings', href: 'https://investors.micron.com/financial-information/sec-filings' },
      ],
    },
  },
  {
    id: 'asml',
    name: 'ASML',
    ticker: 'ASML',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~5%' },
    stackPosition: 'Lithography Monopoly — EUV and High-NA EUV',
    thematic:
      'ASML is the chokepoint above the chokepoint: TSMC cannot make N3 or N2 without EUV, and only ASML makes EUV. High-NA EUV systems (the ~$380M tools) are the gating equipment for sub-2nm logic and HBM4 base dies in the back half of the decade. Order book volatility is noisy quarter-to-quarter; the structural story is unchanged.',
    constraints: [
      'High-NA EUV tool installation throughput',
      'China revenue exposure under export controls',
      'Carl Zeiss SMT optics supply chain',
    ],
    nexus: [
      { to: 'tsm', label: 'leading-edge tool placements' },
      { to: 'skhx', label: 'DRAM/HBM lithography' },
      { to: 'mu', label: 'DRAM/HBM lithography' },
    ],
    ir: {
      base: 'https://www.asml.com/en/investors',
      reports: [
        { label: 'Quarterly Results', href: 'https://www.asml.com/en/investors/financial-results' },
        { label: 'Annual Reports', href: 'https://www.asml.com/en/investors/annual-report' },
        { label: 'Investor Days', href: 'https://www.asml.com/en/investors/investor-days' },
      ],
    },
  },
];

export const getCompany = (id) => COMPANIES.find((c) => c.id === id);
