/* Follow the Slop — data
 * Pure data, no dependencies. Drives index.html.
 * THE DISCIPLINE: every edge and event carries a grade, and the grade is the product.
 *   documented — a public record exists (FARA filing, contract, press release, timestamped posts shown)
 *   reported   — journalism or a named source; the record itself not in hand
 *   claimed    — somebody said it on air; receipts not shown
 * Repeat a claim at its grade, never above it.
 *
 * THE LEDGER: waves may carry claims[] — specific FACTUAL assertions the riders made,
 * each with a status and the record that answers it:
 *   contradicted — a primary record or firsthand witness directly contradicts the assertion
 *   unsupported  — the record the assertion invokes does not contain it
 * Opinions never enter the ledger, however ugly ("he's obviously guilty" is not a claim —
 * "the video shows him taking the shot" is). Fact vs. opinion is the line defamation law
 * draws (Milkovich v. Lorain Journal), and the ledger draws it in the same place: a claim
 * enters only when it asserts a checkable fact AND a record answers it.
 * receipts[]: individual timestamped posts, pulled from X's own syndication CDN
 * (cdn.syndication.twimg.com/tweet-result?id=<ID>&token=a — text, author, exact UTC stamp).
 *
 * THE PICTURE: the slop FALLS, then RADIATES. Money enters at the top and descends
 * through the org tiers (depth = money distance from the source); the mouths hang at
 * the bottom of their chains; waves blip outward from the mouths as the timeline
 * crosses their dates. The matrix below counts who rides what.
 */
