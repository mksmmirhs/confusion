import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Fix It — Prevention & Reform | US Senate Intelligence',
  description: 'Actionable reforms, historical precedents, civic tools, and organizations that are fighting to restore American democracy from corporate capture.',
};

const REFORMS = [
  {
    category: 'Campaign Finance',
    icon: '💰',
    color: 'text-yellow-400',
    border: 'border-yellow-400/30',
    bg: 'bg-yellow-400/5',
    reforms: [
      {
        name: 'Overturn Citizens United',
        mechanism: 'Pass the "Democracy for All Amendment" (Constitutional Amendment) to restore Congress\' power to regulate campaign finance. Currently has 220+ co-sponsors in the House.',
        status: 'Introduced',
        difficulty: 'Extreme (requires 2/3 of both chambers + 38 states)',
        precedent: 'Before 1976 Buckley v. Valeo ruling, Congress could fully regulate campaign spending.',
        action: 'Contact your senators. Support organizations like Free Speech For People and American Promise.',
      },
      {
        name: 'DISCLOSE Act',
        mechanism: 'Requires all political organizations spending $10,000+ in elections to disclose donors within 24 hours. Closes the dark money 501c4 loophole.',
        status: 'Passed House 12 times — repeatedly blocked in Senate by filibuster',
        difficulty: 'Moderate (needs 60 Senate votes to overcome filibuster)',
        precedent: 'Pre-Citizens United, donor disclosure was standard for all political organizations.',
        action: 'Demand your senator support ending the filibuster for democracy legislation specifically.',
      },
      {
        name: 'Small Dollar Matching',
        mechanism: 'Federal government matches small donations (under $200) at a 6:1 ratio — amplifying grassroots fundraising and reducing dependence on large donors. Already used in NYC elections.',
        status: 'Included in For the People Act (failed 2021)',
        difficulty: 'Moderate — requires 60 votes or filibuster reform',
        precedent: 'NYC\'s matching program produced the most diverse city council in history after implementation.',
        action: 'Support organizations: End Citizens United, Common Cause, Campaign Legal Center',
      },
    ],
  },
  {
    category: 'Lobbying Reform',
    icon: '🛑',
    color: 'text-rose-400',
    border: 'border-rose-400/30',
    bg: 'bg-rose-400/5',
    reforms: [
      {
        name: 'Lifetime Ban on Lobbying for Ex-Officials',
        mechanism: 'Prohibit senior executive and congressional officials from ever lobbying their former agencies or committees. Current 1-2 year "cooling off" period is ineffective.',
        status: 'Proposed by multiple reform groups; no current serious Senate bill',
        difficulty: 'High — current senators benefit from the revolving door for their own post-service careers',
        precedent: 'Canada\'s 5-year cooling off period for senior officials significantly reduced revolving door activity.',
        action: 'Demand your congressman publicly commit to a lifetime lobbying ban. Note those who refuse.',
      },
      {
        name: 'Real-Time Lobbying Disclosure',
        mechanism: 'Require all lobbying contacts with government officials to be disclosed within 48 hours online — not quarterly. Include meetings, calls, emails. Mandatory for all influencing activity, not just "registered" lobbying.',
        status: 'Proposed; faces industry opposition',
        difficulty: 'Moderate',
        precedent: 'EU lobbying transparency register provides real-time meeting logs for most commissioners.',
        action: 'Support: OpenSecrets, Sunlight Foundation (archived), MapLight',
      },
      {
        name: 'Ban Lobbyist Bundling',
        mechanism: 'Prohibit lobbyists from bundling campaign contributions — the practice where a lobbyist collects checks from many clients and delivers them to a politician as a package, creating maximum obligation.',
        status: 'Partially addressed in HLOGA (2007) — reform incomplete',
        difficulty: 'Moderate',
        precedent: 'Pre-bundling era senators had more independent fundraising and fewer obligatory donor relationships.',
        action: 'Track your senator\'s "bundler" list on FEC.gov. It is public record.',
      },
    ],
  },
  {
    category: 'Congressional Ethics',
    icon: '⚖️',
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
    reforms: [
      {
        name: 'STOCK Act Enforcement Reform',
        mechanism: 'Increase STOCK Act penalties from $200 fine to criminal charges for willful violations. Require next-day disclosure. Create independent enforcement body (current enforcement is by Congress itself).',
        status: 'ETHICS Act introduced in Senate (2023) — did not pass',
        difficulty: 'Easy — if Congress had the will',
        precedent: 'Over 70 members violated STOCK Act in 2021-2023. Zero prosecuted. $200 fine is 0.000001% of average senator net worth.',
        action: 'Use the Congressional Trading Tracker at unusualwhales.com. Vote out violators.',
      },
      {
        name: 'Term Limits (Constitutional Amendment)',
        mechanism: 'Limit senators to 2 terms (12 years). Representatives to 3 terms (6 years). Breaks the seniority-to-chairmanship pipeline that concentrates power in long-serving, donor-captured senators.',
        status: 'Term Limits Amendment introduced every session — never reaches vote',
        difficulty: 'Extreme — current senators would vote to end their own careers',
        precedent: 'Term limits for presidents (22nd Amendment, 1951) successfully enacted after FDR\'s 4 terms. States with term limits (Michigan, California) show refreshed legislative diversity.',
        action: 'Support US Term Limits. Demand candidates sign pledge. Target length-of-service as a campaign issue.',
      },
      {
        name: 'Ban Senators from Sitting on Committee Regulating Their Donors',
        mechanism: 'Automatic recusal for any senator receiving over $100,000 from an industry from any vote regulating that industry. Conflict of interest fully independent enforcement.',
        status: 'Proposed by reform academics; not seriously introduced',
        difficulty: 'High — would severely restrict most long-term senators',
        precedent: 'Federal judges are required to recuse for far smaller financial conflicts. Senators should be no different.',
        action: 'Cross-reference your senator\'s committee assignments with their donor list at OpenSecrets.org.',
      },
    ],
  },
  {
    category: 'Media & Information',
    icon: '📡',
    color: 'text-purple-400',
    border: 'border-purple-400/30',
    bg: 'bg-purple-400/5',
    reforms: [
      {
        name: 'Reinstate the Fairness Doctrine',
        mechanism: 'Require broadcast media to present balanced perspectives on controversial issues. Eliminated by the FCC in 1987 (under Reagan), which enabled partisan media consolidation.',
        status: 'No current serious push',
        difficulty: 'Moderate (FCC rule — does not require Congress)',
        precedent: 'From 1949-1987, the Fairness Doctrine produced demonstrably more balanced local news coverage.',
        action: 'File public comment with FCC. Support local independent journalism through subscriptions.',
      },
      {
        name: 'Analyst Conflict-of-Interest Disclosure',
        mechanism: 'Require all "defense analysts" appearing on broadcast media to disclose financial relationships with defense companies during or within 5 years of appearance.',
        status: 'Not enacted; voluntary by some networks (poorly enforced)',
        difficulty: 'Easy (FCC could mandate for licensed broadcasters)',
        precedent: 'Financial analysts on CNBC must disclose stock holdings in discussed companies. Security analysts on national security should face the same standard.',
        action: 'Track which "analysts" are on defense boards via POGO\'s "Brass Parachute" database.',
      },
    ],
  },
];

