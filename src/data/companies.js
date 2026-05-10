export const CATEGORIES = {
  LOGIC: 'Logic (SMH)',
  MEMORY: 'Memory (DRAM)',
  EQUIPMENT: 'Equipment & Litho',
  SERVICES: 'AI Services & Infrastructure (AIS)',
  ENERGY: 'Energy Infrastructure (ENFR)',
};

export const COMPANIES = [
  {
    id: 'nvda',
    name: 'NVIDIA',
    ticker: 'NVDA',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~16%' },
    stackPosition: 'Logic Design — AI Accelerators (GPU + System)',
    thematic:
      'NVIDIA owns the application layer of the AI buildout — its moat is no longer just CUDA, but the rack-scale system (NVLink, NVSwitch, networking) that no competitor can replicate at scale. The Blackwell architecture collapsed the boundary between compute and networking, making NVIDIA the single system integrator for hyperscaler AI factories. In 2026, the constraint is not demand but the ability of TSMC CoWoS-L and SK Hynix HBM3E lines to keep pace with a backlog measured in years, not quarters.',
    constraints: [
      'CoWoS-L advanced packaging capacity at TSMC — allocation bottleneck limits shipment velocity',
      'HBM3E / HBM4 allocation from SK Hynix and Samsung — memory bandwidth is the compute ceiling',
      'NVLink switch ASIC yield on leading-edge nodes — constrains rack-scale system attach rates',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry: CoWoS-L on 3nm / 4nm' },
      { to: 'skhx', label: 'HBM3E primary supplier' },
      { to: 'vrt', label: 'liquid cooling for Blackwell racks' },
    ],
    ir: {
      base: 'https://investor.nvidia.com',
      reports: [
        {
          label: 'Quarterly Results',
          href: 'https://investor.nvidia.com/financial-info/quarterly-results/default.aspx',
        },
      ],
    },
  },
  {
    id: 'tsm',
    name: 'TSMC',
    ticker: 'TSM',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~10%' },
    stackPosition: 'Foundry — Leading-edge Logic & Advanced Packaging',
    thematic:
      'TSMC is the single non-substitutable node in the global AI supply chain — every meaningful accelerator, ASIC, and custom silicon chip in 2026 is fabricated here on 3nm or 5nm. Beyond wafer starts, TSMC\'s CoWoS and SoIC advanced packaging lines are the physical glue that bonds HBM stacks to logic dies, making packaging yield a first-order constraint alongside lithography. Any slip in CoWoS-L capacity directly translates to delayed NVIDIA Blackwell and custom ASIC shipments, creating a cascading bottleneck across the entire AI buildout.',
    constraints: [
      'CoWoS-L capacity expansion — incremental tools take 18+ months to qualify; hyperscaler demand exceeds supply through 2026',
      'Geopolitical risk — US-China tension creates tail risk on Taiwan operations and export controls on advanced nodes',
      '2nm ramp (N2) — yield learning curve competes for engineering bandwidth against CoWoS expansion',
    ],
    nexus: [
      { to: 'nvda', label: 'primary AI accelerator customer' },
      { to: 'mrvl', label: 'custom ASIC foundry partner (3nm)' },
    ],
    ir: {
      base: 'https://investor.tsmc.com',
      reports: [
        {
          label: 'Quarterly Results',
          href: 'https://investor.tsmc.com/english/quarterly-results',
        },
      ],
    },
  },
  {
    id: 'mrvl',
    name: 'Marvell Technology',
    ticker: 'MRVL',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3.5%' },
    stackPosition: 'Custom Silicon (ASIC) + Data Infrastructure Networking',
    thematic:
      'Marvell is the quiet enabler of the hyperscaler custom silicon wave — its data infrastructure ASICs and optical DSPs power the high-radix networks that interconnect NVIDIA GPU clusters at scale. Major wins at Amazon (Trainium/Inferentia networking), Google (TPU interconnect), and Microsoft represent multi-year, sole-sourced tape-out pipelines on TSMC\'s 3nm process. In 2026, the custom ASIC cycle is still in early innings, and Marvell\'s royalty-like revenue model on production silicon creates compounding volume leverage as hyperscaler AI training clusters scale from thousands to hundreds of thousands of chips.',
    constraints: [
      'TSMC 3nm allocation — custom ASIC tape-outs compete for the same wafer starts as NVDA accelerators',
      'Design cycle latency — 18-to-24-month ASIC development windows mean today\'s design wins only ship at scale in 2026-2027',
      'Optical DSP supply tightness — coherent interconnect components face independent supply constraints from component vendors',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry: 3nm custom ASIC' },
      { to: 'nvda', label: 'hyperscaler networking complement / compete' },
    ],
    ir: {
      base: 'https://investor.marvell.com',
      reports: [
        {
          label: 'Quarterly Earnings',
          href: 'https://investor.marvell.com/financial-information/quarterly-results',
        },
      ],
    },
  },
  {
    id: 'skhx',
    name: 'SK Hynix',
    ticker: '000660.KS',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~26% of HBM market' },
    stackPosition: 'HBM Leader — High Bandwidth Memory',
    thematic:
      'SK Hynix is the primary HBM3E supplier to NVIDIA and the structural beneficiary of the AI memory architecture shift from DRAM to stacked HBM. Effectively sold out through end-2026 on long-term supply agreements, Hynix trades at a structural premium to commodity DRAM because HBM supply cannot be substituted or quickly expanded — each HBM4 stack requires Through-Silicon Via (TSV) bonding that takes years to qualify. The migration to HBM4 in 2026 resets the yield curve and creates a temporary supply air pocket that directly gates NVIDIA\'s next-generation Blackwell Ultra shipments.',
    constraints: [
      'HBM3E 12-Hi yield rates — stacking 12 dies with TSV bonding at scale remains the primary throughput ceiling',
      'TSV packaging throughput — specialized bonding equipment has 12-18 month lead times; capacity cannot be improvised',
      'HBM4 qualification timeline — NVIDIA requires Hynix to certify HBM4 before Blackwell Ultra ramp, compressing both timelines simultaneously',
    ],
    nexus: [
      { to: 'nvda', label: 'primary HBM3E customer' },
      { to: 'tsm', label: 'CoWoS integration at packaging level' },
    ],
    ir: {
      base: 'https://www.skhynix.com/eng/ir',
      reports: [
        {
          label: 'Quarterly Earnings',
          href: 'https://www.skhynix.com/eng/ir/financialInformation.do',
        },
      ],
    },
  },
  {
    id: 'vrt',
    name: 'Vertiv',
    ticker: 'VRT',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~5.1%' },
    stackPosition: 'Thermal Management — Liquid Cooling & Power Distribution',
    thematic:
      'Vertiv is the "Radiator" of the AI buildout: as GPU rack densities breach 100 kW with NVIDIA Blackwell and 200 kW with future Rubin racks, air cooling becomes physically impossible and Vertiv\'s direct liquid cooling (DLC) systems become the literal life-support of the data center. NVIDIA co-designed its GB200 NVL72 rack with Vertiv\'s cooling architecture, creating a design-lock that makes Vertiv the default thermal vendor for hyperscaler AI clusters. In 2026, the binding constraint is not Vertiv\'s order book — it is coolant distribution unit (CDU) manufacturing throughput and the lead time on specialized heat exchangers sourced from a concentrated European supply chain.',
    constraints: [
      'Coolant distribution unit (CDU) supply chain — heat exchangers and pumps sourced from concentrated European vendors with 30-40 week lead times',
      'Manufacturing capacity ramp — Vertiv\'s own factories are running at peak; incremental capacity requires greenfield build-out',
      'Rack-level integration complexity — each hyperscaler has a unique mechanical design, requiring customized CDU configurations that extend qualification timelines',
    ],
    nexus: [
      { to: 'nvda', label: 'Blackwell rack cooling co-design partner' },
      { to: 'gev', label: 'power input from on-site generation' },
    ],
    ir: {
      base: 'https://investors.vertiv.com',
      reports: [
        {
          label: 'Quarterly Results',
          href: 'https://investors.vertiv.com/financials/quarterly-results/default.aspx',
        },
      ],
    },
  },
  {
    id: 'gev',
    name: 'GE Vernova',
    ticker: 'GEV',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~3.7%' },
    stackPosition: 'Power Generation — Gas Turbines & Grid Infrastructure',
    thematic:
      'GE Vernova owns the "First Mile" of AI power: hyperscalers contracting for 500 MW to 1 GW of dedicated data center capacity are ordering GE gas turbines for on-site generation plants because the interconnection queue for grid power stretches 5-7 years. The HL-class turbine — GEV\'s most advanced — is now the preferred prime mover for hyperscaler behind-the-meter power plants, with backlog extending into 2028. In 2026, GEV\'s constraint is not demand but its own manufacturing throughput at its Greenville, SC turbine assembly facility, where each HL-class unit requires ~18 months of assembly time.',
    constraints: [
      'Turbine manufacturing backlog — HL-class assembly takes 18 months; Greenville facility is running at capacity through 2027',
      'Grid interconnect queue — connecting new generation to the grid takes 5-7 years, pushing hyperscalers to behind-the-meter solutions that stress GEV\'s direct-sale model',
      'Long-lead forging supply — turbine hot-section forgings are sourced from a handful of global specialty steel suppliers with constrained capacity',
    ],
    nexus: [
      { to: 'wmb', label: 'natural gas fuel supply via Transco' },
      { to: 'trgp', label: 'upstream NGL and gas gathering' },
      { to: 'vrt', label: 'co-located cooling for on-site data centers' },
    ],
    ir: {
      base: 'https://www.gevernova.com/investors',
      reports: [
        {
          label: 'Financial Results',
          href: 'https://www.gevernova.com/investors/financial-results',
        },
      ],
    },
  },
  {
    id: 'wmb',
    name: 'Williams Companies',
    ticker: 'WMB',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~6.4%' },
    stackPosition: 'Midstream — Natural Gas Transmission (Transco)',
    thematic:
      'Williams is the "Fuel Line" for the AI supercycle: the Transco pipeline moves roughly one-third of US natural gas demand and is the physical backbone serving the Mid-Atlantic data center corridor — the single densest concentration of AI compute in the world. As hyperscalers build behind-the-meter power plants fed by GE Vernova turbines, every incremental Bcf/d of gas demand flows through Williams infrastructure before it reaches the generator. In 2026, Williams is executing a $1.5B+ growth capex program to expand Transco throughput capacity, with tariff-regulated returns that provide recession-resistant cash flow while the AI power demand wave is still building.',
    constraints: [
      'FERC permitting — Transco expansion projects face a 3-5 year federal permitting timeline; regulatory risk is the primary execution constraint',
      'Environmental litigation — pipeline expansions in populated Mid-Atlantic corridors face organized legal opposition that can delay or block capacity adds',
      'Right-of-way acquisition — securing land access adjacent to existing Transco corridor in densely developed states is increasingly expensive and time-consuming',
    ],
    nexus: [
      { to: 'gev', label: 'gas delivery for hyperscaler turbine plants' },
      { to: 'trgp', label: 'upstream NGL gathering and processing' },
    ],
    ir: {
      base: 'https://investor.williams.com',
      reports: [
        {
          label: 'Quarterly Earnings',
          href: 'https://investor.williams.com/financial-information/quarterly-results/default.aspx',
        },
      ],
    },
  },
  {
    id: 'trgp',
    name: 'Targa Resources',
    ticker: 'TRGP',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~4.2%' },
    stackPosition: 'Midstream — NGL Gathering, Processing & Fractionation',
    thematic:
      'Targa Resources sits at the upstream end of the natural gas value chain: its gathering and processing systems in the Permian Basin and Gulf Coast capture the raw gas and natural gas liquids (NGLs) that eventually flow downstream to power the turbines running AI data centers. As AI-driven power demand structurally lifts US natural gas consumption, Targa\'s throughput volumes grow with the underlying commodity — providing volume-leveraged upside without direct commodity price exposure via fee-based contracts. Targa\'s Delaware Basin expansion program and Grand Prix NGL pipeline position it as the critical upstream link connecting Permian production growth to the national gas grid that feeds GE Vernova turbines and Williams Transco.',
    constraints: [
      'Permian gas flaring regulations — Texas RRC tightening of flaring permits forces producers to move more gas through gathering systems, accelerating volume growth but adding regulatory risk',
      'NGL fractionation capacity at Mont Belvieu — downstream fractionation bottlenecks can back up Targa\'s gathering throughput when downstream capacity is full',
      'Ethane rejection economics — when ethane prices drop below rejection thresholds, producers reject ethane back into the gas stream, reducing Targa\'s NGL volume and processing margins',
    ],
    nexus: [
      { to: 'wmb', label: 'downstream transmission via Transco' },
      { to: 'gev', label: 'upstream gas supply for turbine fuel' },
    ],
    ir: {
      base: 'https://www.targaresources.com/investors',
      reports: [
        {
          label: 'Quarterly Earnings',
          href: 'https://www.targaresources.com/investors/financial-information/quarterly-results',
        },
      ],
    },
  },
];

export const getCompany = (id) => COMPANIES.find((c) => c.id === id);
