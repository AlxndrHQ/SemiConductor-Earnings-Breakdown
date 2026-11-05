// Credit exposure by company id. Every figure carries a source and an as-of date,
// because this data goes stale quickly. Companies with no entry show no panel.
// `links` adds financing nodes to the company's Supply Chain Map.
export const CREDIT_TIERS = {
  'direct-borrower':     'Direct Borrower',
  'financing-dependent': 'Financing-Dependent',
  'rate-sensitive':      'Rate-Sensitive',
};

export const CREDIT_NODES = {
  bonds:      'Bond Market',
  dcdebt:     'Data-Center Debt',
  privcredit: 'Private Credit',
  neoclouds:  'Neoclouds',
  labs:       'AI Labs',
};

export const CREDIT_PROFILES = {
  "orcl": {
    "tier": "direct-borrower",
    "totalDebt": "~$135B pro forma for Nov 4 notes ($125.3B at Aug 31, 2026)",
    "debtAsOf": "FQ1 2027 10-Q (Aug 31, 2026), adjusted for the $10B notes closed Nov 4, 2026 per the 424B2 capitalization table",
    "rating": "S&P BBB- (stable) / Moody's Baa2 (negative) / Fitch BBB (stable), per Nov 2, 2026 term sheet. S&P cut to BBB- in July 2026.",
    "maturities": "$7.6B current at Aug 31, 2026. May 31 schedule: FY27 $7.2B, FY28 $10.1B, FY29 $5.5B, FY30 $7.25B, FY31 $9.75B, thereafter $90.25B.",
    "offBalanceSheet": "$288B of additional lease commitments not yet on the balance sheet, substantially all data centers, 15-19 year terms, starting FQ2 2027 through FY2029. On-balance lease payments total about $63B undiscounted ($48.1B operating, $15.2B finance).",
    "transmission": "Oracle needs outside capital and landlords' lenders to build capacity it has already sold, and its Nov 2026 notes carried 7.0%-8.65% coupons. A cut to junk could raise funding costs and, per its 10-K, change data center lease terms and collateral requirements.",
    "sources": [
      {
        "label": "Oracle 10-Q FQ1 2027",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm",
        "date": "2026-09-11"
      },
      {
        "label": "Oracle 10-K FY2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
        "date": "2026-06-22"
      },
      {
        "label": "Oracle notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526443918/d87441dfwp.htm",
        "date": "2026-11-02"
      },
      {
        "label": "Oracle 424B2 capitalization",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526445846/d181336d424b2.htm",
        "date": "2026-11-04"
      },
      {
        "label": "Oracle 8-K notes and equity closing",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526447507/d131790d8k.htm",
        "date": "2026-11-04"
      },
      {
        "label": "Oracle Investor Day release",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526435853/d75538dex991.htm",
        "date": "2026-10-28"
      },
      {
        "label": "CNBC on Oracle credit stress",
        "url": "https://www.cnbc.com/2026/10/19/oracle-debt-faces-an-ai-stress-test-why-some-investors-arent-worried-.html",
        "date": "2026-10-19"
      }
    ],
    "links": [
      {
        "node": "bonds",
        "label": "BBB- notes, 7.0%-8.65%"
      },
      {
        "node": "dcdebt",
        "label": "landlord-financed sites"
      }
    ]
  },
  "meta": {
    "tier": "direct-borrower",
    "totalDebt": "~$99B + €8B pro forma ($84.0B face at Sep 30, 2026)",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026), plus $15B priced Nov 3 and €8B priced Nov 4, 2026 (term sheets)",
    "rating": "S&P AA- (negative) / Moody's Aa3 (stable), per Nov 2026 term sheets. Fitch not listed.",
    "maturities": "$2.75B due Aug 2027 of the $84B outstanding; the rest runs through 2066.",
    "offBalanceSheet": "$355.73B of leases not yet commenced; $454.52B of non-cancelable contractual commitments; up to $14.72B of contingent cloud-capacity purchases. Two unconsolidated 20%-owned ventures: Louisiana (Hyperion, ~$27B development cost, with Blue Owl) and Texas (~$14B). Maximum exposure to them is $68.4B, including $41.5B of residual value guarantees. The Hyperion SPV Beignet Investor issued $27.3B of 6.581% bonds due 2049, off Meta's balance sheet.",
    "transmission": "Meta is using bonds, leases and SPVs to fund a buildout larger than its cash generation, so wider spreads raise the cost of every new layer. The residual value guarantees also pass data center value risk back to Meta if it exits a lease.",
    "sources": [
      {
        "label": "Meta 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm",
        "date": "2026-10-22"
      },
      {
        "label": "Meta USD notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526445646/d186765dfwp.htm",
        "date": "2026-11-03"
      },
      {
        "label": "Meta EUR notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526447522/d154804dfwp.htm",
        "date": "2026-11-04"
      },
      {
        "label": "Meta equity and preferred term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526432549/d382225dfwp.htm",
        "date": "2026-10-27"
      },
      {
        "label": "Reuters via Yahoo on Hyperion JV",
        "url": "https://finance.yahoo.com/news/meta-27-billion-financing-deal-205329481.html",
        "date": "2025-10-21"
      },
      {
        "label": "IFR on Beignet bond (deal priced Oct 16, 2025)",
        "url": "https://www.ifre.com/ifr-awards/2327933/financing-package-blue-owl-capitalbeignet-investors-us27.3bn-23.6-year-bond",
        "date": "2025-10-16"
      }
    ],
    "links": [
      {
        "node": "bonds",
        "label": "notes + euro notes"
      },
      {
        "node": "privcredit",
        "label": "Hyperion JV (Blue Owl)"
      }
    ]
  },
  "googl": {
    "tier": "direct-borrower",
    "totalDebt": "~$126B + €6B pro forma ($126.1B carrying at Sep 30, 2026)",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026), plus €6B euro notes priced Nov 2, 2026 (term sheet)",
    "rating": "S&P AA+ (stable) / Moody's Aa2 (stable), per Nov 2, 2026 term sheet. Fitch not listed.",
    "maturities": "$1.0B current portion at Sep 30, 2026. A $4.0B revolver expires Apr 2027 and $6.0B in Apr 2030, both undrawn. No commercial paper outstanding.",
    "offBalanceSheet": "$130.5B of leases not yet commenced. $48.0B notional credit derivatives backstopping third-party data center lease and energy payments, up from $16.9B at Dec 31. $16.2B energy-equipment guarantees, $6.6B TPU repurchase guarantees, up to $10.0B backstops for the Crux AI venture with Blackstone. $21.1B notional equity derivatives, primarily future capital funding to a strategic investment.",
    "transmission": "Alphabet's balance sheet is strong, but it now backstops other parties' data center leases, so a default by a smaller AI operator in tighter credit could land on Alphabet. It also has large bond needs of its own, $80.8B issued in the first nine months of 2026.",
    "sources": [
      {
        "label": "Alphabet 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm",
        "date": "2026-10-29"
      },
      {
        "label": "Alphabet EUR notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526443857/d134038dfwp.htm",
        "date": "2026-11-02"
      },
      {
        "label": "Alphabet USD notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526338750/d159970dfwp.htm",
        "date": "2026-08-07"
      }
    ],
    "links": [
      {
        "node": "dcdebt",
        "label": "backstops third-party leases"
      }
    ]
  },
  "amzn": {
    "tier": "direct-borrower",
    "totalDebt": "~$180B ($180.9B face at Sep 30, 2026)",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026)",
    "rating": "Moody's A1 / S&P AA / Fitch AA-, per Sept 2026 term sheet. Moody's outlook stable (cut from positive, Feb 2026). S&P and Fitch outlooks not found.",
    "maturities": "$6.8B current portion. Principal plus interest: $1.4B rest of 2026, $16.6B 2027, $19.6B 2028, $39.2B 2029 (includes the $17.5B term loan due Sep 2029), $12.5B 2030.",
    "offBalanceSheet": "$164.9B of leases not yet commenced and $159.6B of property and equipment commitments. A supplier-linked secured Loan Facility of up to ~$80B is available Q1 2027-Q3 2028 and would become long-term debt when drawn. $21.6B of standby letters of credit. Anthropic financing facility of up to $20B.",
    "transmission": "Amazon took on over $110B of net new debt in 2026 to fund AWS capacity, so its cost of capital moves with bond demand. Major AI customers OpenAI and Anthropic depend on outside capital to honor commitments, and it holds large stakes in both.",
    "sources": [
      {
        "label": "Amazon 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000040/amzn-20260930.htm",
        "date": "2026-10-30"
      },
      {
        "label": "Amazon notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926106322/tm2624614d4_fwp.htm",
        "date": "2026-09-09"
      },
      {
        "label": "Moody's outlook via Yahoo",
        "url": "https://au.finance.yahoo.com/news/moody-shifts-amazon-outlook-stable-231011882.html",
        "date": "2026-02-20"
      }
    ],
    "links": [
      {
        "node": "bonds",
        "label": "funds AWS capacity"
      },
      {
        "node": "labs",
        "label": "OpenAI/Anthropic commitments"
      }
    ]
  },
  "msft": {
    "tier": "direct-borrower",
    "totalDebt": "~$60B pro forma ($35.5B carrying at Sep 30, 2026, + $25B notes Nov 4); excludes $71.0B finance lease liabilities",
    "debtAsOf": "FQ1 2027 10-Q (Sep 30, 2026), adjusted for the $25B notes settled Nov 4, 2026",
    "rating": "S&P AAA (stable) / Moody's Aaa (stable), per Oct 2026 term sheet. Fitch not listed.",
    "maturities": "Before the new notes: $4.4B rest of FY27, none FY28, $2.0B FY29, none FY30, $0.5B FY31, $34.4B later. New notes add $3B due 2028 and $4.25B due 2029.",
    "offBalanceSheet": "$364.6B of leases not yet commenced, mostly data centers, starting FY2027-FY2034, some subject to conditions. On balance sheet: $71.0B finance and $27.5B operating lease liabilities.",
    "transmission": "Microsoft's direct credit risk is low, but leases are its main AI funding tool and it returned to the bond market in Nov 2026. Its bigger exposure is OpenAI, a related party that gave it $10.0B of quarterly revenue and depends on outside funding.",
    "sources": [
      {
        "label": "Microsoft 10-Q FQ1 2027",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436133/msft-20260930.htm",
        "date": "2026-10-28"
      },
      {
        "label": "Microsoft notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526439794/d799291dfwp.htm",
        "date": "2026-10-30"
      },
      {
        "label": "Microsoft 8-K notes",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526447173/d178557d8k.htm",
        "date": "2026-11-04"
      }
    ],
    "links": [
      {
        "node": "labs",
        "label": "OpenAI related party"
      }
    ]
  },
  "nvda": {
    "tier": "financing-dependent",
    "totalDebt": "~$33.4B carrying ($33.5B principal) at Jul 26, 2026",
    "debtAsOf": "FQ2 2027 10-Q (Jul 26, 2026)",
    "rating": "Moody's Aa1 (positive) / S&P AA (stable), per June 2026 term sheet. Fitch not listed.",
    "maturities": "$1.0B due within a year (3.20% notes, Sept 2026), $15.0B in years 1-5, $7.5B in years 5-10, $10.0B beyond.",
    "offBalanceSheet": "Guarantees capped at $108.5B: $105B for OpenAI leases at SB Energy's PORTS campus in Ohio (signed Aug 2026, ~4.25GW, starts ramping FY2029) and $3.5B for AI cloud partners' leases. $36B AI cloud capacity commitments, $20B third-party data center leases it expects to reassign, $29B cloud service agreements. Equity investments $99B plus $25B committed. MoUs for financing platforms targeting over $500B of third-party capital, with optional residual-value support.",
    "transmission": "NVIDIA's own debt is small, but AI clouds and labs often need borrowed money to buy its systems, and it now props up that demand with guarantees, capacity purchases and equity. If lenders pull back, orders can slow while its guarantee exposure rises.",
    "sources": [
      {
        "label": "NVIDIA 10-Q FQ2 2027",
        "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
        "date": "2026-08-26"
      },
      {
        "label": "NVIDIA notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1045810/000119312526271326/d49394dfwp.htm",
        "date": "2026-06-15"
      }
    ],
    "links": [
      {
        "node": "labs",
        "label": "OpenAI lease guarantee"
      },
      {
        "node": "neoclouds",
        "label": "AI cloud lease guarantees"
      }
    ]
  },
  "avgo": {
    "tier": "financing-dependent",
    "totalDebt": "~$59.4B carrying ($61.1B principal) at Aug 2, 2026",
    "debtAsOf": "FQ3 2026 10-Q (Aug 2, 2026)",
    "rating": "S&P A- (positive) / Moody's A3 (positive), per Jan 2026 term sheet; not confirmed since.",
    "maturities": "$2.25B rest of FY26, none FY27, $5.1B FY28, $2.4B FY29, $6.4B FY30, $44.9B later.",
    "offBalanceSheet": "Backstops of financing for AI racks leased to a customer: ~$29B maximum undiscounted on the June 2026 $35B first tranche, and ~$43B on an Oct 26, 2026 SPV deal (72.5% of amounts owed less rack value). Commitment to buy up to $42B of customer convertible notes, none issued at Aug 2. Non-recourse receivable factoring. Whether the two backstops add together is unclear.",
    "transmission": "Broadcom says its AI customers need significant capital to deploy its chips, so it arranges partner financing and backstops the leases. If frontier labs lose funding access, Broadcom faces both lost orders and potential payouts if rack values fall short.",
    "sources": [
      {
        "label": "Broadcom 10-Q FQ3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm",
        "date": "2026-09-10"
      },
      {
        "label": "Broadcom 8-K backstop",
        "url": "https://www.sec.gov/Archives/edgar/data/1730168/000119312526434271/d148323d8k.htm",
        "date": "2026-10-27"
      },
      {
        "label": "Broadcom notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1730168/000119312526005084/d842461dfwp.htm",
        "date": "2026-01-07"
      },
      {
        "label": "Anthropic S-1",
        "url": "https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm",
        "date": "2026-10-26"
      }
    ],
    "links": [
      {
        "node": "labs",
        "label": "rack lease backstops"
      }
    ]
  },
  "mu": {
    "tier": "financing-dependent",
    "totalDebt": "~$5.2B ($2.8B notes + $2.4B finance leases) at Sep 3, 2026",
    "debtAsOf": "FY2026 10-K (Sep 3, 2026)",
    "rating": null,
    "maturities": "No note maturities before FY2032 ($2.8B FY32 and later). Finance leases: $577M FY27, $560M FY28, $500M FY29.",
    "offBalanceSheet": "$10.8B of noncancelable purchase obligations over one year. Third-party Lease SPEs facilitate equipment lease financing; Micron says it bears no significant risk from them. About $7B of customer letters of credit protect Micron.",
    "transmission": "Micron has almost no refinancing risk after repaying about $10B in FY2026, so stress would arrive through customers. About 60% of revenue is data center, so tighter credit for AI buyers could cut demand, though take-or-pay deals, deposits and letters of credit soften it.",
    "sources": [
      {
        "label": "Micron 10-K FY2026",
        "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000023/mu-20260903.htm",
        "date": "2026-10-09"
      }
    ]
  },
  "vrt": {
    "tier": "financing-dependent",
    "totalDebt": "~$2.93B carrying ($2.96B principal) at Sep 30, 2026",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026)",
    "rating": "S&P BBB- (stable) / Moody's Baa3 (stable) / Fitch BBB- (positive), per Feb 2026 term sheet; not confirmed since.",
    "maturities": "$850M 4.125% secured notes due 2028 is the only sizable near-term maturity. Other notes run 2036-2066. $2.5B revolver matures 2031.",
    "offBalanceSheet": "Vertiv states it has no guarantees or off-balance-sheet financing that could materially affect it, including VIEs. UIG acquisition closed Oct 27, 2026 for ~$1.45B cash plus up to $1.15B earnouts.",
    "transmission": "Vertiv's debt is modest and it reported a net cash position, so its exposure is demand. It sells power and cooling for data centers, so if developers, neoclouds or their customers cannot get financing, projects and orders slip.",
    "sources": [
      {
        "label": "Vertiv 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067893/vrt-20260930.htm",
        "date": "2026-10-28"
      },
      {
        "label": "Vertiv Q3 2026 release",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067707/q32026exhibit991vrt10282026.htm",
        "date": "2026-10-28"
      },
      {
        "label": "Vertiv 8-K UIG closing",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067393/vrt-20261027.htm",
        "date": "2026-10-27"
      },
      {
        "label": "Vertiv notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000119312526064285/d45686dfwp.htm",
        "date": "2026-02-23"
      },
      {
        "label": "Vertiv 10-K FY2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000008/vrt-20251231.htm",
        "date": "2026-02-13"
      }
    ],
    "links": [
      {
        "node": "dcdebt",
        "label": "customer project financing"
      }
    ]
  },
  "sndk": {
    "tier": "financing-dependent",
    "totalDebt": "~$0 funded debt; $1.5B revolver undrawn at Oct 2, 2026",
    "debtAsOf": "FQ1 2027 10-Q (Oct 2, 2026)",
    "rating": null,
    "maturities": "None funded. Term loan repaid Mar 4, 2026. Revolver maturity extended to Sept 9, 2031.",
    "offBalanceSheet": "Guarantees half of Flash Ventures' equipment leases with Kioxia: $838M (¥132B). A cancellation event could accelerate these. Maximum Flash Ventures loss exposure $2.94B. Also owes half of venture fixed costs regardless of output and $1.2B to Kioxia over 2026-2029.",
    "transmission": "Sandisk has no funded debt, so stress would reach it through demand. Its $88.9B of long-term contracted obligations depends on data center customers being able to pay, though some contracts require deposits and third-party collateral.",
    "sources": [
      {
        "label": "Sandisk 10-Q FQ1 2027",
        "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026068601/sndk-20261002.htm",
        "date": "2026-10-30"
      }
    ]
  },
  "et": {
    "tier": "rate-sensitive",
    "totalDebt": "~$68.9B consolidated at Sep 30, 2026",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026, filed Nov 5, 2026)",
    "rating": "Senior: Moody's Baa2 / S&P BBB / Fitch BBB (stable), Jan 2026 term sheet. Junior subordinated: Baa3 / BB+ / BB+, Jul 2026 term sheet. Moody's and S&P outlooks not found.",
    "maturities": "About $4.35B of principal is due by Sep 30, 2027, classified long-term on intent and ability to refinance. Revolver: $5.0B to Apr 11, 2027, then $4.84B to Apr 2029, with $4.41B available.",
    "offBalanceSheet": null,
    "transmission": "Energy Transfer rolls debt continually while funding about $5.5B of 2026 growth capex and about $7B planned for 2027, so higher rates feed into interest cost as notes refinance. Its data center gas deals, including with Oracle, add indirect exposure if those customers' projects are delayed.",
    "sources": [
      {
        "label": "Energy Transfer 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000127618726000070/et-20260930.htm",
        "date": "2026-11-05"
      },
      {
        "label": "Energy Transfer Q3 2026 release",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000127618726000066/ex991eterq32026.htm",
        "date": "2026-11-03"
      },
      {
        "label": "Senior notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000119312526010615/d933965dfwp.htm",
        "date": "2026-01-12"
      },
      {
        "label": "Junior notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000119312526296440/d129204dfwp.htm",
        "date": "2026-07-06"
      },
      {
        "label": "Senior notes prospectus supplement",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000119312526448750/d185485d424b5.htm",
        "date": "2026-11-05"
      },
      {
        "label": "Q3 2025 release (Oracle deals)",
        "url": "https://www.sec.gov/Archives/edgar/data/1276187/000127618725000116/ex991eterq32025.htm",
        "date": "2025-11-05"
      }
    ],
    "links": [
      {
        "node": "bonds",
        "label": "refinancing"
      }
    ]
  },
  "kmi": {
    "tier": "rate-sensitive",
    "totalDebt": "~$33.1B at Sep 30, 2026 ($33.2B excluding fair value adjustments)",
    "debtAsOf": "Q3 2026 10-Q (Sep 30, 2026)",
    "rating": "Moody's Baa1 / S&P BBB+ / Fitch BBB+, all stable, per Jul 2026 term sheet. Moody's upgraded from Baa2 in Mar 2026.",
    "maturities": "$1.73B current portion at Sep 30, 2026. $3.5B revolver due May 2031, $3.49B available, no commercial paper outstanding.",
    "offBalanceSheet": "Some large projects run through unconsolidated joint ventures, e.g. NGPL Permian Link (~$4.2B, KMI share ~$1.6B). JV debt total was not extracted.",
    "transmission": "Kinder Morgan refinances debt regularly and has swapped $4.5B into floating rates, so higher rates raise its interest bill directly. Its $14.4B project backlog also ties it to AI power demand, including an A-rated hyperscaler on Permian Link and data center customers in Texas.",
    "sources": [
      {
        "label": "Kinder Morgan 10-Q Q3 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1506307/000150630726000132/kmi-20260930.htm",
        "date": "2026-10-23"
      },
      {
        "label": "Kinder Morgan Q3 2026 release",
        "url": "https://www.sec.gov/Archives/edgar/data/1506307/000150630726000130/kmi2026q38-kex991.htm",
        "date": "2026-10-21"
      },
      {
        "label": "Senior notes term sheet (FWP)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506307/000110465926087599/tm2619040d6_fwp.htm",
        "date": "2026-07-28"
      }
    ],
    "links": [
      {
        "node": "bonds",
        "label": "refinancing + floating swaps"
      }
    ]
  }
};

export const getCreditProfile = (id) => CREDIT_PROFILES[id];
