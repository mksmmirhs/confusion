import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Revolving Door | Government ↔ Corporate America',
  description: 'Named case studies of officials who rotate between government positions and the defense, finance, and oil industries they regulate.',
};

const CASES = [
  {
    category: 'Defense Industry',
    color: 'text-slate-300',
    border: 'border-slate-400/30',
    bg: 'bg-slate-400/5',
    icon: '🏭',
    cases: [
      {
        name: 'Dick Cheney',
        path: 'Defense Secretary (1989–1993) → CEO Halliburton (1995–2000) → VP United States (2001–2009)',
        result: 'Halliburton received $39.5B in Iraq/Afghanistan contracts while Cheney held $18M in Halliburton stock options. Cheney recused from no decisions. Halliburton had no-bid contracts.',
        source: 'Halliburton SEC filings, Kellogg Brown & Root contracts, Center for Public Integrity',
      },
      {
        name: 'Robert Gates',
        path: 'CIA Director (1991–1993) → Texas A&M President → Defense Secretary (2006–2011) → Board member: Parker Hannifin (defense supplier), Fidelity Investments',
        result: 'Gates approved $2.1T in defense spending. Joined boards of major military suppliers immediately after leaving government. Classic revolving door.',
        source: 'SEC Board disclosures, Bloomberg Business',
      },
      {
        name: 'James Mattis (General)',
        path: 'CENTCOM Commander (2010–2013) → Theranos Board ($150k/year) → General Dynamics Board ($242k/year) → Secretary of Defense (2017–2019)',
        result: 'Mattis approved General Dynamics contracts while previously sitting on their board. He then returned to the board after leaving government.',
        source: 'SEC Form 10-K, ProPublica Revolving Door Database',
      },
      {
        name: 'Mike Pompeo',
        path: 'Koch Industries executive → Congress (2011-2017) → CIA Director → Secretary of State (2018–2021) → Consulting firm + defense conference speaker ($50k/speech)',
        result: 'As Secretary of State, Pompeo pushed arms sales to Saudi Arabia and UAE that benefited the same defense contractors who funded his political career.',
        source: 'FEC filings, State Dept FARA records',
      },
      {
        name: 'Jack Keane (General, retired)',
        path: '4-Star General, US Army → Board of Directors: General Dynamics ($258k/year) → Fox News Senior Defense Analyst (undisclosed)',
        result: 'Appeared on Fox News 100+ times advocating for US military intervention and defense spending increases. Conflict of interest with General Dynamics never disclosed to viewers.',
        source: 'MediaMatters, General Dynamics SEC proxy, Fox News appearance logs',
      },
    ],
  },
  {
    category: 'Finance & Banking',
    color: 'text-yellow-300',
    border: 'border-yellow-400/30',
    bg: 'bg-yellow-400/5',
    icon: '🏦',
    cases: [
      {
        name: 'Robert Rubin',
        path: 'Goldman Sachs CEO → Treasury Secretary (1995–1999) → Citigroup Chairman (1999–2009, $126M in compensation)',
        result: 'As Treasury Secretary, Rubin pushed repeal of Glass-Steagall (barrier between investment and commercial banking). He immediately joined Citigroup, which became the primary beneficiary. Citigroup received $45B in TARP bailout he had helped architect.',
        source: 'NYT, WSJ, FCIC Report, Citigroup annual reports',
      },
      {
        name: 'Hank Paulson',
        path: 'Goldman Sachs CEO (2006) → Treasury Secretary (2006–2009) → Managed 2008 $700B TARP bailout that benefited Goldman Sachs directly',
        result: 'Goldman Sachs received $10B in TARP funds and indirect AIG bailout ($12.9B) that was at 100 cents on the dollar — not standard market rate. Paulson granted himself a $700M tax-free exemption when taking government office.',
        source: 'TARP Special Inspector General, NYT "Too Big to Fail", SIGTARP Reports',
      },
      {
        name: 'Larry Summers',
        path: 'Treasury Secretary (1999–2001) → Harvard President → Managing Director D.E. Shaw hedge fund ($5.2M/year) → Obama Chief Economic Advisor (2009)',
        result: 'Summers was one of the architects of financial deregulation. During the Obama administration, he consistently blocked stronger re-regulation. Simultaneously received $2.7M in speaking fees from banks being regulated.',
        source: 'White House financial disclosure, Bloomberg, Rolling Stone',
      },
      {
        name: 'Timothy Geithner',
        path: 'NY Fed President (architect of 2008 bailout) → Treasury Secretary (2009–2013) → President Warburg Pincus private equity ($400k+/month)',
        result: 'Geithner oversaw the bailout that saved Wall Street while fighting robust re-regulation. He joined private equity immediately after, making 10x his government salary.',
        source: 'Senate Finance Committee hearings, Warburg Pincus press releases',
      },
      {
        name: 'Dave McCormick',
        path: 'Bridgewater Associates CEO (world\'s largest hedge fund) → Republican Senate candidate (2022) → US Senator PA (2025) → Senate Armed Services Committee',
        result: 'McCormick is the living example of the finance-to-Senate pipeline. Now has direct voting power over Pentagon contracts that affect companies his former firm invested in.',
        source: 'OpenSecrets, Senate.gov, Bridgewater Annual Letter',
      },
    ],
  },
  {
    category: 'Oil & Energy',
    color: 'text-emerald-300',
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-400/5',
    icon: '🛢️',
    cases: [
      {
        name: 'Rick Perry',
        path: 'Texas Governor (oil state, major API recipient) → Energy Secretary (2017–2019, despite promising to abolish the department) → Board of Vistra Corp (power company)',
        result: 'As Energy Secretary, Perry approved multiple LNG export terminals that benefited companies whose boards he later joined. Also approved Ukraine\'s energy sector involvement.',
        source: 'DOE disclosures, Bloomberg, Dallas Morning News',
      },
      {
        name: 'Andy Wheeler',
        path: 'Coal industry lobbyist (Murray Energy) → EPA Deputy Administrator → EPA Administrator (2019–2021) → Virginia Secretary of Natural Resources',
        result: 'Wheeler rolled back 85 environmental rules while at EPA, including standards that directly regulated his former client Murray Energy. The "regulated becomes the regulator" exemplified.',
        source: 'NYT, EPA rule rollback database, CREW (Citizens for Responsibility)',
      },
      {
        name: 'Rex Tillerson',
        path: 'ExxonMobil CEO 2006–2016 (active oil deals with Russia, OPEC, ME) → Secretary of State (2017–2018)',
        result: 'Tillerson had more experience negotiating with foreign heads of state than any diplomat — for ExxonMobil\'s benefit. As Secretary of State, he continued to protect energy interests of former employer in key regions.',
        source: 'Senate confirmation hearings, ExxonMobil annual reports, FP Magazine',
      },
    ],
  },
  {
    category: 'Congressional Staff → Lobbyists',
    color: 'text-blue-300',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
    icon: '📋',
    cases: [
      {
        name: 'The "Staff Exodus" System',
        path: 'Senior Senate committee staffer → Lobbying firm → $500k+/year salary',
        result: 'In 2023 alone: 339 former congressional staff registered as federal lobbyists within 1 year of leaving. They leverage relationships, access, and institutional knowledge sold to the highest corporate bidder.',
        source: 'OpenSecrets Revolving Door Database, POGO (Project on Government Oversight)',
      },
      {
        name: 'Liz Fowler',
        path: 'WellPoint (health insurance) VP → Senate Finance Committee chief healthcare counsel (wrote ACA) → HHS (implemented ACA) → Johnson & Johnson VP',
        result: 'Fowler wrote the Affordable Care Act while employed by the committee. The ACA preserved insurance industry dominance and included provisions directly favorable to her former employer.',
        source: 'Senate Finance Committee disclosures, ProPublica "Revolving Door"',
      },
    ],
  },
];

