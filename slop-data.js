/* Follow the Slop — data
 * Pure data, no dependencies. Drives index.html.
 * THE DISCIPLINE: every edge and event carries a grade, and the grade is the product.
 *   documented — a public record exists (FARA filing, contract, press release)
 *   reported   — journalism or a named source; the record itself not in hand
 *   claimed    — somebody said it on air; receipts not shown
 * Repeat a claim at its grade, never above it.
 *
 * THE PICTURE: the trough (orgs, top) feeds the mouths (posters, below).
 * The timeline runs 2025-09-10 → today: money stamps land on posters as their
 * funding dates pass; waves make every rider spew the same script at once —
 * the simultaneity IS the evidence.
 */
const SLOP = {
  meta: {
    product: "Follow the Slop",
    tagline: "The talking points are coordinated. The money is public record. Follow both.",
    premise: "When the same script comes out of twenty mouths in one afternoon, that's not a vibe — that's logistics. Logistics cost money, and money leaves records. Above: who fills the trough. Below: who serves it. Drag the timeline and watch the money land and the scripts fire in waves — the timing is the tell, even when the money hides.",
    epoch: "2025-09-10",
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

  /* ——— THE TROUGH: who fills it ——— */
  troughs: [
    { id: "israel",     name: "Government of Israel", sub: "MFA · via Havas Media Germany · FARA #7649" },
    { id: "salem",      name: "Salem Media Network",  sub: "distribution · Parscale as CSO (reported)" },
    { id: "tpusa",      name: "Turning Point USA",    sub: "post-assassination payroll" },
    { id: "dod",        name: "U.S. Dept of Defense", sub: "digital-media consulting money" },
    { id: "foundation", name: "“a foundation”",       sub: "named on air, never produced" }
  ],

  /* ——— THE WALL: (un)wanted posters ——— */
  posters: [
    { id: "parscale",  name: "Brad Parscale",   outlet: "Clock Tower X · Salem CSO",
      charge: "registered foreign agent of Israel — $1.5M/month, eight days after the killing" },
    { id: "kolvet",    name: "Andrew Kolvet",   outlet: "The Charlie Kirk Show (Salem)",
      charge: "co-hosts the dead man's show inside the foreign agent's contract scope" },
    { id: "marlow",    name: "Alex Marlow",     outlet: "Breitbart · Salem radio",
      charge: "handed Kirk's radio slot, live Jan 5, 2026" },
    { id: "jennings",  name: "Scott Jennings",  outlet: "CNN · Salem radio",
      charge: "handed Kirk's radio slot, live Jan 5, 2026" },
    { id: "wilson",    name: "Andrew Wilson",   outlet: "debate circuit → TPUSA",
      charge: "paid to defend the org he spent years attacking, per his own statement" },
    { id: "allen",     name: "Graham Allen",    outlet: "podcast",
      charge: "ex-Pentagon “senior strategic consultant for digital media,” now official-narrative artillery" },
    { id: "posobiec",  name: "Jack Posobiec",   outlet: "Human Events · TPUSA orbit",
      charge: "kindness-wave rider — same script, same day" },
    { id: "philip",    name: "Danny Philip",    outlet: "TPUSA orbit",
      charge: "kindness-wave rider — same script, same day" },
    { id: "network",   name: "the unnamed network", outlet: "“the American market”",
      charge: "the foundation's budget — mouths not yet named; this poster is a placeholder for a hole" }
  ],

  /* ——— THE PLUMBING: trough → poster, graded, dated (stamp lands when the date passes) ——— */
  edges: [
    { trough: "israel", poster: "parscale", grade: "documented", date: "2025-09-18",
      stamp: "PAID · ISRAEL MFA · $1.5M/MO",
      note: "FARA registration #7649, filed Sept 18, 2025 — eight days after Kirk was killed. $9M disclosed via Havas Media Germany. Scope: AI content, SEO, ≥80% Gen-Z targeting, and integration with Salem Media Network properties.",
      sources: [
        { label: "DOJ FARA database (reg. 7649)", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
        { label: "The Hill", url: "https://thehill.com/policy/international/5528458-brad-parscale-israel-foreign-agent/" },
        { label: "The Intercept (May 28, 2026)", url: "https://theintercept.com/2026/05/28/israeli-government-money-brad-parsc/" }
      ] },
    { trough: "salem", poster: "kolvet", grade: "documented", date: "2025-09-10",
      stamp: "DISTRIBUTED · SALEM",
      note: "Salem's same-day statement: the show continues on Salem Podcast Network, Kolvet co-hosting. The foreign agent's later contract scope names Salem integration.",
      sources: [
        { label: "Salem Media statement, Sept 10, 2025", url: "https://www.globenewswire.com/news-release/2025/09/10/3148287/0/en/salem-media-statement-on-the-assassination-of-charlie-kirk.html" },
        { label: "The Grayzone", url: "https://thegrayzone.com/2026/06/18/israeli-foreign-agent-charlie-kirk-show/" }
      ] },
    { trough: "salem", poster: "marlow", grade: "documented", date: "2025-12-17",
      stamp: "SLOTTED · SALEM",
      note: "Salem reveals Marlow & Jennings take Kirk's radio slot (Radio Ink, Dec 17, 2025); live Jan 5, 2026.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { trough: "salem", poster: "jennings", grade: "documented", date: "2025-12-17",
      stamp: "SLOTTED · SALEM",
      note: "Salem reveals Marlow & Jennings take Kirk's radio slot (Radio Ink, Dec 17, 2025); live Jan 5, 2026.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { trough: "tpusa", poster: "wilson", grade: "reported", date: "2026-07-08",
      stamp: "HIRED · TPUSA",
      note: "TPUSA hired Wilson to train its campus debaters, per Wilson's own on-air statement — after documented years of attacking Kirk, Erika Kirk, and TPUSA (posts 2021, Mar 2026, Apr 2026). Date approximate to the reporting.",
      sources: [ { label: "Liberty Lockdown", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { trough: "dod", poster: "allen", grade: "reported", date: "2025-09-10",
      stamp: "EX-PENTAGON · DIGITAL MEDIA",
      note: "Former Pentagon “senior strategic consultant for digital media,” now among the loudest official-narrative defenders. The consultancy is checkable: USASpending / FPDS, or a DoD FOIA on the sibling site. Stamp shown from day one because the role predates the window.",
      sources: [ { label: "Liberty Lockdown (the Allen parallel)", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { trough: "foundation", poster: "network", grade: "claimed", date: "2025-09-10",
      stamp: "“BUDGET FOR THE AMERICAN MARKET”",
      note: "Bruesewitz, on Tucker Carlson's show, read a message dated June 16, 2025: “good news from Israel, they have budget for the American market... it is through a foundation.” The message has not been produced; the poster is a hole wearing a sheet.",
      sources: [ { label: "Bruesewitz clip via Liberty Lockdown", url: "https://www.youtube.com/watch?v=2gAM3VILTvI" } ] }
  ],

  /* ——— THE TIMELINE: markers, money landings, and WAVES (riders all spew the script) ——— */
  events: [
    { date: "2025-09-10", type: "marker", grade: "documented",
      label: "Charlie Kirk killed at UVU. Salem states the show will continue — same day.",
      sources: [ { label: "Salem statement", url: "https://www.globenewswire.com/news-release/2025/09/10/3148287/0/en/salem-media-statement-on-the-assassination-of-charlie-kirk.html" } ] },
    { date: "2025-09-18", type: "money", grade: "documented", riders: ["parscale"],
      label: "Clock Tower X registers as Israel's foreign agent — FARA #7649, $1.5M/month, Salem integration in scope. Eight days after the killing.",
      sources: [
        { label: "DOJ FARA database", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
        { label: "The Hill", url: "https://thehill.com/policy/international/5528458-brad-parscale-israel-foreign-agent/" }
      ] },
    { date: "2025-12-17", type: "money", grade: "documented", riders: ["marlow", "jennings"],
      label: "Salem reveals Kirk's radio slot goes to Marlow & Jennings.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { date: "2026-01-05", type: "money", grade: "documented", riders: ["marlow", "jennings"],
      label: "The Marlow/Jennings slot goes live in Kirk's airtime.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { date: "2026-05-28", type: "marker", grade: "reported",
      label: "The Intercept maps where the Israeli government money went — Parscale's longtime allies' companies.",
      sources: [ { label: "The Intercept", url: "https://theintercept.com/2026/05/28/israeli-government-money-brad-parsc/" } ] },
    { date: "2026-06-18", type: "marker", grade: "reported",
      label: "The Grayzone: “Israeli foreign agent took over The Charlie Kirk Show days after his killing.”",
      sources: [ { label: "The Grayzone", url: "https://thegrayzone.com/2026/06/18/israeli-foreign-agent-charlie-kirk-show/" } ] },
    { date: "2026-07-08", type: "money", grade: "reported", riders: ["wilson"],
      label: "TPUSA hires Andrew Wilson — the org's years-long critic — to train its debaters (his own statement; date ≈ reporting).",
      sources: [ { label: "Liberty Lockdown", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { date: "2026-07-10", type: "wave", grade: "reported", riders: ["kolvet", "posobiec", "philip"],
      script: "“Let me tell you about Erika Kirk's endless kindness...”",
      label: "THE KINDNESS WAVE — as the preliminary hearing cracks the state's physical evidence in open court, a same-day cluster of Erika Kirk kindness stories fires from TPUSA-orbit accounts (Kolvet, Posobiec, Danny Philip) alongside al.com human-interest pieces (“Hanky Gate” / “Balloon Gate”). Documented as a cluster, with timestamps, by Baron Coleman.",
      sources: [ { label: "Baron Coleman, Ep. 142 (the cluster walk-through)", url: "https://www.youtube.com/watch?v=6ZZ_e53ZDnY" } ] }
  ]
};
