import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Money Loop | How Donations Become Policy',
  description: 'A visual and data-driven breakdown of the self-reinforcing money cycle that captures American democracy: Lobby → Donation → Senator → Vote → Contract → Profit → Lobby.',
};

const LOOP_STEPS = [
  {
    n: '01',
    icon: '🏦',
    title: 'Corporations Generate Profit',
    color: 'text-yellow-400',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-400/5',
    body: 'Defense contractors, oil companies, pharmaceutical corporations, and financial institutions generate billions in annual profits — partially through government contracts already secured through previous lobby cycles.',
    numbers: [
      'Lockheed Martin: $67B revenue (2024)',
      'ExxonMobil: $98B revenue (2023)',
      'BlackRock: $17.8B revenue (2024)',
    ],
  },
  {
    n: '02',
    icon: '💸',
    title: 'Profits Fund Lobbying & Donations',
    color: 'text-amber-400',
    border: 'border-amber-400/40',
    bg: 'bg-amber-400/5',
    body: 'A fraction of profits is recycled into political donations (PACs, Super PACs, bundled contributions), direct lobbying ($3.7B/year), and dark money (501c4 organizations post-Citizens United). This is a business investment — with documented 1,813:1 ROI for defense firms.',
    numbers: [
      '$3.7B lobbying spend (all industries, 2024)',
      '$1,813 return per $1 lobbied (defense sector)',
      '$14B total political spending (2024 cycle)',
    ],
  },
  {
    n: '03',
    icon: '🤝',
    title: 'Senators Receive Funding',
    color: 'text-purple-400',
    border: 'border-purple-400/40',
    bg: 'bg-purple-400/5',
    body: 'Senators on key committees (Armed Services, Appropriations, Finance, Intelligence) receive disproportionate contributions from industries they regulate. Fundraising averages$15M per Senate race. This creates institutional dependency — not necessarily explicit quid pro quo.',
    numbers: [
      'Avg Senate race cost: $15.3M (2024)',
      'Armed Services senators average $450k/cycle from defense PACs',
      'Finance committee senators average $780k/cycle from financial sector',
    ],
  },
  {
    n: '04',
    icon: '🏛️',
    title: 'Senators Win Committee Chairmanships',
    color: 'text-blue-400',
    border: 'border-blue-400/40',
    bg: 'bg-blue-400/5',
    body: 'Senate seniority determines committee chairmanship. A senator who receives sustained industry funding can be reelected indefinitely — becoming the chair of the committee that regulates that same industry. This is structural, not accidental.',
    numbers: [
      'Jack Reed (D-RI): 28 yrs → Armed Services Chair',
      'Patty Murray (D-WA): 32 yrs → Appropriations Chair',
      'Chuck Grassley (R-IA): 44 yrs → Finance & Judiciary',
    ],
  },
  {
    n: '05',
    icon: '✅',
    title: 'Committee Chairs Approve Legislation & Budgets',
    color: 'text-rose-400',
    border: 'border-rose-400/40',
    bg: 'bg-rose-400/5',
    body: 'Committee chairs control which bills reach the floor, how defense budgets are structured, and which contracts are authorized. The $858B FY2023 NDAA was written by the same senators funded by the same defense contractors who will receive those contracts.',
    numbers: [
      '$858B NDAA FY2023 (largest ever)',
      '$61B Ukraine supplemental voted 79-18',
      '$26B Israel emergency aid voted 79-18',
    ],
  },
  {
    n: '06',
    icon: '📝',
    title: 'Contracts Are Awarded to Donors',
    color: 'text-emerald-400',
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/5',
    body: 'Pentagon contract awards flow predominantly to firms with the largest lobbying footprint. The Top 5 defense contractors (who spend the most lobbying) have received $2.3 trillion in post-9/11 contracts. This is documented correlation, consistently observed for 20+ years.',
    numbers: [
      '$2.3T — Top 5 contractor awards (2001-2024)',
      'Lockheed: $75B in contracts (2020)',
      'RTX: +41% stock since Ukraine war started',
    ],
  },
  {
    n: '07',
    icon: '📈',
    title: 'Profits Surge — Especially During Wars',
    color: 'text-accent-blue',
    border: 'border-accent-blue/40',
    bg: 'bg-accent-blue/5',
    body: 'War and conflict dramatically increase contractor revenues. BlackRock, Vanguard, and State Street — who own 15-20% of every major defense contractor — see fund appreciation during conflict periods. The financial incentive structure rewards war.',
    numbers: [
      'RTX stock: +41% since Feb 2022 (Ukraine)',
      'ExxonMobil Q3 2022 profit: $19.7B (all-time record)',
      'Defense ETFs: +38% since 2022',
    ],
  },
  {
    n: '01',
    icon: '🔄',
    title: 'Cycle Restarts — Enhanced',
    color: 'text-yellow-400',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-400/5',
    body: 'The profits fund the next lobbying cycle — now with more money, more political relationships, and more market dominance. Each cycle strengthens the grip. Competition shrinks. Media narrative is managed. Public attention is directed elsewhere.',
    numbers: [
      'Top 5 defense firms market share: 65% of all Pentagon contracts',
      'US defense lobby has grown 400% since 2001',
      'Effective corporate tax rate for top 5 contractors: 11%',
    ],
  },
];

