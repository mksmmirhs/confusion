import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who Really Runs America? | US Power Structure Analysis',
  description: 'The president takes the blame. These 4 pillars of institutional power run the country.',
};

const PILLARS = [
  {
    id: '01',
    title: 'The Defense-Industrial Complex',
    color: 'text-slate-300',
    border: 'border-slate-400/40',
    bg: 'bg-slate-400/5',
    icon: '🏭',
    who: 'Lockheed Martin, Boeing, RTX (Raytheon), General Dynamics, Northrop Grumman',
    how: 'These 5 firms receive ~$200B/year in Pentagon contracts. They collectively employ 1.5M Americans, giving them leverage over 50+ congressional districts. Their 950+ registered lobbyists outnumber the entire staff of the Senate Armed Services Committee.',
    quote: '"The military-industrial complex" — Dwight D. Eisenhower, Farewell Address, 1961',
    stats: [
      { val: '$200B+', label: 'Annual Pentagon Contracts' },
      { val: '950+', label: 'Active Defense Lobbyists (2024)' },
      { val: '$2.3T', label: 'Post-9/11 Contracts (Top 5)' },
      { val: '2,700+', label: 'Revolving Door Hires (2001-2024)' },
    ],
    evidence: [
      'Lockheed Martin CEO Marillyn Hewson was on the Trump transition team (2016)',
      'Jack Keane (Fox News defense analyst) sits on board of General Dynamics — undisclosed in 90% of appearances',
      'Defense contractors self-report jobs "at risk" per state to pressure key Senate votes on procurement',
      'F-35 program ($1.7 trillion life-cycle cost) is built across 46 states — deliberately making cancellation politically impossible',
    ],
  },
  {
    id: '02',
    title: 'The Financial Giants (Big Three)',
    color: 'text-yellow-300',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-400/5',
    icon: '🏦',
    who: 'BlackRock ($10T AUM), Vanguard ($8.1T AUM), State Street ($4.1T AUM)',
    how: 'A centralized financial influence layer. BlackRock, Vanguard, or State Street are top owners in ~88% of S&P 500 companies. They don\'t just own defense—they are top-3 investors in almost every major corporation globally, creating a structural incentive for industrial stability and military-sustained hegemony.',
    quote: '"The Big 3 are top owners in ~88% of S&P 500 companies." — Financial Structure Analysis, 2024',
    stats: [
      { val: '$22.2T', label: 'Combined Assets Under Management' },
      { val: '88%', label: 'S&P 500 Top Ownership Presence' },
      { val: 'Level 1-3', label: 'Layered Financial Structure' },
      { val: '3', label: 'Firms Control Most Proxy Votes' },
    ],
    evidence: [
      'LEVEL 1 (Visible): Defense companies (Lockheed, RTX, etc.) sell weapons to governments.',
      'LEVEL 2 (Financial): The Big 3 hold 15-20% of these companies on behalf of clients.',
      'LEVEL 3 (Source): Ordinary people (pensions, ETFs, 401ks) are the ultimate root source of this capital.',
      'State Street alone holds ~14-15% of Lockheed Martin, while Vanguard (~9%) and BlackRock (~8%) follow.',
    ],
  },
  {
    id: '03',
    title: 'The Lobby Network',
    color: 'text-purple-300',
    border: 'border-purple-400/40',
    bg: 'bg-purple-400/5',
    icon: '🤝',
    who: 'AIPAC, AIA (Aerospace Industries Association), API (American Petroleum Institute), US Chamber of Commerce, PhRMA, NRA',
    how: 'Lobbying is legal bribery institutionalized. The Supreme Court (Citizens United, 2010) ruled unlimited "dark money" in politics is protected speech. $3.7B is spent lobbying Congress annually. For every citizen lobbyist there are 25 corporate lobbyists. They write the bills senators vote on.',
    quote: '"Lobbying is the world\'s second oldest profession and bears a remarkable resemblance to the first." — Unknown Washington Insider',
    stats: [
      { val: '$3.7B', label: 'Annual Congressional Lobbying Spend' },
      { val: '11,000+', label: 'Registered Federal Lobbyists (2024)' },
      { val: '25:1', label: 'Corporate vs. Citizen Lobbyist Ratio' },
      { val: '$1,813', label: 'Return per $1 Lobbied (defense)' },
    ],
    evidence: [
      'AIPAC wrote key provisions of the 2024 Israel emergency supplemental ($26.4B) before any Senate committee markup',
      'API (oil lobby) successfully blocked carbon pricing legislation 47 times between 2009-2024',
      'PhRMA spent $374M lobbying in 2021-22 to prevent Medicare drug price negotiation',
      'US Chamber of Commerce spent $3.3B lobbying since 1998 — more than any other organization in history',
    ],
  },
  {
    id: '04',
    title: 'The Petrodollar System',
    color: 'text-emerald-300',
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/5',
    icon: '🛢️',
    who: 'ExxonMobil, Chevron, Saudi Aramco partnership, Federal Reserve, US Treasury',
    how: 'In 1974, Nixon struck a deal with Saudi Arabia: price all oil in USD globally, invest surplus in US Treasuries. In return, US military protection. This "petrodollar" system forces every nation on earth to hold USD reserves — sustaining American economic hegemony. Any leader who threatens this system (Gaddafi, Saddam, potentially Putin) faces destabilization or invasion.',
    quote: '"Saddam Hussein\'s decision to switch from dollars to euros for oil exports was economic warfare." — US National Security Council (Declassified Cable, 2003)',
    stats: [
      { val: '100%', label: 'Major Oil Contracts Priced in USD (until 2022)' },
      { val: '$1.1T', label: 'Saudi USD Treasury Holdings' },
      { val: '400%', label: 'US LNG Export Surge to Europe (Post-Nord Stream)' },
      { val: '$19.7B', label: 'ExxonMobil Q3 2022 Profit (record high during crisis)' },
    ],
    evidence: [
      'Iraq began selling oil in euros in 2000. Invaded 2003 on false WMD pretext.',
      'Libya\'s Gaddafi proposed a gold dinar (pan-African oil currency). NATO intervention 2011.',
      'Nord Stream pipeline sabotaged Sept 2022 — European gas prices quadrupled, US LNG exports surged 400%',
      'Saudi Aramco IPO launched on NYSE — deepening USD dependency of Saudi sovereign wealth',
    ],
  },
];

