/* Follow the Slop — data
 * Pure data, no dependencies. Drives index.html. Sibling of FOIA Around, Find Out.
 * THE DISCIPLINE: every entry carries a grade, and the grade is the product.
 *   documented — a public record exists (FARA filing, contract, court record, press release)
 *   reported   — journalism or a named source; the record itself not in hand
 *   claimed    — somebody said it on air; receipts not shown
 *   open       — a hole: the pattern is visible but the receipts are not yet gathered
 * Repeat a claim at its grade, never above it. That's what separates this from
 * the vibes-based versions of this site.
 *
 * THE PICTURE: slop flows downhill. nodes have a tier — trough (who fills it),
 * pipe (who it runs through), mouth (who serves it). flows connect them, each
 * graded, each pointing at its receipt card below.
 */
const SLOP = {
  meta: {
    product: "Follow the Slop",
    tagline: "The talking points are coordinated. The money is public record. Follow both.",
    premise: "When the same script comes out of twenty mouths in one afternoon, that's not a vibe — that's logistics. Logistics cost money, and money leaves records: FARA filings, FEC reports, IRS 990s, federal contracts. Below: the trough (who fills it), the pipes (who it runs through), and the mouths (who serves it to you) — every connection graded by its paper, every grade backed by a receipt you can check.",
    check_yourself: [
      { label: "FARA — foreign-agent filings (DOJ)", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
      { label: "FEC — campaign money", url: "https://www.fec.gov/data/" },
      { label: "IRS 990s — the nonprofit money (ProPublica)", url: "https://projects.propublica.org/nonprofits/" },
      { label: "USASpending — the government checks", url: "https://www.usaspending.gov/" }
    ],
    siblings: [
      { label: "FOIA Around, Find Out (federal)", url: "https://foia-around-find-out.pages.dev/" },
      { label: "FAFO: Charlie Kirk Edition (Utah GRAMA)", url: "https://fafo-utah-kirk.pages.dev/" }
    ]
  },

  /* ——— THE PLUMBING: tiers of tiles ——— */
  nodes: [
    { id: "israel-gov", tier: "trough", name: "Government of Israel", sub: "Ministry of Foreign Affairs" },
    { id: "dod",        tier: "trough", name: "U.S. Department of Defense", sub: "digital-media consulting money" },
    { id: "tpusa",      tier: "trough", name: "Turning Point USA", sub: "post-assassination payroll" },
    { id: "foundation", tier: "trough", name: "“a foundation”", sub: "named on air, never produced" },

    { id: "havas",      tier: "pipe", name: "Havas Media Germany GmbH", sub: "contracting intermediary" },
    { id: "clocktower", tier: "pipe", name: "Clock Tower X LLC", sub: "Brad Parscale · FARA #7649" },
    { id: "salem",      tier: "pipe", name: "Salem Media Network", sub: "distribution — Parscale as CSO (reported)" },

    { id: "kirkshow",   tier: "mouth", name: "The Charlie Kirk Show", sub: "Andrew Kolvet, co-host" },
    { id: "radioslot",  tier: "mouth", name: "Marlow & Jennings", sub: "Kirk's radio slot, from Jan 5, 2026" },
    { id: "wilson",     tier: "mouth", name: "Andrew Wilson", sub: "TPUSA debate trainer" },
    { id: "allen",      tier: "mouth", name: "Graham Allen", sub: "podcaster, ex-Pentagon consultant" },
    { id: "network",    tier: "mouth", name: "unnamed influencer network", sub: "the “American market” budget" }
  ],

  /* flows: from → to, graded; ref points at the receipt card that carries sources */
  flows: [
    { from: "israel-gov", to: "havas",      grade: "documented", ref: "israel-mfa-clocktower" },
    { from: "havas",      to: "clocktower", grade: "documented", ref: "israel-mfa-clocktower" },
    { from: "clocktower", to: "salem",      grade: "documented", ref: "clocktower-salem" },
    { from: "salem",      to: "kirkshow",   grade: "documented", ref: "clocktower-salem" },
    { from: "salem",      to: "radioslot",  grade: "documented", ref: "clocktower-salem" },
    { from: "tpusa",      to: "wilson",     grade: "reported",   ref: "tpusa-wilson" },
    { from: "dod",        to: "allen",      grade: "reported",   ref: "pentagon-allen" },
    { from: "foundation", to: "network",    grade: "claimed",    ref: "foundation-budget" }
  ],

  /* ——— THE RECEIPTS: one card per money edge, the paper behind the picture ——— */
  money: [
    {
      id: "israel-mfa-clocktower",
      payer: "Government of Israel (MFA, via Havas Media Germany GmbH)",
      mouth: "Clock Tower X LLC — Brad Parscale",
      what: "FARA registration #7649, filed September 18, 2025 — EIGHT DAYS after Charlie Kirk was killed. $1.5M/month ($9M disclosed contract) to run “anti-antisemitism campaigns”: AI-driven content generation, SEO manipulation, and — written into the filing's scope — “integration with Salem Media Network properties,” with at least 80% of content “tailored to Gen Z audiences across TikTok, Instagram, YouTube, podcasts.”",
      grade: "documented",
      basis: "The FARA filing is a public federal record; contract terms reported from the filing by multiple outlets.",
      sources: [
        { label: "DOJ FARA database (search registration 7649 / Clock Tower X)", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
        { label: "The Hill — Parscale registers as foreign agent for Israel", url: "https://thehill.com/policy/international/5528458-brad-parscale-israel-foreign-agent/" },
        { label: "The Intercept — where the Israeli government money went (May 28, 2026)", url: "https://theintercept.com/2026/05/28/israeli-government-money-brad-parsc/" }
      ]
    },
    {
      id: "clocktower-salem",
      payer: "Clock Tower X (Israel MFA money)",
      mouth: "Salem Media Network — and everything it distributes",
      what: "The FARA scope names Salem integration; Parscale took the role of Salem's Chief Strategy Officer (reported), and The Charlie Kirk Show continued under Salem Podcast Network after the assassination, producer Andrew Kolvet co-hosting, with Salem assigning Kirk's radio slot to Alex Marlow and Scott Jennings starting January 5, 2026. Net effect: the foreign agent's contract scope and the dead man's audience run through the same pipes.",
      grade: "documented",
      basis: "Salem-integration language: in the FARA filing's scope (documented). The CSO role and show mechanics: trade press, investigative reporting, and Salem's own statements.",
      sources: [
        { label: "Radio Ink — Kirk replacement hosts revealed by Salem (Dec 2025)", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" },
        { label: "The Grayzone — Israeli foreign agent took over The Charlie Kirk Show days after his killing", url: "https://thegrayzone.com/2026/06/18/israeli-foreign-agent-charlie-kirk-show/" },
        { label: "Salem Media statement, Sept 10, 2025", url: "https://www.globenewswire.com/news-release/2025/09/10/3148287/0/en/salem-media-statement-on-the-assassination-of-charlie-kirk.html" }
      ]
    },
    {
      id: "foundation-budget",
      payer: "“A foundation” (Israel-linked, per the message read on air)",
      mouth: "Unnamed American influencer network",
      what: "Alex Bruesewitz, on Tucker Carlson's show, read a message he dated to 2:47, June 16, 2025: “good news from Israel, they have budget for the American market to make a strategy and social network against Iran... it is through a foundation.” He connected it to the subsequent Parscale FARA contract. The FARA part checks out (see the documented edge above); the foundation message itself has not been produced.",
      grade: "claimed",
      basis: "On-air claim by a named participant reading a purported message; the receipts were described, not shown.",
      sources: [
        { label: "Bruesewitz on Tucker Carlson (clip aired via Liberty Lockdown)", url: "https://www.youtube.com/watch?v=2gAM3VILTvI" }
      ]
    },
    {
      id: "tpusa-wilson",
      payer: "Turning Point USA",
      mouth: "Andrew Wilson",
      what: "TPUSA hired debater Andrew Wilson to train its new campus debaters — per Wilson's own on-air statement — despite (or because of) his documented history of attacking Charlie Kirk, Erika Kirk, and TPUSA itself (posts from 2021, March 2026, and April 2026). A hired mouth is a hired mouth; the interesting part is what he defends now that he's paid.",
      grade: "reported",
      basis: "Wilson's own on-air statement (audio); his prior posts are timestamped and public.",
      sources: [
        { label: "Liberty Lockdown — TPUSA Hires Andrew Wilson as Their New Attack Dog", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" }
      ]
    },
    {
      id: "pentagon-allen",
      payer: "U.S. Department of Defense",
      mouth: "Graham Allen",
      what: "Podcaster Graham Allen — formerly a Pentagon “senior strategic consultant for digital media” — is now among the loudest defenders of the official Tyler Robinson prosecution narrative. The consultancy is the checkable part: federal consulting leaves contract records.",
      grade: "reported",
      basis: "Reported description of the prior Pentagon role; the contract paper hasn't been pulled yet. CHECKABLE: USASpending / FPDS contract search, or a DoD FOIA — the sibling site drafts those.",
      sources: [
        { label: "Liberty Lockdown (the Graham Allen parallel)", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" }
      ]
    }
  ],

  /* ——— THE WAVES: same script, many mouths, one timestamp window ——— */
  waves: [
    {
      id: "kindness-wave",
      date: "July 2026 (preliminary-hearing week)",
      script: "Erika Kirk kindness stories — the same warm anecdote texture, same day",
      what: "During the Robinson preliminary hearing — as the state's physical evidence was publicly cracking — a same-day cluster of coordinated kindness-story posts about Erika Kirk appeared from TPUSA-adjacent accounts: Andrew Kolvet, Jack Posobiec, Danny Philip, and others, alongside al.com human-interest coverage (Mark Heim; the “Hanky Gate”/“Balloon Gate” pieces). Documented as a cluster by Baron Coleman during hearing coverage. The tell isn't any single post — it's the timestamp clustering against the courtroom calendar.",
      grade: "reported",
      basis: "The posts are public and timestamped; the cluster reading is Coleman's, checkable by anyone with the timestamps.",
      sources: [
        { label: "Baron Coleman, Ep. 142 hearing coverage (the cluster walk-through)", url: "https://www.youtube.com/watch?v=6ZZ_e53ZDnY" }
      ]
    }
  ],

  /* ——— THE 180s: dated pivots into the slop, before/after receipts required ——— */
  turns: [
    {
      id: "fuentes-turn",
      who: "Nick Fuentes",
      when: "2026 (date needs pinning)",
      what: "A presenter whose entire brand was built against the establishment narrative pivoting toward fed-friendly framing. Widely observed; not yet documented here.",
      grade: "open",
      basis: "NEEDED to close this entry: dated before/after content samples (clip pairs with timestamps), and any money edge that precedes the pivot. Until then it stays OPEN — that's the discipline.",
      sources: []
    },
    {
      id: "finkelstein-turn",
      who: "Norman Finkelstein",
      when: "2026 (date needs pinning)",
      what: "A lifetime anti-occupation scholar showing an uncharacteristic swerve into narrative-friendly territory. Widely observed; not yet documented here.",
      grade: "open",
      basis: "NEEDED to close this entry: the specific statements (dated), contrasted with his prior positions (dated), and any institutional relationship that changed in between.",
      sources: []
    }
  ]
};
