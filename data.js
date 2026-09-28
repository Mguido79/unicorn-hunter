const dashboardData = {
  sources: [
    "US annuities: LIMRA U.S. Individual Annuity Sales Survey, 2025 year-end carrier ranks ($000 converted to $B). Industry totals also use LIMRA’s final Q2 2026 public release (8 Sep 2026): $121.2B in Q2 and $228.7B in H1.",
    "US life: indicative top-15 by ordinary/individual life scale (premiums and in-force) from AM Best / NAIC-style public rankings, 2024–2025. Precise statutory $ sales and in-force are n/a unless a free public figure was confirmed.",
    "Japan life and annuities: FY2024–FY2025 disclosures and Life Insurance Association of Japan / company results; annuity order uses individual-annuity in-force and new-business mix. Product currency is the shelf (JPY/USD/AUD), not a live FX quote.",
    "Retail: ICI, ETF flow reports, Japan FSA New NISA, and Bank of Japan Flow of Funds household financial assets (https://www.boj.or.jp/en/statistics/sj/index.htm).",
    "Filings: SEC EDGAR company submissions and browse-edgar for 2025–2026 Forms N-4, N-6, 485BPOS, 485APOS, and 497. Accession numbers are taken from data.sec.gov / Archives; unconfirmed items are omitted. Public SERFF directory used: https://www.thecomply.ai/serff-filing-access (Google unwrap). Iowa was the chosen public SFA (https://filingaccess.serff.com/sfa/home/IA and https://portals.naic.org/serff-filing-access?state=IA). Legacy SFA for IA/TX/NC/OH returned 403; the modern portal says those states have not transitioned. Interstate Compact SFA (https://portals.naic.org/serff-filing-access?state=IC) is live but returned no life/annuity rows after Accept. NC DOI Life & Health Filing Search is temporarily down. No SERFF tracking numbers are invented.",
    "Features: carrier product pages and confirmed SEC prospectuses for distinctive life and annuity designs (FIA, MYGA, VA, RILA, cancer, COLI, FX annuity). Four lists stay separate: US life, US annuity, Japan life, Japan annuity.",
    "Japan insurance market threats: FSA ESR monitoring (August 2026), FSA foreign-currency insurance sales monitoring, Japan Post Insurance IR, Life Insurance Association of Japan statistics, Cabinet Office aging reports, FSA New NISA, and JGB-yield coverage.",
    "US insurance market threats: NAIC annuity and reinsurance topics, SEC retail-annuity disclosure, DOL/EBSA advice standards, and Federal Reserve Financial Stability Report themes (private credit, rate, and liquidity).",
    "Markets overlay: LIMRA U.S. Individual Annuity Sales Survey year-end totals (2024 $434.1B; 2025 $464.1B). S&P 500 year-end from FRED SP500 and Yahoo ^GSPC (2020–2025). 10-year yield year-end from FRED DGS10. Product mix VA / FA / FIA / RILA from LIMRA year-end releases and the 4Q 2025 estimates PDF. Credit spreads on Executive: FRED BAMLC0A0CM and BAMLH0A0HYM2 year-end through 2024.",
    "Rates: public carrier/distributor rate sheets and declared-rate PDFs only (not aggregator tapes). Advisor-login sheets stay n/a plus the product or rate-portal link. As-of is the sheet date.",
    "Listings: public parent ticker if the group is listed; otherwise Mutual or Private. Latest prices from Yahoo Finance when a quote fetch succeeds (as-of on the row); n/a if the fetch fails — ticker is still shown. Allianz uses Xetra ALV (Yahoo ALV.DE, not NYSE Autoliv). AXA uses Euronext Paris CS (Yahoo CS.PA). Live index and Treasury rows poll Yahoo chart in the browser every 90s; FRED is used for Fed funds / SOFR / Japan 10Y when a key is present.",
    "Sentiment / voice of customer: public forums (Reddit, Bogleheads, Insurance Forums, Yahoo Chiebukuro, 5ch). Themes paraphrased from thread titles — no invented quotes. Separate ratings strip: AM Best FSR/ICR, S&P, Moody’s, Fitch, public Comdex snapshot (myannuitystore 15 Jul 2026; VitalSigns not scraped), Weiss from that snapshot, Japan JCR/R&I plus issuer-published S&P/Moody’s/Fitch, J.D. Power 2025 life study where named, BBB only when a specific profile was fetched. n/a if not public.",
    "Japan local market commentary (Prudential of Japan): PRU 21 Apr 2026 POJ update deck and call, Prudential Life Japan / PHJ 22 Apr 2026 release, POJ FY2025 results (26 May 2026), Nikkei and Jiji FSA-inspection coverage, Yomiuri on Sony Life, and company IR for Gibraltar and PGF.",
    "US Equitable–Corebridge merger (Executive, United States only): EQH/CRBG 26 Mar 2026 joint release and Form 8-K (exchange ratios, ~51/49 ownership, $475M termination fee as filed); 30 Jul 2026 stockholder-approval release; 26 Mar 2026 Rule 14a-12 call transcript and 12 May 2026 leadership 425; SCS and MarketLock N-4s; Equitable Investment Edge product page; Corebridge annuity shelf; Equitable 1 Jun 2021 Venerable close (9.09% of VA Capital) and Q4 2025 org chart (EIM 9.10%); Corebridge 26 Jun 2025 Venerable VA reinsurance release; Venerable 10 Mar 2025 Accumulator novation. Combined-company ~$22B figure is the issuers’ 25 Mar 2026 close-price statement, not an independent appraisal."
  ],

  japanLocalCommentary: {
    market: "JP",
    title: "Prudential of Japan — local market debrief",
    asOf: "September 2026",
    kicker: "Local market commentary",
    paragraphs: [
      "Prudential Financial’s Japan franchise is three licenses, not one brand: Prudential Life Japan (POJ; ~4,200 Life Planners, 2.2M customers), Gibraltar Life (Life Consultants and independent agencies; 3.0M customers), and PGF Life / PGFL (bank window; 0.5M customers). Parent IR still ranks the group #4 in Japan by annualized premium (LIAJ, nine months to Dec 2025, excluding Japan Post) and a $3.0B FY2025 pre-tax AOI contributor. The live event is POJ only. After disclosing Life Planner money-taking, PRU halted new POJ sales on 9 Feb 2026 and on 21–22 Apr extended the freeze 180 days through 5 Nov 2026 to rebuild governance, pay, and branch oversight. In-force contracts, claims, and the other two companies were left open.",
      "Tokyo coverage (Nikkei, Jiji, Hoken Mainichi) reads this as a Life Planner conduct failure, not a solvency story. Jiji put the first POJ wave at about ¥31B from ~500 customers; FSA opened an on-site exam of POJ from late January 2026 and, per Nikkei (9 Apr), moved on to Prudential Holdings of Japan with administrative action still in view. POJ’s 22 Apr release said HQ was built around individual production, branch managers ran sales more than supervision, and pay was too tightly tied to new business. The reset is a new Life Planner package (base pay, multi-year commissions, persistency, compliance), a Customer Support Partner layer so clients are not locked to one planner, and an independent reimbursement committee. Yomiuri later reported Sony Life also drew an FSA inspection (15 Sep 2026) for similar agent money-taking — local commentary now treats planner-channel cash handling as an industry issue, not a one-name accident.",
      "Parent strategy: Japan stays PFI’s most important overseas hub, but the 5–8% EPS growth target was withdrawn. Guided cost of the 270-day freeze is $525–575M of 2026 pre-tax AOI (~18% of 2025 Japan, ~8% of PFI) and a separate $400–450M in 2027; the years are not additive. Over 90% of POJ AOI is in-force, ESR and parent cash flow are described as not materially hit, and more than 40% of Japan risk is reinsured to PICA or Gibraltar Re. POJ’s own FY2025 (to 31 Mar 2026) already showed the air-pocket: new APE −13%, new face amount −22.9%, net income −52%, while in-force premium was still up. Restart on 6 Nov is not guaranteed if FSA readiness or the outside special investigation committee slips.",
      "Gibraltar and PGF are outside the sales freeze; PRU is running a “cross-learning” review of both. On the April call, management said ~70 inbound Gibraltar inquiries were unconfirmed and it did not see a systemic Life Consultant / independent-agency problem — Japanese press later reported additional Gibraltar filings as the reimbursement committee worked through hundreds of group inquiries. PGF remains the bank VA / FX / inheritance specialist versus Dai-ichi Frontier and MS Primary. It still writes, but it sits under the same FSA bank-window conduct lens already flagged for yen and FX replacements. Bancassurance is the open growth door while planners are dark.",
      "Versus Sony and Nippon: Sony Life is the closest planner peer and is now under its own FSA exam, so channel reputation is the shared threat; Nippon remains the scale / participating-savings incumbent and the natural recapture of yen savings while POJ is shut. Product mix: POJ’s distinctive book is needs-based first-sector protection (plus in-force retirement and savings), not Aflac-style third-sector or Kampo runoff. Industry growth is still medical and cancer; a nine-month planner outage hands that shelf — and the variable / unit-linked share Sony had been winning — to peers. Watch into late 2026: FSA disposition, whether the Gibraltar / PGF reviews stay contained, Life Planner retention under the new pay plan, and how cleanly POJ can restart."
    ],
    sources: [
      { label: "PRU POJ update deck (21 Apr 2026)", url: "https://s203.q4cdn.com/245412310/files/doc_events/2026/04/POJ-Update-Call-Presentation.pdf" },
      { label: "PRU Japan update call (21 Apr 2026)", url: "https://s203.q4cdn.com/245412310/files/doc_events/2026/04/508_2026_Prudential-of-Japan-Update-Call-Transcript_04212026_Final.pdf" },
      { label: "POJ / PHJ 180-day extension release (22 Apr 2026)", url: "https://www.prudential.co.jp/news/pdf/1000/20260422_1.pdf" },
      { label: "POJ FY2025 results (26 May 2026)", url: "https://www.prudential.co.jp/news/pdf/1005/20260526.pdf" },
      { label: "Nikkei: FSA inspection of Japan holding company (9 Apr 2026)", url: "https://www.nikkei.com/article/DGXZQOUB198QD0Z10C26A3000000/" },
      { label: "Jiji: extension and Gibraltar inquiries (22 Apr 2026)", url: "https://www.jiji.com/jc/article?g=eco&k=2026042200729" },
      { label: "Jiji: FSA exam and ¥31B first wave (27 Jan 2026)", url: "https://www.jiji.com/jc/article?g=eco&k=2026012700919" },
      { label: "Yomiuri: Sony Life FSA inspection (15 Sep 2026)", url: "https://www.yomiuri.co.jp/economy/20260915-GYT1T00343/" },
      { label: "Hoken Mainichi: POJ press briefing (27 Apr 2026)", url: "https://homai.co.jp/news/34499/" },
      { label: "Gibraltar Life", url: "https://www.gib-life.co.jp/" },
      { label: "PGF Life", url: "https://www.pgf-life.co.jp/" }
    ]
  },

  usMergerEvaluation: [
    {
      market: "US",
      kicker: "Equitable–Corebridge merger",
      asOf: "September 2026",
      title: "Deal terms as filed — all-stock combination still pending close",
      paragraphs: [
        "On 26 March 2026 Equitable Holdings (NYSE: EQH) and Corebridge Financial (NYSE: CRBG) signed an Agreement and Plan of Merger for an all-stock combination through a new parent (Mountain Holding / “New Equitable”). Each CRBG share converts into 1.0000 New Equitable share; each EQH share converts into 1.55516 New Equitable shares. After close, Corebridge holders are expected to own about 51% and Equitable holders about 49%. The companies’ 26 March release valued the combined company at approximately $22 billion using 25 March 2026 closing prices — that is their stated mark, not a separately verified enterprise value. EQH’s 8-K also files a $475 million termination fee in specified walk-away cases. Do not treat other street numbers as deal consideration; this is not a cash takeout.",
        "The surviving public brand and NYSE ticker are Equitable / EQH. Marc Costantini (Corebridge CEO) becomes CEO; Robin Raju (Equitable CFO) becomes CFO; Mark Pearson becomes Executive Chair; Alan Colberg is Lead Independent Director. The board is 14 seats, seven designated by each side. Headquarters after close: Houston. Nippon Life, Corebridge’s strategic investor, said its three Corebridge directors voted in favor and that it expects to remain a long-term holder — post-close board seats for Nippon were not specified in the announcement. Stockholders of both companies approved the merger on 30 July 2026 (preliminary: about 99.96% of CRBG and 97.24% of EQH votes cast). Close is still targeted by year-end 2026 and still needs insurance-regulatory and other approvals. Filed synergy language is more than $500 million of run-rate expense synergies by the end of 2028, plus the issuers’ accretion statements; those are management targets, not results."
      ],
      sources: [
        { label: "EQH IR joint release (26 Mar 2026)", url: "https://ir.equitableholdings.com/news-and-events/investor-releases/news-details/2026/Corebridge-Financial-and-Equitable-Holdings-Announce-Transformational-Merger/default.aspx" },
        { label: "CRBG EX-99.1 press release", url: "https://www.sec.gov/Archives/edgar/data/1889539/000114036126011260/ef20068723_ex99-1.htm" },
        { label: "EQH Form 8-K (merger agreement / $475M fee)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226000871/eh260756088_8k.htm" },
        { label: "Joint proxy / DEFM14A", url: "https://www.sec.gov/Archives/edgar/data/1333986/000119312526279668/d115497ddefm14a.htm" },
        { label: "Stockholder approval (30 Jul 2026)", url: "https://investors.corebridgefinancial.com/news/news-details/2026/Corebridge-Financial-and-Equitable-Holdings-Stockholders-Approve-Merger/default.aspx" }
      ]
    },
    {
      market: "US",
      kicker: "1 · Product conflict",
      asOf: "September 2026",
      title: "VA / RILA / FIA / MYGA overlap — SCS vs MarketLock; retirement vs life",
      paragraphs: [
        "The live product clash is registered index-linked annuities. Equitable’s Structured Capital Strategies (SCS / SCS PLUS, and the 2026 SCS PLUS 26 N-4) is the incumbent buffer-and-cap franchise; management on the 26 March call called Equitable the number-one RILA writer. Corebridge’s competing registered product is MarketLock (American General Life, N-4 file 333-277203), a newer single-purchase-payment RILA with buffer strategies plus a proprietary Lock feature. Costantini said Corebridge “just entered [RILA] over the last 12 months” and that the shelves are complementary — Equitable #1 RILA, Corebridge a top fixed/index writer — and that the companies saw “very little dissynergies on the revenue side.” That is the issuer line. The field overlap is real: both will be asking the same banks, independent BDs, and IMOs to keep two buffer RILAs on the shelf after the brand collapses to Equitable.",
        "“Index Edge” is not a Corebridge product name on the public 2026 shelf. Equitable’s registered counterpart is Investment Edge, a variable annuity that also offers structured/buffer segments (Segment Buffer language on Equitable’s own disclosure — first-loss protection up to the stated buffer, typically cited up to 40%). Pacific Index Edge is a Pacific Life FIA and is not part of this deal. Corebridge’s non-registered accumulation shelf is the Power Series of Index Annuities (FIA) plus American Pathway / Assured Edge / related MYGA and fixed contracts. Equitable’s public rate posture in this dashboard is RILA/VA-led; it does not put up a standalone MYGA/FIA rate sheet the way Corebridge does. So the conflict map is: direct RILA-on-RILA (SCS vs MarketLock), Equitable Investment Edge vs whatever VA Corebridge still manufactures after the Venerable cession, and a fill-in rather than a clash on FIA/MYGA — Corebridge brings the principal-protected shelf Equitable largely does not run.",
        "Retirement vs life is the cleaner complement. The 26 March call: Equitable is VUL-centric; Corebridge is IUL-centric; the stated cross-sell is putting Corebridge life and fixed/index onto Equitable Advisors. Group retirement (403(b)/457) is Equitable’s worksite strength plus Corebridge’s tax-exempt adviser force. Institutional markets (PRT and related) is a Corebridge-led book Equitable does not match. The product-risk to watch into close is not life cannibalization — it is whether BD product committees keep both SCS and MarketLock, or force a single Equitable RILA and strand MarketLock wholesaling just as Corebridge was trying to scale it."
      ],
      sources: [
        { label: "26 Mar 2026 merger call (Rule 14a-12)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226000886/eh260757315_425-transcript.htm" },
        { label: "Equitable SCS / cap calendar", url: "https://equitable.com/annuities/variable-annuities/performance-cap-rates" },
        { label: "SCS PLUS 26 N-4 (18 Jun 2026)", url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526275133/d59590dn4.htm" },
        { label: "MarketLock 485BPOS", url: "https://www.sec.gov/Archives/edgar/data/5108/000119312526186396/d97165d485bpos.htm" },
        { label: "Equitable Investment Edge", url: "https://equitable.com/retirement/products/variable-annuities/investment-edge-annuity" },
        { label: "Investment Edge disclosure (Segment Buffer)", url: "https://equitable.com/financial-professionals/annuities/investment-edge-variable-annuity/disclosure" },
        { label: "Corebridge annuity shelf", url: "https://www.corebridgefinancial.com/what-we-offer/annuities" }
      ]
    },
    {
      market: "US",
      kicker: "2 · Distribution",
      asOf: "September 2026",
      title: "Equitable career / Advisors vs Corebridge wholesale, banks, IMOs",
      paragraphs: [
        "The two machines are different. Equitable’s owned retail channel is Equitable Advisors — about 4,600 registered financial professionals in the 26 March release (the call rounded affiliated wealth to “approximately 5,000” Equitable plus Corebridge advisers). That channel sold $12 billion of proprietary life and annuity product in 2025, per the call, and is the natural home for SCS, Investment Edge, and VUL. Corebridge’s distinctive reach is third-party wholesale: the AIG Life & Retirement / Corebridge Financial Distributors franchise into banks, independent broker-dealers, and IMOs, plus a smaller affiliated 403(b) force (the call: about 900 Corebridge advisers, including about 300 focused on out-of-plan assets).",
        "Post-close org design puts Corebridge’s John Byrne over Individual Distribution — “more than 900 relationships with banks, broker-dealers and independent marketing organizations” (12 May 2026 Rule 14a-12 leadership release). The 26 March call used a wider figure: “over 1,200 different sales agreements” in wholesale. Both numbers are issuer statements from different dates; they are not the same census and should not be averaged. David Karr (Equitable Advisors chair) is slated to lead Wealth Management, combining Equitable Advisors with Corebridge financial professionals. Steve Scanlon (Equitable IR/GR) is slated for Group Retirement / 403(b)–457. Bryan Pinsky (Corebridge Individual Retirement and Life) is slated to run the combined IR and life factories.",
        "Channel conflict is the execution risk. Equitable Advisors is a career-style, advice-driven, proprietary-product engine. Corebridge wholesale is a shelf-and-wholesaler engine that already rebranded once (AIG Life & Retirement → Corebridge) and will now sell under Equitable. Bank and IMO desks that still search “AIG annuity” or “Corebridge Power Series” will see a third name in four years. Independent BDs that already carry both SCS and MarketLock will get one manufacturer, two wholesaler teams, and one compensation grid — a classic post-merger disintermediation of the weaker RILA. The call’s bull case is complementary: put Power Series FIA, MYGA, and IUL onto Equitable Advisors, and put SCS deeper into Corebridge bank/IMO tickets. That only works if Byrne’s wholesale shop does not starve SCS in bank channels or starve MarketLock at the BDs that just adopted it."
      ],
      sources: [
        { label: "26 Mar 2026 merger call (distribution slides)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226000886/eh260757315_425-transcript.htm" },
        { label: "12 May 2026 leadership 425 (Byrne / Karr / Pinsky)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226001360/eh260778458_425.htm" },
        { label: "EQH IR joint release (Advisors ~4,600)", url: "https://ir.equitableholdings.com/news-and-events/investor-releases/news-details/2026/Corebridge-Financial-and-Equitable-Holdings-Announce-Transformational-Merger/default.aspx" }
      ]
    },
    {
      market: "US",
      kicker: "3 · Forward view",
      asOf: "September 2026",
      title: "Retention vs new business — integration, brand, in-force",
      paragraphs: [
        "In-force and new business are different books. Existing Equitable Financial Life, Equitable America, American General Life, and US Life contracts stay legal obligations of the issuing companies; a holding-company merger does not rewrite buffers, caps, living benefits, or surrender schedules. The retention question is service and confidence: two administrations, two portals, and a planned Integration Office under Jeffrey Hurd (Equitable COO), plus more than $500 million of expense synergies by end-2028 that the companies said are largely redundant systems, vendors, and headcount. That is exactly the path that produces delayed statements, stalled 1035s, and wholesaler blackout weeks. In-force persistency on advice-driven Equitable Advisors cases should be more resilient than rate-shopped MYGA/FIA sold through banks and IMOs — the call itself said affiliated advice sales typically show higher persistency.",
        "New-business success is a 2027–2028 story, not a close-day story. Near-term, both firms are under a no-shop / ordinary-course covenant until close; the RILA arms race (SCS PLUS 26 still in registration; MarketLock still being amended) continues on two legal entities. After close the brand is Equitable, the CEO is Corebridge, and the HQ is Houston — a split identity that helps Equitable Advisors (name continuity) and costs Corebridge wholesale (second rebrand). Sales upside the companies named and that is actually testable: (1) Power Series / MYGA / IUL through Equitable Advisors, (2) SCS tickets through Corebridge bank and IMO agreements, (3) 403(b) rollovers into the affiliated wealth channel. Sales downside that the companies minimized: BD shelf consolidation of the two RILAs, wholesaler attrition, and a service dip that shows up first in replacement and 1035 volume.",
        "Customer-retention watch items into late 2026 and 2027: whether state insurance departments condition close on service or branding commitments; whether AM Best / S&P / Moody’s treat the combination as credit-neutral once leverage (issuers’ 26% pro forma figure) and RBC (issuers’ ~440% pro forma YE 2025) are restated; and whether Corebridge’s already-ceded VA owners — now at Venerable for risk — experience a third administrator change. Do not score “sales success” off the $22 billion headline or the 10% accretion target. Score it off whether Equitable Advisors actually writes FIA/IUL, whether MarketLock remains on bank shelves under the Equitable brand, and whether in-force call-center metrics hold through the synergy takeout."
      ],
      sources: [
        { label: "26 Mar 2026 merger call (synergies / persistency)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226000886/eh260757315_425-transcript.htm" },
        { label: "12 May 2026 leadership 425 (Integration Office)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000095014226001360/eh260778458_425.htm" },
        { label: "CRBG EX-99.1 (brand, HQ, synergy language)", url: "https://www.sec.gov/Archives/edgar/data/1889539/000114036126011260/ef20068723_ex99-1.htm" }
      ]
    },
    {
      market: "US",
      kicker: "4 · Venerable",
      asOf: "September 2026",
      title: "VA cessions to Venerable — and Equitable’s ownership slice",
      paragraphs: [
        "Equitable’s Venerable relationship is older than this merger. On 1 June 2021 Equitable closed the sale of Corporate Solutions Life Re (CS Life) to Venerable and ceded a 2006–2008 legacy variable-annuity block (coinsurance / modified coinsurance). Cash purchase price filed at the time: $215 million, plus a $60 million surplus note issued to Equitable Financial. As part of that close, Equitable took a 9.09% equity stake in Venerable’s parent, VA Capital Company LLC, with a right to designate a member of the Board of Managers. Equitable’s Q4 2025 subsidiary organization chart still lists VA Capital Company LLC at 9.10%, owned through Equitable Investment Management (EIM). That is the current public ownership print — a noncontrolling slice, not control. Venerable’s other disclosed owners at formation were Apollo, Crestview, Reverence, and Athene.",
        "The 2025–2026 activity made the stake more material. In March 2025 Venerable announced novation of Equitable Accumulator Series 06, 07, and 8.1 contracts (already reinsured) onto the Venerable administrative platform — moving servicing and, for owners who accept the exchange offer, the legal issuer to Venerable Insurance and Annuity Company. Separately, on 26 June 2025 Corebridge agreed to reinsure its entire Individual Retirement VA in-force book — $51 billion of account value as of 31 March 2025 ($5 billion general account, 100% coinsurance; $46 billion separate account, modified coinsurance) — to CS Life Re, plus AGL flow reinsurance on new IR VA and the sale of SunAmerica Asset Management (SAAMCo). Corebridge’s release valued that package at $2.8 billion of ceding commission plus capital release and about $2.1 billion of net after-tax distributable proceeds. The AGL block closed in 2025; Corebridge and Venerable announced the US Life and SAAMCo pieces closed in January 2026.",
        "Conflict if Equitable owns a slice of the reinsurer of its own — and Corebridge’s — VA books: after close, New Equitable is the parent of both cedents and still a ~9.1% owner (via EIM) of the parent of CS Life Re / Venerable. Economics that then sit inside one group’s perimeter include ceding commissions, flow-reinsurance pricing on AGL new VA, collateral / comfort-trust terms, recapture, and any future novation of remaining Equitable VA. That is affiliated-reinsurance optics even at a minority stake, especially with a historical board-designation right at VA Capital. It is not a hidden relationship — EQH has disclosed the 2021 stake for years — but the Corebridge $51 billion cession plus flow treaty is new scale on the same counterparty. Watch items: whether the joint proxy or closing conditions require a waiver, recusal, or sale of the VA Capital slice; whether rating agencies treat Venerable as a related-party concentration for the combined VA runoff; and whether Equitable Advisors / Corebridge wholesalers are still originating VA that immediately flows to a reinsurer in which the manufacturer owns a slice. No public 2026 filing reviewed here states that Equitable has sold the 9.10% stake."
      ],
      sources: [
        { label: "EQH Venerable close (1 Jun 2021, 9.09% VA Capital)", url: "https://ir.equitableholdings.com/news-and-events/investor-releases/news-details/2021/Equitable-Holdings-Closes-Legacy-Variable-Annuity-Reinsurance-Transaction-with-Venerable/default.aspx" },
        { label: "EQH EX-99.1 (1 Jun 2021)", url: "https://www.sec.gov/Archives/edgar/data/1333986/000119312521177928/d178144dex991.htm" },
        { label: "EQH Q4 2025 org chart (EIM 9.10%)", url: "https://www.sec.gov/Archives/edgar/data/2038891/000119312526169495/d30519dex9929.htm" },
        { label: "Venerable Accumulator novation (10 Mar 2025)", url: "https://www.businesswire.com/news/home/20250310136969/en/Venerable-Novates-Initial-Block-of-Variable-Annuities-from-Equitable" },
        { label: "CRBG–Venerable VA transaction (26 Jun 2025)", url: "https://investors.corebridgefinancial.com/news/news-details/2025/Corebridge-Financial-Announces-Transformative-Individual-Retirement-Variable-Annuity-Transaction-with-Venerable/default.aspx" },
        { label: "CRBG EX-99.1 (26 Jun 2025)", url: "https://www.sec.gov/Archives/edgar/data/1889539/000162828025033068/pressrelease.htm" }
      ]
    }
  ],

  usMarketThreats: [
    {
      title: "Private-credit concentration in PE-backed annuity general accounts",
      severity: "Critical",
      market: "US",
      summary:
        "Athene, Global Atlantic, and other alternative-asset-backed writers fund MYGA/FIA growth with private credit, structured assets, and affiliated reinsurance. A credit or liquidity shock hits statutory surplus and retail crediting at the same time, which is now a Federal Reserve and NAIC watch item rather than a niche ALM footnote.",
      sourceLabel: "Federal Reserve Financial Stability Report",
      sourceUrl: "https://www.federalreserve.gov/publications/financial-stability-report.htm"
    },
    {
      title: "MYGA / FIA spread compression when Treasury yields fall",
      severity: "Elevated",
      market: "US",
      summary:
        "Fixed-rate deferred and FIA sales still dominate industry volume. If the 10-year and money-market curve drop faster than portfolio yields, new-money spreads compress, bonus and cap rates reprice, and 2024–2025 vintage liabilities become expensive to replace.",
      sourceLabel: "LIMRA Q2 2026 individual annuity sales (final)",
      sourceUrl: "https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-reach-%24121.2-billion-in-the-second-quarter-of-2026-setting-a-new-first-half-record/"
    },
    {
      title: "RILA complexity and retail comprehension",
      severity: "Elevated",
      market: "US",
      summary:
        "RILA was the fastest-growing public product line in Q2 2026 ($23.3B). Buffer, cap, and dual-direction designs are hard to illustrate. SEC registered-product reviews and state advertising exams remain the enforcement path if households treat a buffer as a guarantee.",
      sourceLabel: "SEC Investment Management",
      sourceUrl: "https://www.sec.gov/investment"
    },
    {
      title: "VA living-benefit hedge cost in a vol spike",
      severity: "Watch",
      market: "US",
      summary:
        "Traditional VA recovered with equities ($17.7B in Q2 2026), but GLWB/GMIB blocks still require equity and rate hedges. A joint equity-down / vol-up / rate-down move raises reserve and hedging cost for Jackson, Equitable, Lincoln, and Prudential-style books.",
      sourceLabel: "LIMRA Q2 2026 VA commentary",
      sourceUrl: "https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-reach-%24121.2-billion-in-the-second-quarter-of-2026-setting-a-new-first-half-record/"
    },
    {
      title: "Offshore and captive annuity reinsurance",
      severity: "Critical",
      market: "US",
      summary:
        "Flow reinsurance to Bermuda and other captives lets writers take more retail MYGA/FIA than their onshore capital would support. NAIC reinsurance and RBC workstreams are the U.S. policy response; a collateral or recapture event would hit both cedent surplus and new-business capacity.",
      sourceLabel: "NAIC reinsurance topic",
      sourceUrl: "https://content.naic.org/cipr-topics/reinsurance"
    },
    {
      title: "Advice-standard and rollover conflict risk",
      severity: "Elevated",
      market: "US",
      summary:
        "Reg BI, DOL fiduciary overlays, and NAIC best-interest rules all sit on 401(k)-to-IRA and annuity replacements. Documentation failures, proprietary product bias, and replacement of existing contracts are the exam themes for BDs, RIAs, and career agencies.",
      sourceLabel: "DOL EBSA",
      sourceUrl: "https://www.dol.gov/agencies/ebsa"
    },
    {
      title: "Cyber and third-party operational risk",
      severity: "Watch",
      market: "US",
      summary:
        "Annuity and life platforms concentrate PII, beneficiary data, and payment instructions. A vendor or administrator outage can freeze new issues and systematic withdrawals across multiple carriers that share the same third-party administrator.",
      sourceLabel: "NAIC insurance topics",
      sourceUrl: "https://content.naic.org/cipr-topics"
    }
  ],

  japanMarketThreats: [
    {
      title: "JGB yield and duration gap under ESR",
      severity: "Critical",
      market: "JP",
      summary:
        "Japan’s economic-value solvency ratio (ESR) took effect at end-March 2026, so long guarantees and superlong JGB books are now marked to market. The FSA’s 2025 field test showed average life-insurer ESR falling about 8 points on a 50bp yen-rate rise, which makes duration mismatch a capital event rather than an accounting footnote.",
      sourceLabel: "FSA Annual Report on Insurance Monitoring (Aug 2026)",
      sourceUrl: "https://www.fsa.go.jp/en/news/2026/20260806/01.pdf"
    },
    {
      title: "Yen FX annuity sales-conduct risk",
      severity: "Elevated",
      market: "JP",
      summary:
        "Bank-window USD and AUD single-premium annuities at specialists such as MS Primary, Dai-ichi Frontier, and PGF still compete with yen savings, but FSA monitoring keeps flagging weak risk-return checks and target-type replacement sales. Suitability, FX-risk disclosure, and follow-up after yen swings remain the enforcement pressure points as households re-risk.",
      sourceLabel: "FSA customer-oriented conduct monitoring (July 2025)",
      sourceUrl: "https://www.fsa.go.jp/news/r6/kokyakuhoni/20250701/02.pdf"
    },
    {
      title: "Kampo / Japan Post Insurance annuity runoff",
      severity: "Critical",
      market: "JP",
      summary:
        "Japan Post Insurance still holds one of the largest legacy individual-annuity books, but new postal annuity growth has been constrained by past misconduct remedies and a shrinking post-office savings franchise. The runoff leaves a long, low-spread liability that must be ALM-managed under ESR while peers recapture bank and planner channels.",
      sourceLabel: "Japan Post Insurance English site",
      sourceUrl: "https://www.jp-life.japanpost.jp/english/"
    },
    {
      title: "Third-sector medical and cancer competition",
      severity: "Elevated",
      market: "JP",
      summary:
        "Medical, cancer, and living-benefit (third-sector) products are the main growth engine after first-sector savings slowed, and Aflac Japan plus the domestic majors are competing on price and riders. Margin compression and lapse or replacement risk rise as households already hold overlapping medical covers.",
      sourceLabel: "Life Insurance Association of Japan statistics",
      sourceUrl: "https://www.seiho.or.jp/english/statistics/"
    },
    {
      title: "Shrinking working-age buyer pool",
      severity: "Critical",
      market: "JP",
      summary:
        "Japan’s fertility decline and shrinking working-age population cut the natural buyer base for new life and deferred annuities. Carriers are shifting toward older-age medical, inheritance, and in-force persistency, which concentrates longevity and morbidity risk just as new-money volume gets harder to replace.",
      sourceLabel: "Cabinet Office Annual Report on the Aging Society",
      sourceUrl: "https://www8.cao.go.jp/kourei/english/annualreport/index-wh.html"
    },
    {
      title: "New NISA crowding out guaranteed savings",
      severity: "Elevated",
      market: "JP",
      summary:
        "The 2024 New NISA (higher annual caps and no term limit) is pulling household cash into tax-advantaged funds and ETFs instead of yen endowments and individual annuities. Banks and planners that once defaulted to guaranteed insurance now compete with FSA-promoted investment trusts for the same deposit stock.",
      sourceLabel: "FSA New NISA (2024 program)",
      sourceUrl: "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/index.html"
    },
    {
      title: "Yen rate volatility and guarantee repricing",
      severity: "Elevated",
      market: "JP",
      summary:
        "The exit from zero rates and 2025–2026 swings in superlong JGB yields pushed mid-size life insurers to cut 30- and 40-year bond exposure and prompted faster FSA balance-sheet reviews. Fast yield moves hit unrealized JGB losses and the market value of guarantees in the same quarter, so crediting rates, hedge costs, and product pricing can gap together.",
      sourceLabel: "Milliman: interest-rate hedging of JPY insurance liabilities",
      sourceUrl: "https://www.milliman.com/en/insight/interest-rate-risk-hedging-jpy-denominated-insurance-liabilities"
    }
  ],

  executive: [
    { label: "Carriers tracked", value: "60" },
    { label: "US top-15 annuity (2025 YE)", value: "$297B" },
    { label: "LIMRA Q2 2026 industry", value: "$121.2B" },
    { label: "JP annuity policies", value: "~20M" }
  ],

  briefing:
    "Coverage is the top 15 annuity writers and top 15 life writers in the United States and Japan (60 names). LIMRA’s final Q2 2026 survey put U.S. individual annuity sales at $121.2B (H1 $228.7B, a first-half record). 2025 year-end carrier ranks still lead the top-15 table (Athene, New York Life, Corebridge). Equitable and Corebridge agreed on 26 March 2026 to an all-stock combination (stockholder-approved 30 July 2026; close still targeted by year-end 2026) — evaluation is on the United States Executive cards only. Japan remains deposit-heavy, but New NISA and Bank of Japan household-asset data show a slow shift into funds, ETFs, and guaranteed savings.",

  limra: {
    period: "Q2 2026 final (public 8 Sep 2026)",
    latestLabel: "Latest public LIMRA: Q2 2026 final, not a preliminary print",
    q2Total: 121.2,
    h1Total: 228.7,
    coverage: "93% of the U.S. individual annuity market",
    definitionNote:
      "From January 2026 LIMRA counts all money paid into new and existing contracts, including internal transfers.",
    url: "https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-reach-%24121.2-billion-in-the-second-quarter-of-2026-setting-a-new-first-half-record/",
    mixQ2: [
      { label: "FA (fixed-rate deferred)", value: 41.8, note: "Q2 2026; H1 $77.4B" },
      { label: "FIA", value: 30.6, note: "Q2 2026; H1 $57.4B" },
      { label: "RILA", value: 23.3, note: "Q2 2026 record; H1 $44.4B" },
      { label: "VA (traditional)", value: 17.7, note: "Q2 2026; H1 $34.9B" },
      { label: "SPIA", value: 4.1, note: "Q2 2026 record" },
      { label: "DIA", value: 1.3, note: "Q2 2026" }
    ]
  },

  markets: {
    brief:
      "Annual bars are LIMRA U.S. individual annuity sales ($B). 2024 calendar-year record $434.1B; 2025 year-end $464.1B (LIMRA final, March 2026). S&P 500 (FRED SP500 / Yahoo ^GSPC) and the 10-year Treasury (FRED DGS10) are year-end overlays on a dual axis. Product mix is traditional VA, fixed-rate deferred (FA), FIA, and RILA — SPIA, DIA, and structured settlements are excluded.",
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    performance: [219.1, 254.8, 312.8, 385.4, 434.1, 464.1],
    sales: [219.1, 254.8, 312.8, 385.4, 434.1, 464.1],
    spxYearEnd: [3756.07, 4766.18, 3839.5, 4769.83, 5881.63, 6845.5],
    dgs10YearEnd: [0.93, 1.52, 3.88, 3.88, 4.58, 4.18],
    overlayNote:
      "SP500 year-end: FRED SP500 and Yahoo ^GSPC (same prints). DGS10 year-end: FRED. Fetched 25 Sep 2026.",
    productMix: {
      va: [74.7, 86.6, 61.8, 51.4, 58.2, 63.1],
      fa: [52.4, 53.1, 113.0, 164.9, 155.9, 165.3],
      fia: [55.4, 63.7, 79.8, 95.9, 126.9, 127.9],
      rila: [24.1, 38.7, 41.1, 47.4, 66.4, 79.5]
    },
    seriesNotes: {
      sales:
        "LIMRA U.S. Individual Annuity Sales Survey year-end ($B): 219.1 (2020), 254.8 (2021), 312.8 (2022), 385.4 (2023), 434.1 (2024, Mar 2025), 464.1 (2025, Mar 2026).",
      sp500:
        "FRED SP500 / Yahoo ^GSPC year-end close: 3756.07, 4766.18, 3839.50, 4769.83, 5881.63, 6845.50.",
      treasury10y: "FRED DGS10 year-end percent: 0.93, 1.52, 3.88, 3.88, 4.58, 4.18.",
      productMix:
        "LIMRA product-line $B. VA = traditional variable; FA = fixed-rate deferred; FIA = fixed indexed; RILA = registered index-linked. 2020 implied from SRI 2021 YE published YoY. 2021–22: LIMRA 4Q 2022 final PDF / Mar 2023. 2023: LIMRA Mar 2024 final. 2024–25: LIMRA 4Q 2025 estimates PDF (https://www.limra.com/siteassets/newsroom/fact-tank/sales-data/2025/4q/4q-2025-annuity-sales-estimates-final.pdf)."
    }
  },

  fred: {
    brief:
      "FRED year-end levels through 2024. Series are SP500, DGS10, BAMLC0A0CM (ICE BofA U.S. Corporate OAS), and BAMLH0A0HYM2 (ICE BofA U.S. High Yield OAS). OAS points are rounded year-end readings, not a live quote — confirm the exact print on FRED. 2025–2026 values are left blank on purpose.",
    labels: ["2020", "2021", "2022", "2023", "2024"],
    sp500: [3756, 4766, 3840, 4769, 5882],
    dgs10: [0.93, 1.52, 3.88, 3.88, 4.58],
    igOas: [1.00, 0.97, 1.38, 1.04, 0.86],
    hyOas: [4.18, 3.28, 4.81, 3.63, 2.92],
    sources: [
      "https://fred.stlouisfed.org/series/SP500",
      "https://fred.stlouisfed.org/series/DGS10",
      "https://fred.stlouisfed.org/series/BAMLC0A0CM",
      "https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
    ]
  },

  risk: {
    market: 58,
    volatility: 18.4,
    regulatory: 74,
    critical: 3
  },

  riskItems: [
    {
      name: "FIA / MYGA spread compression if rates fall",
      owner: "US annuities",
      market: "US",
      severity: "Elevated",
      score: 72,
      justification: "LIMRA Q2 2026: FRD $41.8B and FIA $30.6B still dominate; crediting is rate-sensitive",
      sourceLabel: "LIMRA Q2 2026",
      url: "https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-reach-%24121.2-billion-in-the-second-quarter-of-2026-setting-a-new-first-half-record/"
    },
    {
      name: "Variable-annuity guarantee cost in a vol spike",
      owner: "US VA writers",
      market: "US",
      severity: "Watch",
      score: 64,
      justification: "Traditional VA rose to $17.7B in Q2 2026; living-benefit hedge cost still scales with vol",
      sourceLabel: "LIMRA Q2 2026",
      url: "https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-reach-%24121.2-billion-in-the-second-quarter-of-2026-setting-a-new-first-half-record/"
    },
    {
      name: "Japan duration gap as JGB yields normalize",
      owner: "JP life",
      market: "JP",
      severity: "Critical",
      score: 81,
      justification: "FSA ESR is in force; field tests showed ESR falling on a yen-rate rise",
      sourceLabel: "FSA insurance monitoring (Aug 2026)",
      url: "https://www.fsa.go.jp/en/news/2026/20260806/01.pdf"
    },
    {
      name: "New NISA conduct / suitability risk",
      owner: "JP retail",
      market: "JP",
      severity: "Watch",
      score: 55,
      justification: "FSA New NISA plus customer-oriented conduct rules on risk-product sales",
      sourceLabel: "FSA New NISA",
      url: "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/index.html"
    },
    {
      name: "Private-credit and RILA complexity in DC/retail",
      owner: "US retail",
      market: "US",
      severity: "Elevated",
      score: 70,
      justification: "Fed FSR flags private-credit liquidity; RILA hit a $23.3B quarterly record",
      sourceLabel: "Fed Financial Stability Report",
      url: "https://www.federalreserve.gov/publications/financial-stability-report.htm"
    },
    {
      name: "Kampo / legacy Japan Post annuity run-off",
      owner: "Japan Post Insurance",
      market: "JP",
      severity: "Critical",
      score: 78,
      justification: "Large legacy postal annuity book with constrained new business",
      sourceLabel: "Japan Post Insurance",
      url: "https://www.jp-life.japanpost.jp/english/"
    }
  ],

  regulation: [
    {
      title: "NAIC Suitability in Annuity Transactions (Model #275)",
      jurisdiction: "US states",
      market: "US",
      category: "insurance",
      status: "In force",
      impact: "High",
      summary:
        "State best-interest standard for annuity recommendations. Requires producer training, a documented best-interest analysis, and extra care on replacements of existing FIAs, MYGAs, VAs, and RILAs. Most states have adopted the 2020 revision; remaining holdouts still use older suitability language. Exam focus is illustration, compensation conflict, and replacement of a living-benefit contract.",
      sourceLabel: "NAIC Model #275",
      sourceUrl: "https://content.naic.org/sites/default/files/inline-files/MDL-275.pdf"
    },
    {
      title: "NAIC / state illustration and index-linked advertising",
      jurisdiction: "US states",
      market: "US",
      category: "insurance",
      status: "Ongoing",
      impact: "Medium",
      summary:
        "State insurance departments review FIA and RILA advertising, hypothetical index illustrations, and bonus language. Caps, participation rates, and buffers must not be presented as guaranteed equity returns. This is insurance-form and market-conduct work, not an SEC registration issue, except where the product is a registered RILA.",
      sourceLabel: "NAIC annuity topic",
      sourceUrl: "https://content.naic.org/cipr-topics/annuities"
    },
    {
      title: "Offshore / captive reinsurance and RBC",
      jurisdiction: "US states",
      market: "US",
      category: "insurance",
      status: "Active",
      impact: "High",
      summary:
        "NAIC reinsurance and RBC workstreams target flow reinsurance of MYGA/FIA blocks to Bermuda and other captives. Collateral, recapture, and affiliated-asset concentration affect how much new retail annuity a writer can take. This is a solvency rule, not a retail-advice rule.",
      sourceLabel: "NAIC reinsurance",
      sourceUrl: "https://content.naic.org/cipr-topics/reinsurance"
    },
    {
      title: "SEC Regulation Best Interest and Form CRS",
      jurisdiction: "US",
      market: "US",
      category: "retail",
      status: "Active",
      impact: "High",
      summary:
        "Broker-dealers recommending a registered annuity, RILA, or IRA rollover must meet Reg BI care, disclosure, conflict, and compliance obligations and deliver Form CRS. Applies to the securities recommendation, including 401(k)-to-IRA moves into a VA or RILA, even when a state insurance license is also required.",
      sourceLabel: "SEC Regulation Best Interest",
      sourceUrl: "https://www.sec.gov/regulation-best-interest"
    },
    {
      title: "DOL fiduciary / retirement-advice overlay",
      jurisdiction: "US",
      market: "US",
      category: "retail",
      status: "Active",
      impact: "High",
      summary:
        "EBSA fiduciary interpretations and PTE conditions still shape how advisors document annuity rollovers from ERISA plans. The insurance product may be state-regulated; the rollover recommendation is a federal retirement-advice event. Recordkeeping and proprietary-product conflicts are the exam themes.",
      sourceLabel: "DOL EBSA",
      sourceUrl: "https://www.dol.gov/agencies/ebsa"
    },
    {
      title: "SEC RILA / registered-index disclosure",
      jurisdiction: "US",
      market: "US",
      category: "retail",
      status: "Ongoing",
      impact: "Medium",
      summary:
        "Registered index-linked annuities file on Form N-4. Staff focus is cap and buffer mechanics, fee drag, and whether retail investors treat a buffer as a guarantee. This is securities-disclosure work; unregistered FIAs stay in SERFF/state files.",
      sourceLabel: "SEC Investment Management",
      sourceUrl: "https://www.sec.gov/investment"
    },
    {
      title: "Japan economic-value solvency (ESR)",
      jurisdiction: "Japan",
      market: "JP",
      category: "insurance",
      status: "In force",
      impact: "High",
      summary:
        "FSA economic-value solvency (ICS-aligned) applied from end-March 2026. Long guarantees, superlong JGBs, and FX annuity hedges are marked to market. Duration mismatch is now a capital event. Mid-size life companies have already been cutting 30- and 40-year bond exposure.",
      sourceLabel: "FSA insurance monitoring (Aug 2026)",
      sourceUrl: "https://www.fsa.go.jp/en/news/2026/20260806/01.pdf"
    },
    {
      title: "FSA foreign-currency insurance sales monitoring",
      jurisdiction: "Japan",
      market: "JP",
      category: "insurance",
      status: "Active",
      impact: "High",
      summary:
        "Bank-window USD and AUD single-premium annuities remain an FSA conduct priority. Weak risk-return checks, target-type replacements, and missing FX-risk follow-up after yen swings are the enforcement points for MS Primary, Frontier, and PGF-style shelves.",
      sourceLabel: "FSA customer-oriented conduct (July 2025)",
      sourceUrl: "https://www.fsa.go.jp/news/r6/kokyakuhoni/20250701/02.pdf"
    },
    {
      title: "FSA New NISA and household investment conduct",
      jurisdiction: "Japan",
      market: "JP",
      category: "retail",
      status: "In force",
      impact: "High",
      summary:
        "The 2024 New NISA (tsumitate ¥1.2M + growth ¥2.4M annual caps, no term limit) is the retail-investment regime change. FSA customer-oriented business-conduct rules apply to banks and securities firms selling funds, wrap accounts, and risk products next to deposits.",
      sourceLabel: "FSA New NISA (2024 program)",
      sourceUrl: "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/index.html"
    },
    {
      title: "iDeCo / defined-contribution sales conduct",
      jurisdiction: "Japan",
      market: "JP",
      category: "retail",
      status: "In force",
      impact: "Medium",
      summary:
        "iDeCo and corporate DC sit beside NISA as the other tax-advantaged retail channel. Suitability and fee disclosure on foreign-equity funds and default options are the FSA/MHLW watch items, separate from insurance ESR.",
      sourceLabel: "FSA NISA / asset-income policy",
      sourceUrl: "https://www.fsa.go.jp/policy/nisa2/index.html"
    },
    {
      title: "IAIS ICS monitoring",
      jurisdiction: "Global",
      market: "Global",
      category: "insurance",
      status: "Active",
      impact: "Medium",
      summary:
        "International Capital Standard monitoring for internationally active insurance groups. Relevant to U.S. and Japan majors with cross-border books (Prudential, MetLife, Dai-ichi, Nippon Life). ICS is the global template behind Japan ESR.",
      sourceLabel: "IAIS ICS",
      sourceUrl: "https://www.iais.org/uploads/2024/01/ICS-as-a-PCR.pdf"
    }
  ],

  usAnnuities: [
    { rank: 1, company: "Athene Annuity & Life", parent: "Apollo / Athene", sales: 34.46, focus: "FIA, MYGA, flow reinsurance", listing: "Listed parent", ticker: "APO", topProduct: "AccuMax FIA / MYG", strategies: "n/a — FIA index options on carrier rate sheet", strategyUrl: "https://www.athene.com/products/fia/accumax" },
    { rank: 2, company: "New York Life", parent: "New York Life", sales: 30.61, focus: "Fixed, SPIA, career agency", listing: "Mutual", ticker: "Mutual", topProduct: "Secure Term MYGA", strategies: "n/a — MYGA terms, not index segments", strategyUrl: "https://www.nylannuities.com/new-york-life-annuities/fixed-deferred-annuities" },
    { rank: 3, company: "Corebridge Financial", parent: "Corebridge (ex-AIG)", sales: 26.82, focus: "Fixed, index, retirement", listing: "Listed", ticker: "CRBG", topProduct: "MarketLock RILA", strategies: "n/a — see N-4 index-linked strategies", strategyUrl: "https://www.sec.gov/Archives/edgar/data/5108/000119312526186396/d97165d485bpos.htm" },
    { rank: 4, company: "Equitable Financial", parent: "Equitable Holdings", sales: 23.16, focus: "Variable, RILA, buffer", listing: "Listed", ticker: "EQH", topProduct: "Structured Capital Strategies", strategies: "SCS buffers typically first 10–40% of loss; segment count in prospectus", strategyUrl: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526169414/0001193125-26-169414-index.htm" },
    { rank: 5, company: "Jackson National Life", parent: "Jackson Financial", sales: 22.72, focus: "VA, RILA, independent BD", listing: "Listed", ticker: "JXN", topProduct: "Perspective II VA / Market Link Pro", strategies: "MLP buffers, caps, fixed account — count in N-4", strategyUrl: "https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html" },
    { rank: 6, company: "Allianz Life of North America", parent: "Allianz SE", sales: 22.48, focus: "FIA, registered index", listing: "Listed parent", ticker: "ALV", topProduct: "Allianz 222 FIA / Index Advantage", strategies: "n/a — FIA index-lock paths; RILA in N-4", strategyUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/222" },
    { rank: 7, company: "Nationwide", parent: "Nationwide", sales: 21.92, focus: "VA, FIA, advisory", listing: "Mutual", ticker: "Mutual", topProduct: "Defined Protection / Defender RILA", strategies: "n/a — index-linked strategies in N-4", strategyUrl: "https://www.sec.gov/Archives/edgar/data/1127203/000119312526180719/d88953d485bpos.htm" },
    { rank: 8, company: "Massachusetts Mutual Life", parent: "MassMutual", sales: 19.68, focus: "Fixed, institutional flow", listing: "Mutual", ticker: "Mutual", topProduct: "Fixed / institutional annuity", strategies: "n/a — not a retail index-segment shelf", strategyUrl: "https://www.massmutual.com/retirement/annuities" },
    { rank: 9, company: "Lincoln Financial Group", parent: "Lincoln National", sales: 17.18, focus: "VA, RILA, workplace", listing: "Listed", ticker: "LNC", topProduct: "Core Income VA", strategies: "n/a — VA subaccounts + RILA in N-4", strategyUrl: "https://www.sec.gov/Archives/edgar/data/1048606/000110465926047651/tm265267d1_485bpos.htm" },
    { rank: 10, company: "Pacific Life", parent: "Pacific Life", sales: 16.28, focus: "VA, FIA, high-net-worth", listing: "Mutual", ticker: "Mutual", topProduct: "HNW VA / FIA shelf", strategies: "n/a — see product page / prospectus", strategyUrl: "https://www.pacificlife.com/home/products/annuities.html" },
    { rank: 11, company: "Prudential", parent: "Prudential Financial", sales: 15.32, focus: "VA, income, institutional", listing: "Listed", ticker: "PRU", topProduct: "Discovery Plus VA", strategies: "n/a — VA funds; living-benefit terms in N-4", strategyUrl: "https://www.sec.gov/Archives/edgar/data/711201/000113322826005498/dp-efp23952_485bpos.htm" },
    { rank: 12, company: "Sammons Financial Companies", parent: "Sammons / Midland", sales: 12.90, focus: "FIA, Midland National", listing: "Private", ticker: "Private", topProduct: "Midland National FIA", strategies: "n/a — FIA index options on rate sheet", strategyUrl: "https://www.midlandnational.com/" },
    { rank: 13, company: "Global Atlantic Financial Group", parent: "KKR / Global Atlantic", sales: 12.34, focus: "Fixed, flow reinsurance", listing: "Listed parent", ticker: "KKR", topProduct: "Fixed / MYGA + flow reinsurance", strategies: "n/a — not a retail VA/RILA complex", strategyUrl: "https://www.globalatlantic.com/annuities" },
    { rank: 14, company: "Fidelity & Guaranty Life", parent: "F&G / Fidelity National", sales: 10.50, focus: "FIA, MYGA", listing: "Listed", ticker: "FG", topProduct: "F&G FIA / MYGA", strategies: "n/a — FIA index options on rate sheet", strategyUrl: "https://www.fglife.com/annuities" },
    { rank: 15, company: "Delaware Life", parent: "Group 1001", sales: 10.45, focus: "Fixed, indexed", listing: "Private", ticker: "Private", topProduct: "Fixed / indexed annuity", strategies: "n/a — FIA crediting on product page", strategyUrl: "https://www.delawarelife.com/" }
  ],

  japanAnnuities: [
    { rank: 1, company: "Nippon Life (Nissay)", parent: "Nippon Life", metric: "~4.0M in-force", focus: "Individual annuity flagship; largest book", listing: "Mutual", ticker: "Mutual", currency: "JPY", topProduct: "Participating individual annuity" },
    { rank: 2, company: "Sumitomo Life", parent: "Sumitomo Life", metric: "~3.0M in-force", focus: "Traditional individual annuities", listing: "Mutual", ticker: "Mutual", currency: "JPY", topProduct: "Yen individual annuity" },
    { rank: 3, company: "Dai-ichi Life", parent: "Dai-ichi Life Holdings", metric: "Top-3 in-force", focus: "Bank and tied-agent annuity", listing: "Listed", ticker: "8750.T", currency: "JPY", topProduct: "Tied-agent / bank yen annuity" },
    { rank: 4, company: "Meiji Yasuda Life", parent: "Meiji Yasuda", metric: "Top-4 in-force", focus: "Career-agent individual annuity", listing: "Mutual", ticker: "Mutual", currency: "JPY", topProduct: "Career-agent yen annuity" },
    { rank: 5, company: "Sony Life", parent: "Sony Financial", metric: "~1.9M in-force; #1 new count", focus: "Variable / unit-linked annuity growth", listing: "Listed parent", ticker: "8729.T", currency: "JPY", topProduct: "Variable / unit-linked annuity" },
    { rank: 6, company: "Dai-ichi Frontier Life", parent: "Dai-ichi Life Holdings", metric: "Top new-business VA", focus: "Bank-sold variable annuities", listing: "Listed parent", ticker: "8750.T", currency: "JPY / USD", topProduct: "Bank-sold variable annuity" },
    { rank: 7, company: "Japan Post Insurance (Kampo)", parent: "Japan Post Holdings", metric: "Large but shrinking book", focus: "Legacy postal annuities in run-off growth", listing: "Listed", ticker: "7181.T", currency: "JPY", topProduct: "Postal individual annuity" },
    { rank: 8, company: "T&D Financial Life", parent: "T&D Holdings", metric: "Rising VA / annuity", focus: "Bank channel, market-sensitive products", listing: "Listed parent", ticker: "8795.T", currency: "JPY / USD", topProduct: "Bank-window VA" },
    { rank: 9, company: "Prudential Life Japan", parent: "Prudential", metric: "Growth book", focus: "Life planner + savings / annuity", listing: "Listed parent", ticker: "PRU", currency: "JPY", topProduct: "Planner savings / annuity" },
    { rank: 10, company: "PGF Life", parent: "Prudential / Gibraltar", metric: "Bank VA specialist", focus: "Yen and FX variable annuities", listing: "Listed parent", ticker: "PRU", currency: "JPY / USD / AUD", topProduct: "Yen and FX variable annuity" },
    { rank: 11, company: "Manulife Japan", parent: "Manulife", metric: "Bank / independent", focus: "Investment-type annuity", listing: "Listed parent", ticker: "MFC", currency: "JPY / USD", topProduct: "Investment-type / unit-linked annuity" },
    { rank: 12, company: "MetLife Japan", parent: "MetLife", metric: "Foreign top-tier", focus: "Savings, annuity, A&H mix", listing: "Listed parent", ticker: "MET", currency: "JPY", topProduct: "Savings-type annuity" },
    { rank: 13, company: "AXA Life Japan", parent: "AXA", metric: "Bank / advisor", focus: "Unit-linked and protection-savings", listing: "Listed parent", ticker: "CS", currency: "JPY", topProduct: "Unit-linked protection-savings" },
    { rank: 14, company: "Gibraltar Life", parent: "Prudential", metric: "Independent agency", focus: "Life planners; savings riders", listing: "Listed parent", ticker: "PRU", currency: "JPY", topProduct: "Planner savings riders" },
    { rank: 15, company: "Mitsui Sumitomo Primary Life", parent: "MS&AD", metric: "Bank-window specialist", focus: "Single-premium foreign-currency annuities", listing: "Listed parent", ticker: "8725.T", currency: "JPY / USD / AUD", topProduct: "Single-premium FX annuity" }
  ],

  usLife: [
    { rank: 1, company: "Northwestern Mutual", parent: "Northwestern Mutual", metric: "Largest ordinary life franchise", salesVolume: "n/a — no free public statutory $ extract", inForce: "Largest ordinary / participating in-force", listing: "Mutual", ticker: "Mutual", focus: "Whole life, planning, field force" },
    { rank: 2, company: "New York Life", parent: "New York Life", metric: "Mutual; top ordinary life", salesVolume: "n/a — mutual; see statutory / AM Best", inForce: "Top-tier ordinary life in-force", listing: "Mutual", ticker: "Mutual", focus: "Whole life, career agents" },
    { rank: 3, company: "MetLife", parent: "MetLife", metric: "Group + individual scale", salesVolume: "n/a — group life dominates disclosed mix", inForce: "Largest U.S. group-life in-force", listing: "Listed", ticker: "MET", focus: "Group life leader; retail MetLife/Brighthouse split" },
    { rank: 4, company: "Prudential Financial", parent: "Prudential", metric: "Individual + group", salesVolume: "n/a — see 10-K life sales mix", inForce: "Large individual + group in-force", listing: "Listed", ticker: "PRU", focus: "Term, perm, workplace" },
    { rank: 5, company: "Massachusetts Mutual Life", parent: "MassMutual", metric: "Mutual whole-life scale", salesVolume: "n/a — mutual; see annual report", inForce: "Top mutual permanent in-force", listing: "Mutual", ticker: "Mutual", focus: "Permanent life, institutions" },
    { rank: 6, company: "Lincoln Financial", parent: "Lincoln National", metric: "Top term/UL writer", salesVolume: "n/a — term/UL; see 10-K", inForce: "Large term and UL in-force", listing: "Listed", ticker: "LNC", focus: "Term, UL, workplace" },
    { rank: 7, company: "State Farm Life", parent: "State Farm", metric: "P&C-affiliated life", salesVolume: "n/a — mutual group; no public life $ rank", inForce: "Large captive-agent in-force", listing: "Mutual", ticker: "Mutual", focus: "Simple perm/term via agents" },
    { rank: 8, company: "John Hancock", parent: "Manulife", metric: "National brand", salesVolume: "n/a — see Manulife U.S. life segment", inForce: "National retail + Vitality in-force", listing: "Listed parent", ticker: "MFC", focus: "Vitality, UL, term" },
    { rank: 9, company: "Pacific Life", parent: "Pacific Life", metric: "HNW / IUL", salesVolume: "n/a — mutual; HNW IUL not a public $ rank", inForce: "HNW / IUL in-force", listing: "Mutual", ticker: "Mutual", focus: "Indexed UL, business planning" },
    { rank: 10, company: "Guardian Life", parent: "Guardian", metric: "Mutual", salesVolume: "n/a — mutual; see annual report", inForce: "Participating whole-life in-force", listing: "Mutual", ticker: "Mutual", focus: "Whole life, disability, dental" },
    { rank: 11, company: "Nationwide", parent: "Nationwide", metric: "Life + annuity combo", salesVolume: "n/a — mutual; life vs annuity not split here", inForce: "IUL / term in-force", listing: "Mutual", ticker: "Mutual", focus: "IUL, term, advisory" },
    { rank: 12, company: "Transamerica", parent: "Aegon", metric: "Broad retail", salesVolume: "n/a — see Aegon Americas", inForce: "Retail term/UL + workplace in-force", listing: "Listed parent", ticker: "AEG", focus: "Term, UL, workplace" },
    { rank: 13, company: "Principal Financial", parent: "Principal", metric: "Workplace + individual", salesVolume: "n/a — see PFG benefits segment", inForce: "Group life + worksite in-force", listing: "Listed", ticker: "PFG", focus: "Group life, DC, individual" },
    { rank: 14, company: "Protective Life", parent: "Dai-ichi Life", metric: "Acquisition platform", salesVolume: "n/a — retail + closed-block mix", inForce: "Term/UL + acquired blocks", listing: "Listed parent", ticker: "8750.T", focus: "Term, UL, closed-block deals" },
    { rank: 15, company: "Primerica", parent: "Primerica", metric: "High policy count", salesVolume: "n/a — high count, low face; see 10-K", inForce: "High policy-count term in-force", listing: "Listed", ticker: "PRI", focus: "Term via independent reps" }
  ],

  japanLife: [
    { rank: 1, company: "Nippon Life", parent: "Nippon Life", metric: "Largest private life group", salesVolume: "n/a — mutual; see LIAJ / disclosure", inForce: "Largest private-life in-force", listing: "Mutual", ticker: "Mutual", focus: "Tied agents; domestic + overseas (incl. MLC, Resolution Life stake)" },
    { rank: 2, company: "Japan Post Insurance", parent: "Japan Post Holdings", metric: "Largest legacy book", salesVolume: "Constrained new business (postal)", inForce: "Largest legacy policy count", listing: "Listed", ticker: "7181.T", focus: "Simple savings/life via post offices; shrinking new annuity" },
    { rank: 3, company: "Meiji Yasuda Life", parent: "Meiji Yasuda", metric: "Top mutual", salesVolume: "n/a — mutual; see annual report", inForce: "Top-tier mutual in-force", listing: "Mutual", ticker: "Mutual", focus: "Career agency; group life" },
    { rank: 4, company: "Dai-ichi Life", parent: "Dai-ichi Life Holdings", metric: "Listed major", salesVolume: "n/a — see 8750.T segment notes", inForce: "Major domestic + overseas in-force", listing: "Listed", ticker: "8750.T", focus: "Domestic life + Protective, TAL, Partners" },
    { rank: 5, company: "Sumitomo Life", parent: "Sumitomo Life", metric: "Top-5 mutual", salesVolume: "n/a — mutual; medical + savings mix", inForce: "Top-5 mutual in-force", listing: "Mutual", ticker: "Mutual", focus: "Medical + savings; US (Symetra)" },
    { rank: 6, company: "Aflac Japan", parent: "Aflac", metric: "Largest foreign franchise", salesVolume: "n/a — see AFL Japan segment", inForce: "Largest foreign third-sector in-force", listing: "Listed parent", ticker: "AFL", focus: "Cancer / medical, not core annuity" },
    { rank: 7, company: "Sony Life", parent: "Sony Financial Group", metric: "Life-planner model", salesVolume: "Strong new-count (planners)", inForce: "~planner-led protection in-force", listing: "Listed parent", ticker: "8729.T", focus: "Protection and variable savings" },
    { rank: 8, company: "MetLife Japan", parent: "MetLife", metric: "Top foreign composite", salesVolume: "n/a — see MET Asia", inForce: "Foreign composite in-force", listing: "Listed parent", ticker: "MET", focus: "A&H, savings, bancassurance" },
    { rank: 9, company: "Gibraltar Life", parent: "Prudential", metric: "Independent agencies", salesVolume: "n/a — planner channel", inForce: "Independent-agency in-force", listing: "Listed parent", ticker: "PRU", focus: "Life planners; protection" },
    { rank: 10, company: "Prudential Life Japan", parent: "Prudential", metric: "Life planner channel", salesVolume: "n/a — tied planners", inForce: "Tied-planner protection in-force", listing: "Listed parent", ticker: "PRU", focus: "Needs-based protection" },
    { rank: 11, company: "Tokio Marine & Nichido Life", parent: "Tokio Marine", metric: "P&C-affiliated life", salesVolume: "n/a — see 8766.T life segment", inForce: "Bancassurance / agent in-force", listing: "Listed parent", ticker: "8766.T", focus: "Bancassurance and agents" },
    { rank: 12, company: "Fukoku Mutual Life", parent: "Fukoku Life", metric: "Mid-tier mutual", salesVolume: "n/a — mid-tier mutual", inForce: "Traditional participating in-force", listing: "Mutual", ticker: "Mutual", focus: "Traditional participating life" },
    { rank: 13, company: "Taiyo Life", parent: "T&D Holdings", metric: "Household / home-visit", salesVolume: "n/a — small-face household", inForce: "Household medical/life in-force", listing: "Listed parent", ticker: "8795.T", focus: "Small-face medical and life" },
    { rank: 14, company: "Daido Life", parent: "T&D Holdings", metric: "SME specialist", salesVolume: "n/a — SME COLI", inForce: "Corporate-owned life on owners", listing: "Listed parent", ticker: "8795.T", focus: "Corporate-owned life on owners" },
    { rank: 15, company: "Asahi Mutual Life", parent: "Asahi Life", metric: "Mid-tier mutual", salesVolume: "n/a — mid-tier mutual", inForce: "Traditional individual in-force", listing: "Mutual", ticker: "Mutual", focus: "Traditional individual life" }
  ],

  retail: {
    kpis: [
      { label: "US 2024 annuity sales", value: "$434B", extra: "LIMRA calendar-year record", market: "US" },
      { label: "LIMRA Q2 2026", value: "$121.2B", extra: "Final public print; H1 $228.7B record", market: "US" },
      { label: "JP individual annuities in force", value: "19.9M", extra: "LIAJ; amount up after 7-year dip", market: "JP" },
      { label: "Japan New NISA", value: "¥3.6M / year", extra: "Tsumitate ¥1.2M + growth ¥2.4M; no term limit", market: "JP" },
      { label: "BOJ household assets", value: "Cash-heavy", extra: "Deposits still the majority of household financial assets (BOJ Flow of Funds)", market: "JP" },
      { label: "Dominant US vehicle", value: "ETFs", extra: "Active ETFs and TDF/auto-enroll still compound", market: "US" }
    ],
    usTrends: [
      { title: "Annuities as a retail allocation", detail: "Households used MYGAs, FIAs, and RILAs as bond substitutes while rates were high. Even if 2026 sales cool from the 2024 peak, volumes stay well above the pre-2022 run rate." },
      { title: "ETF wrapper wins", detail: "Net new cash continues to prefer ETFs over traditional mutual funds. Active ETFs, buffered/defined-outcome ETFs, and option-income funds are the retail product engine." },
      { title: "Workplace defaulting", detail: "Auto-enrollment, auto-escalation, and target-date funds still dominate 401(k) flows. Private credit / private equity sleeves in DC are the next distribution fight." },
      { title: "Self-directed barbell", detail: "Treasury MMFs and T-bills pulled cash; the other side is single-stock, options, and 0DTE activity at retail brokerages. Advice platforms sit in the middle with SMAs and direct indexing." },
      { title: "Guarantee + growth packaging", detail: "RILAs, registered index-linked CDs, and buffered notes blur insurance and asset management. Suitability and illustration risk are the regulatory pressure points." }
    ],
    japanTrends: [
      { title: "New NISA is the regime change", detail: "The 2024 overhaul (tsumitate ¥1.2M + growth ¥2.4M, no time cap) is the main reason household money is leaving cash. Foreign-equity index funds are the default buy." },
      { title: "BOJ Flow of Funds: still a deposit stock", detail: "Bank of Japan Flow of Funds keeps showing cash and deposits as the largest household financial-asset bucket, with insurance reserves next and shares/investment trusts a smaller but rising share as New NISA scales. This is a stock problem, not a one-year flow story." },
      { title: "From deposits to risk assets — slowly", detail: "The official push is to shift that BOJ-measured deposit stock into NISA, iDeCo, and investment trusts. Yen annuities compete with both deposits and tax-advantaged funds for the same household yen." },
      { title: "Bank-sold investment products", detail: "Variable annuities, foreign-currency deposits, and wrap accounts remain the bank window toolkit. MS Primary, Frontier, PGF, and T&D Financial compete there." },
      { title: "Yen rates and yen annuities", detail: "As policy rates left the zero bound, yen-denominated savings and individual annuities became easier to sell again versus FX products." },
      { title: "Advice gap", detail: "Life planners (Sony, Prudential, Gibraltar) and IFA growth sit against a still-thin independent-advisor market. Conduct risk around NISA and risk products is a FSA focus." }
    ]
  },

  features: {
    usLife: [
      {
        company: "Northwestern Mutual",
        feature: "Participating whole life + field-force planning",
        description: "Largest ordinary-life franchise. Permanent participating whole life sold by a captive planning force, with dividends and cash-value illustrations at the center of the offer.",
        source: "Northwestern Mutual",
        url: "https://www.northwesternmutual.com/life-insurance/whole-life-insurance/"
      },
      {
        company: "New York Life",
        feature: "Mutual whole life (career agency)",
        description: "Flagship participating whole life through career agents. Permanent coverage, guaranteed cash value, and a long dividend history — the life counterpart to NYL’s MYGA franchise.",
        source: "New York Life",
        url: "https://www.newyorklife.com/products/insurance/whole-life"
      },
      {
        company: "MetLife",
        feature: "Group / workplace life scale",
        description: "The distinctive book is employer-paid and voluntary group life, not a retail whole-life agency. Individual retail was largely split to Brighthouse.",
        source: "MetLife",
        url: "https://www.metlife.com/insurance/life-insurance/group-life-insurance/"
      },
      {
        company: "Prudential Financial",
        feature: "Individual + workplace life",
        description: "Term and permanent individual life plus a large workplace benefits platform. Institutional and group distribution is the differentiator versus mutual whole-life specialists.",
        source: "Prudential",
        url: "https://www.prudential.com/personal/life-insurance"
      },
      {
        company: "Massachusetts Mutual Life",
        feature: "Participating whole life (mutual)",
        description: "Mutual permanent life with dividends and a career-agency core, plus an institutional/flow overlay that also shows up in MassMutual’s annuity sales.",
        source: "MassMutual",
        url: "https://www.massmutual.com/insurance/life-insurance/whole-life-insurance"
      },
      {
        company: "Lincoln Financial",
        feature: "Term and universal life manufacturing",
        description: "A top term and UL writer for independent and workplace channels. The life identity is priceable protection and cash-value UL, not participating whole life.",
        source: "Lincoln",
        url: "https://www.lfg.com/public/individual/lifeinsurance"
      },
      {
        company: "State Farm Life",
        feature: "Simple term/perm via P&C agents",
        description: "Life sold as an add-on through the State Farm property-casualty agency. Straightforward term and permanent contracts, not HNW IUL or group life.",
        source: "State Farm",
        url: "https://www.statefarm.com/insurance/life"
      },
      {
        company: "John Hancock",
        feature: "Vitality wellness-linked life",
        description: "John Hancock Vitality ties premiums and rewards to wearable activity and health programs — the U.S. life feature that is hardest to copy from a generic UL/term shelf.",
        source: "John Hancock",
        url: "https://www.johnhancock.com/life-insurance/vitality.html"
      },
      {
        company: "Pacific Life",
        feature: "Indexed UL for HNW / business planning",
        description: "IUL and permanent life aimed at high-net-worth and business-planning cases, not mass-market term. Same HNW franchise that supports Pacific Life’s annuity book.",
        source: "Pacific Life",
        url: "https://www.pacificlife.com/home/products/life-insurance.html"
      },
      {
        company: "Guardian Life",
        feature: "Mutual whole life + disability",
        description: "Participating whole life packaged with a large individual disability and dental benefits franchise — a mutual protection bundle rather than an annuity-led shelf.",
        source: "Guardian",
        url: "https://www.guardianlife.com/life-insurance/whole-life"
      },
      {
        company: "Nationwide",
        feature: "IUL / term with advisory overlay",
        description: "Indexed UL and term sold alongside Nationwide’s advisory and annuity platforms. The life differentiator is the combo shelf, not a standalone mutual whole-life system.",
        source: "Nationwide",
        url: "https://www.nationwide.com/personal/insurance/life"
      },
      {
        company: "Transamerica",
        feature: "Broad retail term and UL",
        description: "Aegon-owned retail term, UL, and workplace life. Scale comes from independent and worksite distribution rather than a captive whole-life agency.",
        source: "Transamerica",
        url: "https://www.transamerica.com/individual/products/life-insurance"
      },
      {
        company: "Principal Financial",
        feature: "Workplace group life + DC",
        description: "Group life sits next to Principal’s defined-contribution and worksite franchise. The distinctive feature is employer distribution, not retail permanent life.",
        source: "Principal",
        url: "https://www.principal.com/businesses/protect-your-employees/group-life-insurance"
      },
      {
        company: "Protective Life",
        feature: "Term/UL acquisition platform (Dai-ichi)",
        description: "Dai-ichi’s U.S. life platform: retail term and UL plus closed-block acquisitions. The feature is the in-force/M&A engine, not a household brand agency.",
        source: "Protective",
        url: "https://www.protective.com/learn/life-insurance"
      },
      {
        company: "Primerica",
        feature: "High-count term via independent reps",
        description: "Term-only model sold by a large independent-rep force. Distinctive for policy count and middle-market term, not cash-value or group life.",
        source: "Primerica",
        url: "https://www.primerica.com/public/term-life-insurance.html"
      }
    ],
    usAnnuity: [
      {
        company: "Athene Annuity & Life",
        feature: "AccuMax FIA + MYG (flow reinsurance)",
        description: "Apollo-backed accumulation FIAs (AccuMax 5/7) and multi-year guaranteed (MYG) contracts, plus a large flow-reinsurance engine. The 2025 sales lead is FIA/MYGA, not VA.",
        source: "Athene AccuMax",
        url: "https://www.athene.com/products/fia/accumax"
      },
      {
        company: "New York Life",
        feature: "Secure Term MYGA / career-agency fixed",
        description: "Secure Term Choice and related MYGAs sold through the career agency. Fixed deferred and SPIA, not an FIA or RILA franchise.",
        source: "NYL Annuities",
        url: "https://www.nylannuities.com/new-york-life-annuities/fixed-deferred-annuities"
      },
      {
        company: "Corebridge Financial",
        feature: "MarketLock RILA + fixed/index shelf",
        description: "Ex-AIG retirement platform: fixed and index annuities plus the registered MarketLock RILA (single-purchase-payment, index-linked strategies).",
        source: "SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/5108/000119312526186396/d97165d485bpos.htm"
      },
      {
        company: "Equitable Financial",
        feature: "Structured Capital Strategies (SCS) buffer",
        description: "SCS / SCS PLUS is Equitable’s signature RILA: Structured Investment Option segments with performance caps and downside buffers (typically first 10–40% of loss).",
        source: "SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526169414/0001193125-26-169414-index.htm"
      },
      {
        company: "Jackson National Life",
        feature: "Perspective II VA + Market Link Pro RILA",
        description: "Independent-BD variable annuity (Perspective II) plus the Market Link Pro registered index-linked suite (buffers, caps, advisory shares). VA/RILA, not FIA.",
        source: "Jackson",
        url: "https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html"
      },
      {
        company: "Allianz Life of North America",
        feature: "Allianz 222 FIA (income bonus)",
        description: "Category-defining FIA. 222 offers two bonus paths, two income-increase paths, and index-lock crediting — principal protection with indexed interest, not a buffer RILA.",
        source: "Allianz Life",
        url: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/222"
      },
      {
        company: "Nationwide",
        feature: "Defined Protection / Defender RILA",
        description: "Advisory-friendly RILAs (Defined Protection, Defender) with index-linked strategies. Complements Nationwide’s older VA book rather than a MYGA-led shelf.",
        source: "SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1127203/000119312526180719/d88953d485bpos.htm"
      },
      {
        company: "Massachusetts Mutual Life",
        feature: "Fixed annuity / institutional flow",
        description: "Mutual-company fixed and institutional annuity flow, not a retail FIA or RILA brand. Sits beside MassMutual’s participating life franchise.",
        source: "MassMutual",
        url: "https://www.massmutual.com/retirement/annuities"
      },
      {
        company: "Lincoln Financial Group",
        feature: "VA + RILA (workplace overlay)",
        description: "Variable annuity income products (e.g. Core Income) plus registered index-linked contracts, with a workplace/retirement distribution tilt.",
        source: "SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1048606/000110465926047651/tm265267d1_485bpos.htm"
      },
      {
        company: "Pacific Life",
        feature: "VA / FIA for high-net-worth",
        description: "Variable and fixed-index annuities aimed at HNW and advisory cases — the annuity side of Pacific Life’s IUL/business-planning franchise.",
        source: "Pacific Life",
        url: "https://www.pacificlife.com/home/products/annuities.html"
      },
      {
        company: "Prudential",
        feature: "Income VA / institutional annuity",
        description: "Variable-annuity income (Discovery Plus and related) plus institutional retirement. Guarantee/income packaging, not an FIA bonus product.",
        source: "SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/711201/000113322826005498/dp-efp23952_485bpos.htm"
      },
      {
        company: "Sammons Financial Companies",
        feature: "Midland National FIA",
        description: "Sammons’ distinctive annuity is Midland National’s fixed-index shelf for independents — accumulation and income FIAs, not a VA/RILA complex.",
        source: "Midland National",
        url: "https://www.midlandnational.com/"
      },
      {
        company: "Global Atlantic Financial Group",
        feature: "Fixed annuity + KKR flow reinsurance",
        description: "KKR-owned fixed and flow-reinsurance platform. Competes on MYGA/fixed pricing and balance-sheet capacity rather than a consumer VA brand.",
        source: "Global Atlantic",
        url: "https://www.globalatlantic.com/annuities"
      },
      {
        company: "Fidelity & Guaranty Life",
        feature: "FIA and MYGA (F&G)",
        description: "F&G’s retail identity is fixed-index and multi-year guaranteed annuities for independent producers — a pure accumulation/income FIA-MYGA book.",
        source: "F&G",
        url: "https://www.fglife.com/annuities"
      },
      {
        company: "Delaware Life",
        feature: "Fixed and indexed annuity (Group 1001)",
        description: "Group 1001’s annuity writer: fixed and indexed contracts for independents. A late-top-15 sales name built on rate and index crediting, not VA living benefits.",
        source: "Delaware Life",
        url: "https://www.delawarelife.com/"
      }
    ],
    japanLife: [
      {
        company: "Nippon Life",
        feature: "Participating domestic life + overseas book",
        description: "Largest private Japanese life group. Tied-agent participating life, plus overseas stakes (MLC, Resolution Life). The life franchise is separate from the individual-annuity book.",
        source: "Nissay",
        url: "https://www.nissay.co.jp/"
      },
      {
        company: "Japan Post Insurance",
        feature: "Simple postal savings / life",
        description: "Kampo’s distinctive life offer is simple savings-type coverage sold through post offices. Large legacy book; new-business growth is constrained.",
        source: "Japan Post Insurance",
        url: "https://www.jp-life.japanpost.jp/"
      },
      {
        company: "Meiji Yasuda Life",
        feature: "Career-agency life + group life",
        description: "Top mutual with a career-agent individual-life system and a large group-life book. Traditional participating protection, not a bank VA specialist.",
        source: "Meiji Yasuda",
        url: "https://www.meijiyasuda.co.jp/"
      },
      {
        company: "Dai-ichi Life",
        feature: "Listed major + Protective / TAL overseas",
        description: "Domestic tied-agent and bancassurance life, plus Protective (U.S.) and TAL/Partners overseas. The group’s VA growth sits at Frontier, not at this life company.",
        source: "Dai-ichi Life",
        url: "https://www.dai-ichi-life.co.jp/"
      },
      {
        company: "Sumitomo Life",
        feature: "Medical / savings life + Symetra",
        description: "Medical (third-sector) and savings-type life through agents, with U.S. life via Symetra. Distinct from Sumitomo’s traditional individual-annuity book.",
        source: "Sumitomo Life",
        url: "https://www.sumitomolife.co.jp/"
      },
      {
        company: "Aflac Japan",
        feature: "Cancer / medical (third-sector)",
        description: "Japan’s largest foreign life franchise is not an annuity writer. The distinctive product is cancer and medical (A&H) sold at the workplace and via agencies.",
        source: "Aflac Japan",
        url: "https://www.aflac.co.jp/"
      },
      {
        company: "Sony Life",
        feature: "Life-planner protection + variable savings",
        description: "Needs-based life-planner channel. Protection plus variable/unit-linked savings — the life side of Sony’s variable-annuity growth story.",
        source: "Sony Life",
        url: "https://www.sonylife.co.jp/"
      },
      {
        company: "MetLife Japan",
        feature: "A&H, savings, bancassurance",
        description: "Top-tier foreign composite: accident & health, savings-type life, and bank-window distribution. Not a postal or SME-COLI specialist.",
        source: "MetLife Japan",
        url: "https://www.metlife.co.jp/"
      },
      {
        company: "Gibraltar Life",
        feature: "Independent-agency life planners",
        description: "Prudential’s independent-agency (life planner) protection franchise. Distinct from PGF’s bank VA and from Prudential Life Japan’s tied planners.",
        source: "Gibraltar Life",
        url: "https://www.gib-life.co.jp/"
      },
      {
        company: "Prudential Life Japan",
        feature: "Tied life-planner protection",
        description: "Needs-based protection sold by Prudential’s own life planners. The distinctive life feature is the planner model, not bank-sold FX annuities.",
        source: "Prudential Japan",
        url: "https://www.prudential.co.jp/"
      },
      {
        company: "Tokio Marine & Nichido Life",
        feature: "P&C-affiliated life / bancassurance",
        description: "Life company of Tokio Marine. Bancassurance and agent life attached to a P&C group — not a mutual whole-life or cancer specialist.",
        source: "TMNL",
        url: "https://www.tmn-anshin.co.jp/"
      },
      {
        company: "Fukoku Mutual Life",
        feature: "Traditional participating mutual life",
        description: "Mid-tier mutual writing traditional participating individual life. No bank-VA or SME-COLI identity.",
        source: "Fukoku Life",
        url: "https://www.fukoku-life.co.jp/"
      },
      {
        company: "Taiyo Life",
        feature: "Home-visit small-face medical / life",
        description: "T&D household channel: small-face medical and life sold by home-visit agents. Complementary to Daido’s SME COLI, not a bank annuity writer.",
        source: "Taiyo Life",
        url: "https://www.taiyo-seimei.co.jp/"
      },
      {
        company: "Daido Life",
        feature: "SME owner COLI (corporate-owned life)",
        description: "T&D’s SME specialist. Corporate-owned life insurance on business owners — the distinctive Japan life feature versus household or bank products.",
        source: "Daido Life",
        url: "https://www.daido-life.co.jp/"
      },
      {
        company: "Asahi Mutual Life",
        feature: "Traditional individual mutual life",
        description: "Mid-tier mutual focused on traditional individual life. No foreign cancer, SME COLI, or variable-annuity identity.",
        source: "Asahi Life",
        url: "https://www.asahi-life.co.jp/"
      }
    ],
    japanAnnuity: [
      {
        company: "Nippon Life (Nissay)",
        feature: "Participating individual annuity (largest book)",
        description: "Japan’s flagship individual-annuity franchise (~4M in-force). Participating / guaranteed savings-type annuities through tied agents — not a bank FX VA.",
        source: "Nissay",
        url: "https://www.nissay.co.jp/"
      },
      {
        company: "Sumitomo Life",
        feature: "Traditional individual annuity",
        description: "Large in-force individual-annuity book sold as yen savings/annuity through the core agency. Separate from Sumitomo’s medical-life and U.S. (Symetra) stories.",
        source: "Sumitomo Life",
        url: "https://www.sumitomolife.co.jp/"
      },
      {
        company: "Dai-ichi Life",
        feature: "Bank and tied-agent yen annuity",
        description: "Parent-company individual annuities via banks and tied agents. Market-sensitive VA growth is booked at Dai-ichi Frontier Life, not here.",
        source: "Dai-ichi Life",
        url: "https://www.dai-ichi-life.co.jp/"
      },
      {
        company: "Meiji Yasuda Life",
        feature: "Career-agent individual annuity",
        description: "Traditional individual annuities through the career agency. Yen savings/annuity, not a foreign-currency bank-window specialist.",
        source: "Meiji Yasuda",
        url: "https://www.meijiyasuda.co.jp/"
      },
      {
        company: "Sony Life",
        feature: "Variable / unit-linked annuity",
        description: "Planner-sold variable and unit-linked annuities — among the strongest new-count growth stories. Market-linked, not Kampo-style postal savings.",
        source: "Sony Life",
        url: "https://www.sonylife.co.jp/"
      },
      {
        company: "Dai-ichi Frontier Life",
        feature: "Bank-sold variable annuity",
        description: "Dai-ichi’s bank-channel VA specialist. Top new-business variable annuity writer; the group’s distinctive VA factory, separate from Dai-ichi Life’s tied book.",
        source: "Dai-ichi Frontier",
        url: "https://www.d-frontier-life.co.jp/"
      },
      {
        company: "Japan Post Insurance (Kampo)",
        feature: "Legacy postal annuity (run-off growth)",
        description: "Huge legacy postal individual-annuity book that is shrinking on new business. Distinctive for scale and run-off, not for new VA or FX features.",
        source: "Japan Post Insurance",
        url: "https://www.jp-life.japanpost.jp/"
      },
      {
        company: "T&D Financial Life",
        feature: "Bank-channel market-sensitive annuity",
        description: "T&D’s bank-window writer of variable and market-sensitive annuities. Complements Taiyo (household) and Daido (SME COLI); this row is annuity only.",
        source: "T&D Financial Life",
        url: "https://www.tdf-life.co.jp/"
      },
      {
        company: "Prudential Life Japan",
        feature: "Planner-sold savings / annuity",
        description: "Savings and annuity riders through Prudential life planners. Not PGF’s bank VA shelf and not Gibraltar’s independent-agency book.",
        source: "Prudential Japan",
        url: "https://www.prudential.co.jp/"
      },
      {
        company: "PGF Life",
        feature: "Yen and FX variable annuity (bank)",
        description: "Prudential/Gibraltar bank-window specialist for yen and foreign-currency variable annuities. The FX/VA bank product, not planner protection.",
        source: "PGF Life",
        url: "https://www.pgf-life.co.jp/"
      },
      {
        company: "Manulife Japan",
        feature: "Investment-type annuity (bank / IFA)",
        description: "Foreign writer of investment-type / unit-linked annuities through banks and independents. Competes with Frontier, PGF, and AXA at the bank window.",
        source: "Manulife Japan",
        url: "https://www.manulife.co.jp/"
      },
      {
        company: "MetLife Japan",
        feature: "Savings and annuity mix",
        description: "Savings-type and annuity products in a foreign composite book (with A&H). Bank and agency, not an FX-only primary-life model.",
        source: "MetLife Japan",
        url: "https://www.metlife.co.jp/"
      },
      {
        company: "AXA Life Japan",
        feature: "Unit-linked protection-savings annuity",
        description: "Bank- and advisor-sold unit-linked contracts that blend protection and savings. Investment-linked, not participating yen annuity scale.",
        source: "AXA Japan",
        url: "https://www.axa.co.jp/"
      },
      {
        company: "Gibraltar Life",
        feature: "Planner savings riders / annuity",
        description: "Independent life-planner channel with savings and annuity riders attached to protection sales. Distinct from PGF’s bank VA factory.",
        source: "Gibraltar Life",
        url: "https://www.gib-life.co.jp/"
      },
      {
        company: "Mitsui Sumitomo Primary Life",
        feature: "Single-premium foreign-currency annuity",
        description: "MS&AD bank-window specialist. The distinctive product is single-premium FX (and yen) annuities sold at banks — Japan’s signature foreign-currency annuity writer.",
        source: "MS Primary",
        url: "https://www.ms-primary.com/"
      }
    ]
  },

  rates: {
    asOf: "2026-09-25",
    brief:
      "Public carrier and distributor rate sheets only — not aggregator tapes. FA/MYGA is 3/5/7 where the sheet publishes those terms. FIA is S&P (or named-index) cap/par. RILA is buffer plus current cap. VA is M&E when a public prospectus states it. GLWB/GMIB is a published roll-up or rider charge. Advisor-login sheets stay n/a plus the product or rate-portal link. Rates vary by state, premium band, and issue date.",
    us: [
      {
        company: "Athene Annuity & Life",
        fa: "n/a — MYG / MaxRate cards sit behind producer search on Current Rates",
        fia: "n/a — AccuMax / Performance Elite sheets are producer-login",
        va: "n/a",
        rila: "n/a — Amplify 3.0 caps in N-4 / producer tool",
        glwb: "n/a",
        asOf: "2026-09-25",
        source: "Athene Current Rates (login)",
        url: "https://www.athene.com/producer/products/current-rates"
      },
      {
        company: "New York Life",
        fa: "n/a — Secure Term rate card not posted on the public product page",
        fia: "n/a — not an FIA shelf",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-25",
        source: "NYL fixed deferred",
        url: "https://www.nylannuities.com/new-york-life-annuities/fixed-deferred-annuities"
      },
      {
        company: "Corebridge Financial",
        fa: "n/a — American Pathway / Foundation MYGA sheets not public",
        fia: "n/a",
        va: "n/a",
        rila: "n/a — MarketLock caps in N-4; no public declared-rate PDF found",
        glwb: "n/a",
        asOf: "2026-04-28",
        source: "MarketLock 485BPOS",
        url: "https://www.sec.gov/Archives/edgar/data/5108/000119312526186396/d97165d485bpos.htm"
      },
      {
        company: "Equitable Financial",
        fa: "n/a",
        fia: "n/a",
        va: "n/a — M&E in SCS prospectus; not a single public crediting sheet",
        rila: "n/a — live SCS caps are on the Segment Calendar (JS); no static PDF of current caps",
        glwb: "n/a",
        asOf: "2026-09-25",
        source: "Equitable performance cap rates",
        url: "https://equitable.com/annuities/variable-annuities/performance-cap-rates"
      },
      {
        company: "Jackson National Life",
        fa: "n/a — RateProtector sheet not on the public site",
        fia: "n/a — MarketProtector public PDF found was dated 2025-08-04 (not used)",
        va: "n/a — Perspective II M&E in N-4",
        rila: "n/a — Market Link Pro caps posted at Jackson.com/RatesJMLP (page did not return a public table)",
        glwb: "n/a — Flex GMWB charges in rate-sheet supplements; current withdrawal % not extracted",
        asOf: "2026-09-25",
        source: "Market Link Pro suite",
        url: "https://www.jackson.com/annuities/registered-index-linked-annuities/market-link-pro-suite.html"
      },
      {
        company: "Allianz Life of North America",
        fa: "n/a — not a MYGA 3/5/7 sheet; Accum. Advantage fixed acct is FIA (see FIA)",
        fia: "Accum. Advantage ($100k+): S&P 500 1y PTP cap 8.50%; monthly-sum cap 2.40%; fixed yr1 7.90% / yr2 4.40%. Under $100k: S&P cap 7.50%. As of 2026-09-01.",
        va: "n/a",
        rila: "Index Advantage+: S&P 500 1y 10% buffer cap 22.50%; 20% buffer 13.50%. New business 2026-09-01 to 2026-10-12. Product fee 1.25%. Sheet: allianzlife.com/-/media/Files/Allianz/PDFs/declared-rates/index-variable-annuity/IXAP-012-Declared.pdf",
        glwb: "n/a",
        asOf: "2026-09-01",
        source: "Allianz Accum. Advantage M-7269",
        url: "https://www.allianzlife.com/-/media/Files/Allianz/PDFs/declared-rates/fixed-index-annuity/M-7269-Declared"
      },
      {
        company: "Nationwide",
        fa: "n/a — Secure Growth MYGA sheet is on the login rate portal",
        fia: "n/a — Peak 10 state cap PDFs are linked on the product page but not opened here",
        va: "n/a",
        rila: "n/a — Defined Protection / Defender caps on login rate-and-renewal portal",
        glwb: "Peak 10: 4% simple roll-up built-in; Bonus Income+ 8% simple + 25% credit (rider 1.00% single / 1.30% joint).",
        asOf: "2026-09-25",
        source: "Nationwide Peak 10",
        url: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/nationwide-peak-10"
      },
      {
        company: "Massachusetts Mutual Life",
        fa: "Stable Voyage $100k+: 3y 4.30% / 4y 4.30% / 5y 4.80% (no 7y on this sheet). Under $100k: 4.05% / 4.05% / 4.55%. Official sheet 2026-05-04.",
        fia: "n/a",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-05-04",
        source: "MassMutual Stable Voyage rates",
        url: "https://compass.massmutual.com/api/public/assets/file/blt33a425cb4ff2c982"
      },
      {
        company: "Lincoln Financial Group",
        fa: "n/a — current Select / MYGuarantee Plus rates not on a public new-business card; GMIR 1.65% (fixed/FIA) effective 2026-09-01",
        fia: "n/a — current OptiBlend caps not on the public GMIR sheet",
        va: "n/a — Core Income M&E in N-4",
        rila: "n/a",
        glwb: "n/a — i4LIFE / Lifetime Income charges in 497; current roll-up % not extracted",
        asOf: "2026-09-01",
        source: "Lincoln GMIR sheet AN11725",
        url: "https://pubforms.webforms.web.lfg.com/aws-forms-public-app/forms/getDocument/75059/AN11725"
      },
      {
        company: "Pacific Life",
        fa: "n/a — Expedition 2 client guide has terms, not current 3/5/7 rates",
        fia: "n/a",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-25",
        source: "Pacific Life annuities",
        url: "https://www.pacificlife.com/home/products/annuities.html"
      },
      {
        company: "Prudential",
        fa: "n/a — WealthGuard MYGA card not on the public site",
        fia: "n/a",
        va: "n/a — Discovery Plus M&E in N-4",
        rila: "n/a — FlexGuard caps not on a public static sheet found",
        glwb: "n/a — see Discovery Plus N-4",
        asOf: "2026-04-16",
        source: "Discovery Plus 485BPOS",
        url: "https://www.sec.gov/Archives/edgar/data/711201/000113322826005498/dp-efp23952_485bpos.htm"
      },
      {
        company: "Sammons Financial Companies",
        fa: "Midland Oak ADVantage ($50k min): 3y 5.70% / 5y 5.90% / 7y 5.75%; Advisory 5y 5.90%. Effective 2026-09-17.",
        fia: "n/a — Midland FIA caps are on separate producer sheets",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-17",
        source: "Midland Oak ADVantage 32400Y",
        url: "https://www.midlandnational.com/documents/35453/349595419/32400Y+-+Oak+ADVantage+rate+sheet.pdf/fa83c185-49b5-ef49-afc7-fdf4da62b245?t=1726160212636"
      },
      {
        company: "Global Atlantic Financial Group",
        fa: "SecureFore II ≥$100k: 3y 5.10% / 5y 5.30% / 7y 5.50%. Under $100k: 4.90% / 5.10% / 5.30%. Effective 2026-08-05. Not CA.",
        fia: "n/a — ForeAccumulation II rates on the professional rates hub (firm sheet)",
        va: "n/a",
        rila: "n/a — ForeStructured Growth II on professional rates hub",
        glwb: "n/a",
        asOf: "2026-08-05",
        source: "SecureFore II rates",
        url: "https://professionals.globalatlantic.com/resources/rates/securefore-ii/norop"
      },
      {
        company: "Fidelity & Guaranty Life",
        fa: "Secure MYGA MVA ≥$100k: 3y 4.90% / 5y 5.25% / 7y 5.30%. Under $100k: 4.65% / 5.05% / 5.10%. Effective 2026-08-11.",
        fia: "Secure Landing: S&P 500 1y PTP cap 9.50–10.00% (5y) / 9.75–10.25% (7y); S&P par 50% / 55%; fixed 4.00%. Effective 2026-06-09. Sheet: assets.fglife.com …/ADV3804 Secure Landing Rate Sheet.pdf",
        va: "n/a",
        rila: "Confidence Builder: S&P 500 1y 10% buffer cap 20.75%; 20% buffer 12.75%; fixed 4.25%; 100% par. Effective 2026-06-30. Sheet: assets.fglife.com …/ADV3289 Confidence Builder RILA Rate Sheet.pdf",
        glwb: "n/a",
        asOf: "2026-08-11",
        source: "F&G Secure MYGA ADV4801",
        url: "https://assets.fglife.com/is/content/fglife/ad-reviewed-materials/adv/adv4800s/ADV4801%209-Box%20FG%20Secure%20MYGA%20Series%203-5-7%20(FLY).pdf"
      },
      {
        company: "Delaware Life",
        fa: "Apex MYGA $100k+: 3y 5.40% / 5y 5.75% / 7y 5.65%. Under $100k: 5.10% / 5.45% / 5.40%. As of 2026-09-24.",
        fia: "n/a — FIA caps not on this MYGA sheet",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-24",
        source: "Delaware Apex MYGA rate sheet",
        url: "https://cdn.bfldr.com/RVAMRK5C/at/j3vs5g7h78n5kkmwm5588kgb/Apex_MYGA_Rate_Sheet_3__5_and_7_Years.pdf"
      }
    ],
    japan: [
      { company: "Nippon Life (Nissay)", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Nissay", url: "https://www.nissay.co.jp/" },
      { company: "Sumitomo Life", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Sumitomo Life", url: "https://www.sumitomolife.co.jp/" },
      { company: "Dai-ichi Life", currency: "JPY", fa: "n/a — retail FX/yen annuity rates sit at Frontier, not the parent life page", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Dai-ichi Life", url: "https://www.dai-ichi-life.co.jp/" },
      { company: "Meiji Yasuda Life", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Meiji Yasuda", url: "https://www.meijiyasuda.co.jp/" },
      { company: "Sony Life", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Sony Life", url: "https://www.sonylife.co.jp/" },
      {
        company: "Dai-ichi Frontier Life",
        currency: "JPY / USD / AUD",
        fa: "予定利率変動型 (set 2026-09-01, for 2026-10-01 contracts): USD 基準利率 5.27% / AUD 5.24%. Separate 一時払 sheet (2026-09-16–30): USD 5y 3.96% / 10y 4.64%; JPY 5y 2.22% / 10y 2.70%.",
        fia: "n/a",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-01",
        source: "Frontier 基準利率",
        url: "https://www.d-frontier-life.co.jp/products/index_yotei_hendo_kojin_choice.html"
      },
      { company: "Japan Post Insurance (Kampo)", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Japan Post Insurance", url: "https://www.jp-life.japanpost.jp/" },
      { company: "T&D Financial Life", currency: "JPY / USD", fa: "n/a — no public FX/yen annuity rate page found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "T&D Financial Life", url: "https://www.tdf-life.co.jp/" },
      { company: "Prudential Life Japan", currency: "JPY", fa: "n/a — planner products; no public crediting card", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Prudential Japan", url: "https://www.prudential.co.jp/" },
      { company: "PGF Life", currency: "JPY / USD / AUD", fa: "n/a — bank VA; no public 積立利率 card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "PGF Life", url: "https://www.pgf-life.co.jp/" },
      { company: "Manulife Japan", currency: "JPY / USD", fa: "n/a — no public FX/yen annuity rate page found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Manulife Japan", url: "https://www.manulife.co.jp/" },
      { company: "MetLife Japan", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "MetLife Japan", url: "https://www.metlife.co.jp/" },
      { company: "AXA Life Japan", currency: "JPY", fa: "n/a — no public yen annuity crediting card found", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "AXA Japan", url: "https://www.axa.co.jp/" },
      { company: "Gibraltar Life", currency: "JPY", fa: "n/a — planner riders; no public crediting card", fia: "n/a", va: "n/a", rila: "n/a", glwb: "n/a", asOf: "2026-09-25", source: "Gibraltar Life", url: "https://www.gib-life.co.jp/" },
      {
        company: "Mitsui Sumitomo Primary Life",
        currency: "USD / AUD",
        fa: "定額年金 外貨建 (契約日 2026-09-28–10-11): USD 4.33% (age 50–69, 0–4y deferral); AUD 5.00% (same band). Age and deferral change the rate.",
        fia: "n/a",
        va: "n/a",
        rila: "n/a",
        glwb: "n/a",
        asOf: "2026-09-28",
        source: "MS Primary 積立利率",
        url: "https://msp.ms-primary.com/g/RateList.do?product_id=57"
      }
    ]
  },

  filingsMeta: {
    asOf: "2026-09-26",
    brief:
      "Registered US life and annuity pipeline from SEC EDGAR (2025–2026), merged with any confirmed public SERFF life/annuity rows. EDGAR rows are limited to filings whose accession number, form, and date were confirmed on sec.gov. Iowa was the chosen public SFA for unregistered life/annuity forms; that search returned no tracking-number rows, so this tab stays EDGAR-only.",
    serffNote:
      "SERFF scrape 26 Sep 2026: destination after the Google redirect is https://www.thecomply.ai/serff-filing-access (state SFA directory). Chosen state: Iowa. Tried https://filingaccess.serff.com/sfa/home/IA (also TX, NC, OH) — AWS 403, no result rows. Modern portal https://portals.naic.org/serff-filing-access?state=IA says Iowa/Texas/North Carolina/Ohio have not transitioned. Interstate Compact SFA (https://portals.naic.org/serff-filing-access?state=IC) is the only live public search; after Begin Search + Accept it returned “Your search was not successful.” NC DOI Life & Health Filing Search is temporarily down. Zero confirmed SERFF tracking numbers added — none invented."
  },

  filings: [
    {
      company: "Equitable Financial Life",
      parent: "Equitable Holdings (EQH)",
      product: "Structured Capital Strategies PLUS 26",
      productType: "Annuity · RILA",
      filingType: "Initial registration",
      form: "N-4",
      date: "2026-06-18",
      status: "Pending",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-275133",
      summary: "New index-linked flexible-premium deferred annuity (SCS PLUS 26). Registration No. left blank; effectiveness delayed under Securities Act §8(a) until a later amendment.",
      url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526275133/d59590dn4.htm"
    },
    {
      company: "Nationwide Life",
      parent: "Nationwide",
      product: "Nationwide Defender Annuity",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(a))",
      form: "485APOS",
      date: "2026-08-25",
      status: "Pending",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-364217",
      summary: "Rule 485(a)(1) amendment to file 333-289519; proposed effectiveness November 6, 2026. Updates the May 1, 2026 Defender prospectus.",
      url: "https://www.sec.gov/Archives/edgar/data/1127203/000119312526364217/d145730d485apos.htm"
    },
    {
      company: "Athene Annuity & Life",
      parent: "Apollo / Athene",
      product: "Athene Amplify 3.0",
      productType: "Annuity · RILA",
      filingType: "Initial registration",
      form: "N-4",
      date: "2025-11-24",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0000837332-25-000069",
      summary: "New single-purchase-payment index-linked deferred contract (file later 333-291754). Became effective April 30, 2026 (EFFECT 9999999995-26-001401).",
      url: "https://www.sec.gov/Archives/edgar/data/837332/000083733225000069/a2025aaiaamplify30.htm"
    },
    {
      company: "Athene Annuity & Life",
      parent: "Apollo / Athene",
      product: "Athene Amplify 3.0",
      productType: "Annuity · RILA",
      filingType: "Pre-effective amendment",
      form: "N-4/A",
      date: "2026-04-03",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0000837332-26-000027",
      summary: "Pre-effective amendment completing the Amplify 3.0 N-4; prospectus describes a six-year surrender period and index-linked buffers/caps.",
      url: "https://www.sec.gov/Archives/edgar/data/837332/000083733226000027/aaia-20260403.htm"
    },
    {
      company: "Equitable Financial Life",
      parent: "Equitable Holdings (EQH)",
      product: "Equitable RILA (file 333-285624)",
      productType: "Annuity · RILA",
      filingType: "Initial registration",
      form: "N-4",
      date: "2025-03-07",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-25-049091",
      summary: "New RILA registration on file 333-285624. N-4/A followed September 16, 2025; EFFECT notices posted September 17, 2025.",
      url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312525049091/d940225dn4.htm"
    },
    {
      company: "Equitable Financial Life",
      parent: "Equitable Holdings (EQH)",
      product: "The Accumulator Series",
      productType: "Annuity · VA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-23",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-173075",
      summary: "Annual N-4 update for Accumulator / Plus / Elite / Select via Separate Account No. 49. Effectiveness May 1, 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526173075/d72449d485bpos.htm"
    },
    {
      company: "Equitable Financial Life",
      parent: "Equitable Holdings (EQH)",
      product: "Structured Capital Strategies 16",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-22",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-169414",
      summary: "May 1, 2026 prospectus for SCS 16 variable and index-linked flexible-premium deferred annuity (file 333-283585 / 333-207256).",
      url: "https://www.sec.gov/Archives/edgar/data/2039145/000119312526169414/0001193125-26-169414-index.htm"
    },
    {
      company: "Jackson National Life",
      parent: "Jackson Financial (JXN)",
      product: "Jackson Market Link Pro II",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-21",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0002047976-26-000124",
      summary: "Post-effective amendment No. 2 on file 333-285255; became effective April 27, 2026. Single-premium deferred index-linked annuity.",
      url: "https://www.sec.gov/Archives/edgar/data/2047976/000204797626000124/0002047976-26-000124.txt"
    },
    {
      company: "Jackson National Life",
      parent: "Jackson Financial (JXN)",
      product: "Jackson Market Link Pro Advisory",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-21",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0002047976-26-000121",
      summary: "Advisory-share RILA prospectus dated April 27, 2026. Index-linked terms with buffers, caps, and a fixed-account option.",
      url: "https://www.sec.gov/Archives/edgar/data/2047976/000204797626000121/jmlpa485bcombined.htm"
    },
    {
      company: "Jackson National Life",
      parent: "Jackson Financial (JXN)",
      product: "Market Link Pro / Advisory (FIV supplement)",
      productType: "Annuity · RILA",
      filingType: "Definitive materials",
      form: "497",
      date: "2026-09-21",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0002047976-26-000183",
      summary: "September 2026 Form 497 supplement to the Market Link Pro II and Advisory RILA prospectuses (rate/feature update).",
      url: "https://www.sec.gov/Archives/edgar/data/2047976/000204797626000183/a497ejmlp4fivsupplement09-.htm"
    },
    {
      company: "Lincoln National Life",
      parent: "Lincoln National (LNC)",
      product: "Lincoln Core Income Variable Annuity",
      productType: "Annuity · VA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-23",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001104659-26-047651",
      summary: "N-4 post-effective amendment No. 18 for Lincoln Life Variable Annuity Account N (files 333-214235 / 811-08517).",
      url: "https://www.sec.gov/Archives/edgar/data/1048606/000110465926047651/tm265267d1_485bpos.htm"
    },
    {
      company: "Brighthouse Life",
      parent: "Brighthouse Financial (BHF)",
      product: "Class L-4 Year Variable Annuity",
      productType: "Annuity · VA",
      filingType: "Definitive materials",
      form: "497",
      date: "2026-04-27",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-168864",
      summary: "Updating summary prospectus. Notes the November 6, 2025 BHF–Aquarian merger announcement; contract issuer remains Brighthouse Life if the deal closes in 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/815915/000119312526168864/d64738d497vpu.htm"
    },
    {
      company: "American General Life",
      parent: "Corebridge (CRBG)",
      product: "Corebridge MarketLock Annuity",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-28",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-186396",
      summary: "Annual N-4 update for the single-purchase-payment MarketLock RILA (file 333-277203).",
      url: "https://www.sec.gov/Archives/edgar/data/5108/000119312526186396/d97165d485bpos.htm"
    },
    {
      company: "American General Life",
      parent: "Corebridge (CRBG)",
      product: "Corebridge MarketLock Annuity",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(a))",
      form: "485APOS",
      date: "2026-06-18",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-275509",
      summary: "Rule 485(a) rate-sheet / prospectus supplement on file 333-277203 (60-day clock from June 18). Follow-on 485BPOS 0001193125-26-387639 filed September 10, 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/5108/000119312526275509/d123398d485apos.htm"
    },
    {
      company: "Nationwide Life",
      parent: "Nationwide",
      product: "Nationwide Defined Protection Annuity",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-27",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001193125-26-180719",
      summary: "May 1, 2026 prospectus for the Defined Protection single-purchase-payment contract with index-linked strategies (file 333-289518).",
      url: "https://www.sec.gov/Archives/edgar/data/1127203/000119312526180719/d88953d485bpos.htm"
    },
    {
      company: "Allianz Life of North America",
      parent: "Allianz SE",
      product: "Allianz Index Advantage",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-22",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0000072499-26-000028",
      summary: "N-4 update via Allianz Life Variable Account B; Index Advantage flexible-payment index-linked and variable deferred annuity, effective May 1, 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/72499/000007249926000028/indadvposam.htm"
    },
    {
      company: "Principal Life",
      parent: "Principal (PFG)",
      product: "Principal Strategic Outcomes",
      productType: "Annuity · RILA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-05-27",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0000009712-26-000082",
      summary: "Part C / 485(b) materials for the single-premium index-linked Strategic Outcomes contract (file 333-282081). Earlier 485(b) correction filed February 18, 2026 (0000009712-26-000010).",
      url: "https://www.sec.gov/Archives/edgar/data/9712/000000971226000082/pso485bpartc-draftfor050126.htm"
    },
    {
      company: "Prudential Insurance Company of America",
      parent: "Prudential Financial (PRU)",
      product: "Discovery Plus Variable Annuity",
      productType: "Annuity · VA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-16",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001133228-26-005498",
      summary: "N-4 post-effective amendment No. 24 for the Prudential Individual Variable Contract Account. Prospectus dated May 1, 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/711201/000113322826005498/dp-efp23952_485bpos.htm"
    },
    {
      company: "Transamerica Life",
      parent: "Aegon",
      product: "Transamerica Structured Index Advantage Income Annuity",
      productType: "Annuity · RILA",
      filingType: "Initial registration",
      form: "N-4",
      date: "2025-10-31",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001133228-25-011601",
      summary: "New RILA registration (Structured Index Advantage Income). N-4/A filings March 2 and May 5, 2026; EFFECT posted May 6, 2026 (9999999995-26-001513).",
      url: "https://www.sec.gov/Archives/edgar/data/1164098/000113322825011601/tsiaia-efp18699_n4.htm"
    },
    {
      company: "Transamerica Financial Life",
      parent: "Aegon",
      product: "Transamerica Principium III",
      productType: "Annuity · VA",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-27",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001164098-26-000902",
      summary: "Separate Account VA BNY annual update (files 333-186034 / 811-08750). Effectiveness May 1, 2026.",
      url: "https://www.sec.gov/Archives/edgar/data/929519/000116409826000902/0001164098-26-000902-index.htm"
    },
    {
      company: "Pacific Life",
      parent: "Pacific Life",
      product: "Pacific Prime VUL",
      productType: "Life · VUL",
      filingType: "Post-effective amendment (485(b))",
      form: "485BPOS",
      date: "2026-04-22",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001104659-26-046573",
      summary: "Form N-6 annual prospectus (May 1, 2026) for Pacific Prime VUL through Pacific Select Exec Separate Account.",
      url: "https://www.sec.gov/Archives/edgar/data/832908/000110465926046573/tm265941d1_485bpos.htm"
    },
    {
      company: "Pacific Life",
      parent: "Pacific Life",
      product: "MVP VUL Admiral 2",
      productType: "Life · VUL",
      filingType: "Pre-effective / N-6 amendment",
      form: "N-6/A",
      date: "2026-04-23",
      status: "Effective",
      jurisdiction: "SEC EDGAR",
      accession: "0001104659-26-047569",
      summary: "N-6 amendment for MVP VUL Admiral 2 flexible-premium variable life (Pacific Select Exec). Companion Admiral 2 N-6/A also filed as 0001104659-26-022986.",
      url: "https://www.sec.gov/Archives/edgar/data/832908/000110465926047569/tm2514841d5_n6a.htm"
    }
  ],

  sentiment: {
    asOf: "2026-09-25",
    brief:
      "Public voice-of-customer on the top-15 US and Japan life and annuity names. United States and Japan stay separate. Each bullet is a theme plus a product-line tag and a tone — paraphrased from a public thread title or visible summary, not a fabricated quote. Search links are labeled as searches. Sparse names stay labeled thin chatter.",
    method:
      "Score = 100 × (positive themes) ÷ (positive + negative themes). Mixed themes are counted on the card but do not enter the ratio. If there are no decided (pos/neg) themes, the score is n/a. This is a theme-count index from public threads in this scrub — not NPS, not a survey, and not a rating-agency score. Boards: Reddit (r/annuities, r/personalfinance, r/financialindependence, r/LifeInsurance, r/CFP, r/JapanFinance), Bogleheads, Insurance Forums, Yahoo Chiebukuro, and 5ch pages that returned public HTML. Search-link dates are the as-of of this scrub (25 Sep 2026). X/Twitter is login-gated and was not used.",
    boards:
      "US complaint boards (Trustpilot, BBB) still show claims-delay, service, and surrender-charge complaints and remain self-selected — not a rating. Japan consumer volume is on Yahoo Chiebukuro and 5ch more than English Reddit; those threads are included when the page was fetchable. X/Twitter search is login-gated and was not used. BBB: https://www.bbb.org/search — Trustpilot: https://www.trustpilot.com/search — Chiebukuro: https://chiebukuro.yahoo.co.jp/ — 5ch insurance: https://egg.5ch.net/hoken/",
    kpis: [
      { label: "Names scored", value: "45" },
      { label: "High-chatter US", value: "Allianz, Jackson, NWM" },
      { label: "High-chatter JP", value: "Aflac, Sony, Sumitomo" },
      { label: "Ratings strip", value: "AM Best / S&P / Moody's / Fitch / Comdex / JCR / R&I" }
    ],
    ratingsMethod:
      "Agency grades are financial-strength / claims-paying opinions, not VOC. Priority: issuer IR or rating-agency press, then a public third-party snapshot. Comdex is Ebix’s 1–100 composite; VitalSigns is paywalled and was not scraped — Comdex here is only from the public 15 Jul 2026 myannuitystore chart. Weiss is from that same public chart. Japan uses JCR and R&I (and S&P/Moody’s/Fitch when the issuer publishes them). J.D. Power is the 2025 U.S. Individual Life study public ranking only. BBB is a complaint-board grade, not capital. n/a means no public figure was found — nothing is invented.",
    ratingSnapshot: {
      label: "Public US ratings snapshot (AM Best / S&P / Moody’s / Fitch / Weiss / Comdex)",
      asOf: "2026-07-15",
      url: "https://myannuitystore.com/resources/insurance-company-ratings/"
    },
    ratingBook: {
      "Athene": { entity: "Athene Annuity & Life Co (IA)", market: "US", ambest: { fsr: "A+", icr: "aa-", outlook: "Stable", asOf: "2026-08-27", url: "https://news.ambest.com/pr/PressContent.aspx?altsrc=2&refnum=37707" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 88, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "C-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "New York Life": { entity: "New York Life Ins Co", market: "US", ambest: { fsr: "A++", outlook: "Stable", asOf: "2025-08-01", url: "https://www.newyorklife.com/newsroom/2026/2026-industry-leading-financial-strength" }, sp: { value: "AA+", asOf: "2025-10-28", url: "https://www.newyorklife.com/newsroom/2026/2026-industry-leading-financial-strength" }, moodys: { value: "Aa1", asOf: "2025-06-12", url: "https://www.newyorklife.com/newsroom/2026/2026-industry-leading-financial-strength" }, fitch: { value: "AAA", asOf: "2025-09-16", url: "https://www.newyorklife.com/newsroom/2026/2026-industry-leading-financial-strength" }, comdex: { value: 100, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "656", rank: "Above avg", asOf: "2025-10-07", url: "https://www.jdpower.com/business/press-releases/2025-us-individual-life-insurance-study/" }, bbb: { value: "A+", accredited: false, asOf: "2026-09-25", url: "https://www.bbb.org/us/ny/new-york/profile/insurance-companies/new-york-life-insurance-company-0121-349" } },
      "Corebridge": { entity: "American General Life Ins Co (Corebridge)", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A2", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 82, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Equitable": { entity: "Equitable Finl Life Ins Co", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 84, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Jackson": { entity: "Jackson National Life Ins Co", market: "US", ambest: { fsr: "A", outlook: "Stable", asOf: "2025-12-18", url: "https://ratings.ambest.com/DisclosurePDF.aspx?AMBNum=6596" }, sp: { value: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 76, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Allianz": { entity: "Allianz Life Ins Co of NA", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 96, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, bbb: { value: "A+", accredited: true, asOf: "2026-09-25", url: "https://www.bbb.org/us/mn/golden-valley/profile/insurance-companies/allianz-life-insurance-company-of-north-america-0704-812/customer-reviews" } },
      "Nationwide": { entity: "Nationwide Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 89, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "695", rank: "3rd", asOf: "2025-10-07", url: "https://www.jdpower.com/business/press-releases/2025-us-individual-life-insurance-study/" } },
      "MassMutual": { entity: "Massachusetts Mutual Life Ins", market: "US", ambest: { fsr: "A++", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 98, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "671", rank: "Above avg", asOf: "2025-10-07", url: "https://www.moneytalksnews.com/these-are-the-top-10-life-insurance-companies/" } },
      "Lincoln": { entity: "Lincoln National Life Ins Co", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A2", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 82, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "C+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Pacific Life": { entity: "Pacific Life Ins Co", market: "US", ambest: { fsr: "A+", outlook: "Stable", asOf: "2025-12-11", url: "https://ratings.ambest.com/DisclosurePDF.aspx?AMBNum=6885" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 94, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "652", rank: "Above avg", asOf: "2025-10-07", url: "https://www.moneytalksnews.com/these-are-the-top-10-life-insurance-companies/" } },
      "Prudential US": { entity: "Prudential Ins Co of America", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 94, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "650", rank: "Industry avg", asOf: "2025-10-07", url: "https://www.moneytalksnews.com/these-are-the-top-10-life-insurance-companies/" } },
      "Sammons / Midland National": { entity: "Midland National Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 88, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Global Atlantic": { entity: "Forethought Life Ins Co (Global Atlantic)", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A2", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 78, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "F&G (Fidelity & Guaranty)": { entity: "Fidelity & Guar Life Ins Co", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 73, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "D", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Delaware Life": { entity: "Delaware Life Ins Co", market: "US", ambest: { fsr: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "A-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 56, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Northwestern Mutual": { entity: "Northwestern Mutual Life Ins", market: "US", ambest: { fsr: "A++", outlook: "Stable", asOf: "2025-11-12", url: "https://news.northwesternmutual.com/2025-12-31-Top-Ratings-Agencies-Award-Northwestern-Mutual-Highest-Available-Financial-Strength-Designations-for-35th-Consecutive-Year" }, sp: { value: "AA+", asOf: "2025-10", url: "https://news.northwesternmutual.com/2025-12-31-Top-Ratings-Agencies-Award-Northwestern-Mutual-Highest-Available-Financial-Strength-Designations-for-35th-Consecutive-Year" }, moodys: { value: "Aa1", asOf: "2025-06", url: "https://news.northwesternmutual.com/2025-12-31-Top-Ratings-Agencies-Award-Northwestern-Mutual-Highest-Available-Financial-Strength-Designations-for-35th-Consecutive-Year" }, fitch: { value: "AAA", asOf: "2025-08", url: "https://news.northwesternmutual.com/2025-12-31-Top-Ratings-Agencies-Award-Northwestern-Mutual-Highest-Available-Financial-Strength-Designations-for-35th-Consecutive-Year" }, comdex: { value: 100, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "677", rank: "5th among named", asOf: "2025-10-07", url: "https://www.moneytalksnews.com/these-are-the-top-10-life-insurance-companies/" } },
      "MetLife US": { entity: "Metropolitan Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 94, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "State Farm Life": { entity: "State Farm Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 98, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "697", rank: "2nd", asOf: "2025-10-07", url: "https://www.jdpower.com/business/press-releases/2025-us-individual-life-insurance-study/" } },
      "John Hancock": { entity: "John Hancock Life Ins Co (USA)", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 95, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "C", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Guardian Life": { entity: "Guardian Life Ins Co of Amer", market: "US", ambest: { fsr: "A++", outlook: "Stable", asOf: "2025-09-12", url: "https://ratings.ambest.com/DisclosurePDF.aspx?AMBNum=6508&PCA=0" }, sp: { value: "AA+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 100, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, jdPower: { value: "679", rank: "4th among named", asOf: "2025-10-07", url: "https://www.moneytalksnews.com/these-are-the-top-10-life-insurance-companies/" } },
      "Transamerica": { entity: "Transamerica Life Ins Co", market: "US", ambest: { fsr: "A", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 84, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Principal Financial": { entity: "Principal Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 90, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Protective Life": { entity: "Protective Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "Aa3", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 94, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" } },
      "Primerica": { entity: "Primerica Life Ins Co", market: "US", ambest: { fsr: "A+", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, sp: { value: "AA-", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, moodys: { value: "A1", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, fitch: { value: "n/a", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, comdex: { value: 92, asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, weiss: { value: "B", asOf: "2026-07-15", url: "https://myannuitystore.com/resources/insurance-company-ratings/" }, bbb: { value: "A+", accredited: true, asOf: "2026-09-25", url: "https://www.bbb.org/us/in/indianapolis/profile/insurance-companies/primerica-0382-3003046" } },
      "Nippon Life (Nissay)": { entity: "Nippon Life Insurance", market: "JP", ri: { value: "AA+", asOf: "2026-07-01", url: "https://www.nissay.co.jp/kaisha/gyoseki/kakujitsu/kakuzuke.html" }, jcr: { value: "AA+", asOf: "2026-07-01", url: "https://www.nissay.co.jp/kaisha/gyoseki/kakujitsu/kakuzuke.html" }, sp: { value: "A+", asOf: "2026-07-01", url: "https://www.nissay.co.jp/kaisha/gyoseki/kakujitsu/kakuzuke.html" }, moodys: { value: "Aa3", asOf: "2026-07-01", url: "https://www.nissay.co.jp/kaisha/gyoseki/kakujitsu/kakuzuke.html" }, fitch: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a", note: "Ebix Comdex is a US composite; not published for this Japan mutual" } },
      "Dai-ichi Life": { entity: "Dai-ichi Life Insurance", market: "JP", ri: { value: "AA", asOf: "2026-08-07", url: "https://www.dai-ichi-life.co.jp/company/results/rating/index.html" }, jcr: { value: "AA", asOf: "2026-08-07", url: "https://www.dai-ichi-life.co.jp/company/results/rating/index.html" }, sp: { value: "A+", asOf: "2026-08-07", url: "https://www.dai-ichi-life.co.jp/company/results/rating/index.html" }, moodys: { value: "Aa3", asOf: "2026-08-07", url: "https://www.dai-ichi-life.co.jp/company/results/rating/index.html" }, fitch: { value: "AA-", asOf: "2026-08-07", url: "https://www.dai-ichi-life.co.jp/company/results/rating/index.html" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Sony Life": { entity: "Sony Life Insurance", market: "JP", ri: { value: "AA", outlook: "Negative", asOf: "2026-07-01", url: "https://www.sonylife.co.jp/company/corporate/results/ranking/", note: "R&I list dated 2025-11-04 marked Negative; issuer page 1 Jul 2026 still shows AA" }, sp: { value: "A+", asOf: "2026-07-01", url: "https://www.sonylife.co.jp/company/corporate/results/ranking/" }, jcr: { value: "n/a" }, moodys: { value: "n/a" }, fitch: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Aflac Japan": { entity: "Aflac Life Insurance Japan", market: "JP", jcr: { value: "AA+", outlook: "Stable", asOf: "2025-11-06", url: "https://www.jcr.co.jp/ratinglist/finance/850674" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Japan Post Insurance (Kampo)": { entity: "Japan Post Insurance", market: "JP", jcr: { value: "AA", outlook: "Stable", asOf: "2026-09-25", url: "https://www.jcr.co.jp/ratinglist/finance/7181" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Prudential Japan / Gibraltar": { entity: "Prudential Life Japan / Gibraltar Life", market: "JP", jcr: { value: "n/a" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" }, note: "No standalone public JCR/R&I page found for POJ or Gibraltar in this scrub" },
      "Sumitomo Life": { entity: "Sumitomo Life Insurance", market: "JP", jcr: { value: "AA", outlook: "Stable", asOf: "2026-01-26", url: "https://www.jcr.co.jp/ratinglist/finance/551974" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Meiji Yasuda Life": { entity: "Meiji Yasuda Life Insurance", market: "JP", jcr: { value: "AA", outlook: "Stable", asOf: "2026-01-26", url: "https://jcr.co.jp/ratinglist/finance/551999" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Dai-ichi Frontier Life": { entity: "Dai-ichi Frontier Life", market: "JP", ri: { value: "AA", outlook: "Stable", asOf: "2026-02-27", url: "https://www.r-i.co.jp/file/topics_data_lists_japanese-corporate-50.pdf" }, jcr: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "T&D Financial Life": { entity: "T&D Financial Life", market: "JP", jcr: { value: "AA", outlook: "Negative (watch #)", asOf: "2026-09-25", url: "https://www.jcr.co.jp/ratinglist/?a=0&i=30&m=search&o=&p=1&t=0&w=" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Taiyo Life": { entity: "Taiyo Life Insurance", market: "JP", jcr: { value: "AA", outlook: "Stable", asOf: "2026-09-25", url: "https://www.jcr.co.jp/ratinglist/?a=0&i=30&m=search&o=&p=1&t=0&w=" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Daido Life": { entity: "Daido Life Insurance", market: "JP", jcr: { value: "AA", outlook: "Stable", asOf: "2026-09-25", url: "https://www.jcr.co.jp/ratinglist/?a=0&i=30&m=search&o=&p=1&t=0&w=" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Asahi Mutual Life": { entity: "Asahi Mutual Life", market: "JP", jcr: { value: "A", outlook: "Stable", asOf: "2026-09-25", url: "https://www.jcr.co.jp/ratinglist/?a=0&i=30&m=search&o=&p=1&t=0&w=" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" } },
      "Mitsui Sumitomo Primary Life": { entity: "Mitsui Sumitomo Primary Life", market: "JP", jcr: { value: "n/a" }, ri: { value: "n/a" }, ambest: { fsr: "n/a" }, comdex: { value: "n/a" }, note: "No standalone public JCR/R&I page found in this scrub" }
    },
    us: [
      {
        company: "Athene",
        market: "US",
        chatter: "High",
        overall: "mixed",
        note: "One of the most searched fixed-annuity names on r/annuities. Chatter is about rates and Apollo/PE backing, not life insurance.",
        items: [
          {
            theme: "Rate shoppers treat Athene MYGAs and FIAs as a frequent quote; others flag Apollo/private-credit ownership as a credit-quality debate.",
            product: "MYGA / FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Athene&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "FIA cap and participation-rate complexity after year one is a recurring Insurance Forums pattern for Athene and other index writers.",
            product: "FIA",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=Athene+FIA",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads mentions Athene mainly as a PE-backed fixed-annuity issuer, not as a DIY default. SPIA/MYGA product-class pages are more used than carrier loyalty.",
            product: "MYGA / SPIA",
            sentiment: "mixed",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=Athene+annuity",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "In the long Bogleheads MYGA-ladder thread, one buyer skipped Athene for Delaware Life after flagging Athene’s offshore / reinsurance collectability — a credit-structure objection, not a rate complaint.",
            product: "MYGA",
            sentiment: "neg",
            source: "Bogleheads MYGA experiences (t=334589)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=334589&start=1900",
            date: "Thread (2021–); post on Athene vs Delaware"
          }
        ]
      },
      {
        company: "New York Life",
        market: "US",
        chatter: "High",
        overall: "mixed",
        note: "Life chatter (whole life / agents) is louder than annuity chatter. DIY forums and career-agency clients disagree.",
        items: [
          {
            theme: "Participating whole life and agent illustrations are a staple of r/personalfinance. The DIY consensus is skeptical of WL versus term-and-invest.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=%22New%20York%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads whole-life wiki and threads treat NYL as a leading mutual WL brand and still argue opportunity cost versus index funds.",
            product: "Life",
            sentiment: "neg",
            source: "Bogleheads whole life wiki",
            url: "https://www.bogleheads.org/wiki/Whole_life_insurance",
            date: "Wiki (ongoing)"
          },
          {
            theme: "On r/annuities, NYL MYGA and SPIA quotes get a warmer read than the career-agency WL pitch — rates and guarantees, not dividends.",
            product: "MYGA / SPIA",
            sentiment: "pos",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=%22New%20York%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Corebridge",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Public chatter is thin relative to LIMRA sales rank. The AIG Life & Retirement name still appears in older threads.",
        items: [
          {
            theme: "Few dedicated retail threads versus Athene or Allianz. r/annuities search returns scattered MYGA/FIA rate mentions, not a large complaint cluster.",
            product: "MYGA / FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Corebridge&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Brand transition from AIG Life & Retirement leaves older AIG annuity searches more populated than Corebridge-specific DIY discussion.",
            product: "FIA / VA",
            sentiment: "mixed",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=Corebridge+annuity",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Little public life-insurance chatter under the Corebridge name. Say so: this is a thin-VOC carrier on English forums.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Corebridge&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Insurance Forums income-annuity shoppers name Corebridge Power Series as competitive (limited distribution) alongside Nationwide Peak and F&G Safe Income — agent-board, not retail DIY.",
            product: "FIA / income",
            sentiment: "pos",
            source: "Insurance Forums — favorite income annuity companies",
            url: "https://www.insurance-forums.com/community/threads/your-favorite-income-annuity-companies.115339/",
            date: "2025-03-17"
          }
        ]
      },
      {
        company: "Equitable",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Buffer / RILA (SCS) is the product people actually name. DIY recognition is lower than Jackson.",
        items: [
          {
            theme: "SCS / buffer-annuity mechanics (cap versus buffer) show up on r/annuities as a comprehension and illustration debate, not a love-or-hate brand war.",
            product: "RILA / VA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Equitable%20SCS%20OR%20buffer&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads variable-annuity wiki is the DIY baseline that colors Equitable VA/RILA mentions: fee drag and complexity first, brand second.",
            product: "VA / RILA",
            sentiment: "mixed",
            source: "Bogleheads variable annuity wiki",
            url: "https://www.bogleheads.org/wiki/Variable_annuity",
            date: "Wiki (ongoing)"
          },
          {
            theme: "Life-insurance chatter under Equitable is thinner than the registered-annuity shelf. No large English complaint cluster found in public searches.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Equitable%20annuity%20OR%20life&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Jackson",
        market: "US",
        chatter: "High",
        overall: "mixed",
        note: "The longest-running carrier-specific VA discussion in English DIY forums.",
        items: [
          {
            theme: "Perspective-style VA fees and living-benefit riders are the core Jackson debate. Bogleheads lean negative on cost; income-rider buyers are mixed.",
            product: "VA",
            sentiment: "neg",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=Jackson+annuity",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "r/annuities still treats Jackson as the default independent-BD VA name. Threads mix surrender-value math with living-benefit usefulness.",
            product: "VA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Jackson&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "RILA / Market Link is discussed as the newer alternative to classic VA. Sentiment is mixed — simpler story than a living benefit, still a registered product.",
            product: "RILA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Jackson%20RILA%20OR%20%22Market%20Link%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Older searches still surface 2021 independence-from-Prudential and hedge-cost headlines. That is historical context, not a current quote.",
            product: "VA",
            sentiment: "mixed",
            source: "Bogleheads variable annuity wiki",
            url: "https://www.bogleheads.org/wiki/Variable_annuity",
            date: "2021 headlines; wiki ongoing"
          }
        ]
      },
      {
        company: "Allianz",
        market: "US",
        chatter: "High",
        overall: "mixed",
        note: "The most cited FIA brand in US DIY forums. Lean negative on Bogleheads and r/personalfinance; more mixed on Insurance Forums.",
        items: [
          {
            theme: "Bonus FIA (222-style) is the product DIY forums name. Complexity, caps, and commissions are the usual objections — paraphrased from thread titles, not a quote.",
            product: "FIA",
            sentiment: "neg",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Allianz%20annuity%20OR%20222&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "r/annuities and r/financialindependence searches show the same split: some holders defending index credits, many warning about surrender charges and moving parts.",
            product: "FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Allianz&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Insurance Forums is where FIA buyers compare Allianz caps and bonuses with other index writers. Tone is more product-technical and more mixed than Bogleheads.",
            product: "FIA",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=Allianz+222",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads annuity wiki is the DIY baseline that Allianz FIA threads get measured against: prefer SPIA/MYGA or skip insurance wrappers.",
            product: "FIA / MYGA",
            sentiment: "neg",
            source: "Bogleheads annuities wiki",
            url: "https://www.bogleheads.org/wiki/Annuities",
            date: "Wiki (ongoing)"
          }
        ]
      },
      {
        company: "Nationwide",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Present on both life and annuity shelves. Chatter is moderate, not a single viral product.",
        items: [
          {
            theme: "Advisory / fee-based VA gets a calmer DIY read than commission VA. r/annuities mentions Nationwide as a platform name more than a complaint magnet.",
            product: "VA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Nationwide&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "New Heights FIA comparison threads show up more on Insurance Forums than on Reddit. Sentiment is mixed and product-technical.",
            product: "FIA",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=Nationwide+New+Heights",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "IUL and term life chatter is thinner than the annuity shelf and usually generic (illustration, cost of insurance), not Nationwide-specific drama.",
            product: "Life / IUL",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Nationwide%20life%20OR%20annuity&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "MassMutual",
        market: "US",
        chatter: "High",
        overall: "mixed",
        note: "High chatter on participating whole life; thin chatter on the annuity/flow book.",
        items: [
          {
            theme: "Same whole-life opportunity-cost debate as NYL and Northwestern Mutual. r/personalfinance and Bogleheads lean negative on participating WL as an investment.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=MassMutual%20OR%20%22Mass%20Mutual%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads whole-life wiki and mutual-company threads treat MassMutual as a core career-agency brand. Dividend history is acknowledged; opportunity cost is the objection.",
            product: "Life",
            sentiment: "mixed",
            source: "Bogleheads whole life wiki",
            url: "https://www.bogleheads.org/wiki/Whole_life_insurance",
            date: "Wiki (ongoing)"
          },
          {
            theme: "MYGA / institutional-flow annuity sales are almost invisible on Reddit versus the WL brand. Annuity VOC is thin — say so.",
            product: "MYGA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=MassMutual%20OR%20%22Mass%20Mutual%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Lincoln",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "VA/RILA and 2021–22 capital headlines still color older threads. Not as loud as Jackson.",
        items: [
          {
            theme: "VA and RILA (OptiBlend-style) appear on r/annuities with mixed fee-versus-buffer commentary. Volume is below Jackson.",
            product: "VA / RILA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Lincoln&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Older Bogleheads and news-adjacent searches still surface 2021–22 hedge/capital stress. That is historical context, not a current fabricated quote.",
            product: "VA",
            sentiment: "neg",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=Lincoln+annuity",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Term and UL price-shopping threads exist on r/personalfinance but are often generic. Lincoln-specific life drama is thinner than the VA headlines.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=%22Lincoln%20Financial%22%20OR%20%22Lincoln%20National%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Pacific Life",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Little Reddit chatter for a top-10 annuity writer. More of an advisor/Insurance Forums name.",
        items: [
          {
            theme: "r/annuities search is sparse versus sales rank. Pacific Life is not a mass-Reddit complaint or fandom brand.",
            product: "VA / FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=%22Pacific%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Insurance Forums and HNW/IUL advisor discussion is where the name shows up. Tone is product-technical and mixed-to-positive among agents — still not retail VOC.",
            product: "VA / Life",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=Pacific+Life",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads hits are few and usually generic VA/IUL skepticism, not Pacific Life-specific narratives.",
            product: "VA / IUL",
            sentiment: "mixed",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=%22Pacific+Life%22+annuity",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "On r/LifeInsurance, agents describe Pacific Life IUL as tailored to an affluent, higher-funding buyer — product-technical and mixed-to-positive among agents, still not mass-Reddit VOC.",
            product: "IUL",
            sentiment: "pos",
            source: "Reddit r/LifeInsurance — best company for IUL",
            url: "https://www.reddit.com/r/LifeInsurance/comments/1celjpc/best_company_for_iul/",
            date: "2024-04"
          }
        ]
      },
      {
        company: "Prudential US",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Brand is widely recognized; product-specific DIY threads are less concentrated than Jackson or Allianz.",
        items: [
          {
            theme: "Whole life and variable life get the standard Bogleheads / r/personalfinance skepticism when the Pru brand is named.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Prudential%20life%20OR%20annuity&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Income / HDI and workplace VA mentions on r/annuities are mixed and thinner than Jackson Perspective threads.",
            product: "VA / income",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Prudential&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "BBB and Trustpilot show service and claim-delay complaints typical of a large US writer. Treat as qualitative only — selection bias, not a rating.",
            product: "Life",
            sentiment: "neg",
            source: "BBB search (qualitative)",
            url: "https://www.bbb.org/search?find_text=Prudential%20Financial",
            date: "Complaint boards; no score used"
          }
        ]
      },
      {
        company: "Sammons / Midland National",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Retail DIY names Midland National more than Sammons. Chatter is MYGA rate-shopping, not life insurance.",
        items: [
          {
            theme: "Bogleheads MYGA-ladder replies treat Midland National LiveWell Guarantee Max as a solid A+ MYGA versus CDs — with the usual surrender-charge, MVA, and guaranty-fund caveats. Sister NACOLAH is named for splitting coverage.",
            product: "MYGA",
            sentiment: "pos",
            source: "Bogleheads MYGA experiences (t=334589)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=334589&start=2150",
            date: "Thread (2021–); Midland LiveWell posts"
          },
          {
            theme: "Insurance Forums FIA/IUL comparison searches surface Midland National and North American as Sammons sister writers. Tone is agent-technical and mixed.",
            product: "FIA / IUL",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=Midland+National",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "r/annuities search for Midland / Sammons is thinner than Athene or Allianz. Little public life-insurance chatter under Sammons — say so.",
            product: "MYGA / FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Midland%20OR%20Sammons&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Global Atlantic",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "KKR-owned fixed writer. DIY prefers the MYGA over the FIA; agent boards flag service backups, not bankruptcy.",
        items: [
          {
            theme: "Bogleheads compared a Global Atlantic Blueprint 5-year MYGA (rate fully guaranteed) with the same issuer’s indexed / performance-trigger FIA whose trigger can change yearly. DIY replies preferred the MYGA’s certainty.",
            product: "MYGA / FIA",
            sentiment: "mixed",
            source: "Bogleheads — Global Atlantic MYGA vs indexed (t=433014)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=433014",
            date: "2024"
          },
          {
            theme: "Insurance Forums thread titled “Global Atlantic Bankruptcy?” is about transfer/service delays, not a filing. Replies say MYGA service has been rough industry-wide since rates rose.",
            product: "MYGA",
            sentiment: "neg",
            source: "Insurance Forums — Global Atlantic Bankruptcy?",
            url: "https://www.insurance-forums.com/community/threads/global-atlantic-bankruptcy.110367/",
            date: "2023–2024 thread"
          },
          {
            theme: "r/CFP FIA-options thread names Global Atlantic (ForeCare) as an LTC-via-annuity / accumulation FIA name. That is advisor chatter, not a consumer complaint cluster.",
            product: "FIA / LTC",
            sentiment: "pos",
            source: "Reddit r/CFP — FIA options",
            url: "https://www.reddit.com/r/CFP/comments/1o7mhzk/fia_options/",
            date: "2025-10"
          }
        ]
      },
      {
        company: "F&G (Fidelity & Guaranty)",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Louder on agent boards (FIA riders, IUL caps) than on consumer Reddit. Retail VOC is thinner than LIMRA rank.",
        items: [
          {
            theme: "Insurance Forums FIA-rider thread names F&G for nursing-home, home-health, and terminal-illness surrender waivers and, at the time, strong caps.",
            product: "FIA",
            sentiment: "pos",
            source: "Insurance Forums — FIA disability / surrender waivers",
            url: "https://www.insurance-forums.com/community/threads/any-fia-that-waive-surrender-charges-upon-disability.67617/",
            date: "Thread (FIA rider comparison)"
          },
          {
            theme: "r/CFP and r/InsuranceAgent threads name F&G (Safe Income Advantage / LTC-style FIA) as a go-to for income or long-term-care packaging. Agent-positive, not DIY.",
            product: "FIA / income",
            sentiment: "pos",
            source: "Reddit r/CFP — FIA options",
            url: "https://www.reddit.com/r/CFP/comments/1o7mhzk/fia_options/",
            date: "2025-10"
          },
          {
            theme: "Consumer r/annuities and r/personalfinance searches for F&G / Fidelity & Guaranty are sparse versus sales rank. Thin retail VOC — say so.",
            product: "FIA / MYGA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=%22F%26G%22%20OR%20%22Fidelity%20%26%20Guaranty%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Delaware Life",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Thin retail chatter for a top-15 annuity writer. Shows up as a MYGA quote, not a brand community.",
        items: [
          {
            theme: "Bogleheads MYGA-ladder poster locked a Delaware Life 5-year MYGA at 6.15% and preferred it to Athene on onshore / reinsurance grounds. Rate-shop positive; not a fandom thread.",
            product: "MYGA",
            sentiment: "pos",
            source: "Bogleheads MYGA experiences (t=334589)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=334589&start=1900",
            date: "Thread (2021–); Delaware 6.15% posts"
          },
          {
            theme: "Insurance Forums income-annuity shoppers list Delaware among competitive SPIA/income names with Standard and Global Atlantic. Agent-board, thin consumer volume.",
            product: "SPIA / income",
            sentiment: "pos",
            source: "Insurance Forums — favorite income annuity companies",
            url: "https://www.insurance-forums.com/community/threads/your-favorite-income-annuity-companies.115339/",
            date: "2025-03-17"
          },
          {
            theme: "r/annuities search for Delaware Life is sparse. Little public life-insurance chatter. Thin VOC — say so.",
            product: "MYGA / FIA",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=%22Delaware%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Northwestern Mutual",
        market: "US",
        chatter: "High",
        overall: "neg",
        note: "Highest-volume US life VOC after the mutual-WL cluster. DIY forums are consistently skeptical of the career-agency whole-life pitch.",
        items: [
          {
            theme: "r/personalfinance threads on Northwestern Mutual advisors repeatedly recommend running from whole life and the recruiting / friends-and-family sales model.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance — Northwestern Mutual financial advisor",
            url: "https://www.reddit.com/r/personalfinance/comments/sb34jz/northwestern_mutual_financial_advisor/",
            date: "2022-01"
          },
          {
            theme: "A later r/personalfinance “trapped in whole life” thread moved from Guardian to Northwestern Mutual; replies still say surrender the WL and buy term.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance — trapped in whole life",
            url: "https://www.reddit.com/r/personalfinance/comments/18zlsse/whole_life_insurancefinancial_advisor_trapped_and/",
            date: "2024-01"
          },
          {
            theme: "Bogleheads term-insurance thread: do not buy from tied agents such as Northwestern Mutual or State Farm because rates are usually not the most competitive; prefer independent term quotes.",
            product: "Life / term",
            sentiment: "neg",
            source: "Bogleheads — where to purchase life insurance (t=352686)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=352686",
            date: "2021"
          }
        ]
      },
      {
        company: "MetLife US",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Group-life scale is not a retail-DIY topic. English consumer threads are thinner than the brand would suggest. Separate from MetLife Japan.",
        items: [
          {
            theme: "r/personalfinance searches return workplace / group-life and old Brighthouse-split mentions more than a live retail product debate. Thin individual-life VOC — say so.",
            product: "Life / group",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=MetLife%20life%20OR%20annuity&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Bogleheads hits are usually generic term/WL shopping or old MetLife annuity/Brighthouse references, not a current retail franchise thread.",
            product: "Life / annuity",
            sentiment: "mixed",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=MetLife+annuity+OR+life",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Insurance Forums still treats MetLife as a legacy group / worksite name more than a hot FIA or IUL quote. Agent volume is moderate; consumer tone is not a cluster.",
            product: "Life",
            sentiment: "mixed",
            source: "Insurance Forums search",
            url: "https://www.insurance-forums.com/forum/search.php?keywords=MetLife",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "State Farm Life",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Captive P&C-affiliated life. Public life chatter is thin next to auto/home; IUL questions are uncommon on independent boards.",
        items: [
          {
            theme: "r/LifeInsurance IUL thread: several agents say they have rarely seen a State Farm IUL case and tell the poster to compare specialist IUL writers. Not a slam on solvency — product-shelf unfamiliarity.",
            product: "IUL",
            sentiment: "mixed",
            source: "Reddit r/LifeInsurance — State Farm IUL and living benefits",
            url: "https://www.reddit.com/r/LifeInsurance/comments/1hgdpi7/state_farm_iul_and_living_benefits_questions/",
            date: "2024-12"
          },
          {
            theme: "Bogleheads: State Farm is grouped with Northwestern Mutual as a tied-agent shop whose term rates are usually not the most competitive.",
            product: "Life / term",
            sentiment: "neg",
            source: "Bogleheads — where to purchase life insurance (t=352686)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=352686",
            date: "2021"
          },
          {
            theme: "r/personalfinance life-insurance searches name State Farm more as a captive auto/home cross-sell than as a destination life brand. Thin dedicated life VOC — say so.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=%22State%20Farm%22%20life%20OR%20%22whole%20life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "John Hancock",
        market: "US",
        chatter: "Moderate",
        overall: "mixed",
        note: "Vitality / wearable life and legacy LTC get more named threads than the annuity shelf.",
        items: [
          {
            theme: "Bogleheads VUL thread: a John Hancock VUL 09A holder is walked toward term plus a 1035 into a cheaper annuity. Fee-drag skepticism, not a solvency story.",
            product: "Life / VUL",
            sentiment: "neg",
            source: "Bogleheads — John Hancock VUL (t=215237)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=215237",
            date: "2017–"
          },
          {
            theme: "r/LifeInsurance: a broker pitched John Hancock Vitality Plus IUL with an LTC rider; at least one detailed reply says they would never buy that IUL+LTC combo and to compare other carriers.",
            product: "IUL / LTC",
            sentiment: "neg",
            source: "Reddit r/LifeInsurance — Vitality Plus IUL + LTC",
            url: "https://www.reddit.com/r/LifeInsurance/comments/1j72to4/assess_our_situation_term_vs_perm_life_wltc_rider/",
            date: "2025-03"
          },
          {
            theme: "Older Bogleheads LTC threads: John Hancock is remembered as a former LTC leader that priced itself out / stopped new sales. Historical product-exit context, not a current quote.",
            product: "LTC",
            sentiment: "neg",
            source: "Bogleheads LTC thread (t=82542)",
            url: "https://bogleheads.org/forum/viewtopic.php?t=82542",
            date: "2011– (LTC exit context)"
          },
          {
            theme: "Vitality / Apple Watch premium-discount coverage exists as news-adjacent Reddit posts. Consumer tone is curiosity mixed with privacy unease, not a claims revolt.",
            product: "Life / Vitality",
            sentiment: "mixed",
            source: "Reddit r/conspiracy — Hancock tracker requirement (news link)",
            url: "https://www.reddit.com/r/conspiracy/comments/9ht49s/john_hancock_to_require_use_of_apple_watch_or/",
            date: "2018-09 (Vitality news)"
          }
        ]
      },
      {
        company: "Guardian Life",
        market: "US",
        chatter: "High",
        overall: "neg",
        note: "Participating whole-life brand. DIY buyer-remorse threads are the public VOC, not disability-insurance specialist praise.",
        items: [
          {
            theme: "r/personalfinance “Buyer’s remorse for Guardian Whole Life Policy” is a high-premium PUA / cash-value illustration case; top replies say stop funding and surrender.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance — Guardian whole-life remorse",
            url: "https://www.reddit.com/r/personalfinance/comments/1pjzyzf/buyers_remorse_for_guardian_whole_life_policy/",
            date: "2025-12"
          },
          {
            theme: "Older r/personalfinance whole-life threads name Guardian as the college-friend / career-agent pitch and still recommend term-and-invest.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance — trapped in whole life",
            url: "https://www.reddit.com/r/personalfinance/comments/18zlsse/whole_life_insurancefinancial_advisor_trapped_and/",
            date: "2024-01"
          },
          {
            theme: "Bogleheads disability-insurance side-threads still list Guardian among top-tier DI writers. That is a specialist-product positive next to the WL-negative cluster.",
            product: "Disability",
            sentiment: "pos",
            source: "Bogleheads — where to purchase life insurance (t=352686)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=352686",
            date: "2021"
          }
        ]
      },
      {
        company: "Transamerica",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Broad Aegon retail name. Public consumer threads are thin; agent boards mention UL/LTC riders more than Reddit does.",
        items: [
          {
            theme: "Bogleheads LTC thread mentions a Transamerica LTC policy in passing; the thread’s center of gravity is Hancock/Genworth pricing, not Transamerica fandom or revolt.",
            product: "LTC",
            sentiment: "mixed",
            source: "Bogleheads LTC thread (t=82542)",
            url: "https://bogleheads.org/forum/viewtopic.php?t=82542",
            date: "2011–"
          },
          {
            theme: "r/LifeInsurance UL/LTC-rider thread: an agent names Transamerica as having chronic/critical/terminal and wealth-accumulation options. Agent-positive; not a consumer sample.",
            product: "UL / LTC",
            sentiment: "pos",
            source: "Reddit r/LifeInsurance — UL with LTC riders",
            url: "https://www.reddit.com/r/LifeInsurance/comments/1ge91ev/best_insurance_companies_for_universal_life/",
            date: "2024-10"
          },
          {
            theme: "r/personalfinance search is scattered 403(b)/workplace and old annuity mentions. Thin dedicated retail VOC — say so.",
            product: "Life / annuity",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Transamerica%20annuity%20OR%20life&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Principal Financial",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Workplace / DC brand more than a retail life or annuity VOC name. Thin consumer chatter relative to top-15 life rank.",
        items: [
          {
            theme: "Bogleheads term-quote threads list Principal National among competitive independent term names (with Protective, Hancock, Banner). Price-shop mention, not a brand debate.",
            product: "Life / term",
            sentiment: "pos",
            source: "Bogleheads term quotes (t=267987)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=267987",
            date: "2019"
          },
          {
            theme: "r/LifeInsurance IUL living-benefit comments list Principal among carriers with a chronic-illness indemnity rider. Agent-board, thin consumer volume.",
            product: "IUL",
            sentiment: "mixed",
            source: "Reddit r/LifeInsurance — IULs",
            url: "https://www.reddit.com/r/LifeInsurance/comments/1sopzzq/iuls/",
            date: "2026"
          },
          {
            theme: "r/personalfinance Principal hits are mostly 401(k)/workplace, not individual life or annuity. Thin retail VOC — say so.",
            product: "Life / workplace",
            sentiment: "mixed",
            source: "Reddit r/personalfinance search",
            url: "https://www.reddit.com/r/personalfinance/search/?q=Principal%20life%20OR%20annuity&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Protective Life",
        market: "US",
        chatter: "Thin",
        overall: "mixed",
        note: "Dai-ichi’s US platform. Public VOC is term-price shopping and one Roth-annuity surrender thread — not a high-chatter brand.",
        items: [
          {
            theme: "r/personalfinance: a Protective Life Roth annuity holder asked about moving to a Fidelity Roth IRA; replies warn of surrender charges and still favor getting out of the annuity wrapper.",
            product: "Annuity / Roth",
            sentiment: "neg",
            source: "Reddit r/personalfinance — Protective Roth annuity",
            url: "https://www.reddit.com/r/personalfinance/comments/lwh214/roth_annuity_can_i_roll_this_to_a_roth_ira_with/",
            date: "2021-03"
          },
          {
            theme: "Bogleheads term-shopping lists Protective (and a Costco-issued Protective product) as a competitive independent term quote. Price-shop positive.",
            product: "Life / term",
            sentiment: "pos",
            source: "Bogleheads term quotes (t=267987)",
            url: "https://www.bogleheads.org/forum/viewtopic.php?t=267987",
            date: "2019"
          },
          {
            theme: "r/annuities search for Protective is sparse versus the Dai-ichi US scale. Thin annuity VOC — say so.",
            product: "Annuity",
            sentiment: "mixed",
            source: "Reddit r/annuities search",
            url: "https://www.reddit.com/r/annuities/search/?q=Protective&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Primerica",
        market: "US",
        chatter: "High",
        overall: "neg",
        note: "High policy-count term writer. Public DIY VOC is overwhelmingly about the MLM distribution, not product mechanics.",
        items: [
          {
            theme: "r/personalfinance “Primerica Life Insurance” (vs Northwestern Mutual) — top replies call Primerica an MLM / pyramid and tell the poster to buy independent term instead.",
            product: "Life / term",
            sentiment: "neg",
            source: "Reddit r/personalfinance — Primerica Life Insurance",
            url: "https://www.reddit.com/r/personalfinance/comments/16lgdj3/primerica_life_insurance/",
            date: "2023-09"
          },
          {
            theme: "Other r/personalfinance whole-life threads name Primerica with World Financial Group as the MLM life-insurance pitch to avoid.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/personalfinance — advisor pushing whole life",
            url: "https://www.reddit.com/r/personalfinance/comments/nlrcyy/24yof_single_financial_advisor_keeps_trying_to/",
            date: "2021-05"
          },
          {
            theme: "Bogleheads and Insurance Forums searches add little product-technical depth beyond the same distribution critique. High chatter, low product nuance.",
            product: "Life / term",
            sentiment: "neg",
            source: "Bogleheads search",
            url: "https://www.bogleheads.org/forum/search.php?keywords=Primerica",
            date: "Search as of 2026-09-25"
          }
        ]
      }
    ],
    japan: [
      {
        company: "Nippon Life (Nissay)",
        market: "JP",
        chatter: "Moderate",
        overall: "mixed",
        note: "English Reddit is still thin; Yahoo Chiebukuro is where みらいのカタチ personal-annuity holders actually ask whether to keep paying.",
        items: [
          {
            theme: "r/JapanFinance searches return few dedicated Nissay product threads. English chatter is category-level (life vs NISA), not carrier-level.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Nissay%20OR%20%22Nippon%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Chiebukuro: a みらいのカタチ personal-annuity holder (joined young, ~¥9,443/month) asks whether to continue, paid-up, or cancel for iDeCo. Replies treat ~1.2% implied yield as low-rate-era OK, not a slam-dunk keep.",
            product: "Annuity",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — みらいのカタチ personal annuity",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11266460831",
            date: "Thread (personal-annuity vs iDeCo)"
          },
          {
            theme: "Chiebukuro: a new みらいのカタチ 10-year certain annuity pitched to age 70 (24 years pay, 106% return) draws replies that paying after retirement and a 106% long-horizon return are unattractive versus just saying no.",
            product: "Annuity",
            sentiment: "neg",
            source: "Yahoo Chiebukuro — みらいのカタチ new sale to age 70",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14322321909",
            date: "2025-11"
          }
        ]
      },
      {
        company: "Dai-ichi Life",
        market: "JP",
        chatter: "Thin",
        overall: "mixed",
        note: "English VOC is thin. Japanese Chiebukuro mixes Dai-ichi tied-agent FX whole life with Frontier bank-window products — keep the licenses separate.",
        items: [
          {
            theme: "r/JapanFinance has little Dai-ichi Japan product discussion. No large English complaint or fandom cluster.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=%22Dai-ichi%22%20OR%20Daiichi&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Chiebukuro: a parent is pitched Dai-ichi プレミアレシーブ (FX single-premium whole life / “¥300万 in, ~¥10万 a year”). Asker is skeptical of fees and lock-up; replies treat it as a complex FX savings wrapper, not a default.",
            product: "Life / FX",
            sentiment: "neg",
            source: "Yahoo Chiebukuro — Dai-ichi Premier Reserve",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13266058558",
            date: "Thread (FX whole life pitch)"
          },
          {
            theme: "Bank-window VA sits mainly at Dai-ichi Frontier (separate card). Dai-ichi Japan annuity chatter on English Reddit remains thin — say so.",
            product: "Annuity",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Frontier%20annuity%20OR%20%22variable%20annuity%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Sony Life",
        market: "JP",
        chatter: "Moderate",
        overall: "mixed",
        note: "The Japan life-planner name that English-speaking residents actually discuss.",
        items: [
          {
            theme: "Life-planner sales pressure and packaged protection/variable savings are the recurring r/JapanFinance and Japan-expat theme. Lean negative on tactics, mixed on the products.",
            product: "Life",
            sentiment: "neg",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=%22Sony%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Variable / unit-linked savings are often compared unfavorably with New NISA index funds in DIY JapanFinance threads. Product-class preference, not a fabricated quote.",
            product: "VA / life",
            sentiment: "neg",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Sony%20Life%20NISA%20OR%20variable&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Some threads still describe the planner model as convenient for bilingual households. That is the positive minority next to the sales-pressure theme.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=%22life%20planner%22%20Sony&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Aflac Japan",
        market: "JP",
        chatter: "High",
        overall: "mixed",
        note: "Highest English chatter among Japan names. Discussed as cancer/medical insurance, not as an annuity writer.",
        items: [
          {
            theme: "Cancer and medical (third-sector) coverage is the one Japan carrier theme English expats consistently name. Workplace Aflac is common; the debate is overlap and need.",
            product: "Life (cancer / medical)",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Aflac&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Not discussed as an annuity company. Public English VOC matches the franchise: third-sector life, not FIA/VA/MYGA.",
            product: "Annuity",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Aflac%20annuity%20OR%20cancer&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Positive notes, when they appear, are about simple claims on cancer/medical riders — still mixed overall because many already have overlapping cover.",
            product: "Life (cancer / medical)",
            sentiment: "pos",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Aflac%20cancer%20OR%20medical&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Japan Post Insurance (Kampo)",
        market: "JP",
        chatter: "Moderate",
        overall: "neg",
        note: "English-language reputation is still dominated by the 2019 improper-sales episode. Current product chatter is thin.",
        items: [
          {
            theme: "2019 improper-sales disclosures still define English-language mentions. That is public news context, not a forum quote.",
            product: "Life / annuity",
            sentiment: "neg",
            source: "Reuters — Japan Post Insurance improper sales (2019)",
            url: "https://www.reuters.com/article/world/asia-pacific/japan-post-insurance-says-183000-policies-sold-improperly-idUSKBN1YG0Q4/",
            date: "2019-12-19"
          },
          {
            theme: "r/JapanFinance searches for Kampo / Japan Post Insurance are sparse and usually point back to the postal-channel scandal or to avoiding kampo products.",
            product: "Life / annuity",
            sentiment: "neg",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Kampo%20OR%20%22Japan%20Post%20Insurance%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Current annuity-product chatter is thin. The book is discussed as a legacy postal franchise with constrained new sales, not as a hot retail product.",
            product: "Annuity",
            sentiment: "mixed",
            source: "Japan Post Insurance English site",
            url: "https://www.jp-life.japanpost.jp/english/",
            date: "Company site (ongoing)"
          }
        ]
      },
      {
        company: "Prudential Japan / Gibraltar",
        market: "JP",
        chatter: "Thin",
        overall: "mixed",
        note: "Life-planner channel has some English mentions; Gibraltar/PGF bank VA has almost none.",
        items: [
          {
            theme: "Prudential Life Japan life planners get some r/JapanFinance / Japan-expat mentions, similar to Sony but fewer threads. Sales-tactics tone is mixed-to-negative.",
            product: "Life",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Prudential%20OR%20Gibraltar&restrict_sr=1",
            date: "Search as of 2026-09-25"
          },
          {
            theme: "Gibraltar Life and PGF bank-window VA: almost no English retail chatter. Little public commentary — say so.",
            product: "VA / annuity",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=PGF%20OR%20%22Gibraltar%20Life%22&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Sumitomo Life",
        market: "JP",
        chatter: "Moderate",
        overall: "neg",
        note: "English Reddit has a clear FX whole-life thread; yen individual-annuity VOC stays thinner.",
        items: [
          {
            theme: "r/JapanFinance: SMBC pitched 笑顔の約束3 (AUD/USD, 10-year lock). Replies treat it as non-principal-guaranteed FX insurance and prefer term plus NISA.",
            product: "Life / FX",
            sentiment: "neg",
            source: "Reddit r/JapanFinance — Sumitomo 終身生命保険",
            url: "https://www.reddit.com/r/JapanFinance/comments/1jryghx/considering_buying_%E7%B5%82%E8%BA%AB%E7%94%9F%E5%91%BD%E4%BF%9D%E9%99%BA_from_%E4%BD%8F%E5%8F%8B%E7%94%9F%E5%91%BD_it_sounds/",
            date: "2025"
          },
          {
            theme: "Chiebukuro holders of ふるはーとJロードグローバル ask about similar FX single-premium death-benefit multiples. Product-comparison, not a solvency debate.",
            product: "Life / FX",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — Sumitomo ふるはーと global",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14299121319",
            date: "Thread (FX whole life)"
          }
        ]
      },
      {
        company: "Meiji Yasuda Life",
        market: "JP",
        chatter: "Moderate",
        overall: "mixed",
        note: "Japanese Chiebukuro is the public VOC: USD endowment / FX whole life versus postal deposits.",
        items: [
          {
            theme: "Chiebukuro: USD single-premium endowment / FX whole life pitched versus yucho deposits. Replies mix “better than postal rates” with FX-risk and fee warnings.",
            product: "Life / FX",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — Meiji Yasuda FX whole life",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12309559092",
            date: "Thread (FX vs yucho)"
          },
          {
            theme: "Chiebukuro じぶんの積立 / personal-annuity deduction threads treat Meiji Yasuda savings products as tax-wrapper debates, not carrier fandom.",
            product: "Annuity / savings",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — じぶんの積立",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13307479008",
            date: "Thread (deduction product)"
          }
        ]
      },
      {
        company: "Dai-ichi Frontier Life",
        market: "JP",
        chatter: "Moderate",
        overall: "neg",
        note: "Bank-window VA / FX savings. English Reddit named the Frontier product page on a US T-bond whole-life pitch.",
        items: [
          {
            theme: "r/JapanFinance T-bond life thread links a Dai-ichi Frontier product page. Replies flag bank commissions, premiums taken from the “rate,” and market-value adjustment on early exit.",
            product: "VA / FX life",
            sentiment: "neg",
            source: "Reddit r/JapanFinance — US T-bond life",
            url: "https://www.reddit.com/r/JapanFinance/comments/125h79c/is_us_30_year_tbondsbased_life_insurance_a_good/",
            date: "2023"
          },
          {
            theme: "Chiebukuro “Dai-ichi personal annuity 4.20%” is identified by a reply as Frontier FX personal annuity with a 1.20% floor — rate-confusion, not a rave.",
            product: "Annuity / FX",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — Frontier FX personal annuity",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12280447082",
            date: "2023-05"
          }
        ]
      },
      {
        company: "T&D Financial Life",
        market: "JP",
        chatter: "Thin",
        overall: "mixed",
        note: "Bank-window VA. English retail VOC is thin; JCR has the name on watch. Little public chatter — say so.",
        items: [
          {
            theme: "r/JapanFinance and English searches return almost no dedicated T&D Financial Life product threads. Thin VOC — say so.",
            product: "VA / annuity",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=%22T%26D%22%20OR%20%E3%83%95%E3%82%A3%E3%83%8A%E3%83%B3%E3%82%B7%E3%83%A3%E3%83%AB%E7%94%9F%E5%91%BD&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      },
      {
        company: "Mitsui Sumitomo Primary Life",
        market: "JP",
        chatter: "Thin",
        overall: "mixed",
        note: "Bank-window FX annuity specialist. Public VOC is Japanese Chiebukuro, not English Reddit.",
        items: [
          {
            theme: "Chiebukuro on しあわせずっと3 (via SM Trust): replies say compare net yield after fees and that a nursing rider can cheapen the crediting rate. Not a solvency story.",
            product: "FX annuity",
            sentiment: "mixed",
            source: "Yahoo Chiebukuro — MS Primary しあわせずっと3",
            url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14293019524",
            date: "Thread (bank FX annuity)"
          },
          {
            theme: "English r/JapanFinance search for MS Primary / 三井住友プライマリー is sparse. Thin English VOC — say so.",
            product: "FX annuity",
            sentiment: "mixed",
            source: "Reddit r/JapanFinance search",
            url: "https://www.reddit.com/r/JapanFinance/search/?q=Primary%20OR%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%9E%E3%83%AA%E3%83%BC&restrict_sr=1",
            date: "Search as of 2026-09-25"
          }
        ]
      }
    ]
  }
};

dashboardData.listingCatalog = {
  APO: { ticker: "APO", yahooSymbol: "APO", exchange: "NYSE", currency: "USD", listedName: "Apollo Global Management", yahooUrl: "https://finance.yahoo.com/quote/APO", googleUrl: "https://www.google.com/finance/quote/APO:NYSE" },
  CRBG: { ticker: "CRBG", yahooSymbol: "CRBG", exchange: "NYSE", currency: "USD", listedName: "Corebridge Financial", yahooUrl: "https://finance.yahoo.com/quote/CRBG", googleUrl: "https://www.google.com/finance/quote/CRBG:NYSE" },
  EQH: { ticker: "EQH", yahooSymbol: "EQH", exchange: "NYSE", currency: "USD", listedName: "Equitable Holdings", yahooUrl: "https://finance.yahoo.com/quote/EQH", googleUrl: "https://www.google.com/finance/quote/EQH:NYSE" },
  JXN: { ticker: "JXN", yahooSymbol: "JXN", exchange: "NYSE", currency: "USD", listedName: "Jackson Financial", yahooUrl: "https://finance.yahoo.com/quote/JXN", googleUrl: "https://www.google.com/finance/quote/JXN:NYSE" },
  ALV: { ticker: "ALV", yahooSymbol: "ALV.DE", exchange: "Xetra", currency: "EUR", listedName: "Allianz SE", yahooUrl: "https://finance.yahoo.com/quote/ALV.DE", googleUrl: "https://www.google.com/finance/quote/ALV:ETR" },
  LNC: { ticker: "LNC", yahooSymbol: "LNC", exchange: "NYSE", currency: "USD", listedName: "Lincoln National", yahooUrl: "https://finance.yahoo.com/quote/LNC", googleUrl: "https://www.google.com/finance/quote/LNC:NYSE" },
  PRU: { ticker: "PRU", yahooSymbol: "PRU", exchange: "NYSE", currency: "USD", listedName: "Prudential Financial", yahooUrl: "https://finance.yahoo.com/quote/PRU", googleUrl: "https://www.google.com/finance/quote/PRU:NYSE" },
  KKR: { ticker: "KKR", yahooSymbol: "KKR", exchange: "NYSE", currency: "USD", listedName: "KKR & Co.", yahooUrl: "https://finance.yahoo.com/quote/KKR", googleUrl: "https://www.google.com/finance/quote/KKR:NYSE" },
  FG: { ticker: "FG", yahooSymbol: "FG", exchange: "NYSE", currency: "USD", listedName: "F&G Annuities & Life", yahooUrl: "https://finance.yahoo.com/quote/FG", googleUrl: "https://www.google.com/finance/quote/FG:NYSE" },
  "8750.T": { ticker: "8750.T", yahooSymbol: "8750.T", exchange: "TSE", currency: "JPY", listedName: "Dai-ichi Life Holdings", yahooUrl: "https://finance.yahoo.com/quote/8750.T", googleUrl: "https://www.google.com/finance/quote/8750:TYO" },
  "8729.T": { ticker: "8729.T", yahooSymbol: "8729.T", exchange: "TSE", currency: "JPY", listedName: "Sony Financial Group", yahooUrl: "https://finance.yahoo.com/quote/8729.T", googleUrl: "https://www.google.com/finance/quote/8729:TYO" },
  "7181.T": { ticker: "7181.T", yahooSymbol: "7181.T", exchange: "TSE", currency: "JPY", listedName: "Japan Post Insurance", yahooUrl: "https://finance.yahoo.com/quote/7181.T", googleUrl: "https://www.google.com/finance/quote/7181:TYO" },
  "8795.T": { ticker: "8795.T", yahooSymbol: "8795.T", exchange: "TSE", currency: "JPY", listedName: "T&D Holdings", yahooUrl: "https://finance.yahoo.com/quote/8795.T", googleUrl: "https://www.google.com/finance/quote/8795:TYO" },
  MFC: { ticker: "MFC", yahooSymbol: "MFC", exchange: "NYSE", currency: "USD", listedName: "Manulife Financial", yahooUrl: "https://finance.yahoo.com/quote/MFC", googleUrl: "https://www.google.com/finance/quote/MFC:NYSE" },
  MET: { ticker: "MET", yahooSymbol: "MET", exchange: "NYSE", currency: "USD", listedName: "MetLife", yahooUrl: "https://finance.yahoo.com/quote/MET", googleUrl: "https://www.google.com/finance/quote/MET:NYSE" },
  CS: { ticker: "CS", yahooSymbol: "CS.PA", exchange: "Euronext Paris", currency: "EUR", listedName: "AXA", yahooUrl: "https://finance.yahoo.com/quote/CS.PA", googleUrl: "https://www.google.com/finance/quote/CS:EPA" },
  "8725.T": { ticker: "8725.T", yahooSymbol: "8725.T", exchange: "TSE", currency: "JPY", listedName: "MS&AD Insurance Group", yahooUrl: "https://finance.yahoo.com/quote/8725.T", googleUrl: "https://www.google.com/finance/quote/8725:TYO" },
  AFL: { ticker: "AFL", yahooSymbol: "AFL", exchange: "NYSE", currency: "USD", listedName: "Aflac", yahooUrl: "https://finance.yahoo.com/quote/AFL", googleUrl: "https://www.google.com/finance/quote/AFL:NYSE" },
  AEG: { ticker: "AEG", yahooSymbol: "AEG", exchange: "NYSE", currency: "USD", listedName: "Aegon", yahooUrl: "https://finance.yahoo.com/quote/AEG", googleUrl: "https://www.google.com/finance/quote/AEG:NYSE" },
  PFG: { ticker: "PFG", yahooSymbol: "PFG", exchange: "NASDAQ", currency: "USD", listedName: "Principal Financial", yahooUrl: "https://finance.yahoo.com/quote/PFG", googleUrl: "https://www.google.com/finance/quote/PFG:NASDAQ" },
  PRI: { ticker: "PRI", yahooSymbol: "PRI", exchange: "NYSE", currency: "USD", listedName: "Primerica", yahooUrl: "https://finance.yahoo.com/quote/PRI", googleUrl: "https://www.google.com/finance/quote/PRI:NYSE" },
  "8766.T": { ticker: "8766.T", yahooSymbol: "8766.T", exchange: "TSE", currency: "JPY", listedName: "Tokio Marine Holdings", yahooUrl: "https://finance.yahoo.com/quote/8766.T", googleUrl: "https://www.google.com/finance/quote/8766:TYO" }
};

dashboardData.liveMarkets = {
  refreshMs: 90000,
  brief:
    "Last, change, and % change refresh every 90 seconds from Yahoo Finance’s public chart API in this browser (no backend). Yahoo often blocks CORS from file:// and some local origins; the page then retries api.allorigins.win/raw and corsproxy.io. US 2Y / Fed funds / SOFR / Japan 10Y JGB use FRED when ?fredKey= or localStorage FRED_API_KEY is set; otherwise Treasuries use Yahoo (^TNX, ^TYX, 2YY=F) and overnight / JGB rows stay n/a if FRED is unreachable. Levels are never invented.",
  indices: [
    { id: "spx", label: "S&P 500", yahoo: "^GSPC", kind: "index" },
    { id: "nasdaq", label: "Nasdaq Composite", yahoo: "^IXIC", kind: "index" },
    { id: "dow", label: "Dow Jones", yahoo: "^DJI", kind: "index" },
    { id: "vix", label: "VIX", yahoo: "^VIX", kind: "index" },
    { id: "nikkei", label: "Nikkei 225", yahoo: "^N225", kind: "index" },
    {
      id: "topix",
      label: "TOPIX ETF (1306.T)",
      yahoo: "1306.T",
      kind: "etf",
      note: "Yahoo has no public TOPIX cash-index ticker; NEXT FUNDS TOPIX ETF is the listed proxy."
    },
    { id: "usdjpy", label: "USD/JPY", yahoo: "JPY=X", kind: "fx" }
  ],
  rates: [
    {
      id: "us2y",
      label: "US 2Y Treasury",
      yahoo: "2YY=F",
      fred: "DGS2",
      kind: "yield",
      note: "Yahoo 2YY=F is CBOT 2-year yield futures when FRED DGS2 is unavailable."
    },
    { id: "us10y", label: "US 10Y Treasury", yahoo: "^TNX", fred: "DGS10", kind: "yield" },
    { id: "us30y", label: "US 30Y Treasury", yahoo: "^TYX", fred: "DGS30", kind: "yield" },
    { id: "fedfunds", label: "Fed funds effective", yahoo: "", fred: "DFF", kind: "yield" },
    { id: "sofr", label: "SOFR", yahoo: "", fred: "SOFR", kind: "yield" },
    {
      id: "jgb10y",
      label: "Japan 10Y JGB",
      yahoo: "",
      fred: "IRLTLT01JPM156N",
      kind: "yield",
      note: "No working Yahoo JGB ticker; FRED IRLTLT01JPM156N is monthly OECD."
    }
  ]
};

dashboardData.marketQuotes = {};

dashboardData.quotes = {
  APO: { price: 121.69, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  CRBG: { price: 34.87, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  EQH: { price: 53.84, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  JXN: { price: 133.12, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  "ALV.DE": { price: 423.5, currency: "EUR", asOf: "2026-09-25", source: "Yahoo Finance" },
  LNC: { price: 41.69, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  PRU: { price: 119.45, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  KKR: { price: 96.67, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  FG: { price: 22.12, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  "8750.T": { price: 1907, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" },
  "8729.T": { price: 162.3, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" },
  "7181.T": { price: 1828, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" },
  "8795.T": { price: 4993, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" },
  MFC: { price: 43.86, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  MET: { price: 97.7, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  "CS.PA": { price: 44.0, currency: "EUR", asOf: "2026-09-25", source: "Yahoo Finance" },
  "8725.T": { price: 5030, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" },
  AFL: { price: 113.72, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  AEG: { price: 8.89, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  PFG: { price: 114.77, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  PRI: { price: 275.59, currency: "USD", asOf: "2026-09-25", source: "Yahoo Finance" },
  "8766.T": { price: 7992, currency: "JPY", asOf: "2026-09-25", source: "Yahoo Finance" }
};

(function stampCarrierListings() {
  const catalog = dashboardData.listingCatalog;
  const quotes = dashboardData.quotes;
  [
    dashboardData.usAnnuities,
    dashboardData.japanAnnuities,
    dashboardData.usLife,
    dashboardData.japanLife
  ].forEach((list) => {
    list.forEach((row) => {
      const ticker = row.ticker;
      const listed = ticker && ticker !== "Mutual" && ticker !== "Private";
      const entry = listed ? catalog[ticker] : null;
      if (!entry) {
        row.exchange = "";
        row.yahooSymbol = "";
        row.quoteCurrency = "";
        row.yahooUrl = "";
        row.googleUrl = "";
        row.stockPrice = null;
        row.priceAsOf = null;
        return;
      }
      const q = quotes[entry.yahooSymbol];
      row.exchange = entry.exchange;
      row.yahooSymbol = entry.yahooSymbol;
      row.quoteCurrency = entry.currency;
      row.yahooUrl = entry.yahooUrl;
      row.googleUrl = entry.googleUrl;
      row.stockPrice = q && q.price != null ? q.price : null;
      row.priceAsOf = q && q.asOf ? q.asOf : null;
    });
  });
})();

function companyListingRecord(row, sector, market) {
  return {
    company: row.company,
    parent: row.parent,
    market: market,
    ticker: row.ticker,
    listing: row.listing,
    sector: sector,
    exchange: row.exchange || "",
    yahooSymbol: row.yahooSymbol || "",
    quoteCurrency: row.quoteCurrency || "",
    yahooUrl: row.yahooUrl || "",
    googleUrl: row.googleUrl || "",
    stockPrice: row.stockPrice,
    priceAsOf: row.priceAsOf,
    volatility: row.focus,
    signal: "#" + row.rank
  };
}

dashboardData.companies = []
  .concat(
    dashboardData.usAnnuities.map((row) => companyListingRecord(row, "US Annuity", "US")),
    dashboardData.japanAnnuities.map((row) => companyListingRecord(row, "Japan Annuity", "JP")),
    dashboardData.usLife.map((row) => companyListingRecord(row, "US Life", "US")),
    dashboardData.japanLife.map((row) => companyListingRecord(row, "Japan Life", "JP"))
  );
