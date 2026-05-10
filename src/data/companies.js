export const CATEGORIES = {
  LOGIC:     'Logic (SMH)',
  MEMORY:    'Memory (DRAM)',
  EQUIPMENT: 'Equipment & Lithography',
  SERVICES:  'AI Services & Infrastructure (AIS)',
  ENERGY:    'Energy Infrastructure (ENFR)',
};

export const COMPANIES = [

  // ─────────────────────────────────────────────────────────────────────────
  // LOGIC (SMH)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'nvda',
    name: 'NVIDIA',
    ticker: 'NVDA',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~16%' },
    stackPosition: 'Logic Design — AI Accelerators (GPU + System)',
    thematic:
      'NVIDIA owns the application layer of the AI buildout — its moat is no longer just CUDA, but the rack-scale system (NVLink, NVSwitch, networking) that no competitor can replicate at scale. The Blackwell architecture collapsed the boundary between compute and networking, making NVIDIA the single system integrator for hyperscaler AI factories. In 2026, the constraint is not demand but the ability of TSMC CoWoS-L and SK Hynix HBM4 lines to keep pace with a backlog measured in years, not quarters.',
    constraints: [
      'CoWoS-L advanced packaging capacity at TSMC — allocation bottleneck limits shipment velocity regardless of wafer supply',
      'HBM4 allocation from SK Hynix — memory bandwidth is the compute ceiling; HBM4 yield reset creates near-term supply air pocket',
      'NVLink switch ASIC yield on N3 — constrains rack-scale NVL72 system attach rates and blended ASP',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: CoWoS-L / 3nm / 4nm' },
      { to: 'skhx', label: 'HBM4 primary supplier' },
      { to: 'vrt',  label: 'Blackwell rack liquid cooling' },
      { to: 'avgo', label: 'networking complement (Tomahawk)' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Q2 2026 revenue guided at $45B+; Blackwell Ultra sampling to hyperscalers with HBM4 qualification on track for Q3.',
      breakdown: [
        'Data center revenue $40.8B — CoWoS-L shipment velocity accelerating above plan',
        'GB200 NVL72 rack attach rate above 90% at top-3 hyperscalers',
        'Gross margin 78.4% — NVLink switch ASIC yield improvement driving upside',
        'China headwinds manageable; H20 export replacement demand absorbing redirect capacity',
      ],
    },
    ir: {
      base: 'https://investor.nvidia.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.nvidia.com/financial-info/quarterly-results/default.aspx' }],
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
      'CoWoS-L capacity — incremental tools take 18+ months to qualify; hyperscaler demand exceeds supply through 2026',
      'Geopolitical risk — US-China tension creates tail risk on Taiwan operations and advanced-node export controls',
      'N2 ramp yield learning — engineering bandwidth split between CoWoS expansion and 2nm process development',
    ],
    nexus: [
      { to: 'asml', label: 'High-NA EUV tool supply' },
      { to: 'amat', label: 'deposition & CMP tools' },
      { to: 'nvda', label: 'primary AI accelerator customer' },
      { to: 'mrvl', label: 'custom ASIC: 3nm foundry' },
    ],
    earnings: {
      status: 'Beat',
      guidance: '2026 full-year revenue growth +30% YoY confirmed; CoWoS-L capacity expansion Phase 2 on schedule for Q3 commissioning.',
      breakdown: [
        'Revenue NT$1.03T — AI accelerator wafers now >35% of logic revenue mix',
        'Gross margin 58.1% — CoWoS packaging premium lifting blended ASP above prior quarters',
        'N3/N3E utilization 100%+; waitlist extending into early 2027',
        'N2 pilot line yield tracking internal targets; risk production in Q4 2026',
      ],
    },
    ir: {
      base: 'https://investor.tsmc.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.tsmc.com/english/quarterly-results' }],
    },
  },

  {
    id: 'avgo',
    name: 'Broadcom',
    ticker: 'AVGO',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~8%' },
    stackPosition: 'Custom ASIC (XPU) + Datacenter Networking',
    thematic:
      'Broadcom is the stealth beneficiary of the hyperscaler "de-NVIDIA" movement: Google TPU v6, Meta MTIA, and ByteDance\'s custom training XPUs are all Broadcom-designed ASICs fabricated at TSMC, giving AVGO royalty-like exposure to the custom silicon wave without the GPU commoditization risk. Beyond ASIC, Broadcom\'s Tomahawk and Jericho switch silicon connects every GPU in a cluster — meaning even NVIDIA Blackwell racks ship with Broadcom networking. In 2026, AVGO\'s AI revenue is on a trajectory to a $60-90B TAM, and the binding constraint is TSMC 3nm allocation rather than design pipeline.',
    constraints: [
      'TSMC 3nm wafer allocation — custom ASIC tape-outs compete directly with NVDA for the same leading-edge capacity',
      'Customer concentration — top-3 hyperscaler XPU programs represent outsized revenue risk if any program slips or is cancelled',
      'VMware integration execution — cross-selling private cloud infrastructure while managing culture and headcount remains a distraction risk',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: 3nm XPU & networking ASIC' },
      { to: 'nvda', label: 'networking complement (Tomahawk switch)' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 AI revenue raised to $65B midpoint; custom XPU second-gen tape-outs at Google and Meta completed on schedule.',
      breakdown: [
        'AI semiconductor revenue $12.2B in quarter — run-rate annualizing at $49B, tracking toward raised guide',
        'Networking (Tomahawk 6) shipments accelerating as 800G cluster scale-out continues',
        'VMware cloud subscription ARR growing 28% YoY, synergies tracking $1.5B annualized',
        'Gross margin 80.3% — custom ASIC mix favorable vs commodity networking',
      ],
    },
    ir: {
      base: 'https://investors.broadcom.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investors.broadcom.com/financial-information/financial-results' }],
    },
  },

  {
    id: 'intc',
    name: 'Intel',
    ticker: 'INTC',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~2%' },
    stackPosition: 'IDM — x86 CPUs & Foundry Services (IFS)',
    thematic:
      'Intel is the restructuring story of the 2026 AI cycle — having ceded AI accelerator leadership to NVIDIA and custom ASIC share to Broadcom, the company\'s value now hinges on whether Intel Foundry Services (IFS) can establish 18A as a credible third-option foundry for Western governments and hyperscalers seeking supply chain diversification from TSMC. The Gaudi 3 AI accelerator has failed to gain meaningful traction at hyperscalers, leaving Intel dependent on x86 data center CPU (Xeon) moat while the compute paradigm shifts to GPU/XPU. In 2026, Intel is a show-me story: 18A yield milestones and IFS customer announcements are the only catalysts that matter.',
    constraints: [
      'IFS 18A process yield — external customer qualification requires yields that have not yet been publicly validated at volume',
      'Gaudi 3 adoption — hyperscalers have not committed Gaudi to meaningful production workloads; software ecosystem remains CUDA-centric',
      'Balance sheet stress — funding simultaneous IDM manufacturing and foundry capex while generating negative free cash flow is structurally challenging',
    ],
    nexus: [
      { to: 'tsm',  label: 'outsourced packaging for some products' },
      { to: 'amat', label: 'fab tooling for 18A/Intel 20A' },
      { to: 'lrcx', label: 'etch tools for high-k gate stack' },
    ],
    earnings: {
      status: 'Miss',
      guidance: 'Q2 2026 revenue guided $12.5-13.5B, below Street at $14.1B; IFS 18A external customer yield certification delayed to Q4 2026.',
      breakdown: [
        'Data center & AI (DCAI) revenue $3.1B — Gaudi 3 revenue negligible vs NVDA/AMD',
        'IFS revenue $4.8B — below plan; yield issues on 18A extended qualification timeline by one quarter',
        'PC Client (CCG) in line; Lunar Lake share at premium tier better than expected vs AMD Strix',
        'Gross margin 36.8% — underloading charges at fabrication facilities weighing on fixed cost absorption',
      ],
    },
    ir: {
      base: 'https://www.intc.com/investor-relations',
      reports: [{ label: 'Earnings Releases', href: 'https://www.intc.com/investor-relations/earnings/quarterly-results/default.aspx' }],
    },
  },

  {
    id: 'amd',
    name: 'AMD',
    ticker: 'AMD',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~4.5%' },
    stackPosition: 'Logic Design — x86 CPUs & Instinct GPU Accelerators',
    thematic:
      'AMD is the most credible NVIDIA alternative in the AI compute stack — the Instinct MI300X is shipping to hyperscalers and cloud providers in volume, and the MI350 on TSMC N3 is scheduled to sample in mid-2026 with HBM4 integration. The CPU franchise (EPYC Genoa/Turin) continues to take server market share from Intel, providing durable cash flow that subsidizes the GPU R&D investment cycle. In 2026, AMD\'s GPU trajectory depends less on product quality — which is competitive — and more on whether hyperscalers can qualify ROCm software fast enough to commit meaningful workloads away from CUDA.',
    constraints: [
      'ROCm software ecosystem — CUDA\'s decade-long head start means hyperscalers bear high switching costs; software qualification gates AMD GPU adoption velocity',
      'CoWoS allocation — AMD Instinct GPUs compete with NVDA for the same TSMC advanced packaging capacity',
      'MI350 / MI400 tape-out risk — back-to-back GPU generation development cycles compress engineering margin for error',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: N3 for MI350 / N4 for MI300X' },
      { to: 'skhx', label: 'HBM3E supplier for MI300X' },
      { to: 'mu',   label: 'HBM3E alternate supplier' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'Q2 2026 data center GPU revenue guided $4.5B; MI350 volume production confirmed for Q3 2026 on TSMC N3.',
      breakdown: [
        'Data center GPU (Instinct) revenue $4.1B — in-line with Street; Microsoft Azure and Meta GPU allocation expanding',
        'EPYC server CPU revenue $2.8B — Turin (Zen 5) share gains at Dell, HPE on track',
        'Client PC revenue slightly above plan; Strix premium mobile gaining OEM slots',
        'Gross margin 53.8% — GPU mix improving but Instinct ASP below NVDA H100/B200 tier',
      ],
    },
    ir: {
      base: 'https://ir.amd.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.amd.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'txn',
    name: 'Texas Instruments',
    ticker: 'TXN',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'Analog & Embedded — Industrial & Automotive ICs',
    thematic:
      'Texas Instruments is the analog bellwether for the non-AI semiconductor cycle — its 100,000+ part catalog serves the industrial automation, automotive, and personal electronics markets that are in a prolonged inventory correction even as AI chips boom. TXN\'s vertically integrated manufacturing model (DMOS, BCD processes) in 300mm fabs provides structural cost advantage that positions it to outperform in recovery but offers no shelter from the digestion cycle that has now extended into its seventh quarter. In 2026, TXN is the contrarian trade: investors who believe industrial and auto end-markets bottom in H2 2026 will accumulate the stock, while the near-term earnings path remains under pressure.',
    constraints: [
      'Industrial inventory correction — channel inventory remains elevated after 2021-2022 over-ordering; OEM production schedules below TI bookings',
      'Automotive volume softness — EV production ramp slower than TI content-per-vehicle gains; net auto revenue flat to down',
      'New fab underloading — 300mm DMOS fab additions (Sherman, TX and Lehi, UT) carrying fixed cost drag until utilization inflects',
    ],
    nexus: [
      { to: 'amat', label: 'analog process deposition tools' },
    ],
    earnings: {
      status: 'Miss',
      guidance: 'Q2 2026 revenue guided $3.7-4.0B vs Street $4.4B; industrial recovery now expected H2 2026 at the earliest.',
      breakdown: [
        'Industrial revenue -18% YoY — inventory digestion worse than guided 90 days ago',
        'Automotive revenue -5% YoY — volume headwinds from ICE/EV production cuts',
        'Personal electronics (smartphones, tablets) slight positive surprise — consumer cycle recovering faster than industrial',
        'Gross margin 62.1% — new fab underloading absorbed ~4 pts of gross margin; should recover as utilization rises',
      ],
    },
    ir: {
      base: 'https://investor.ti.com',
      reports: [{ label: 'Earnings Release', href: 'https://investor.ti.com/financial-information/financial-results' }],
    },
  },

  {
    id: 'qcom',
    name: 'Qualcomm',
    ticker: 'QCOM',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3.5%' },
    stackPosition: 'Fabless — Mobile SoC, Automotive ADAS, PC / Edge AI',
    thematic:
      'Qualcomm is transitioning from a handset monoculture to a diversified edge-AI semiconductor company — the Snapdragon X Elite PC chip is competing head-to-head with Apple M-series and Intel Core Ultra, while Snapdragon Ride Flex is positioning QCOM for a multi-year automotive ADAS ramp. The core Snapdragon mobile business remains the cash engine, generating the free cash flow that funds the PC, auto, and IoT diversification without dilution. In 2026, QCOM\'s multiple re-rating requires the market to believe the automotive and PC pipelines will reach scale before any Apple in-house modem transition erodes the handset royalty stream.',
    constraints: [
      'Apple modem transition risk — Apple\'s in-house C1 modem chip could reduce Qualcomm content in iPhone, threatening the royalty stream',
      'Android premium handset share — Samsung and Google Pixel modem/AP wins must offset potential Apple attrition',
      'Automotive design cycle — ADAS/cockpit SoC wins today only generate revenue in 2027-2028 production vehicles; near-term revenue is thin',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry: Snapdragon / Snapdragon X Elite on N3' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'FY2026 QCT semiconductor revenue guided up mid-single digits; automotive design win pipeline now $45B lifetime value.',
      breakdown: [
        'Handset QCT revenue $6.5B — premium Android stable; AI-on-device feature adoption lifting Snapdragon 8 Elite ASPs',
        'Automotive QCT revenue $959M — up 59% YoY; Ride Flex production ramp at Stellantis and GM on schedule',
        'PC / IoT revenue tracking expectations; Snapdragon X Elite PC attach at Lenovo and Dell above plan',
        'QTL licensing revenue slightly below — Samsung royalty rate dispute overhang persisting into arbitration',
      ],
    },
    ir: {
      base: 'https://investor.qualcomm.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.qualcomm.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'adi',
    name: 'Analog Devices',
    ticker: 'ADI',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'Analog / Mixed-Signal — Industrial, Instrumentation, Comms',
    thematic:
      'Analog Devices is the highest-quality analog franchise in semiconductors, serving industrial automation, instrumentation, healthcare, and 5G communications — markets that are collectively experiencing the most severe inventory correction since 2016. The Linear Technology and Maxim acquisitions created a differentiated portfolio of precision signal chain and power management ICs that command durable pricing power; the issue in 2026 is not competitive dynamics but the pace of channel destocking at industrial and telecom OEMs. When the industrial cycle inflects — expected in H2 2026 — ADI\'s operating leverage is among the highest in analog due to its outsourced manufacturing model and OpEx discipline during the downturn.',
    constraints: [
      'Industrial end-market inventory correction — precision instrumentation and automation customers running off excess inventory accumulated in 2021-2023',
      'Telecom infrastructure softness — 5G base station investment cycle paused globally; wireless comms revenue declining',
      'Customer concentration in cyclical verticals — industrial + comms represent ~65% of revenue, amplifying cycle sensitivity',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry for high-speed mixed-signal ICs' },
      { to: 'lrcx', label: 'etch tooling for BiCMOS process' },
    ],
    earnings: {
      status: 'Miss',
      guidance: 'Q3 2026 revenue guided $2.2-2.4B, below Street; industrial recovery push to Q4 2026; automotive remains solid offset.',
      breakdown: [
        'Industrial revenue -22% YoY — slowest vertical; OEM production schedules below distributor sell-through',
        'Automotive revenue +6% YoY — BMS (battery management) and functional safety ICs sustaining growth',
        'Communications -31% YoY — 5G RAN investment freeze at major carriers extending longer than anticipated',
        'Gross margin 68.3% — outsourced fab model provides modest flex; fixed cost leverage limited at current utilization',
      ],
    },
    ir: {
      base: 'https://investor.analog.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.analog.com/financial-information/quarterly-earnings' }],
    },
  },

  {
    id: 'mrvl',
    name: 'Marvell Technology',
    ticker: 'MRVL',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3.5%' },
    stackPosition: 'Custom ASIC + Data Infrastructure Networking',
    thematic:
      'Marvell is the quiet enabler of the hyperscaler custom silicon wave — its data infrastructure ASICs and optical DSPs power the high-radix networks that interconnect NVIDIA GPU clusters at scale. Major wins at Amazon (Trainium networking), Google (TPU interconnect), and Microsoft represent multi-year, sole-sourced tape-out pipelines on TSMC\'s 3nm process. In 2026, the custom ASIC cycle is still in early innings, and Marvell\'s royalty-like revenue model on production silicon creates compounding volume leverage as hyperscaler AI training clusters scale from thousands to hundreds of thousands of chips.',
    constraints: [
      'TSMC 3nm allocation — custom ASIC tape-outs compete for the same wafer starts as NVDA accelerators',
      'Design cycle latency — 18-to-24-month ASIC development windows mean today\'s wins only ship at scale in 2027',
      'Optical DSP supply tightness — coherent interconnect components face independent supply constraints',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: 3nm custom ASIC' },
      { to: 'nvda', label: 'hyperscaler networking complement / compete' },
      { to: 'amzn', label: 'Trainium ASIC design partner' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 custom silicon (ASIC) revenue on track for $8B+ exiting year; optical DSP 800G bookings at record high.',
      breakdown: [
        'Custom AI ASIC revenue $2.4B — Amazon Trainium2 networking ASIC at full production volumes',
        'Optical DSP revenue outperforming — 800G transceiver demand ahead of cluster scale-out schedules',
        'Google second-gen custom AI ASIC tape-out on TSMC N3 completed; production ramp H2 2026',
        'Gross margin 59.5% — custom ASIC mix and DSP premium offsetting legacy Ethernet softness',
      ],
    },
    ir: {
      base: 'https://investor.marvell.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.marvell.com/financial-information/quarterly-results' }],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MEMORY (DRAM)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'skhx',
    name: 'SK Hynix',
    ticker: '000660.KS',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~26% of HBM market' },
    stackPosition: 'HBM Leader — High Bandwidth Memory',
    thematic:
      'SK Hynix is the primary HBM4 supplier to NVIDIA and the structural beneficiary of the AI memory architecture shift from commodity DRAM to stacked HBM. Effectively sold out through end-2026 on long-term supply agreements, Hynix trades at a structural premium to commodity DRAM because HBM supply cannot be substituted — each HBM4 stack requires Through-Silicon Via (TSV) bonding that takes years to qualify at volume. The migration to HBM4 in 2026 resets the yield curve and temporarily gates NVIDIA\'s Blackwell Ultra shipments, creating a virtuous pricing window before Micron\'s HBM4 volume ramp provides second-source relief in 2027.',
    constraints: [
      'HBM4 12-Hi yield rates — stacking 12 dies with TSV bonding at volume is the primary throughput ceiling',
      'TSV packaging equipment lead times — specialized bonders are 12-18 months; capacity cannot be improvised',
      'HBM4 qualification timeline — NVIDIA certification requirement compresses development and production ramp simultaneously',
    ],
    nexus: [
      { to: 'nvda', label: 'primary HBM4 customer' },
      { to: 'amd',  label: 'HBM3E for MI300X / MI350' },
      { to: 'lrcx', label: 'high-aspect-ratio TSV etch tools' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'HBM4 qualification with NVIDIA on track for Q3 2026 production; HBM3E effectively sold out through Q4 2026.',
      breakdown: [
        'HBM revenue KRW 7.2T — HBM3E 12-Hi ASPs expanding as supply gated by TSV yield',
        'Commodity DRAM softening provides contrast that highlights the structural HBM premium',
        'Long-term supply agreements cover 100% of 2026 HBM output; visibility exceptional',
        'NAND segment recovering modestly; enterprise SSD demand offsetting consumer softness',
      ],
    },
    ir: {
      base: 'https://www.skhynix.com/eng/ir',
      reports: [{ label: 'Quarterly Earnings', href: 'https://www.skhynix.com/eng/ir/financialInformation.do' }],
    },
  },

  {
    id: 'mu',
    name: 'Micron Technology',
    ticker: 'MU',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~20%' },
    stackPosition: 'DRAM & NAND — HBM3E Second Source',
    thematic:
      'Micron is the US-based memory bellwether and the critical second source for HBM as NVIDIA and hyperscalers seek supply chain diversification away from Korean-only HBM sourcing. The HBM3E ramp at Micron is tracking ahead of initial expectations, and the company\'s Boise, Idaho manufacturing footprint provides a geopolitically resilient alternative to SK Hynix\'s Korean fabs. In 2026, Micron\'s blended ASP is inflecting upward as HBM mix rises, and the company is investing aggressively in Idaho and New York 1-beta DRAM capacity to serve the AI memory supercycle through the decade.',
    constraints: [
      'HBM3E volume yield — Micron is 2-3 quarters behind Hynix in HBM TSV yield maturity; ramp risk through H1 2026',
      'NAND oversupply — commodity NAND pricing remains under pressure from Samsung capacity additions, diluting blended margin',
      'Capex intensity — simultaneous HBM expansion, NAND consolidation, and 1-beta DRAM greenfield straining free cash flow',
    ],
    nexus: [
      { to: 'nvda', label: 'HBM3E second source for Blackwell' },
      { to: 'amd',  label: 'HBM3E alternate supplier' },
      { to: 'lrcx', label: 'etch tooling for HBM TSV' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 HBM revenue tracking $3.5B+; HBM4 sampling to NVIDIA expected in Q3 2026 — establishing second-source qualification.',
      breakdown: [
        'HBM revenue $1.1B in quarter — run-rate approaching Hynix second-source allocation at NVIDIA',
        'DRAM blended ASP +18% QoQ driven by HBM mix and D5 server DRAM pricing recovery',
        'NAND revenue below plan — enterprise SSD partially offsetting consumer NAND weakness',
        'Gross margin 41.5% — HBM mix tailwind; expect continued expansion as HBM4 qualifies',
      ],
    },
    ir: {
      base: 'https://investors.micron.com',
      reports: [{ label: 'Earnings Releases', href: 'https://investors.micron.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'ssnlf',
    name: 'Samsung Electronics',
    ticker: 'SSNLF',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~35% of DRAM market' },
    stackPosition: 'Integrated DRAM, NAND & Logic (Foundry)',
    thematic:
      'Samsung is the largest memory manufacturer in the world and the most vertically integrated semiconductor company — it makes the DRAM, NAND, logic chips, and the equipment used to process them, and assembles the phones and TVs that use them downstream. Despite scale advantages, Samsung has ceded HBM3E market share to SK Hynix due to yield certification delays at NVIDIA, turning the most important memory cycle in a decade into a competitive disadvantage. In 2026, Samsung\'s strategic priority is HBM4 second-source qualification at NVIDIA and rebuilding foundry (SF3) yield credibility after high-profile customer losses to TSMC.',
    constraints: [
      'HBM3E yield deficit — NVIDIA\'s HBM3E qualification failure at Samsung ceded revenue to Hynix; HBM4 re-qualification is critical and not yet confirmed',
      'Foundry (SF3) yield — Samsung Foundry\'s 3nm GAA process has underperformed TSMC N3, driving customer defection to TSMC',
      'NAND oversupply — Samsung\'s own capacity adds are the primary cause of NAND pricing weakness that hurts blended margins',
    ],
    nexus: [
      { to: 'nvda', label: 'HBM4 secondary source (qualification pending)' },
      { to: 'amat', label: 'deposition & CMP tools for DRAM' },
      { to: 'lrcx', label: 'etch tools for NAND and DRAM stacks' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'Q2 2026 operating profit guided KRW 12T; HBM4 NVIDIA qualification targeted by Q4 2026 — pivotal for memory segment recovery.',
      breakdown: [
        'Memory (DS) division operating profit KRW 5.8T — below peak due to HBM yield mix vs Hynix',
        'NAND operating margin recovering; supply discipline implemented in H2 2025 tightening pricing',
        'Foundry revenue below plan — key customer wins at TSMC limiting SF3 utilization',
        'Consumer electronics (MX, CE) providing cash flow stability during memory transition',
      ],
    },
    ir: {
      base: 'https://www.samsung.com/us/investor-relations',
      reports: [{ label: 'Earnings Releases', href: 'https://www.samsung.com/global/ir/financial-information/quarterly-earnings/' }],
    },
  },

  {
    id: 'wdc',
    name: 'Western Digital',
    ticker: 'WDC',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~5%' },
    stackPosition: 'NAND Flash — Enterprise SSD & HDD',
    thematic:
      'Western Digital is a NAND flash-focused storage company that spans both enterprise SSD (AI inference workloads) and hard disk drive (cold storage for AI training datasets) — a rare combination that provides exposure to AI infrastructure from two different physics layers. The enterprise SSD business is benefiting from AI inference scaling at hyperscalers, where NVMe SSDs store model weights and key-value caches in the inference path. Meanwhile, WDC\'s HDD business faces direct competition from Seagate in the mass-capacity nearline segment that AI data lakes are driving.',
    constraints: [
      'NAND oversupply — industry-wide flash inventory correction from 2022-2023 over-production is resolving slowly; WDC pricing leverage limited',
      'Seagate nearline HDD competition — Seagate\'s mass-capacity HAMR drive advantage (32TB+) creating pricing pressure in WDC\'s largest HDD segment',
      'Flash Ventures JV — capital allocation decisions for Yokkaichi and Kitakami capacity ramps require alignment with Kioxia partnership',
    ],
    nexus: [
      { to: 'amat', label: 'NAND cell deposition tools (Flash Ventures)' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'Q4 FY2026 guided in line; enterprise SSD demand accelerating from AI inference; NAND pricing recovery expected Q4 2026.',
      breakdown: [
        'Enterprise SSD revenue +42% YoY — AI inference workloads driving NVMe SSD demand at hyperscalers',
        'HDD revenue slightly below plan — nearline HAMR 32TB+ segment losing share to Seagate',
        'Cloud revenue (combined SSD+HDD) now >60% of total — favorable mix for ASP and margin',
        'Gross margin 31.2% — NAND pricing floor reached; sequential improvement in progress',
      ],
    },
    ir: {
      base: 'https://investor.wdc.com',
      reports: [{ label: 'Earnings Releases', href: 'https://investor.wdc.com/financial-information/annual-reports-and-proxy' }],
    },
  },

  {
    id: 'stx',
    name: 'Seagate Technology',
    ticker: 'STX',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~4%' },
    stackPosition: 'Mass-Capacity HDD — AI Training Data Storage',
    thematic:
      'Seagate is the unexpected beneficiary of the AI training data storage demand — the exabyte-scale datasets required for model pre-training and fine-tuning are economically impossible to store on NAND flash, making HAMR-based nearline HDDs (32TB+) the de facto medium for AI data lakes at hyperscalers. Seagate\'s HAMR (Heat-Assisted Magnetic Recording) technology lead over WDC gives it higher areal density at lower cost-per-TB, the only metric that matters for cold storage at scale. In 2026, nearline HDD demand from hyperscalers is the strongest it has been in the company\'s history, and Seagate\'s manufacturing throughput — not design or pricing — is the constraint on upside.',
    constraints: [
      'HAMR manufacturing throughput — heat-assisted magnetic recording drives require specialized laser-in-actuator assembly that limits ramp velocity',
      'Western Digital competition — WDC\'s ePMR drives are a credible cost alternative at 20-24TB density tiers, pressuring Seagate\'s mid-density segment',
      'Single end-market concentration — nearline HDD is now ~70% of revenue; any hyperscaler capex pause has an outsized impact',
    ],
    nexus: [
      { to: 'amzn', label: 'AWS exabyte storage partner' },
      { to: 'msft', label: 'Azure nearline HDD supply' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Nearline HDD demand for AI training data lakes sustaining elevated ASPs through end of 2026; capacity ramp constrained by HAMR assembly.',
      breakdown: [
        'Mass capacity (nearline) revenue +65% YoY — AI training dataset storage driving record exabyte shipments',
        'HAMR 32TB drive ramp ahead of internal plan; 40TB drives sampling to hyperscalers',
        'Nearline revenue mix at 73% of total — record; driving blended ASP expansion',
        'Gross margin 32.1% — operating leverage from fixed cost absorption as volumes ramp',
      ],
    },
    ir: {
      base: 'https://investors.seagate.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.seagate.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'sndk',
    name: 'Sandisk',
    ticker: 'SNDK',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~4%' },
    stackPosition: 'NAND Flash — Enterprise & Consumer SSD (Pure-Play)',
    thematic:
      'Sandisk was spun out of Western Digital in 2024 as the first pure-play NAND flash company of scale, inheriting the joint Flash Ventures manufacturing JV with Kioxia at Yokkaichi and Kitakami — the two largest NAND fab complexes on earth. As an independent company, Sandisk can pursue NAND supply discipline and enterprise SSD pricing strategy without the conflicting interests of a legacy HDD business pulling in the opposite direction. In 2026, Sandisk\'s enterprise NVMe SSD segment is the growth driver, as AI inference workloads at hyperscalers demand ultra-high-density flash for model weight caching and key-value store acceleration at the inference edge.',
    constraints: [
      'Post-spin capital structure — debt load from the separation limits R&D and capex relative to Samsung and Micron, who operate at 3-5x the scale',
      'Flash Ventures JV dependency — capacity decisions at Yokkaichi and Kitakami require coordinated Kioxia alignment, slowing independent response to market signals',
      'Enterprise SSD competition — Samsung and Micron are simultaneously ramping QLC enterprise SSDs with aggressive pricing; pure-play NAND focus means no HBM upside to offset margin pressure',
    ],
    nexus: [
      { to: 'wdc',  label: 'Flash Ventures JV legacy partner' },
      { to: 'amat', label: 'NAND cell deposition tools (Yokkaichi)' },
      { to: 'lrcx', label: 'NAND vertical stack etch' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'Q2 2026 NAND revenue guided in line; enterprise SSD ASPs recovering; QLC 64-layer and 112-layer yield maturity improving.',
      breakdown: [
        'Enterprise SSD revenue $1.4B — AI inference NVMe demand absorbing premium QLC capacity above plan',
        'Consumer NAND (retail flash, client SSD) recovering modestly as PC refresh cycle builds',
        'Flash Ventures output discipline maintained — industry supply growth below demand growth for first time since 2022',
        'Gross margin 29.1% — improving QoQ; path to 35%+ gross margin requires enterprise mix above 50% of revenue',
      ],
    },
    ir: {
      base: 'https://investor.sandisk.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.sandisk.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'nanya',
    name: 'Nanya Technology',
    ticker: '2408.TW',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~3%' },
    stackPosition: 'Commodity DRAM — DDR4 / LPDDR5',
    thematic:
      'Nanya Technology is the smallest of the major DRAM manufacturers, focused on commodity DDR4 and LPDDR5 for consumer electronics, networking, and entry-level server markets that are the most economically sensitive part of the memory cycle. With no HBM roadmap, Nanya has no direct exposure to the AI memory premium and instead competes on cost in the commodity DRAM segments that Samsung and Micron capacity adds have most aggressively repriced. In 2026, Nanya is a cycle-trough story where capex discipline and Taiwan-based manufacturing represent the durable value while the next upcycle begins to form.',
    constraints: [
      'No HBM product — Nanya lacks the TSV and advanced stacking capability to participate in the premium HBM market, capping upside',
      'Commodity DRAM pricing pressure — Samsung and Micron 1-beta capacity additions creating structural oversupply in DDR4/DDR5',
      'Scale disadvantage — Nanya\'s ~3% market share limits R&D leverage; technology roadmap lags the top-3 by 1-2 nodes',
    ],
    nexus: [
      { to: 'amat', label: 'deposition tools for DRAM cell' },
      { to: 'lrcx', label: 'etch tools for capacitor stack' },
    ],
    earnings: {
      status: 'Miss',
      guidance: 'Q2 2026 revenue guided below consensus; commodity DDR4/DDR5 pricing recovery pushed to Q4 2026; maintaining capex discipline.',
      breakdown: [
        'Revenue NT$7.2B — below plan; blended DRAM ASP declining QoQ on commodity oversupply',
        'Gross margin 8.3% — near breakeven; fixed cost absorption at low utilization rates',
        'Capex reduced 30% YoY — preserving cash until pricing cycle recovers',
        'No HBM revenue; AI DRAM tailwind entirely absent from P&L — peer valuation divergence stark',
      ],
    },
    ir: {
      base: 'https://www.nanya.com/en/Invest',
      reports: [{ label: 'Financial Reports', href: 'https://www.nanya.com/en/Invest/FinancialReport' }],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // EQUIPMENT & LITHO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'asml',
    name: 'ASML',
    ticker: 'ASML',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~6%' },
    stackPosition: 'Lithography — EUV & High-NA EUV Systems',
    thematic:
      'ASML is the most extreme monopoly in the semiconductor supply chain — it is the sole manufacturer of EUV lithography systems on earth, and the only company capable of producing the High-NA EUV tools (EXE:5000) required to pattern sub-2nm features. Every chip at the leading edge in 2026 — NVIDIA Blackwell, TSMC N3/N2, Samsung SF3 — requires ASML EUV systems, and the High-NA tools needed for the next generation beyond N2 are already on multi-year order queues. The geopolitical dimension of ASML\'s monopoly is acute: Dutch export license restrictions on DUV and EUV systems to China have created a permanent bifurcation of the global semiconductor market.',
    constraints: [
      'High-NA EUV production capacity — the EXE:5000 system requires precision optics made only by Zeiss; output is capped at ~20 systems/year through 2026',
      'Geopolitical export controls — Dutch government DUV/EUV restrictions on China compress TAM; any escalation could affect broader license scope',
      'EUV source power scaling — laser-produced plasma source power determines throughput; next-gen power upgrades are a multi-year R&D program',
    ],
    nexus: [
      { to: 'tsm',  label: 'primary EUV / High-NA customer' },
      { to: 'skhx', label: 'DRAM EUV patterning' },
      { to: 'ssnlf', label: 'foundry & memory EUV tools' },
    ],
    earnings: {
      status: 'Beat',
      guidance: '2026 EUV/High-NA system revenue tracking high end of €30-35B guidance; backlog at record €42B across all system types.',
      breakdown: [
        'Net system revenue €7.9B — High-NA EXE:5000 shipments to TSMC and Samsung on schedule',
        'Low-NA EUV demand from TSMC CoWoS-L tool additions — advanced packaging driving incremental EUV orders',
        'Services (installed base management) +22% YoY — recurring revenue expanding with global EUV fleet',
        'China DUV restrictions limiting upside; TSMC/Samsung incremental buys partially offsetting',
      ],
    },
    ir: {
      base: 'https://www.asml.com/en/investors',
      reports: [{ label: 'Quarterly Results', href: 'https://www.asml.com/en/investors/quarterly-results' }],
    },
  },

  {
    id: 'amat',
    name: 'Applied Materials',
    ticker: 'AMAT',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~5%' },
    stackPosition: 'Deposition, Etch & CMP — Gate-All-Around Tooling',
    thematic:
      'Applied Materials is the broadest-based semiconductor equipment company, with leadership positions in CVD deposition, PVD, CMP, and implant — the process steps that become more tool-intensive with each new transistor architecture. The transition to gate-all-around (GAA) transistors at 3nm and below dramatically increases the number of epitaxy, oxidation, and deposition steps per wafer, creating a secular tailwind for AMAT revenue intensity per leading-edge wafer. Advanced packaging (ICAPS) is a second growth vector, as TSMC CoWoS and SoIC build-out requires significant new AMAT deposition and etch capacity additions.',
    constraints: [
      'China export restrictions — US Commerce Department controls on advanced process equipment limit AMAT\'s ability to serve China\'s leading-edge fab customers',
      'Customer concentration — TSMC, Samsung, and SK Hynix represent the majority of WFE revenue; their CapEx cycles drive AMAT\'s order book directly',
      'Gate-all-around adoption ramp — GAA technology complexity creates tool qualification delays at customer fabs, pushing delivery timelines',
    ],
    nexus: [
      { to: 'tsm',  label: 'deposition & CMP for N3/N2/CoWoS' },
      { to: 'skhx', label: 'HBM DRAM process tools' },
      { to: 'intc', label: 'IFS 18A process equipment' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 semiconductor systems revenue +20% YoY; GAA tooling intensity increasing at TSMC N2 and Samsung SF2.',
      breakdown: [
        'Semiconductor systems revenue $7.8B — GAA-related epi and CVD outperforming; advanced packaging mix increasing',
        'Services (AGS) $1.5B — recurring revenue growing as global installed base expands',
        'Display segment immaterial; all focus on semiconductor and packaging',
        'Gross margin 47.3% — systems mix favorable; services drag offset by leading-edge premium pricing',
      ],
    },
    ir: {
      base: 'https://ir.appliedmaterials.com',
      reports: [{ label: 'Earnings Releases', href: 'https://ir.appliedmaterials.com/financial-information/quarterly-earnings' }],
    },
  },

  {
    id: 'lrcx',
    name: 'Lam Research',
    ticker: 'LRCX',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~4%' },
    stackPosition: 'Etch & Deposition — HBM TSV & NAND Vertical Stack',
    thematic:
      'Lam Research\'s leadership in atomic layer etch (ALE) and selective deposition makes it structurally indispensable to the two hottest areas of semiconductor manufacturing: HBM TSV etching (which requires ultra-high-aspect-ratio etch that only LRCX tools can deliver at volume) and NAND vertical stack formation (where LRCX holds dominant share in the furnace and single-wafer etch steps). As HBM transitions from 8-Hi to 12-Hi stacks and eventually 16-Hi, the number of TSV etch passes and the required aspect ratio both increase, creating a compounding revenue intensity tailwind for LRCX per HBM unit. The NAND recovery cycle adds a second engine as AI inference drives SSD demand and brings NAND fabs back to full utilization.',
    constraints: [
      'China export controls — restrictions on advanced etch tools for NAND and DRAM limit Lam\'s addressable market in the world\'s largest WFE geography',
      'NAND capex cycle dependency — NAND recovery pace directly gates Lam\'s etch and deposition orders from Samsung, Kioxia, and Micron',
      'HBM TSV tool availability — demand for high-aspect-ratio etch tools exceeds current production capacity; lead times extending',
    ],
    nexus: [
      { to: 'skhx',  label: 'HBM TSV high-aspect-ratio etch' },
      { to: 'mu',    label: 'HBM3E / NAND etch tools' },
      { to: 'tsm',   label: 'advanced packaging etch for CoWoS' },
      { to: 'nanya', label: 'commodity DRAM capacitor etch' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 revenue +22% YoY; HBM TSV etch revenue tracking 3x FY2024 as Hynix and Micron HBM4 ramps absorb tool capacity.',
      breakdown: [
        'Systems revenue $4.6B — HBM etch driving outsized growth vs NAND etch still recovering',
        'NAND deposition orders recovering QoQ — enterprise SSD and AI inference storage driving new capacity',
        'Customer support (CSBG) +18% YoY — expanding installed base of high-value HBM etch tools',
        'Gross margin 48.1% — tool mix improvement as HBM systems replace lower-ASP commodity etch',
      ],
    },
    ir: {
      base: 'https://ir.lamresearch.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://ir.lamresearch.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'klac',
    name: 'KLA Corporation',
    ticker: 'KLAC',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~4%' },
    stackPosition: 'Process Control — Inspection, Metrology & Yield Management',
    thematic:
      'KLA is the highest-margin, most defensible business in semiconductor equipment — process control (inspection and metrology) becomes more economically critical with each new node because yield loss at 3nm costs 10x more per wafer than at 28nm, making KLA\'s tools mandatory insurance against expensive defects. As leading-edge IC fabrication migrates to GAA, EUV multi-patterning, and High-NA EUV, the number of inspection steps per wafer increases faster than the number of deposition or etch steps — creating secular revenue intensity growth for KLAC without requiring TSMC or Samsung to build new fabs. Advanced packaging inspection is a third vector, as CoWoS and SoIC bonding defects require new die-to-die alignment and bump inspection tools that KLAC is ramping.',
    constraints: [
      'China export controls — KLA\'s process control tools face restrictions similar to AMAT and LRCX; China has historically been ~25% of WFE spend',
      'NAND capex dependency — KLA\'s etch and deposition inspection revenue tied to NAND fab utilization cycles',
      'R&D cost for High-NA metrology — next-generation inspection tools for sub-2nm features require EUV-compatible optics development',
    ],
    nexus: [
      { to: 'tsm',  label: 'N2/N3 yield management systems' },
      { to: 'skhx', label: 'HBM DRAM inspection & metrology' },
      { to: 'asml', label: 'patterning metrology complement' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'CY2026 revenue growth 18% YoY; process control intensity per wafer at leading-edge still rising as N2 and High-NA require more inspection.',
      breakdown: [
        'Semiconductor process control revenue $3.1B — N3/N2 wafer inspection outperforming; CoWoS packaging inspection growing',
        'Services (quarterly recurring) $830M — installed base expansion at TSMC, Hynix creating durable stream',
        'Advanced packaging inspection tool orders at record — CoWoS-L die-to-die bonding inspection a new growth category',
        'Gross margin 60.2% — process control premium pricing; services mix improving profitability further',
      ],
    },
    ir: {
      base: 'https://ir.kla.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.kla.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'toely',
    name: 'Tokyo Electron',
    ticker: 'TOELY',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'CVD, Thermal & Etch — TSMC & Samsung Process Tools',
    thematic:
      'Tokyo Electron is the dominant Japanese semiconductor equipment company, with global leadership in thermal CVD, plasma etch, single-wafer thermal processing, and coater/developer systems used in photolithography. TEL\'s process tools are critical at every leading-edge fab worldwide, and its single-wafer thermal oxidation systems have become indispensable for gate oxide formation in GAA transistor structures at TSMC N2 and Samsung SF2. The weak yen against USD-denominated equipment orders has provided a structural tailwind to TEL\'s top-line reporting in local currency, compressing the cost of yen-priced R&D against dollar-denominated revenue.',
    constraints: [
      'Japan export control alignment — Japan has coordinated with the US and Netherlands on advanced semiconductor equipment restrictions to China, limiting TEL\'s formerly large China revenue stream',
      'TSMC/Samsung customer concentration — TEL\'s fate is closely tied to 2-3 customers\' leading-edge investment cycles',
      'Yen volatility — USD/JPY swings create revenue translation noise and complicate multi-year equipment contract pricing',
    ],
    nexus: [
      { to: 'tsm',  label: 'N2 single-wafer thermal CVD / etch' },
      { to: 'skhx', label: 'DRAM capacitor thermal oxidation tools' },
      { to: 'asml', label: 'coater/developer for EUV lithography tracks' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 net sales guided JPY 2.8T (+25% YoY); TSMC N2 ramp and Hynix HBM4 capacity driving tool order backlog to record.',
      breakdown: [
        'Net sales JPY 680B — single-wafer thermal and plasma etch leading growth; TSMC CoWoS packaging tools upside',
        'Orders JPY 720B — backlog at record; book-to-bill >1.1x for third consecutive quarter',
        'Gross margin 45.8% — yen weakness providing ~3pt tailwind on JPY cost vs USD revenue',
        'China restrictions reducing revenue ~15% vs prior year; TSMC/Samsung incremental orders more than offsetting',
      ],
    },
    ir: {
      base: 'https://www.tel.com/ir',
      reports: [{ label: 'Earnings Results', href: 'https://www.tel.com/ir/financials/earnings.html' }],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // AI SERVICES & INFRASTRUCTURE (AIS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'vrt',
    name: 'Vertiv',
    ticker: 'VRT',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~5.1%' },
    stackPosition: 'Thermal Management — Liquid Cooling & Power Distribution',
    thematic:
      'Vertiv is the "Radiator" of the AI buildout: as GPU rack densities breach 100 kW with NVIDIA Blackwell and approach 200 kW with Rubin, air cooling becomes physically impossible and Vertiv\'s direct liquid cooling (DLC) systems become the literal life-support of the data center. NVIDIA co-designed its GB200 NVL72 rack with Vertiv\'s cooling architecture, creating a design-lock that makes Vertiv the default thermal vendor for hyperscaler AI clusters. In 2026, the binding constraint is not Vertiv\'s order book — it is coolant distribution unit (CDU) manufacturing throughput and heat exchanger lead times from a concentrated European supply chain.',
    constraints: [
      'CDU supply chain — heat exchangers sourced from European vendors with 30-40 week lead times; manufacturing is the upside ceiling',
      'Greenfield factory ramp — Vertiv\'s Columbus, OH facility expansion requires 18-24 months to reach volume production',
      'Rack-level integration complexity — each hyperscaler uses unique mechanical designs requiring customized CDU configurations',
    ],
    nexus: [
      { to: 'nvda', label: 'Blackwell rack cooling co-design' },
      { to: 'gev',  label: 'power input from on-site turbine generation' },
    ],
    earnings: {
      status: 'Beat',
      guidance: '2026 backlog exceeds $10B; liquid cooling (DLC) segment growing >80% YoY; manufacturing throughput is the binding constraint on upside.',
      breakdown: [
        'Orders $4.2B in quarter — DLC CDU bookings at record; NVL72 rack deployments driving attach rate',
        'Revenue $2.4B — above guidance; managed CDU deliveries above plan despite supply chain constraints',
        'Gross margin 38.1% — product mix improving as DLC systems carry premium vs air cooling',
        'Factory utilization Columbus and Ohio at 100%; new capacity online Q4 2026',
      ],
    },
    ir: {
      base: 'https://investors.vertiv.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.vertiv.com/financials/quarterly-results/default.aspx' }],
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
      'GE Vernova owns the "First Mile" of AI power: hyperscalers contracting for 500 MW to 1 GW of dedicated data center capacity are ordering GE gas turbines for on-site generation plants because grid interconnection queues now stretch 5-7 years. The HL-class turbine is the preferred prime mover for hyperscaler behind-the-meter power plants, with order backlog extending into 2028. In 2026, GEV\'s constraint is manufacturing throughput at its Greenville, SC turbine assembly facility — not demand — creating a multi-year revenue visibility that is exceptional for an industrial company.',
    constraints: [
      'HL-class turbine manufacturing backlog — 18-month assembly cycle; Greenville running at capacity through 2027',
      'Grid interconnect queue — 5-7 year wait for utility interconnection pushes hyperscalers to behind-the-meter; creates demand but strains GEV\'s delivery model',
      'Hot-section forgings supply — turbine alloy forgings sourced from a handful of global specialty steel suppliers with constrained capacity',
    ],
    nexus: [
      { to: 'wmb',  label: 'Transco natural gas fuel supply' },
      { to: 'trgp', label: 'upstream Permian gas gathering' },
      { to: 'vrt',  label: 'co-located cooling for on-site data centers' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Power generation backlog at record $30B+; FY2026 free cash flow conversion tracking 90%+; Greenville capacity expansion funded.',
      breakdown: [
        'Power segment revenue $6.1B — HL-class turbine orders from Microsoft, Google, Meta on-site power plants',
        'Wind segment cash flow improving — offshore restructuring charges behind us; onshore steady',
        'Electrification (Grid) revenue +28% YoY — switchgear demand from interconnection investment',
        'Gross margin 17.3% — Power segment margin expanding as turbine mix improves; Wind drag narrowing',
      ],
    },
    ir: {
      base: 'https://www.gevernova.com/investors',
      reports: [{ label: 'Financial Results', href: 'https://www.gevernova.com/investors/financial-results' }],
    },
  },

  {
    id: 'msft',
    name: 'Microsoft',
    ticker: 'MSFT',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — Azure AI Cloud & Enterprise Copilot',
    thematic:
      'Microsoft has transformed from an enterprise software incumbent into the dominant AI distribution layer — Azure OpenAI Service is the on-ramp for enterprise AI workloads, and Copilot is embedding AI monetization directly into the Microsoft 365 suite that 400M+ enterprise users depend on daily. The partnership with OpenAI gives MSFT exclusive cloud rights to the most commercially important foundation models, creating a durable competitive moat that Google and Amazon can only challenge with their own in-house model investments. In 2026, Azure\'s AI revenue trajectory — growing >40% YoY — is inflecting the cloud segment margin structure as GPU utilization rates and inference efficiency improve with scale.',
    constraints: [
      'GPU supply allocation — Azure\'s AI capacity is gated by NVIDIA GB200/Blackwell Ultra availability; any supply disruption at TSMC flows through to Azure AI capacity',
      'OpenAI dependency — MSFT\'s AI moat is partially dependent on OpenAI\'s continued model leadership; GPT-5 competitive positioning is critical',
      'Copilot monetization proof — enterprise AI seat conversion rates must demonstrate productivity ROI to sustain $30/seat premium pricing at scale',
    ],
    nexus: [
      { to: 'nvda', label: 'Azure GPU fleet (Blackwell clusters)' },
      { to: 'mrvl', label: 'Maia 2 custom AI ASIC networking' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Azure AI growth expected 42% YoY in FY2026 Q4; Copilot enterprise seat additions accelerating; AI capacity constrained demand still visible.',
      breakdown: [
        'Azure revenue +35% YoY — AI services now >25% of Azure revenue and growing fastest',
        'Copilot M365 paid seat additions 15M QoQ — enterprise ROI proof points driving conversion',
        'GitHub Copilot 5M+ enterprise seats; developer AI tooling a high-margin recurring stream',
        'Operating margin 45.3% — Cloud mix lifting overall company margin above prior-year levels',
      ],
    },
    ir: {
      base: 'https://www.microsoft.com/en-us/investor',
      reports: [{ label: 'Earnings Releases', href: 'https://www.microsoft.com/en-us/investor/earnings/default.aspx' }],
    },
  },

  {
    id: 'googl',
    name: 'Alphabet',
    ticker: 'GOOGL',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — GCP + TPU Custom Silicon + Search AI',
    thematic:
      'Alphabet\'s AI story is the most vertically integrated in the hyperscaler peer group: Google designs its own TPU AI accelerators (fabricated at TSMC on 3nm), operates Google Cloud as a third-party AI platform, and is embedding AI into Search, YouTube, and Workspace simultaneously. The TPU v5p competitive advantage in cost-per-FLOP for Google\'s own training workloads means Alphabet is the hyperscaler least exposed to NVIDIA supply constraints — it can self-provision AI compute. In 2026, the critical question is whether Google Cloud\'s AI platform can capture enterprise market share from Azure at a pace that justifies the $75B+ annual capex program funding the buildout.',
    constraints: [
      'Search monetization risk — AI Overviews (AI-generated search summaries) may reduce click-through to paid search results; advertiser ROI must be preserved',
      'GCP market share gap — AWS and Azure hold combined 55%+ cloud market share; Google Cloud\'s AI differentiation must overcome incumbent advantages',
      'Antitrust exposure — DOJ search distribution remedy (Chrome/Android) creates regulatory uncertainty around core Search revenue stream',
    ],
    nexus: [
      { to: 'tsm',  label: 'TPU v5/v6 foundry on 3nm' },
      { to: 'mrvl', label: 'TPU networking ASIC partner' },
      { to: 'stx',  label: 'nearline HDD for AI training datasets' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Google Cloud revenue +35% YoY guided for FY2026; TPU v6 internal deployment providing compute cost advantage vs peers.',
      breakdown: [
        'Google Cloud revenue $12.3B — AI workloads and Vertex AI platform driving enterprise adoption',
        'Search revenue +14% YoY — AI Overviews stabilizing click economics; monetization intact',
        'YouTube ad revenue +18% YoY — AI-driven content recommendation improving engagement metrics',
        'Operating margin 31.5% — Cloud scale leverage and TPU efficiency offsetting capex depreciation ramp',
      ],
    },
    ir: {
      base: 'https://abc.xyz/investor',
      reports: [{ label: 'Earnings Releases', href: 'https://abc.xyz/investor/other/earnings-materials/' }],
    },
  },

  {
    id: 'amzn',
    name: 'Amazon',
    ticker: 'AMZN',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — AWS AI Cloud + Trainium / Inferentia Custom Silicon',
    thematic:
      'Amazon is the largest cloud infrastructure provider on earth, and AWS is investing aggressively to maintain that lead in the AI era through a combination of NVIDIA GPU procurement (the largest external buyer), proprietary AI silicon (Trainium2 for training, Inferentia3 for inference), and the Amazon Bedrock managed AI API that gives enterprise developers access to leading foundation models. The Trainium/Inferentia program — designed with Marvell networking ASICs — is the most credible hyperscaler in-house AI silicon alternative to NVIDIA in production at scale. In 2026, AWS AI revenue is growing faster than overall AWS, and the margin structure is improving as internal Trainium utilization reduces the marginal cost of training compute.',
    constraints: [
      'NVIDIA GPU allocation — AWS is dependent on Blackwell GPU supply for external GPU cloud offerings; any TSMC/Hynix constraint flows directly to AWS capacity',
      'Trainium2 scale-up risk — custom silicon qualification and software ecosystem for Trainium requires developer migration from CUDA, which is non-trivial',
      'Bedrock competitive pressure — Microsoft Azure OpenAI and Google Vertex AI are competing on model variety, pricing, and enterprise integration',
    ],
    nexus: [
      { to: 'nvda', label: 'AWS GPU fleet (Blackwell instances)' },
      { to: 'mrvl', label: 'Trainium2 networking ASIC' },
      { to: 'stx',  label: 'S3 exabyte storage infrastructure' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'AWS revenue growing 25%+ annually into FY2026; AI inference workloads driving GPU/Trainium utilization to record levels.',
      breakdown: [
        'AWS revenue $30.5B — AI services acceleration within cloud; operating margin 38.7%',
        'Amazon Bedrock enterprise adoption accelerating — 50K+ active enterprise customers',
        'Trainium2 cluster internal utilization reducing external NVIDIA GPU compute cost by ~20%',
        'Retail AI automation delivering fulfillment efficiency gains; operating income leverage evident',
      ],
    },
    ir: {
      base: 'https://ir.aboutamazon.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.aboutamazon.com/quarterly-results' }],
    },
  },

  {
    id: 'meta',
    name: 'Meta Platforms',
    ticker: 'META',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~7%' },
    stackPosition: 'Social AI — MTIA Custom Silicon + Llama Open Source',
    thematic:
      'Meta is the hyperscaler that bet entirely on open-source AI — Llama 4 is the most capable openly available large language model and serves as the foundation for Meta\'s AI assistant across Instagram, WhatsApp, and Facebook, while simultaneously establishing Meta as the canonical AI infrastructure partner for enterprises that want to avoid vendor lock-in. The MTIA (Meta Training and Inference Accelerator) custom chip program, designed with TSMC and Broadcom, is driving meaningful cost reduction in Meta\'s own AI inference stack, reducing its marginal cost per interaction as engagement compounds. In 2026, Meta\'s $65B capex program is the most aggressive in its history, and the return on that investment is already visible in engagement metrics and ad pricing power driven by AI recommendation systems.',
    constraints: [
      'Regulatory risk — EU AI Act and US AI regulation could constrain Llama open-source distribution or impose compliance costs on AI-powered advertising',
      'Reality Labs cash drain — the metaverse AR/VR division continues to generate $5B+ annual operating losses, creating shareholder scrutiny on capital allocation',
      'Ad market saturation — AI-driven ad targeting improvements face diminishing returns as privacy regulations (ATT, GDPR) limit signal availability',
    ],
    nexus: [
      { to: 'nvda', label: 'GPU fleet for Llama training' },
      { to: 'tsm',  label: 'MTIA custom ASIC foundry' },
      { to: 'avgo', label: 'MTIA ASIC design partnership' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 capex guidance raised to $68B; Llama 4 driving enterprise AI platform adoption; MTIA 2 deployment reducing inference costs 40%.',
      breakdown: [
        'Revenue $44.1B — advertising revenue +18% YoY driven by AI recommendation improvements',
        'Family of Apps (Facebook, Instagram, WhatsApp) DAU all-time highs; engagement per user rising',
        'Reality Labs operating loss ($4.1B) — AR hardware investment continuing; Quest 4 tracking for holiday launch',
        'Operating margin 41.5% — Llama efficiency and MTIA deployment driving AI cost structure improvement',
      ],
    },
    ir: {
      base: 'https://investor.fb.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.fb.com/investor-news/press-release-details/2025/default.aspx' }],
    },
  },

  {
    id: 'pltr',
    name: 'Palantir',
    ticker: 'PLTR',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~2%' },
    stackPosition: 'AI Platform — Government & Enterprise Decision Intelligence',
    thematic:
      'Palantir is the AI platform company with the most defensible government moat — its Gotham and Foundry platforms are embedded in US defense, intelligence, and civilian agency infrastructure, and the AIP (AI Platform) product is now the fastest-growing enterprise AI deployment platform in the market. The US military\'s adoption of Palantir\'s Maven Smart System for AI-enabled targeting and intelligence analysis creates a durable, classified revenue stream that no commercial competitor can access. In 2026, Palantir\'s AIP bootcamp-to-enterprise-contract conversion model is generating unprecedented sales velocity, and the Rule of 40 score is inflecting as the company\'s revenue growth accelerates while operating margins expand simultaneously.',
    constraints: [
      'Single-digit penetration of enterprise TAM — AIP adoption is accelerating but enterprise sales cycles remain 6-12 months; conversion rate from bootcamp to contract must scale',
      'Government budget dependency — US federal government budget cycles and continuing resolutions create lumpiness in contract timing and revenue recognition',
      'Valuation multiple fragility — PLTR trades at premium AI-software multiples; any miss vs. AIP growth expectations creates sharp multiple compression',
    ],
    nexus: [
      { to: 'msft', label: 'Azure cloud deployment platform' },
      { to: 'amzn', label: 'AWS GovCloud government workloads' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 US revenue +40% YoY reaffirmed; AIP enterprise deals now 180+ active; Rule of 40 score at 68 — highest in company history.',
      breakdown: [
        'US commercial revenue $370M — AIP bootcamp funnel converting at record rate; healthcare and manufacturing verticals leading',
        'US government revenue $320M — Maven Smart System expansion; DoD classified contracts growing',
        'International commercial slower than US — European data sovereignty regulations creating headwind',
        'Operating margin 22.4% — stock comp declining as % of revenue; true cash profitability increasingly evident',
      ],
    },
    ir: {
      base: 'https://investors.palantir.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investors.palantir.com/news-details/2025/default.aspx' }],
    },
  },

  {
    id: 'orcl',
    name: 'Oracle',
    ticker: 'ORCL',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~3%' },
    stackPosition: 'Cloud Infrastructure (OCI) + AI Database',
    thematic:
      'Oracle has executed one of the most remarkable cloud pivots in enterprise software history — OCI (Oracle Cloud Infrastructure) GPU clusters are fully booked through 2027, and Autonomous Database on OCI is pulling enterprise workloads that have been on-premise Oracle for decades into the cloud. The database moat is the key: Oracle Database is mission-critical for thousands of enterprises that cannot migrate away without years of risk and cost, and OCI\'s multi-cloud interconnect agreements with Microsoft, Google, and Amazon give Oracle a unique hybrid positioning that competes with rather than simply loses to hyperscalers. In 2026, OCI\'s GPU cluster revenue is the most visible proof that enterprise AI infrastructure is a three-cloud market, not a two-horse race.',
    constraints: [
      'OCI GPU capacity — Oracle\'s GPU cluster buildout is supply-constrained by NVIDIA allocation; demand materially exceeds available capacity',
      'Database migration attrition — PostgreSQL and Snowflake are genuine competitive threats for net-new analytics workloads, though legacy Oracle ERP is sticky',
      'Autonomous Database proof — AI-driven self-tuning and self-patching features must demonstrate TCO advantage vs AWS RDS to win migration deals',
    ],
    nexus: [
      { to: 'nvda', label: 'OCI GPU cluster fleet (Blackwell)' },
      { to: 'amzn', label: 'OCI-AWS multi-cloud interconnect' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 cloud infrastructure (OCI) revenue tracking $25B+; GPU cluster capacity sold out; Autonomous Database cloud ARR growing 30%+.',
      breakdown: [
        'OCI revenue $6.9B — GPU cluster bookings fully subscribed through 2027; pricing power evident',
        'Autonomous Database cloud migration accelerating — 1,800+ new ADB customers in quarter',
        'Strategic cloud partnerships (MSFT, GOOGL, AMZN interconnect) driving incremental workload migrations',
        'Operating margin 43.1% — cloud mix shift lifting margins above legacy on-premise software margins',
      ],
    },
    ir: {
      base: 'https://investor.oracle.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.oracle.com/investor-news/press-releases' }],
    },
  },

  {
    id: 'snow',
    name: 'Snowflake',
    ticker: 'SNOW',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~1.5%' },
    stackPosition: 'AI Data Cloud — Data Lakehouse & Cortex AI',
    thematic:
      'Snowflake is the neutral data layer of the AI enterprise stack — enterprises store their proprietary training data and inference context in Snowflake, then call foundation models from OpenAI, Anthropic, or Mistral through Snowflake Cortex AI without the data leaving the governance perimeter. This data gravity positioning makes Snowflake a platform play rather than a commodity database, as the value compounds with the volume of enterprise data and the number of AI models consuming it. In 2026, the strategic risk is Databricks and Microsoft Fabric competing aggressively on the lakehouse architecture, while the opportunity is that every enterprise AI initiative Snowflake enables generates incremental data compute consumption revenue.',
    constraints: [
      'Consumption model volatility — revenue depends on customer query activity, not seats; macro slowdown or query optimization reduces revenue without customer churn',
      'Databricks competition — Databricks\' open-source Delta Lake and Unity Catalog are genuine architectural alternatives that reduce Snowflake switching cost advantage',
      'Microsoft Fabric integration — MSFT\'s native data layer embedded in Azure and M365 creates a bundled competitor that Snowflake must out-feature to retain enterprise data',
    ],
    nexus: [
      { to: 'msft', label: 'Azure-native data integration (Fabric)' },
      { to: 'amzn', label: 'AWS S3 data lake foundation' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'FY2026 product revenue +25% YoY; Cortex AI query consumption growing but below bull-case; Databricks competition intensifying in lakehouse segment.',
      breakdown: [
        'Product revenue $1.04B — Cortex AI managed LLM API consumption growing; enterprise adoption of Snowpark ML accelerating',
        'Net Revenue Retention 126% — solid but compressed vs prior year peak; query optimization reducing some consumption',
        'Databricks partnership and competition simultaneously — joint customers running both platforms is common',
        'Operating margin -4.3% — improving YoY; path to profitability credible but timeline extended vs prior guidance',
      ],
    },
    ir: {
      base: 'https://investors.snowflake.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.snowflake.com/news-releases' }],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENERGY INFRASTRUCTURE (ENFR)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'enb',
    name: 'Enbridge',
    ticker: 'ENB',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~10%' },
    stackPosition: 'Midstream — North American Oil & Gas Transmission',
    thematic:
      'Enbridge operates the largest energy transmission network in North America — its liquids pipelines move ~30% of North American crude oil and its gas transmission system moves 20% of North American gas consumption, providing unparalleled scale in a capital-intensive, regulated return infrastructure business. The East Ohio Gas acquisition added 1.2M utility customers, making Enbridge North America\'s largest gas utility and increasing the percentage of revenue protected under cost-of-service regulatory frameworks. In 2026, Enbridge\'s AI data center power theme is real but diffuse — Enbridge gas flows ultimately fuel every North American data center, but the direct AI-demand signal is not yet separable from broader power sector growth.',
    constraints: [
      'FERC and CER regulatory exposure — multi-decade pipeline assets require frequent rate case renewals that compress return on invested capital',
      'Canadian oil sands throughput — Mainline crude pipeline volumes tied to upstream producer economics that are sensitive to WTI price',
      'Pipeline capital intensity — growth capex for regulated return assets requires regulatory approval with 3-5 year lead times from approval to revenue',
    ],
    nexus: [
      { to: 'gev', label: 'gas supply for hyperscaler turbine plants' },
      { to: 'wmb', label: 'US gas transmission network interconnect' },
    ],
    earnings: {
      status: 'Meet',
      guidance: '2026 DCF per share growth +3% YoY; regulated return profile provides visibility; East Ohio Gas integration on track.',
      breakdown: [
        'Liquids Pipelines EBITDA CA$3.6B — Mainline utilization stable; tolling structure providing downside protection',
        'Gas Transmission EBITDA CA$2.1B — East Ohio Gas integration adding ~CA$500M annualized; synergies above plan',
        'Gas Distribution revenue in line — regulated utility rate base growth steady; AI power demand not yet material',
        'DCF per share CA$3.16 — dividend coverage 1.7x; distribution well-supported; currency (USD/CAD) minor headwind',
      ],
    },
    ir: {
      base: 'https://www.enbridge.com/investment-center',
      reports: [{ label: 'Quarterly Results', href: 'https://www.enbridge.com/investment-center/financial-information/quarterly-reports' }],
    },
  },

  {
    id: 'et',
    name: 'Energy Transfer',
    ticker: 'ET',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~5%' },
    stackPosition: 'Midstream — Permian NGL, Crude & Natural Gas',
    thematic:
      'Energy Transfer is the largest midstream MLP in the US by asset footprint, with crude oil, natural gas, and NGL gathering, processing, and transportation assets spanning the Permian Basin, Mid-Continent, and Gulf Coast — the three regions that will supply the fuel for the US AI power buildout. ET\'s Lake Charles LNG terminal, if ultimately developed, would represent a strategic export outlet for Permian gas that is growing faster than domestic demand can absorb. In 2026, ET\'s leverage to AI power demand is real but indirect — every incremental Bcf/d of gas demand from data center turbines flows through ET infrastructure before it reaches the generator, but regulatory complexity and balance sheet constraints limit direct AI-narrative premium.',
    constraints: [
      'Balance sheet leverage — ET carries ~4.5x debt/EBITDA, limiting financial flexibility and creating vulnerability to interest rate and commodity cycles',
      'LNG project uncertainty — Lake Charles LNG has been in development for a decade; continued delays dilute management credibility on growth capital allocation',
      'Permian gas takeaway competition — multiple competing pipeline expansions reduce ET\'s pricing power on new gathering and transportation contracts',
    ],
    nexus: [
      { to: 'gev',  label: 'feedgas supply for gas turbine power plants' },
      { to: 'trgp', label: 'Permian Basin gathering complement' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'FY2026 Adjusted EBITDA at guidance midpoint; distribution coverage 2.0x; LNG export project final investment decision timing uncertain.',
      breakdown: [
        'Permian Basin gathered volumes up 18% YoY — producer activity resilient at $65-70/bbl WTI',
        'NGL transportation and services strong — Mont Belvieu fractionation fully subscribed',
        'Natural gas pipeline volumes +8% YoY — AI data center feedgas demand beginning to show in Mid-Atlantic segment',
        'Distribution coverage 1.98x — well above 1.0x minimum; unit buyback program initiated',
      ],
    },
    ir: {
      base: 'https://ir.energytransfer.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.energytransfer.com/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'epd',
    name: 'Enterprise Products Partners',
    ticker: 'EPD',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~8%' },
    stackPosition: 'Midstream — NGL Fractionation & Gulf Coast Export',
    thematic:
      'Enterprise Products Partners is the highest-quality midstream partnership in the US — its A-rated balance sheet, 26-year distribution growth streak, and dominant Mont Belvieu NGL fractionation position make it the "Treasury Bond with Upside" of the ENFR basket. EPD\'s integrated NGL value chain from Permian gathering to Gulf Coast fractionation to export terminal provides unparalleled logistics optionality and pricing power at every step of the NGL supply chain. In 2026, EPD\'s Mont Belvieu fractionation trains are fully subscribed through 2028, and the company is investing in new capacity that will commission into a structurally tighter NGL market driven by LNG feedstock demand and AI power-sector gas consumption.',
    constraints: [
      'NGL pricing sensitivity — propane and butane export pricing tied to global LPG markets; strong USD can compress export margins',
      'Partnership tax structure — MLP K-1 structure limits institutional ownership, creating a structural valuation discount vs C-corp peers',
      'Growth capex pacing — EPD\'s discipline in only sanctioning projects with >$5B EBITDA/year contributes to steady but incremental growth',
    ],
    nexus: [
      { to: 'trgp', label: 'upstream Permian NGL gathering' },
      { to: 'wmb',  label: 'gas transmission network interconnect' },
    ],
    earnings: {
      status: 'Beat',
      guidance: '2026 DCF exceeding $8B; Mont Belvieu fractionation capacity fully contracted; new Train 13 fractionator commissioned ahead of schedule.',
      breakdown: [
        'NGL Pipelines & Services EBITDA $2.2B — Mont Belvieu fractionation at 100% utilization; pricing at premium to spot market via long-term contracts',
        'Natural Gas Pipelines $780M — steady; AI-driven gas demand beginning to lift Texas Intrastate volumes',
        'Crude Oil Pipelines $460M — Permian crude export volumes stable; Seaway pipeline full',
        'DCF per unit $2.09 — distribution well-covered; unit buyback program funding $750M in repurchases',
      ],
    },
    ir: {
      base: 'https://www.enterpriseproducts.com/investor-relations',
      reports: [{ label: 'Quarterly Results', href: 'https://www.enterpriseproducts.com/investor-relations/financial-reports' }],
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
      'FERC permitting — Transco expansion projects face 3-5 year federal permitting timelines; regulatory risk is the primary execution constraint',
      'Environmental litigation — pipeline expansions in Mid-Atlantic corridors face organized legal opposition that can delay capacity adds',
      'Right-of-way acquisition — securing land access in densely developed Mid-Atlantic states is increasingly expensive',
    ],
    nexus: [
      { to: 'gev',  label: 'gas delivery for hyperscaler turbine plants' },
      { to: 'trgp', label: 'upstream NGL gathering and processing' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'Transco expansion projects on time; 2026 adjusted EBITDA guidance raised 5%; Southeast Supply Enhancement on schedule.',
      breakdown: [
        'Transmission & Gulf of Mexico EBITDA $1.1B — AI data center corridor gas demand +15% YoY on Mid-Atlantic Transco segment',
        'Gathering & Processing $580M — DJ Basin and Haynesville volumes growing; NGL recovery margins expanding',
        'Northeast G&P steady; Marcellus producer activity stable at current gas prices',
        'Rate case settlement with FERC — long-term tariff certainty removes key regulatory overhang',
      ],
    },
    ir: {
      base: 'https://investor.williams.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.williams.com/financial-information/quarterly-results/default.aspx' }],
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
      'Targa Resources sits at the upstream end of the natural gas value chain: its gathering and processing systems in the Permian Basin capture the raw gas and NGLs that eventually flow downstream to power the turbines running AI data centers. As AI-driven power demand structurally lifts US gas consumption, Targa\'s throughput volumes grow with the underlying commodity — providing volume-leveraged upside via fee-based contracts without direct commodity price exposure. Targa\'s Delaware Basin expansion program and Grand Prix NGL pipeline position it as the critical upstream link connecting Permian production growth to the national gas grid that feeds GE Vernova turbines and Williams Transco.',
    constraints: [
      'Permian gas flaring regulations — Texas RRC flaring permit tightening accelerates volume growth but adds regulatory risk',
      'NGL fractionation capacity at Mont Belvieu — downstream fractionation bottlenecks can back up gathering throughput when EPD/Enterprise capacity is full',
      'Ethane rejection economics — when ethane prices fall below rejection thresholds, producers reject ethane into the gas stream, reducing NGL volume and processing margin',
    ],
    nexus: [
      { to: 'wmb', label: 'downstream gas transmission via Transco' },
      { to: 'gev', label: 'upstream gas supply for turbine fuel' },
      { to: 'epd', label: 'Mont Belvieu NGL fractionation' },
    ],
    earnings: {
      status: 'Beat',
      guidance: 'FY2026 adjusted EBITDA guidance raised on Permian volume upside; GCX Phase 2 fully subscribed; Delaware Basin expansion on schedule.',
      breakdown: [
        'Gathering & Processing volumes +25% YoY — Delaware Basin acreage dedications flowing above initial projections',
        'Grand Prix NGL pipeline throughput record — Mont Belvieu fractionation access fully contracted',
        'Logistics & Transportation segment benefiting from incremental LNG export feedgas volumes',
        'Adjusted EBITDA $1.08B — above raised guidance; capital returns program funded via dividend + buyback',
      ],
    },
    ir: {
      base: 'https://www.targaresources.com/investors',
      reports: [{ label: 'Quarterly Earnings', href: 'https://www.targaresources.com/investors/financial-information/quarterly-results' }],
    },
  },

  {
    id: 'oke',
    name: 'ONEOK',
    ticker: 'OKE',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~6%' },
    stackPosition: 'Midstream — Rocky Mountain NGL + Magellan Liquids Integration',
    thematic:
      'ONEOK\'s acquisition of Magellan Midstream transformed it from a Rocky Mountain NGL specialist into a diversified midstream C-corp with the largest refined products pipeline network in the US — a strategic combination that creates significant cross-selling and optimization opportunities across the combined asset base. The Williston Basin (Bakken) NGL gathering system is one of the highest-growth gathering regions in the US, as producer efficiency gains in North Dakota continue to grow associated gas volumes even without rig count additions. In 2026, the Magellan integration synergies are tracking above plan, and incremental LNG export feedgas volumes from the Gulf Coast are creating a new growth vector for ONEOK\'s gas pipeline assets.',
    constraints: [
      'Integration execution risk — the Magellan integration is the largest in ONEOK\'s history; systems, contracts, and personnel consolidation must be completed without service disruptions',
      'Williston Basin producer activity — Bakken NGL volumes are tied to North Dakota producer capex cycles, which are price-sensitive at WTI < $55/bbl',
      'Refined products demand softness — Magelland\'s refined products pipeline revenues tied to gasoline and diesel demand that is under secular pressure from EV adoption',
    ],
    nexus: [
      { to: 'wmb', label: 'gas transmission network interconnect' },
      { to: 'epd', label: 'NGL fractionation and export markets' },
    ],
    earnings: {
      status: 'Beat',
      guidance: '2026 net income guidance midpoint raised 8%; Magellan synergies $200M annualized — tracking above $150M plan; LNG feedgas volumes growing.',
      breakdown: [
        'Natural Gas Gathering & Processing $680M EBITDA — Williston Basin volumes at record; ethane recovery economics favorable',
        'Natural Gas Pipelines $440M EBITDA — incremental Gulf Coast LNG feedgas volumes adding revenue above plan',
        'Refined Products (Magellan) $580M EBITDA — in-line; refined product demand soft but pipeline structural advantages preserved',
        'Integration synergies $51M in quarter — full-year $200M run-rate on track; systems consolidation complete by Q3',
      ],
    },
    ir: {
      base: 'https://investors.oneok.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.oneok.com/financial-information/quarterly-earnings' }],
    },
  },

  {
    id: 'kmi',
    name: 'Kinder Morgan',
    ticker: 'KMI',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~5%' },
    stackPosition: 'Midstream — Natural Gas Pipelines & CO2 Transport',
    thematic:
      'Kinder Morgan operates the largest natural gas pipeline network in the US by miles, with ~83,000 miles of pipeline serving every major production basin and demand center — the AI power demand tailwind is therefore broad and diffuse across its system rather than concentrated in a single project or region. The company\'s focus on capital return (dividend + buyback) over growth investment reflects a management philosophy that prioritizes financial returns to investors over building the largest possible infrastructure empire. In 2026, Kinder Morgan\'s AI demand exposure is real but incremental — volumes on existing pipes are rising modestly as data center gas demand adds to a stable industrial and residential base.',
    constraints: [
      'Network expansion competition — KMI\'s existing pipeline network is its moat, but new greenfield projects from Williams, ET, and OKE create cost-of-service competition on contested routes',
      'CO2 business relevance — KMI\'s CO2 enhanced oil recovery (EOR) segment faces secular headwinds as EOR demand declines with aging oil fields',
      'Financing rate sensitivity — KMI\'s balance sheet carries ~$30B of long-term debt; refinancing risk is meaningful if rates remain elevated',
    ],
    nexus: [
      { to: 'wmb', label: 'gas transmission network adjacent to Transco' },
      { to: 'gev', label: 'natural gas transport for power generation' },
    ],
    earnings: {
      status: 'Meet',
      guidance: 'FY2026 DCF per share tracking slightly above guidance midpoint; AI data center gas demand visible in Texas Intrastate volumes but not yet inflecting overall growth.',
      breakdown: [
        'Natural Gas Pipelines $1.08B EBITDA — volumes +4% YoY; AI data center feedgas demand beginning to show in EPNG and Texas Intrastate',
        'Products Pipelines $280M EBITDA — refined product demand softer than prior year; diesel volumes below plan',
        'CO2 segment $200M EBITDA — stable; EOR oil volumes declining modestly as fields mature',
        'DCF per share $0.57 — dividend covered 2.0x; buyback pace $250M in quarter',
      ],
    },
    ir: {
      base: 'https://ir.kindermorgan.com',
      reports: [{ label: 'Earnings Releases', href: 'https://ir.kindermorgan.com/financial-information/quarterly-earnings' }],
    },
  },
];

export const getCompany = (id) => COMPANIES.find((c) => c.id === id);

// ─── Next Earnings Dates ─────────────────────────────────────────────────────
// Approximate Q2/Q3 2026 report dates based on historical filing cadence.
export const NEXT_EARNINGS = {
  // Logic
  nvda:  '2026-05-28', // NVIDIA FY2027 Q1
  tsm:   '2026-07-17', // TSMC Q2 2026
  avgo:  '2026-06-05', // Broadcom FY2026 Q2
  intc:  '2026-07-24', // Intel Q2 2026
  amd:   '2026-07-29', // AMD Q2 2026
  txn:   '2026-07-22', // Texas Instruments Q2 2026
  qcom:  '2026-07-30', // Qualcomm FY2026 Q3
  adi:   '2026-08-19', // Analog Devices FY2026 Q3
  mrvl:  '2026-08-26', // Marvell FY2027 Q2
  // Memory
  skhx:  '2026-07-24', // SK Hynix Q2 2026
  mu:    '2026-06-25', // Micron FY2026 Q3
  ssnlf: '2026-07-31', // Samsung Q2 2026
  wdc:   '2026-07-30', // Western Digital FY2026 Q4
  stx:   '2026-07-22', // Seagate FY2026 Q4
  nanya: '2026-08-12', // Nanya Q2 2026
  sndk:  '2026-07-23', // Sandisk Q2 2026
  // Equipment & Lithography
  asml:  '2026-07-16', // ASML Q2 2026
  amat:  '2026-08-20', // Applied Materials FY2026 Q3
  lrcx:  '2026-07-23', // Lam Research FY2026 Q4
  klac:  '2026-08-05', // KLA FY2026 Q4
  toely: '2026-08-06', // Tokyo Electron FY2027 Q1
  // AIS
  vrt:   '2026-07-23', // Vertiv Q2 2026
  gev:   '2026-07-23', // GE Vernova Q2 2026
  msft:  '2026-07-29', // Microsoft FY2026 Q4
  googl: '2026-07-29', // Alphabet Q2 2026
  amzn:  '2026-07-30', // Amazon Q2 2026
  meta:  '2026-07-29', // Meta Q2 2026
  pltr:  '2026-08-05', // Palantir Q2 2026
  orcl:  '2026-06-10', // Oracle FY2026 Q4
  snow:  '2026-08-20', // Snowflake FY2027 Q2
  // Energy
  enb:   '2026-08-06', // Enbridge Q2 2026
  et:    '2026-08-05', // Energy Transfer Q2 2026
  epd:   '2026-07-29', // Enterprise Products Q2 2026
  wmb:   '2026-08-04', // Williams Q2 2026
  trgp:  '2026-07-23', // Targa Resources Q2 2026
  oke:   '2026-07-28', // ONEOK Q2 2026
  kmi:   '2026-07-15', // Kinder Morgan Q2 2026
};