const CASE_STUDIES = [
  {
    title: 'The Iraq War Loop',
    timeline: '2001 → 2021',
    color: 'border-l-red-500',
    steps: [
      '2001: AIPAC donates $4.5M+ to Schumer. AIA donates $510k to Reed. API donates $445k to Cruz.',
      '2002: Senate votes 77-23 for Iraq AUMF. Schumer, McConnell, Collins, Grassley vote YEA.',
      '2003-2011: Halliburton receives $39.5B in Iraq contracts. Lockheed receives $38B. Boeing $22B.',
      '2008: Dick Cheney — former Halliburton CEO — holds $18M in Halliburton stock options during these awards.',
      '2004-2008: Defense contractor donations to re-election campaigns increase 300%.',
      '2022: Same senators approve $61B Ukraine aid → Same contractors stock prices +41%.',
    ],
  },
  {
    title: 'The Gaza Aid Loop',
    timeline: '2020 → 2024',
    color: 'border-l-purple-500',
    steps: [
      '2022: AIPAC\'s UDP Super PAC spends $30M+ in Democratic primaries, defeating progressive critics.',
      '2023: October 7 attack. Senate leadership (AIPAC-funded) immediately commits to full support.',
      '2024: Senate votes 79-18 for $26.4B Israel emergency supplemental.',
      '2024: Boeing JDAM orders surge. RTX Iron Dome budget increases. Lockheed F-35 delivery accelerated.',
      '2024: Defense contractor stocks rise 12-22% in Q4 2024.',
      '2025: AIPAC begins next election cycle fundraising, using war-time solidarity as recruitment.',
    ],
  },
  {
    title: 'The Financial Crisis Loop',
    timeline: '1999 → 2010',
    color: 'border-l-yellow-500',
    steps: [
      '1998: Wall Street banks donate $50M to Senate campaigns pushing Glass-Steagall repeal.',
      '1999: Graham-Leach-Bliley Act repeals Glass-Steagall. Banks merge investment + commercial.',
      '2000-2007: Deregulated banks create massive mortgage derivative bubble ($700T notional value).',
      '2008: $700B TARP bailout approved by the same Senate that voted for deregulation.',
      '2008-2010: No major bank executives prosecuted. Most receive bonuses.',
      '2009: Senate Finance Committee receives record $780k+/member from financial sector.',
    ],
  },
];