const CIVIC_TOOLS = [
  { name: 'OpenSecrets.org', purpose: 'Track all campaign finance, lobbying, and revolving door data by senator', url: 'https://opensecrets.org', type: 'Research' },
  { name: 'GovTrack.us', purpose: 'Track all Senate bills, votes, and senator voting records in real-time', url: 'https://govtrack.us', type: 'Tracking' },
  { name: 'Congress.gov', purpose: 'Official text of all bills, committee assignments, official voting records', url: 'https://congress.gov', type: 'Official' },
  { name: 'FEC.gov', purpose: 'Official federal election commission — search donor names, PAC connections', url: 'https://fec.gov', type: 'Official' },
  { name: 'Contact Congress', purpose: 'Find and directly contact your senators and representatives', url: 'https://contactingcongress.org', type: 'Action' },
  { name: 'ProPublica Congress API', purpose: 'Data-driven senator profiles including vote rates, conflict donors, and more', url: 'https://propublica.org/congress', type: 'Research' },
  { name: 'UnusualWhales.com', purpose: 'Track congressional stock trades in real-time against their votes', url: 'https://unusualwhales.com', type: 'Tracking' },
  { name: 'POGO.org', purpose: 'Project on Government Oversight — government contractor and revolving door database', url: 'https://pogo.org', type: 'Watchdog' },
];

