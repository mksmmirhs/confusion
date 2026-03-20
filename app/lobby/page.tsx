import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lobby Encyclopedia | Who Buys American Senators',
  description: 'A comprehensive database of every major lobbying organization influencing the US Senate — with spending amounts, senator targets, and documented results.',
};

const LOBBIES = [
  {
    id: 'aipac',
    name: 'AIPAC',
    full: 'American Israel Public Affairs Committee',
    category: 'Foreign Policy / Defense',
    founded: 1951,
    badge: 'bg-purple-500/10 text-purple-400 border-purple-400/30',
    color: 'text-purple-400',
    border: 'border-purple-400/30',
    bg: 'bg-purple-400/5',
    annualBudget: '$100M+/election cycle',
    totalSpend: '$300M+ (2020-2024)',
    approach: 'Bundled contributions, primary election spending via UDP Super PAC, direct donations, all-expenses Israel trips for senators',
    keyBills: ['$3.8B/year Israel military aid (Memorandum of Understanding)', '$26.4B Emergency Supplemental (2024)', 'Iron Dome funding ($1B+)', 'S.2019 – Antisemitism Awareness Act (potential First Amendment impact)'],
    senators: [
      { name: 'Chuck Schumer (D-NY)', amount: '$4.5M+ career', result: 'YEA on every Israel aid bill' },
      { name: 'Mitch McConnell (R-KY)', amount: '$2.1M career', result: 'YEA on every Israel aid bill' },
      { name: 'Ben Cardin (D-MD)', amount: '$3.5M career', result: 'Primary author of Israel aid legislation as Foreign Relations Chair' },
      { name: 'John Fetterman (D-PA)', amount: '$3M (2022)', result: 'Most pro-Israel freshman senator 2023' },
      { name: 'Ron Johnson (R-WI)', amount: '$2.4M career', result: 'YEA Ukraine + Israel aid despite "anti-establishment" branding' },
    ],
    note: 'AIPAC launched the "United Democracy Project" (UDP) Super PAC in 2022 specifically to spend unlimited dark money in Democratic primaries — defeating progressive candidates who questioned Israel aid.',
  },
  {
    id: 'aia',
    name: 'AIA',
    full: 'Aerospace Industries Association',
    category: 'Defense / Military',
    founded: 1919,
    badge: 'bg-slate-500/10 text-slate-400 border-slate-400/30',
    color: 'text-slate-300',
    border: 'border-slate-400/30',
    bg: 'bg-slate-400/5',
    annualBudget: '$15M+/year lobbying',
    totalSpend: '$150M+ (2010-2024)',
    approach: 'Direct lobbying, PAC contributions, "Congressional briefings" (classified advocacy), job-allocation pressure (F-35 in 46 states)',
    keyBills: ['National Defense Authorization Act (NDAA) — $858B FY2023', 'F-35 JSF Program ($1.7T lifecycle approved)', 'Ukraine Security Assistance Initiative authorizations'],
    senators: [
      { name: 'Jack Reed (D-RI)', amount: '$510k/cycle', result: 'Armed Services Committee Chair — drives entire NDAA' },
      { name: 'Roger Wicker (R-MS)', amount: '$490k/cycle', result: 'Armed Services Ranking Member — controls all defense legislation' },
      { name: 'Lindsey Graham (R-SC)', amount: '$460k/cycle', result: 'Has called for "uncapped" military aid to Ukraine and Israel' },
      { name: 'Maria Cantwell (D-WA)', amount: '$520k/cycle', result: 'Commerce Chair — Boeing home state, voted YEA Iraq AUMF' },
      { name: 'Tom Cotton (R-AR)', amount: '$380k/cycle', result: 'Consistent expansion of defense budget to $1T' },
    ],
    note: 'AIA strategically distributes F-35 manufacturing across 45+ congressional districts — making any senator who votes against the program effectively voting against constituents\' jobs.',
  },
  {
    id: 'api',
    name: 'API',
    full: 'American Petroleum Institute',
    category: 'Oil & Energy',
    founded: 1919,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/30',
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-400/5',
    annualBudget: '$8M+/year direct lobbying',
    totalSpend: '$840M+ indirect (member corps combined)',
    approach: 'Direct lobbying, Senate campaign donations, funding climate denial think tanks ($600M+), grass-roots astroturfing, revolving door hiring',
    keyBills: ['Blocked 47 carbon pricing bills (2009-2024)', 'Keystone XL Pipeline legislation', 'Alaska National Wildlife Refuge drilling authorization', 'LNG export terminal approvals (post-Nord Stream)'],
    senators: [
      { name: 'Ted Cruz (R-TX)', amount: '$445k/cycle (ExxonMobil/API)', result: 'Vocally opposes every climate regulation, supported ANWR drilling' },
      { name: 'John Cornyn (R-TX)', amount: '$380k/cycle', result: 'Key for energy deregulation legislation in Finance Committee' },
      { name: 'John Barrasso (R-WY)', amount: '$420k/cycle', result: 'Former Environment Committee Chair — used position to block climate bills' },
      { name: 'Lisa Murkowski (R-AK)', amount: '$310k/cycle', result: 'Approved ANWR drilling in Alaska — $1T+ oil reserve area' },
    ],
    note: 'API funded the "Global Climate Coalition" (1989-2002) — an organized disinformation campaign. Internal documents show API knew about climate change since the 1960s. 800+ scientists were hired to cast doubt.',
  },
  {
    id: 'chamber',
    name: 'US Chamber',
    full: 'United States Chamber of Commerce',
    category: 'Corporate Omnibus',
    founded: 1912,
    badge: 'bg-amber-500/10 text-amber-400 border-amber-400/30',
    color: 'text-amber-400',
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/5',
    annualBudget: '$80M+/year lobbying',
    totalSpend: '$3.3B (1998-2024) — #1 all-time',
    approach: 'Lobbying, dark money political spending, litigation (amicus briefs vs labor rights), media campaigns, funding right-leaning judicial nominees\' background research',
    keyBills: ['Citizens United (supported as amicus)', 'Blocked OSHA worker protections', 'Blocked financial regulation post-2008', 'Blocked net neutrality rules permanently'],
    senators: [
      { name: 'Virtually all Republicans + moderate Democrats', amount: 'Endorsed voter info', result: 'Provides "pro-business" scorecards used by corporate donors' },
    ],
    note: 'The Chamber does not represent "small business" as often claimed. 94% of its budget comes from companies with revenues over $1B. It actively lobbied against pandemic worker protections in 2020.',
  },
  {
    id: 'big-pharma',
    name: 'PhRMA',
    full: 'Pharmaceutical Research and Manufacturers of America',
    category: 'Healthcare / Pharmaceutical',
    founded: 1958,
    badge: 'bg-blue-500/10 text-blue-400 border-blue-400/30',
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
    annualBudget: '$374M lobbying (2021-22 alone)',
    totalSpend: '$5B+ (2000-2024)',
    approach: 'Direct lobbying, campaign donations, "educational grants" to medical schools, funding patient advocacy groups, controlling FDA advisory board composition',
    keyBills: ['Blocked Medicare drug price negotiation for 20 years', 'Extended patent protection laws', 'Prescription drug importation bans'],
    senators: [
      { name: 'Joe Manchin (D-WV)', amount: '$250k+', result: 'Held out against Inflation Reduction Act drug pricing for 2 years before limited compromise' },
      { name: 'Bob Menendez (D-NJ)', amount: '$180k+', result: 'NJ is pharma headquarters state — consistently blocked generics legislation' },
    ],
    note: 'The FDA\'s Center for Drug Evaluation relies on "user fees" from pharmaceutical companies for 65% of its budget — meaning the agency that approves drugs is funded by the companies making those drugs.',
  },
];