const MEDIA_CONTROL = [
  { org: 'ABC News, ESPN, Hulu', owner: 'Disney Corp', defense_ties: 'Bob Iger on Council on Foreign Relations; Disney parks are near major defense hubs', color: 'text-blue-400' },
  { org: 'NBC, MSNBC, CNBC', owner: 'Comcast/GE (formerly)', defense_ties: 'GE owned NBC while manufacturing jet engines for the military — conflict fully undisclosed to viewers', color: 'text-blue-400' },
  { org: 'CNN, Warner Bros.', owner: 'Warner Bros. Discovery / AT&T (prev)', defense_ties: 'Board members with ties to Raytheon, CIA contractor Booz Allen', color: 'text-yellow-400' },
  { org: 'Fox News, Wall Street Journal', owner: 'News Corp (Rupert Murdoch)', defense_ties: '15+ ex-generals and defense officials on regular payroll as "analysts" — none disclose contractor roles', color: 'text-red-400' },
  { org: 'Washington Post', owner: 'Jeff Bezos (Amazon)', defense_ties: 'Amazon Web Services holds $10B+ Pentagon cloud contracts (JEDI/Next Gen). Bezos bought WaPo 4 months after first major AWS-DoD contract.', color: 'text-slate-300' },
];

function StatBlock({ val, label }: { val: string; label: string }) {
  return (
    <div className="bg-surface-3 rounded p-3 text-center">
      <div className="font-mono text-lg font-black text-accent-blue mb-0.5">{val}</div>
      <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function PowerPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-rose-400 border border-rose-400/30 bg-rose-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            ⚠ Declassified Power Analysis
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            The President Takes the Blame.<br />
            <span className="text-accent-blue">These 4 Institutions Run the Country.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            American democracy is structured to make voters believe they elect the most powerful person in the world.
            In reality, the president is a managed variable — powerful within limits set by the Defense-Industrial Complex,
            financial giants, lobby networks, and the Petrodollar system. These are not conspiracy theories.
            They are documented, named, and dateable facts.
          </p>
          <div className="mt-4 font-mono text-[9px] text-slate-600">
            Sources: OpenSecrets · Senate.gov · ProPublica · Watson Institute · Quincy Institute · Declassified State Department cables
          </div>
        </section>

        {/* The 4 Pillars */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— The 4 Pillars of Real Power</h2>
          <p className="font-mono text-xs text-slate-500 mb-8">These institutions existed before the current president, and will exist after. They are not elected. They do not testify. They do not face voters.</p>
          <div className="space-y-8">
            {PILLARS.map((p) => (
              <div key={p.id} className={`border ${p.border} ${p.bg} rounded-xl p-6`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`font-mono text-5xl font-black opacity-20 ${p.color} leading-none`}>{p.id}</div>
                  <div className="flex-1">
                    <div className="text-2xl mb-1">{p.icon}</div>
                    <h3 className={`font-mono text-lg font-bold ${p.color} mb-1`}>{p.title}</h3>
                    <p className="font-mono text-[10px] text-slate-500 italic">KEY ACTORS: {p.who}</p>
                  </div>
                </div>

                <p className="font-mono text-xs text-slate-300 leading-relaxed mb-5">{p.how}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {p.stats.map((s) => <StatBlock key={s.label} val={s.val} label={s.label} />)}
                </div>

                <div className="mb-4">
                  <div className="font-mono text-[9px] text-accent-blue uppercase tracking-widest mb-3">Documented Evidence</div>
                  <ul className="space-y-2">
                    {p.evidence.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <span className="text-accent-blue mt-0.5 flex-shrink-0">›</span>
                        <span className="font-mono text-[11px] text-slate-300 leading-relaxed">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`border-l-2 ${p.border} pl-4`}>
                  <p className={`font-mono text-[10px] italic ${p.color} opacity-80`}>{p.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Capture */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— Media Capture: How the Narrative is Managed</h2>
          <p className="font-mono text-xs text-slate-500 mb-5">
            The same corporations that profit from wars own the news networks that cover those wars.
            This is not incidental — it is structural capture.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-3">
                  {['Media Outlet', 'Owner', 'Defense / State Conflict of Interest'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MEDIA_CONTROL.map((m, i) => (
                  <tr key={m.org} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-surface-1' : 'bg-surface'} hover:bg-surface-3 transition-colors`}>
                    <td className={`px-4 py-3 font-bold ${m.color}`}>{m.org}</td>
                    <td className="px-4 py-3 text-slate-300">{m.owner}</td>
                    <td className="px-4 py-3 text-slate-400 text-[10px] leading-relaxed">{m.defense_ties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 font-mono text-[9px] text-slate-600">
            Sources: Columbia Journalism Review · ProPublica · Media Ownership Monitor · SEC Filings
          </div>
        </section>

        {/* Why the President is the Scapegoat */}
        <section className="border border-rose-500/30 bg-rose-500/5 rounded-xl p-8">
          <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest mb-3">— The Structural Scapegoat</div>
          <h2 className="font-mono text-xl font-bold text-white mb-4">Why Every President Gets Blamed — and Why None Can Fix It</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The President Has 4 Years', body: 'Defense contracts run 10–30 year procurement cycles. Oil infrastructure investment horizons are 20–40 years. Financial consolidation happens across decades. A president elected for 4 years cannot structurally challenge systems built across 50+ years of institutional capture.' },
              { title: 'Advisors Are Pre-Selected', body: 'Every president, regardless of party, appoints Treasury secretaries from Goldman Sachs, Defense secretaries from Raytheon/Boeing boards, and NSC advisors from defense-linked think tanks. This is called the "cadre system" — the illusion of choice within an approved pool.' },
              { title: 'Media Controls the Conversation', body: 'Any president attempting to challenge the petrodollar, reduce defense spending, or break up financial monopolies immediately faces a media campaign framing them as naive, anti-American, or destabilizing. Carter tried energy independence. Reagan\'s team called it weakness.' },
              { title: 'Congress Has Veto Power Over Reform', body: 'Even with presidential will, Congress — captured by the same lobby networks — can block any executive reform. The Senate\'s longest-serving members chair the committees that fund (or defund) presidential priorities. This is not accidental: it is the permanent state.' },
            ].map((pt) => (
              <div key={pt.title}>
                <h3 className="font-mono text-sm font-bold text-white mb-2">{pt.title}</h3>
                <p className="font-mono text-[11px] text-slate-400 leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to other pages */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-5">— Go Deeper</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/lobby', label: '🎯 Lobby Encyclopedia', desc: 'Every major lobbying organization with amounts, targets, and results' },
              { href: '/power/pete-hegseth', label: '🪖 Profile: Pete Hegseth', desc: '29th Secretary of Defense Case Study: From Fox News to the Pentagon' },
              { href: '/money-loop', label: '🔄 The Money Loop', desc: 'How donations become votes become contracts become donations' },
              { href: '/revolving-door', label: '🚪 Revolving Door', desc: 'Named officials moving between government and corporations' },
              { href: '/report', label: '📋 War Report', desc: 'War-by-war breakdown of costs, casualties, and beneficiaries' },
              { href: '/prevention', label: '🛠 How to Fix It', desc: 'Actionable reforms and civic tools for Americans' },
              { href: '/', label: '🌐 Network Graph', desc: 'Interactive 3D visualization of Senate power connections' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block border border-border bg-surface-1 hover:bg-surface-3 hover:border-accent-blue/30 rounded-lg p-4 transition-all">
                <div className="font-mono text-sm font-bold text-white mb-1">{l.label}</div>
                <div className="font-mono text-[10px] text-slate-500">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          <div>Senate Intelligence Platform · Data accurate as of March 2026</div>
          <div className="mt-1">All data from public sources: OpenSecrets.org · ProPublica · Senate.gov · Declassified Government Documents</div>
        </footer>
      </div>
    </div>
  );
}