export default function MoneyLoopPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-amber-400 border border-amber-400/30 bg-amber-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            🔄 Self-Reinforcing System
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            The Money Loop<br />
            <span className="text-accent-blue">How Your Vote Becomes Their Profit</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            This is not a conspiracy. It is a documented, self-reinforcing system where corporate profits
            fund political donations, which buy influence over legislation, which awards contracts,
            which generate more profits — and the loop tightens with every cycle.
            Americans lose their voice at every step.
          </p>
        </section>

        {/* The Loop Steps */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— The 7-Step Money Loop</h2>
          <div className="relative">
            {/* Connecting lines */}
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-yellow-400/40 via-accent-blue/40 to-yellow-400/40" style={{ display: 'none' }} />

            <div className="space-y-4">
              {LOOP_STEPS.map((step, i) => (
                <div key={step.n + step.title} className={`relative flex gap-4 border ${step.border} ${step.bg} rounded-xl p-5`}>
                  {/* Connector arrow */}
                  {i < LOOP_STEPS.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 font-mono text-accent-blue text-xs">↓</div>
                  )}
                  <div className={`flex-shrink-0 font-mono text-3xl font-black ${step.color} opacity-20`}>{step.n}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{step.icon}</span>
                      <h3 className={`font-mono text-sm font-bold ${step.color}`}>{step.title}</h3>
                    </div>
                    <p className="font-mono text-[11px] text-slate-300 leading-relaxed mb-3">{step.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.numbers.map((num) => (
                        <span key={num} className="font-mono text-[9px] text-slate-500 bg-surface-3 px-2 py-1 rounded">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— The Loop in Action: Case Studies</h2>
          <div className="space-y-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className={`border-l-4 ${cs.color} bg-surface-1 border border-border rounded-r-xl p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-base font-bold text-white">{cs.title}</h3>
                  <span className="font-mono text-[9px] text-slate-500 border border-border px-2 py-0.5 rounded">{cs.timeline}</span>
                </div>
                <div className="space-y-3">
                  {cs.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-mono text-[10px] text-accent-blue font-bold flex-shrink-0 w-4">{i + 1}.</span>
                      <p className="font-mono text-[11px] text-slate-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why It's Self-Reinforcing */}
        <section className="border border-rose-500/30 bg-rose-500/5 rounded-xl p-8">
          <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest mb-3">— Why It Cannot Self-Correct</div>
          <h2 className="font-mono text-xl font-bold text-white mb-5">The System is Not Broken. It is Working as Designed — For Them.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Incumbency Advantage', body: 'Senators with industry backing can raise 10x more than challengers. The loop ensures that senators who protect industry keep getting reelected — and those who challenge it get primary-campaigned out by dark money.' },
              { title: 'Media Narrative Control', body: 'The same corporations that fund senators own or advertise on the networks covering those senators. Anti-corporate narratives lose advertising dollars. This is not censorship — it is market incentive alignment.' },
              { title: 'Judicial Capture', body: 'Citizens United (2010) and related rulings were decided by judges appointed by senators funded by the same corporate machine. The judiciary that would enforce reform is itself captured.' },
              { title: 'Regulatory Agency Capture', body: 'Agency heads are approved by Senate committees funded by regulated industries. The FEC (campaign finance regulator) has been deadlocked 3-3 by party for 15 years — eliminating enforcement.' },
            ].map((pt) => (
              <div key={pt.title}>
                <h3 className="font-mono text-xs font-bold text-white mb-2">{pt.title}</h3>
                <p className="font-mono text-[11px] text-slate-400 leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/revolving-door', label: '🚪 Revolving Door', desc: 'Named officials moving between sectors' },
            { href: '/lobby', label: '🎯 Lobby Encyclopedia', desc: 'Every major lobby with amounts' },
            { href: '/prevention', label: '🛠 How To Fix It', desc: 'Breaking the loop — real reforms' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-border bg-surface-1 hover:bg-surface-3 hover:border-accent-blue/30 rounded-lg p-4 transition-all">
              <div className="font-mono text-sm font-bold text-white mb-1">{l.label}</div>
              <div className="font-mono text-[10px] text-slate-500">{l.desc}</div>
            </Link>
          ))}
        </section>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          Senate Intelligence Platform · Data: OpenSecrets · Quincy Institute · Watson Institute Brown University
        </footer>
      </div>
    </div>
  );
}