const HISTORICAL_WINS = [
  {
    title: 'Glass-Steagall Act (1933)',
    what: 'After the 1929 crash caused by unregulated speculation, Congress passed Glass-Steagall separating commercial and investment banking.',
    lesson: 'Public outrage + investigative journalism (the Pecora Commission) + political will produced landmark reform. It took 3 years after the crisis.',
    repealed: 'Repealed in 1999 after 25 years of Wall Street lobbying ($300M+). Led directly to 2008 crisis.',
  },
  {
    title: 'Church Committee (1975)',
    what: 'Senate Select Committee to Study Governmental Operations exposed CIA assassination programs, FBI COINTELPRO, NSA mass surveillance. Led to FISA court, Inspector General Act, and executive order banning political assassinations.',
    lesson: 'Congressional oversight can work when senators are willing to confront their own institutional power.',
    repealed: 'Many reforms eroded post-9/11 under USA PATRIOT Act.',
  },
  {
    title: 'Watergate & Campaign Finance Reform (1974)',
    what: 'Nixon\'s resignation triggered the Federal Election Campaign Act — requiring disclosure of campaign donors, establishing spending limits, and creating the FEC.',
    lesson: 'Public scandal + investigative journalism + bipartisan disgust created historic reform in a single Congress.',
    repealed: 'Citizens United (2010) reversed the core of FECA.',
  },
  {
    title: 'Clean Air Act Amendments (1990)',
    what: 'Despite heavy oil and auto lobby opposition, acid rain provisions passed with bipartisan support — creating cap-and-trade system that reduced SO2 by 50%.',
    lesson: 'Clear public health data + state-level pressure + industry negotiation (not defeat) can produce effective regulation.',
    repealed: 'Partially weakened through EPA rulemaking under multiple administrations.',
  },
];

