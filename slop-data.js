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
    { id: "israel",     name: "Government of Israel", short: "ISRAEL MFA", sub: "MFA · via Havas Media Germany · FARA #7649" },
    { id: "salem",      name: "Salem Media Network",  short: "SALEM", sub: "distribution · Parscale as CSO (reported)" },
    { id: "tpusa",      name: "Turning Point USA",    short: "TPUSA", sub: "post-assassination payroll" },
    { id: "dod",        name: "U.S. Dept of Defense", short: "DOD", sub: "digital-media consulting money" },
    { id: "foundation", name: "“a foundation”",       short: "???", sub: "named on air, never produced" }
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
    { id: "musk",      name: "Elon Musk",       outlet: "X (owner)",
      charge: "fired “The Left is the party of murder” within hours — before any suspect existed" },
    { id: "trump",     name: "Donald Trump",    outlet: "the White House",
      charge: "same-evening address blaming radical-left rhetoric — before any suspect existed" },
    { id: "headlines", name: "the headline machine", outlet: "wires · cable · everyone",
      charge: "runs the day's script at full volume; the hedge lives in paragraph nine" },
    { id: "ackman",    name: "Bill Ackman",     outlet: "X · Pershing Square",
      charge: "flooded X with denials the day the Hamptons-intervention story broke" },
    { id: "shapiro",   name: "Ben Shapiro",     outlet: "Daily Wire",
      charge: "the excommunication speech — “charlatans who traffic in conspiracism”" },
    { id: "pool",      name: "Tim Pool",        outlet: "Timcast",
      charge: "branded the questioners “evil”" },
    { id: "neff",      name: "Blake Neff",      outlet: "The Charlie Kirk Show (Salem)",
      charge: "rode the day-one-of-prelim move on Candace — “all the gloves came off in unison,” as characterized on air" },
    { id: "terrell",   name: "Leo Terrell",     outlet: "DOJ antisemitism task force",
      charge: "called for retweet pile-ons to make a teenager “permanently unemployable” — his own posts, read on air" },
    { id: "lonsdale",  name: "Joe Lonsdale",    outlet: "8VC · Cicero Institute",
      charge: "“be a strong Jew… dox him” — timestamped June 8, 1:30 p.m." },
    { id: "foxnews",   name: "Fox News",        outlet: "cable",
      charge: "six segments in one day on one teenager's private email" },
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
    { date: "2025-09-10", type: "wave", grade: "documented", riders: ["musk", "trump", "headlines"],
      script: "“The Left did this.”",
      label: "THE BLAME WAVE — within hours, before any suspect was identified: Musk posts “The Left is the party of murder,” Trump's same-evening address blames radical-left rhetoric, and the ecosystem floods in behind them (the fact-check wires documented the flood in real time).",
      sources: [
        { label: "Musk's post, Sept 10, 2025", url: "https://x.com/elonmusk/status/1965859343351558352" },
        { label: "The Hill", url: "https://thehill.com/policy/technology/5502535-elon-musk-charlie-kirk-death/" },
        { label: "AP/NBC FACT FOCUS — the flood, documented", url: "https://www.nbcphiladelphia.com/news/politics/fact-focus-assassination-of-charlie-kirk-prompts-flood-of-false-and-misleading-claims-online/4268659/" }
      ] },
    { date: "2025-09-16", type: "wave", grade: "documented", riders: ["headlines"],
      script: "“He confessed — case closed.”",
      label: "THE CONFESSION WAVE — charging day. Prosecutor Jeff Gray explicitly said he would let a judge decide whether the statements constituted a confession; the same-day headline wall ran “confessed” and “spreads too much hate” anyway. Ten months later the state rested its preliminary-hearing case without calling the parents.",
      sources: [
        { label: "Utah News Dispatch (Gray's hedge)", url: "https://utahnewsdispatch.com/2025/09/16/charges-filed-tyler-robinson-death-penalty-accused-of-killing-charlie-kirk/" },
        { label: "PBS — the headline", url: "https://www.pbs.org/newshour/nation/as-officials-searched-for-charlie-kirks-shooter-suspect-confessed-to-his-partner-prosecutor-says" },
        { label: "ABC — the headline", url: "https://abcnews.com/US/tyler-robinson-set-face-formal-charges-shooting-death/story?id=125614396" }
      ] },
    { date: "2025-09-17", type: "wave", grade: "reported", riders: ["ackman", "shapiro", "pool"],
      script: "“She's fabricating. There was no intervention.”",
      label: "THE DON'T-LOOK-THERE WAVE — the day the Hamptons-intervention story broke, Ackman and allies flooded X with denials (Axios documented the flood same-day); the excommunications followed through the fall — Shapiro's “charlatans who traffic in conspiracism” speech, Pool's “evil.”",
      sources: [
        { label: "Axios, Sept 17, 2025 — the denial flood", url: "https://www.axios.com/2025/09/17/charlie-kirk-israel-candace-owens-ackman" },
        { label: "CNN — the split, months on", url: "https://www.cnn.com/2025/12/16/politics/candace-owens-erika-kirk-podcast" }
      ] },
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
    { date: "2026-06-10", type: "wave", grade: "documented", riders: ["foxnews", "terrell", "lonsdale"],
      script: "“Make him permanently unemployable.”",
      label: "THE PILE-ON WAVE — June 8–12: Lonsdale's “be a strong Jew… dox him” (timestamped June 8, 1:30 p.m.), DOJ antisemitism task-force chair Leo Terrell calling for retweet campaigns against a 19-year-old's employability, and SIX Fox segments in a single day on one private email — the receipts read and played on air, including the on-screen segment tally.",
      sources: [ { label: "Ian Carroll — receipts read/played on air", url: "https://www.youtube.com/watch?v=vkYVyuYDDmA" } ] },
    { date: "2026-06-18", type: "marker", grade: "reported",
      label: "The Grayzone: “Israeli foreign agent took over The Charlie Kirk Show days after his killing.”",
      sources: [ { label: "The Grayzone", url: "https://thegrayzone.com/2026/06/18/israeli-foreign-agent-charlie-kirk-show/" } ] },
    { date: "2026-07-07", type: "wave", grade: "claimed", riders: ["wilson", "kolvet", "neff"],
      script: "“Charlie lied to your face — he never had your back.” (aimed at Candace Owens)",
      label: "THE UNISON WAVE — day one of the preliminary hearing, timed (as characterized on air) for the week Candace Owens was away: Wilson, Kolvet, and Neff move on her the same day — “all the gloves came off in unison.” Characterized as coordinated by the Liberty Lockdown panel; the individual timestamped posts have not been assembled here, so this wears CLAIMED until someone pulls the timestamps.",
      sources: [ { label: "Liberty Lockdown panel (Coleman & Buckley Carlson)", url: "https://www.youtube.com/watch?v=Fk4RFSn6gqs" } ] },
    { date: "2026-07-08", type: "money", grade: "reported", riders: ["wilson"],
      label: "TPUSA hires Andrew Wilson — the org's years-long critic — to train its debaters (his own statement; date ≈ reporting).",
      sources: [ { label: "Liberty Lockdown", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { date: "2026-07-10", type: "wave", grade: "documented", riders: ["kolvet", "posobiec", "philip"],
      script: "“Let me tell you about Erika Kirk's endless kindness...”",
      label: "THE KINDNESS WAVE — hearing week, as the state’s physical evidence cracks in open court: al.com runs two dated human-interest pieces (Mark Heim — “Hanky Gate” Tuesday, “Balloon Gate” Wednesday), then on day four a same-day cluster of Erika Kirk kindness stories fires across TPUSA-orbit accounts — Kolvet (“another amazing story about Erika’s quiet and private kindness”), Posobiec, Danny Philip, and a fourth rider whose surname the captions garble. Coleman reads each post verbatim on air and calls it: “organize a social media campaign across many channels… this was the evidence — it was an op.”",
      sources: [ { label: "Baron Coleman, Ep. 142 (the cluster walk-through)", url: "https://www.youtube.com/watch?v=6ZZ_e53ZDnY" } ] }
  ]
};