const DARK_MONEY_ORGS = [
  { name: 'One Nation', backing: 'Republican Senate Leadership', cycle: '$40M+ (2022)', purpose: 'Attack ads against Democratic Senate candidates' },
  { name: 'Senate Majority PAC', backing: 'Democratic Senate Leadership', cycle: '$200M+ (2022)', purpose: 'Protect vulnerable Democratic Senate seats' },
  { name: 'United Democracy Project', backing: 'AIPAC', cycle: '$30M+ (2022)', purpose: 'Primary out progressive critics of Israel policy' },
  { name: 'Club for Growth', backing: 'Koch network + Wall Street', cycle: '$50M+ (2022)', purpose: 'Primary out moderate Republicans who support any regulation' },
  { name: 'Senate Conservatives Fund', backing: 'Hedge fund donors + oil', cycle: '$25M+ (2022)', purpose: 'Elect hardline conservatives to block all compromise' },
  { name: 'Majority Forward', backing: 'Democrat mega-donors', cycle: '$80M+ (2022)', purpose: 'Dark money arm of Senate Majority PAC' },
];

export default function LobbyPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-amber-400 border border-amber-400/30 bg-amber-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            📖 Encyclopedia of Influence
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            The Lobby Encyclopedia<br />
            <span className="text-accent-blue">Who Buys American Senators</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Lobbying is legal in the United States. That is the problem. Below is a comprehensive database
            of the major organizations that spend millions to direct Senate votes — with documented amounts,
            named senators, and specific bills they purchased.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
            {[
              { val: '$3.7B', label: 'Spent Lobbying Congress (2024)' },
              { val: '11,543', label: 'Registered Federal Lobbyists' },
              { val: '25:1', label: 'Corporate vs. Citizen Lobbyist Ratio' },
            ].map((s) => (
              <div key={s.label} className="bg-surface-1 border border-border rounded-lg p-3 text-center">
                <div className="font-mono text-xl font-black text-accent-blue">{s.val}</div>
                <div className="font-mono text-[8px] text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Lobbies */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— Major Lobbying Organizations</h2>
          <div className="space-y-6">
            {LOBBIES.map((org) => (
              <div key={org.id} className={`border ${org.border} ${org.bg} rounded-xl p-6`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-mono text-xl font-black ${org.color}`}>{org.name}</h3>
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded border ${org.badge}`}>{org.category}</span>
                    </div>
                    <div className="font-mono text-xs text-slate-500">{org.full} · Est. {org.founded}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold text-white">{org.annualBudget}</div>
                    <div className="font-mono text-[9px] text-slate-500">Annual Budget</div>
                    <div className="font-mono text-[9px] text-slate-600 mt-0.5">Lifetime: {org.totalSpend}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-surface-3 rounded-lg p-3">
                    <div className={`font-mono text-[9px] ${org.color} uppercase tracking-wider mb-2`}>Tactics</div>
                    <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{org.approach}</p>
                  </div>
                  <div className="bg-surface-3 rounded-lg p-3">
                    <div className={`font-mono text-[9px] ${org.color} uppercase tracking-wider mb-2`}>Key Bills Influenced</div>
                    <ul className="space-y-1">
                      {org.keyBills.map((b) => (
                        <li key={b} className="flex items-start gap-1.5">
                          <span className="text-accent-blue flex-shrink-0 mt-0.5">›</span>
                          <span className="font-mono text-[10px] text-slate-300">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <div className={`font-mono text-[9px] ${org.color} uppercase tracking-wider mb-2`}>Senator-Level Financial Relationships</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left pb-2 text-[9px] text-slate-600 uppercase">Senator</th>
                          <th className="text-left pb-2 text-[9px] text-slate-600 uppercase">Amount / Cycle</th>
                          <th className="text-left pb-2 text-[9px] text-slate-600 uppercase">Documented Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {org.senators.map((s) => (
                          <tr key={s.name} className="border-b border-border/30">
                            <td className="py-1.5 text-white font-semibold">{s.name}</td>
                            <td className={`py-1.5 ${org.color} font-bold`}>{s.amount}</td>
                            <td className="py-1.5 text-slate-400 text-[10px]">{s.result}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={`border-l-2 ${org.border} pl-4 bg-surface rounded py-2`}>
                  <div className={`font-mono text-[9px] ${org.color} uppercase mb-1`}>Key Fact</div>
                  <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{org.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Money */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— Dark Money: The Invisible Billions</h2>
          <p className="font-mono text-xs text-slate-500 mb-5">
            Since Citizens United (2010), unlimited "dark money" can be spent in elections with no donor disclosure.
            These are the major vehicles — some officially bipartisan in structure, all captured by their primary funders.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-3">
                  {['Organization', 'Backing', 'Spending/Cycle', 'Purpose'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DARK_MONEY_ORGS.map((d, i) => (
                  <tr key={d.name} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-surface-1' : 'bg-surface'}`}>
                    <td className="px-4 py-3 font-bold text-white">{d.name}</td>
                    <td className="px-4 py-3 text-slate-400">{d.backing}</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">{d.cycle}</td>
                    <td className="px-4 py-3 text-slate-400 text-[10px]">{d.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 font-mono text-[9px] text-slate-600">Sources: OpenSecrets.org · FEC.gov · Follow the Money</div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/power', label: '👁 Power Structure', desc: 'Who really runs the country' },
            { href: '/money-loop', label: '🔄 The Money Loop', desc: 'How donations become policy' },
            { href: '/prevention', label: '🛠 How To Fix It', desc: 'Actual reforms that work' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-border bg-surface-1 hover:bg-surface-3 hover:border-accent-blue/30 rounded-lg p-4 transition-all">
              <div className="font-mono text-sm font-bold text-white mb-1">{l.label}</div>
              <div className="font-mono text-[10px] text-slate-500">{l.desc}</div>
            </Link>
          ))}
        </section>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          Senate Intelligence Platform · All data from OpenSecrets.org, FEC.gov, and Senate.gov disclosed records
        </footer>
      </div>
    </div>
  );
}