export default function PreventionPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            🛠 Prevention & Reform
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            How to Fix It<br />
            <span className="text-accent-blue">Real Reforms. Real Tools. Real History.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            The system is captured — but it is not unbreakable. History shows that major reform is possible
            when public pressure, investigative journalism, and political will align.
            These are specific, actionable reforms — and exactly what you can do as a citizen today.
          </p>
          <div className="mt-6 inline-block border border-emerald-400/30 bg-emerald-400/5 rounded-lg px-5 py-3">
            <p className="font-mono text-xs text-emerald-300">
              "The most dangerous enemy of democracy is a citizenry that believes nothing can be done."
            </p>
          </div>
        </section>

        {/* Reforms */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— Actionable Reform Proposals</h2>
          <div className="space-y-8">
            {REFORMS.map((cat) => (
              <div key={cat.category} className={`border ${cat.border} ${cat.bg} rounded-xl p-6`}>
                <h3 className={`font-mono text-base font-bold ${cat.color} mb-5 flex items-center gap-2`}>
                  <span>{cat.icon}</span>
                  {cat.category}
                </h3>
                <div className="space-y-5">
                  {cat.reforms.map((r) => (
                    <div key={r.name} className="bg-surface rounded-lg border border-border/40 p-4">
                      <div className="font-mono text-sm font-bold text-white mb-3">{r.name}</div>
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div>
                          <div className={`font-mono text-[9px] ${cat.color} uppercase tracking-wider mb-1`}>Mechanism</div>
                          <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{r.mechanism}</p>
                        </div>
                        <div>
                          <div className={`font-mono text-[9px] ${cat.color} uppercase tracking-wider mb-1`}>Historical Precedent</div>
                          <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{r.precedent}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="font-mono text-[9px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">Status: {r.status}</span>
                        <span className="font-mono text-[9px] text-slate-500 bg-surface-3 px-2 py-0.5 rounded">Difficulty: {r.difficulty}</span>
                      </div>
                      <div className={`border-l-2 ${cat.border} pl-3`}>
                        <div className={`font-mono text-[9px] ${cat.color} uppercase mb-1`}>What You Can Do</div>
                        <p className="font-mono text-[10px] text-slate-300 leading-relaxed">{r.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Civic Tools */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— Civic Tools: Know Your Weapons</h2>
          <p className="font-mono text-xs text-slate-500 mb-5">
            These tools allow any American citizen to research, track, and act on the same data covered in this encyclopedia.
            They are free. They are powerful. Most Americans don&apos;t know they exist.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-3">
                  {['Tool', 'What It Does', 'Type'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CIVIC_TOOLS.map((t, i) => (
                  <tr key={t.name} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-surface-1' : 'bg-surface'} hover:bg-surface-3 transition-colors`}>
                    <td className="px-4 py-3 font-bold text-accent-blue">{t.name}</td>
                    <td className="px-4 py-3 text-slate-400 text-[10px] leading-relaxed">{t.purpose}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[8px] px-2 py-0.5 rounded font-bold uppercase ${
                        t.type === 'Action' ? 'bg-emerald-400/10 text-emerald-400' :
                        t.type === 'Watchdog' ? 'bg-rose-400/10 text-rose-400' :
                        t.type === 'Official' ? 'bg-blue-400/10 text-blue-400' :
                        t.type === 'Tracking' ? 'bg-amber-400/10 text-amber-400' :
                        'bg-purple-400/10 text-purple-400'
                      }`}>{t.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Historical Wins */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— It Has Been Done Before</h2>
          <p className="font-mono text-xs text-slate-500 mb-5">
            Institutional reform of this scale has happened in American history. These are the precedents.
            Note how each was achieved — and who eventually reversed them.
          </p>
          <div className="space-y-4">
            {HISTORICAL_WINS.map((h) => (
              <div key={h.title} className="bg-surface-1 border border-border rounded-lg p-5">
                <h3 className="font-mono text-sm font-bold text-white mb-2">{h.title}</h3>
                <p className="font-mono text-[11px] text-slate-300 leading-relaxed mb-2">{h.what}</p>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5 text-xs">✓</span>
                  <p className="font-mono text-[10px] text-emerald-300/80 leading-relaxed">{h.lesson}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400 flex-shrink-0 mt-0.5 text-xs">✗</span>
                  <p className="font-mono text-[10px] text-rose-300/60 leading-relaxed">{h.repealed}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Can Do Today */}
        <section className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-8">
          <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest mb-3">— Take Action Today</div>
          <h2 className="font-mono text-xl font-bold text-white mb-5">What You Can Do Right Now</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { n: '1', title: 'Look Up Your Senator\'s Donors', body: 'Go to OpenSecrets.org → search your senator\'s name → click "Top Industries." See who owns their vote. This takes 2 minutes and is the most important informed-citizen action available.' },
              { n: '2', title: 'Cross-Reference Their Votes', body: 'Use GovTrack.us or Congress.gov to pull their voting record. Compare it to their donor industries. The pattern is almost always visible. Share what you find.' },
              { n: '3', title: 'Track Their Stock Trades', body: 'UnusualWhales.com shows all congressional stock trades vs. their legislated industries. Insider trading is rampant and barely prosecuted. Public attention is the only current deterrent.' },
              { n: '4', title: 'Support Reform Organizations', body: 'Common Cause, Public Citizen, Campaign Legal Center, End Citizens United — these organizations do legal and legislative work that requires public financial support to compete with trillion-dollar lobbies.' },
              { n: '5', title: 'Vote in Primaries', body: 'The real elections are primaries, where donor-backed incumbents face challengers. Dark money flows specifically to defeat reformers in primaries when general elections feel too risky. Primary turnout of 8% means 4.1% of voters choose your senator.' },
              { n: '6', title: 'Demand Local Media Coverage', body: 'Write to local newspapers and TV stations asking them to cover donor-vote correlations for your specific senators. Local press is less captured by national advertiser pressure than national networks.' },
            ].map((a) => (
              <div key={a.n} className="flex gap-3">
                <div className="font-mono text-2xl font-black text-emerald-400 opacity-30 flex-shrink-0 w-8">{a.n}</div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white mb-1">{a.title}</h3>
                  <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-5">— Understand the Full System</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/power', label: '👁 Power Structure', desc: 'The 4 pillars that run the country' },
              { href: '/lobby', label: '🎯 Lobby Encyclopedia', desc: 'Every major lobby with amounts & targets' },
              { href: '/money-loop', label: '🔄 The Money Loop', desc: 'How donations become policy' },
              { href: '/revolving-door', label: '🚪 Revolving Door', desc: 'Named officials — government to corporate' },
              { href: '/report', label: '📋 War Report', desc: 'War-by-war cost and beneficiary analysis' },
              { href: '/', label: '🌐 Network Graph', desc: 'Interactive 3D Senate power visualization' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block border border-border bg-surface-1 hover:bg-surface-3 hover:border-accent-blue/30 rounded-lg p-4 transition-all">
                <div className="font-mono text-sm font-bold text-white mb-1">{l.label}</div>
                <div className="font-mono text-[10px] text-slate-500">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          <div>Senate Intelligence Platform · This encyclopedia is for educational and civic use only</div>
          <div className="mt-1">All data from public sources: OpenSecrets · Congress.gov · FEC.gov · ProPublica · Watson Institute</div>
        </footer>
      </div>
    </div>
  );
}