const SCALE_STATS = [
  { val: '5,600+', label: 'Ex-Govt Officials Now Federal Lobbyists' },
  { val: '70%', label: 'Ex-Pentagon Officials Join Defense Firms' },
  { val: '2,700+', label: 'Defense Revolving Door Hires (2001-2024)' },
  { val: '$500k+', label: 'Avg Salary Premium: Govt → Lobby' },
];

export default function RevolvingDoorPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-blue-400 border border-blue-400/30 bg-blue-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            🚪 The Revolving Door
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            Government Official Today.<br />
            <span className="text-accent-blue">Corporate Lobbyist Tomorrow.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            The "revolving door" is the practice of government officials moving to private industry — and back —
            using the relationships, insider knowledge, and institutional access they built in public service
            to benefit corporations they now represent. This is technically legal. It is functionally corruption.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {SCALE_STATS.map((s) => (
              <div key={s.label} className="bg-surface-1 border border-border rounded-lg p-3 text-center">
                <div className="font-mono text-xl font-black text-accent-blue">{s.val}</div>
                <div className="font-mono text-[8px] text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cases by Category */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— Named Case Studies</h2>
          <div className="space-y-8">
            {CASES.map((cat) => (
              <div key={cat.category} className={`border ${cat.border} ${cat.bg} rounded-xl p-6`}>
                <h3 className={`font-mono text-base font-bold ${cat.color} mb-5 flex items-center gap-2`}>
                  <span>{cat.icon}</span>
                  {cat.category}
                </h3>
                <div className="space-y-5">
                  {cat.cases.map((c) => (
                    <div key={c.name} className="bg-surface rounded-lg p-4 border border-border/40">
                      <div className="font-mono text-sm font-bold text-white mb-2">{c.name}</div>
                      <div className={`font-mono text-[10px] ${cat.color} mb-3 leading-relaxed opacity-90`}>
                        PATH: {c.path}
                      </div>
                      <div className="font-mono text-[11px] text-slate-300 leading-relaxed mb-2">
                        <span className="text-rose-400">IMPACT: </span>{c.result}
                      </div>
                      <div className="font-mono text-[9px] text-slate-600">
                        SOURCE: {c.source}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works as a System */}
        <section className="border border-rose-500/30 bg-rose-500/5 rounded-xl p-8">
          <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest mb-3">— Why This is a System, Not Isolated Cases</div>
          <h2 className="font-mono text-xl font-bold text-white mb-4">The Mechanism</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Phase 1: Regulatory Capture', body: 'An official enters the agency or committee that regulates an industry. Over years, their staff, advisors, and working relationships are with industry representatives. They are socialized into the industry perspective.' },
              { title: 'Phase 2: The Audition', body: 'In the last 1-2 years of government service, an official subtly signals openness to private sector opportunities. They make rulings that favor potential future employers. Industry headhunters monitor voting records and regulatory decisions.' },
              { title: 'Phase 3: The Reward', body: 'After leaving government, the official is hired at 5-10x their government salary. Their value: access to former colleagues still in government, understanding of regulatory gaps, personal relationships with current decision-makers.' },
            ].map((pt) => (
              <div key={pt.title}>
                <h3 className="font-mono text-xs font-bold text-rose-400 mb-2">{pt.title}</h3>
                <p className="font-mono text-[11px] text-slate-400 leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-rose-400/20 pt-4">
            <p className="font-mono text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-white">Current law requires:</strong> Senior officials wait 1-2 years before lobbying their former agency.
              This "cooling off" period is inadequate — industry hires them as "strategic advisors" or "board members"
              (not officially lobbying) where they provide the same access and intelligence with zero disclosure requirements.
            </p>
          </div>
        </section>

        {/* Legal Framework That Enables It */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-5">— The Legal Framework That Enables This</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { law: 'Citizens United v. FEC (2010)', effect: 'Reversed 100 years of campaign finance law. Corporations can spend unlimited on elections. This made officials\' votes even more valuable to industry — and the post-government reward even richer.' },
              { law: '"Cooling Off" Period Laws (1-2 years)', effect: 'Nominally prevents direct lobbying of former agency. In practice, former officials serve as "strategic advisors," "board members," or "consultants" — performing the same function with zero transparency.' },
              { law: 'STOCK Act (2012)', effect: 'Requires disclosure of congressional stock trades. However: disclosures happen up to 45 days late. Enforcement is a $200 fine. Over 70 members of Congress have violated it — none prosecuted.' },
              { law: 'Lobbying Disclosure Act (1995)', effect: 'Requires registration if lobbying activities exceed 20% of time for a client. Loophole: "grassroots lobbying" campaigns, "educational" events, and most foreign agent work is exempt from disclosure.' },
            ].map((l) => (
              <div key={l.law} className="bg-surface-1 border border-border rounded-lg p-4">
                <div className="font-mono text-xs font-bold text-amber-400 mb-2">{l.law}</div>
                <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{l.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/money-loop', label: '🔄 The Money Loop', desc: 'Donations → Votes → Contracts cycle' },
            { href: '/lobby', label: '🎯 Lobby Encyclopedia', desc: 'Who is funding whom' },
            { href: '/prevention', label: '🛠 How To Fix It', desc: 'Real reform proposals' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-border bg-surface-1 hover:bg-surface-3 hover:border-accent-blue/30 rounded-lg p-4 transition-all">
              <div className="font-mono text-sm font-bold text-white mb-1">{l.label}</div>
              <div className="font-mono text-[10px] text-slate-500">{l.desc}</div>
            </Link>
          ))}
        </section>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          Senate Intelligence Platform · Sources: OpenSecrets Revolving Door Database · POGO · ProPublica
        </footer>
      </div>
    </div>
  );
}