const SLOP = {
  meta: {
    product: "Follow the Slop",
    tagline: "The talking points are coordinated. The money is public record. Follow both.",
    premise: "When the same script comes out of eight mouths in two hours, that's not a vibe — that's logistics. Logistics cost money, and money leaves records. On the map, money falls: each tier sits below whatever funds it, so depth IS money-distance. The mouths hang at the bottom of their chains, and script waves radiate out of them as the timeline crosses each firing date. Hover anything to light its full plumbing, top to bottom. The matrix underneath counts repeat riders — the number no single screenshot can show.",
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

  /* ——— ORGS: tiles. Depth on the map is computed from the money edges. ——— */
  orgs: [
    { id: "israel",     name: "Government of Israel", sub: "Ministry of Foreign Affairs" },
    { id: "dod",        name: "U.S. Dept of Defense", sub: "digital-media consulting money" },
    { id: "tpusa",      name: "Turning Point USA",    sub: "post-assassination payroll" },
    { id: "foundation", name: "“a foundation”",       sub: "named on air, never produced" },
    { id: "havas",      name: "Havas Media Germany",  sub: "contracting intermediary" },
    { id: "clocktower", name: "Clock Tower X LLC",    sub: "FARA #7649 · registered Sept 18, 2025" },
    { id: "salem",      name: "Salem Media Network",  sub: "distribution · Parscale as CSO (reported)" },
    { id: "kirkshow",   name: "The Charlie Kirk Show", sub: "Salem Podcast Network" }
  ],

  /* ——— PEOPLE: circles. mugs/<id>.jpg gives them a face; initials otherwise. ——— */
  people: [
    { id: "parscale",  name: "Brad Parscale",   outlet: "Clock Tower X owner · Salem CSO",
      charge: "registered foreign agent of Israel — $1.5M/month, eight days after the killing" },
    { id: "kolvet",    name: "Andrew Kolvet",   outlet: "The Charlie Kirk Show (Salem)",
      charge: "co-hosts the dead man's show inside the foreign agent's contract scope — and rides the waves: kindness, unison, “it's over”" },
    { id: "neff",      name: "Blake Neff",      outlet: "The Charlie Kirk Show (Salem)",
      charge: "rode the day-one-of-prelim move on Candace — “all the gloves came off in unison,” as characterized on air. Then, on a recorded Twitter Space, about the unnamed TPUSA rep who met Robinson the morning of the shooting: “even if I did [know], I wouldn't tell you… and I know that that person didn't do anything” — you can't know that about someone you don't know" },
    { id: "marlow",    name: "Alex Marlow",     outlet: "Breitbart · Salem radio",
      charge: "handed Kirk's radio slot, live Jan 5, 2026" },
    { id: "jennings",  name: "Scott Jennings",  outlet: "CNN · Salem radio",
      charge: "handed Kirk's radio slot, live Jan 5, 2026" },
    { id: "wilson",    name: "Andrew Wilson",   outlet: "debate circuit → TPUSA",
      charge: "paid to defend the org he spent years attacking, per his own statement" },
    { id: "allen",     name: "Graham Allen",    outlet: "podcast",
      charge: "ex-Pentagon “senior strategic consultant for digital media” — rode the “it's over” wave: “The zoomed in video shows him taking the shot.”" },
    { id: "posobiec",  name: "Jack Posobiec",   outlet: "Human Events · TPUSA orbit",
      charge: "kindness-wave and “it's over”-wave rider — “You can see him take the shot”" },
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
    { id: "terrell",   name: "Leo Terrell",     outlet: "DOJ antisemitism task force",
      charge: "called for retweet pile-ons to make a teenager “permanently unemployable” — his own posts, read on air" },
    { id: "lonsdale",  name: "Joe Lonsdale",    outlet: "8VC · Cicero Institute",
      charge: "“be a strong Jew… dox him” — timestamped June 8, 1:30 p.m." },
    { id: "foxnews",   name: "Fox News",        outlet: "cable",
      charge: "six segments in one day on one teenager's private email" },
    { id: "sortor",    name: "Nick Sortor",     outlet: "X",
      charge: "“BREAKING… Robinson is SCREWED” — same script, same hours as seven others, ~10M collective reach" },
    { id: "eagleman",  name: "Gunther Eagleman", outlet: "X",
      charge: "“Game over. Tyler Robinson is TOAST and Candace Owens was wrong about EVERYTHING”" },
    { id: "insiderwire", name: "Insider Wire",  outlet: "X",
      charge: "“BREAKING: High-quality footage shown in court…” — the wire for the wave, 435K views on the script" },
    { id: "tony",      name: "TONY™",           outlet: "X",
      charge: "“It's over… Candace Owens should be sued into oblivion”" },
    { id: "zerohour",  name: "0HOUR1",          outlet: "X",
      charge: "“It's a fact… he is 100% guilty. Spreading any nonsense now, you're just a weirdo”" },
    { id: "network",   name: "the unnamed network", outlet: "“the American market”",
      charge: "the foundation's budget — mouths not yet named; this circle is a placeholder for a hole" },
    { id: "brandybilly", name: "Brandy & Billy", outlet: "Brandy and Billy Show · in the courtroom",
      charge: "the refutation: slept on the concrete for an in-person seat, saw the video, posted from the room that there is no zoomed-in shot footage and no sound — breaking the “it's over” wave the day it fired" }
  ],

  /* ——— THE MONEY: from → to (org or person), graded, dated. Depth on the map falls out of these. ——— */
  money: [
    { from: "israel", to: "havas", grade: "documented", date: "2025-09-18",
      note: "FARA #7649 discloses the Israel MFA contracting through Havas Media Germany GmbH.",
      sources: [
        { label: "DOJ FARA database (reg. 7649)", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
        { label: "The Hill", url: "https://thehill.com/policy/international/5528458-brad-parscale-israel-foreign-agent/" }
      ] },
    { from: "havas", to: "clocktower", grade: "documented", date: "2025-09-18",
      note: "FARA registration #7649, filed Sept 18, 2025 — eight days after Kirk was killed. $9M disclosed ($1.5M/month). Scope: AI content, SEO, ≥80% Gen-Z targeting, and integration with Salem Media Network properties.",
      sources: [
        { label: "DOJ FARA database (reg. 7649)", url: "https://efile.fara.gov/ords/fara/f?p=1381:1" },
        { label: "The Intercept (May 28, 2026)", url: "https://theintercept.com/2026/05/28/israeli-government-money-brad-parsc/" }
      ] },
    { from: "clocktower", to: "parscale", grade: "documented", date: "2025-09-18",
      stamp: "OWNER · FARA #7649 · $1.5M/MO",
      note: "Parscale is the disclosed owner of Clock Tower X; the registration is his.",
      sources: [ { label: "The Hill", url: "https://thehill.com/policy/international/5528458-brad-parscale-israel-foreign-agent/" } ] },
    { from: "clocktower", to: "salem", grade: "documented", date: "2025-09-18",
      note: "“Integration with Salem Media Network properties” is written into the FARA filing's scope; Parscale as Salem's Chief Strategy Officer is reported.",
      sources: [
        { label: "The Grayzone", url: "https://thegrayzone.com/2026/06/18/israeli-foreign-agent-charlie-kirk-show/" },
        { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" }
      ] },
    { from: "salem", to: "kirkshow", grade: "documented", date: "2025-09-10",
      note: "Salem's same-day statement: the show continues on Salem Podcast Network.",
      sources: [ { label: "Salem Media statement, Sept 10, 2025", url: "https://www.globenewswire.com/news-release/2025/09/10/3148287/0/en/salem-media-statement-on-the-assassination-of-charlie-kirk.html" } ] },
    { from: "kirkshow", to: "kolvet", grade: "documented", date: "2025-09-10",
      stamp: "CO-HOST · SALEM",
      note: "Kolvet continues as co-host under Salem distribution — inside the foreign agent's later contract scope.",
      sources: [ { label: "Salem Media statement", url: "https://www.globenewswire.com/news-release/2025/09/10/3148287/0/en/salem-media-statement-on-the-assassination-of-charlie-kirk.html" } ] },
    { from: "kirkshow", to: "neff", grade: "reported", date: "2025-10-01",
      stamp: "SHOW REP · SALEM",
      note: "Neff described as a new Charlie Kirk Show representative in coverage; date approximate.",
      sources: [ { label: "Liberty Lockdown panel", url: "https://www.youtube.com/watch?v=Fk4RFSn6gqs" } ] },
    { from: "salem", to: "marlow", grade: "documented", date: "2025-12-17",
      stamp: "SLOTTED · SALEM",
      note: "Salem reveals Marlow & Jennings take Kirk's radio slot (Radio Ink, Dec 17, 2025); live Jan 5, 2026.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { from: "salem", to: "jennings", grade: "documented", date: "2025-12-17",
      stamp: "SLOTTED · SALEM",
      note: "Salem reveals Marlow & Jennings take Kirk's radio slot (Radio Ink, Dec 17, 2025); live Jan 5, 2026.",
      sources: [ { label: "Radio Ink", url: "https://radioink.com/2025/12/17/charlie-kirk-replacement-hosts-revealed-by-salem/" } ] },
    { from: "tpusa", to: "wilson", grade: "reported", date: "2026-07-08",
      stamp: "HIRED · TPUSA",
      note: "TPUSA hired Wilson to train its campus debaters, per Wilson's own on-air statement — after documented years of attacking Kirk, Erika Kirk, and TPUSA (posts 2021, Mar 2026, Apr 2026). Date approximate to the reporting.",
      sources: [ { label: "Liberty Lockdown", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { from: "dod", to: "allen", grade: "reported", date: "2025-09-10",
      stamp: "EX-PENTAGON · DIGITAL MEDIA",
      note: "Former Pentagon “senior strategic consultant for digital media,” now among the loudest official-narrative defenders. CHECKABLE: USASpending / FPDS, or a DoD FOIA on the sibling site. Shown from day one because the role predates the window.",
      sources: [ { label: "Liberty Lockdown (the Allen parallel)", url: "https://www.youtube.com/watch?v=6UyRv-Uq4LQ" } ] },
    { from: "foundation", to: "network", grade: "claimed", date: "2025-09-10",
      stamp: "“BUDGET FOR THE AMERICAN MARKET”",
      note: "Bruesewitz, on Tucker Carlson's show, read a message dated June 16, 2025: “good news from Israel, they have budget for the American market... it is through a foundation.” The message has not been produced; the circle is a hole wearing a sheet.",
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
      ],
      receipts: [
        { rider: "musk", id: "1965859343351558352", at: "2025-09-10T19:26:06Z",
          text: "The Left is the party of murder",
          url: "https://x.com/elonmusk/status/1965859343351558352" }
      ],
      claims: [
        { text: "“The Left” killed Charlie Kirk — stated as fact, hours after the shooting.",
          status: "unsupported",
          by: "No suspect existed when the claim fired (Musk's post: 7:26 p.m. UTC, Sept 10). Robinson was not in custody until Sept 11–12, and no evidence about any shooter's politics existed. The fact-check wires documented the flood in real time.",
          sources: [ { label: "AP/NBC FACT FOCUS", url: "https://www.nbcphiladelphia.com/news/politics/fact-focus-assassination-of-charlie-kirk-prompts-flood-of-false-and-misleading-claims-online/4268659/" } ] }
      ] },
    { date: "2025-09-16", type: "wave", grade: "documented", riders: ["headlines"],
      script: "“He confessed — case closed.”",
      label: "THE CONFESSION WAVE — charging day. Prosecutor Jeff Gray explicitly said he would let a judge decide whether the statements constituted a confession; the same-day headline wall ran “confessed” and “spreads too much hate” anyway. Ten months later the state rested its preliminary-hearing case without calling the parents.",
      sources: [
        { label: "Utah News Dispatch (Gray's hedge)", url: "https://utahnewsdispatch.com/2025/09/16/charges-filed-tyler-robinson-death-penalty-accused-of-killing-charlie-kirk/" },
        { label: "PBS — the headline", url: "https://www.pbs.org/newshour/nation/as-officials-searched-for-charlie-kirks-shooter-suspect-confessed-to-his-partner-prosecutor-says" },
        { label: "ABC — the headline", url: "https://abcnews.com/US/tyler-robinson-set-face-formal-charges-shooting-death/story?id=125614396" }
      ],
      claims: [
        { text: "“Robinson confessed” — run as settled fact in the same-day headline wall.",
          status: "unsupported",
          by: "The prosecutor's own charging-day statement said a judge would decide whether the statements constituted a confession. Ten months later, the preliminary hearing closed with no direct confession in evidence: neither parent testified, the family friend was never put on the stand, and the reported Discord messages were never entered or mentioned.",
          sources: [
            { label: "Utah News Dispatch — Gray's hedge, same day", url: "https://utahnewsdispatch.com/2025/09/16/charges-filed-tyler-robinson-death-penalty-accused-of-killing-charlie-kirk/" },
            { label: "Ian Carroll — the hearing record on confessions, walked through", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" }
          ] }
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
      label: "THE KINDNESS WAVE — hearing week, as the state's physical evidence cracks in open court: al.com runs two dated human-interest pieces (Mark Heim — “Hanky Gate” Tuesday, “Balloon Gate” Wednesday), then on day four a same-day cluster of Erika Kirk kindness stories fires across TPUSA-orbit accounts — Kolvet (“another amazing story about Erika's quiet and private kindness”), Posobiec, Danny Philip, and a fourth rider whose surname the captions garble. Coleman reads each post verbatim on air and calls it: “organize a social media campaign across many channels… this was the evidence — it was an op.”",
      sources: [ { label: "Baron Coleman, Ep. 142 (the cluster walk-through)", url: "https://www.youtube.com/watch?v=6ZZ_e53ZDnY" } ] },
    { date: "2026-07-11", type: "wave", grade: "documented", riders: ["sortor", "posobiec", "insiderwire", "kolvet", "tony", "eagleman", "zerohour", "allen"],
      script: "“You can see him take the shot. It's over.”",
      label: "THE “IT'S OVER” WAVE — on the last day, after the cameras were off, a video was shown only to the ~14 in-person seats (packed with TPUSA influencers) at Erika Kirk's lawyer's request; the judge confirmed it would not be televised. The influencers filed out and eight accounts with roughly ten million collective followers fired the same script within about two hours: “you can see him take the shot — it's over — Candace was wrong about EVERYTHING.” What it actually is, per the transcript: the SAME surveillance footage already seen, same resolution, just zoomed in a video editor. (Note the exhibit history — 12.1 was the state's edited/circled montage the judge REJECTED as edited day one; 12.4 was the unedited version remade overnight.) No guilty plea exists.",
      sources: [
        { label: "@GoUncensored — the eight-post collage, timestamped", url: "https://x.com/GoUncensored/status/2075806153619960204" },
        { label: "Ian Carroll — final recap, exhibit 12.1 vs 12.4 walked through the transcript", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" }
      ],
      rebuttal: {
        grade: "documented", riders: ["brandybilly"],
        text: "Brandy & Billy — journalists who slept on the concrete for one of the 14 in-person seats — saw the video and posted from the room: “There is no high quality zoomed-in footage showing anyone taking a shot. The video shown is the same distance as the footage of Tyler jumping off the roof… they know the video isn't going to be released publicly, so they're misrepresenting what was actually shown in court.” No sound; the face “could be anyone.” The claim of audible gunshot audio is called an outright lie.",
        sources: [ { label: "Ian Carroll relays Brandy's in-courtroom post", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" } ]
      },
      claims: [
        { text: "“High-quality / 4K zoomed-in footage shows Robinson taking the shot.”",
          status: "contradicted",
          by: "Two journalists who were in the room for the showing posted the same day: “There is no high quality zoomed-in footage showing anyone taking a shot… the same distance as the footage of Tyler jumping off the roof.” The hearing transcript agrees: the video is the same surveillance footage at the same resolution, zoomed in a video editor — and the edited montage version (exhibit 12.1) is the one the judge REJECTED day one as edited. The riders claiming otherwise were describing a video they had just personally watched, to an audience they knew could never check — “they know the video isn't going to be released publicly.”",
          sources: [
            { label: "Brandy & Billy, posted from the courtroom", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" },
            { label: "Hearing transcript — the exhibit colloquy (12.1/12.4)", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" }
          ] },
        { text: "“You could hear the gunshot” on the courtroom video.",
          status: "contradicted",
          by: "Per the in-room witnesses: there is no sound on the video at all. “People are saying, oh, there was sound, you could hear the gunshot — that is an absolute lie.”",
          sources: [ { label: "Brandy & Billy, in-room account", url: "https://www.youtube.com/watch?v=R7mdXcBfQTw" } ] }
      ] }
  ]
};
