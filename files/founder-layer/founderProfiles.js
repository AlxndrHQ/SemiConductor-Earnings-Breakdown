// src/data/founderProfiles.js
//
// Founder / key architect profiles for each company in the stack.
// Keyed by company `id` to match companies.js.
//
// Schema per entry:
//   name         string   — full name
//   role         string   — current or historic title
//   status       "active" | "retired" | "historical"
//                  active   = currently in seat
//                  retired  = left the company / stepped back
//                  historical = foundational figure, pre-dates current form
//   born         string   — birth year or "YYYY, Location"
//   origin       string   — nationality / background in plain language
//   education    string[] — degrees in order
//   foundedYear  number   — year they founded / co-founded / took strategic control
//   priorStops   string[] — key earlier roles (brief)
//   founderMove  string   — the single decision that defined the company's trajectory
//   architectThesis string — 2-3 sentence narrative on what they built and why it matters
//   legacy       string   — one sentence on their enduring structural impact
//   note         string?  — optional correction/context flag (e.g. succession)

export const FOUNDER_PROFILES = {
  nvda: {
    name: 'Jensen Huang',
    role: 'Co-Founder, President & CEO',
    status: 'active',
    born: '1963, Tainan, Taiwan',
    origin: 'Taiwanese-American',
    education: [
      'B.S. Electrical Engineering — Oregon State University (1984)',
      'M.S. Electrical Engineering — Stanford University (1992)',
    ],
    foundedYear: 1993,
    priorStops: [
      'Director, LSI Logic',
      'Microprocessor Designer, AMD',
    ],
    founderMove: 'Co-founded NVIDIA with Chris Malachowsky and Curtis Priem at a Denny\'s in San Jose in 1993 with $40K pooled capital, betting that the future of computing was graphical — before the GPU category existed.',
    architectThesis: 'Huang\'s defining insight was not the GPU itself but the platform play: CUDA (2006) transformed graphics silicon into a general-purpose parallel computing substrate, creating a developer moat that proved more durable than any hardware advantage. Every subsequent pivot — HPC, autonomous vehicles, data center AI — ran on the same flywheel. By the time the LLM era arrived in 2023, NVIDIA already owned the stack from silicon to software.',
    legacy: 'Built the only company capable of selling both the picks and the shovels of the AI gold rush — and collecting rent on the entire ecosystem through CUDA lock-in.',
  },

  tsm: {
    name: 'Morris Chang',
    role: 'Founder & Former Chairman/CEO',
    status: 'retired',
    born: '1931, Ningbo, China',
    origin: 'Chinese-American; returned to Taiwan to build TSMC',
    education: [
      'B.S. Mechanical Engineering — MIT (1952)',
      'M.S. Mechanical Engineering — MIT (1953)',
      'Ph.D. Electrical Engineering — Stanford University (1964)',
    ],
    foundedYear: 1987,
    priorStops: [
      '30 years at Texas Instruments (rose to head of Worldwide Manufacturing)',
      'Brief stint as President, General Instrument',
      'Head of ITRI (Industrial Technology Research Institute), Taiwan',
    ],
    founderMove: 'Founded TSMC at age 55 in 1987 on an invitation from the Taiwanese government, inventing the pure-play foundry model — a company that manufactures chips exclusively for others and never competes with its own customers. The semiconductor establishment called it a bad idea.',
    architectThesis: 'Chang\'s foundry model separated chip design from manufacturing, enabling the entire fabless industry (Qualcomm, NVIDIA, Apple Silicon, AMD) to exist without billion-dollar fabs. The learning-curve discipline he imported from Texas Instruments — pricing ahead of cost, sacrificing short-term margin for manufacturing yield dominance — compounded for 35 years into an unassailable process lead no competitor has been able to close despite unlimited capital attempts.',
    legacy: 'Invented the business model that made modern Silicon Valley possible; without the pure-play foundry, fabless chip design as an industry category does not exist.',
    note: 'Retired in 2018. Current CEO is C.C. Wei. Chang remains the architect whose model the entire company still runs on.',
  },

  avgo: {
    name: 'Henry Samueli',
    role: 'Co-Founder & Chairman',
    status: 'retired',
    born: '1952, Los Angeles, California',
    origin: 'American',
    education: [
      'B.S. Electrical Engineering — UCLA (1975)',
      'M.S. Electrical Engineering — UCLA (1976)',
      'Ph.D. Electrical Engineering — UCLA (1980)',
    ],
    foundedYear: 1991,
    priorStops: [
      'Professor, Electrical Engineering, UCLA (1985–1995, on leave after 1995)',
      'Chief Scientist, PairGain Technologies',
    ],
    founderMove: 'Co-founded Broadcom Corporation in 1991 with Henry Nicholas in Redondo Beach with the thesis that analog, RF, and digital processing could be unified on a single CMOS chip — eliminating the discrete component stacks that sat inside every cable modem, set-top box, and router.',
    architectThesis: 'Samueli built Broadcom\'s engineering culture around a single principle: maximum integration on a single system-on-chip. That philosophy — pioneered when SoC was aspirational, not standard — became the template for every Wi-Fi chip, cable modem, and Ethernet controller that followed. The Avago acquisition in 2016 brought Hock Tan\'s M&A machine to Samueli\'s engineering foundation, and the combination became the XPU and networking platform now sitting at the center of hyperscaler AI infrastructure.',
    legacy: 'Established the SoC integration model for communications silicon; Broadcom networking chips now sit in the spine of every major AI training cluster.',
    note: 'Stepped back as CTO in 2018; now Chairman. Current operational CEO is Hock Tan (Avago lineage). The company\'s technical DNA remains Samueli\'s; its M&A-driven scale is Tan\'s.',
  },

  skhx: {
    name: 'Chey Tae-won',
    role: 'Chairman, SK Group (parent of SK Hynix)',
    status: 'active',
    born: '1960, Seoul, South Korea',
    origin: 'Korean; third-generation chaebol heir who repositioned the conglomerate around semiconductors',
    education: [
      'B.A. Physics — University of Chicago',
      'M.B.A. — University of Chicago Booth School of Business',
    ],
    foundedYear: 2012,
    priorStops: [
      'Chairman, SK Telecom',
      'Chairman, SK Group (energy, telecom, chemicals)',
    ],
    founderMove: 'Acquired Hynix Semiconductor in 2012 for ₩3.43 trillion against near-universal opposition from SK\'s own board — Hynix was under creditor management and posting ₩200B annual losses. Immediately ordered counter-cyclical capex expansion, including investment in HBM research when the market didn\'t yet have a name for the product.',
    architectThesis: 'Chey\'s thesis was simple and contrarian: memory is cyclical, but leading-edge process is a durable moat, and whoever owns the process when AI scales will be the one selling shovels. The 20-year HBM R&D bet — SK Hynix developed the world\'s first HBM in 2013, a decade before the market needed it — was the direct result of his decision to fund the program through two commodity downturns. That patience is now priced at a ₩500 trillion market cap.',
    legacy: 'Transformed a creditor-managed DRAM commodity player into the first-mover HBM supplier to NVIDIA — the most structurally advantaged position in the 2026 AI buildout.',
    note: 'Chey is the strategic architect and acquirer, not the technical founder. Hyundai Group\'s Chung Ju-yung founded the original Hyundai Electronics in 1983; Chey rebuilt it as a focused semiconductor company from 2012.',
  },

  mu: {
    name: 'Sanjay Mehrotra',
    role: 'President, CEO & Chairman',
    status: 'active',
    born: '1958, Kanpur, India',
    origin: 'Indian-American',
    education: [
      'B.S. & M.S. Electrical Engineering & Computer Science — UC Berkeley',
      'Executive Program — Stanford Graduate School of Business',
    ],
    foundedYear: 1988,
    priorStops: [
      'Design Engineer, Intel',
      'Design Engineer, SEEQ Technology',
      'Co-Founder & COO/CEO, SanDisk (1988–2016)',
    ],
    founderMove: 'Co-founded SanDisk in 1988 with Eli Harari and Sanjay Mehrotra — a company that turned NAND flash from a laboratory curiosity into the storage layer of the digital economy. Joined Micron as CEO in 2017 and immediately pivoted the company\'s manufacturing roadmap toward HBM, a product category SanDisk had no exposure to but that Mehrotra correctly identified as the memory format the AI era would require.',
    architectThesis: 'Mehrotra brings 70+ patents and a founder\'s operating cadence to a company that historically ran as a commodity DRAM producer. His SanDisk background — building flash from zero to a $16B exit — gives him a specific playbook: identify the memory format the next compute paradigm needs, own the process before the market arrives, and execute LTA contracts that convert commodity cycles into contracted revenue. He is running that playbook again at Micron with HBM3E and the Idaho fab expansion.',
    legacy: 'The only active semiconductor CEO with a co-founder pedigree in flash memory pivoting a legacy DRAM company into the AI memory cycle; holds 70+ patents personally.',
  },

  asml: {
    name: 'Christophe Fouquet',
    role: 'President & CEO',
    status: 'active',
    born: 'France',
    origin: 'French',
    education: [
      'Engineering degree — École Centrale de Lyon',
    ],
    foundedYear: 2024,
    priorStops: [
      'Marketing & Product Management — KLA-Tencor',
      'Marketing & Product Management — Applied Materials',
      'EVP Applications — ASML (2013)',
      'Chief Business Officer — ASML (2022)',
      'President & CEO — ASML (April 2024–present)',
    ],
    founderMove: 'Took over from Peter Wennink in April 2024 as ASML crossed into the High-NA EUV era — tools priced at ~$380M each that are the only path to sub-2nm logic and HBM4 base dies. His defining move is navigating simultaneous China export restriction pressure while ramping High-NA shipments to TSMC and Samsung.',
    architectThesis: 'Fouquet inherits the most unassailable monopoly in technology: a single company in a single Dutch city makes the only machines capable of printing the world\'s most advanced chips. His challenge is not competitive — no competitor is within a decade of matching EUV — but geopolitical: managing Dutch, US, and EU export control regimes while keeping the High-NA ramp on schedule for the AI supercycle. The decisions he makes about Chinese shipment compliance in 2025–2026 will determine whether ASML retains its full revenue base or accepts a structural cap.',
    legacy: 'Stewards the only genuine natural monopoly in semiconductor capital equipment at the exact inflection where High-NA EUV becomes mandatory for every leading-edge node through the end of the decade.',
    note: 'ASML was founded in 1984 as a joint venture between ASM International and Philips. The foundational architect of the EUV program was its longtime CEO Peter Wennink (2013–2024), whose 11-year tenure oversaw ASML\'s market cap growth from €27B to €333B. Fouquet is the current operational steward.',
  },
};

export const getFounderProfile = (companyId) => FOUNDER_PROFILES[companyId] || null;
