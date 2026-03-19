import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'War Accountability Report | Senate Intelligence',
  description: 'Data-driven analysis of Senate war authorization patterns, defense contractor profits, oil money connections, and the case for consecutive-term limits on war doctrine.',
};

// ── Data ─────────────────────────────────────────────────────
const WARS = [
  {
    name: 'Afghanistan (2001–2021)',
    aumf: 'S.J.Res. 23 — Sep 18, 2001',
    vote: '98 YEA — 0 NAY — 2 NOT VOTING',
    duration: '20 years',
    cost: '$2.3 Trillion',
    usCasualties: '2,448 military + 3,846 contractors',
    civilianDeaths: '71,000+',
    primaryBeneficiary: 'Lockheed Martin, Boeing, Halliburton (KBR)',
    oilAngle: 'Pipeline strategy: UNOCAL route through Taliban-controlled territory. Central Asia energy corridor.',
    outcome: 'Taliban returned to full power by Aug 2021. Zero strategic objectives achieved.',
    color: 'border-l-amber-500',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-400/30',
  },
  {
    name: 'Iraq War (2003–2011)',
    aumf: 'H.J.Res. 114 — Oct 11, 2002',
    vote: '77 YEA — 23 NAY',
    duration: '8 years + residual forces ongoing',
    cost: '$2.2 Trillion direct + $3-4T long-term',
    usCasualties: '4,431 military + 3,650 contractors',
    civilianDeaths: '185,000–208,000',
    primaryBeneficiary: 'Halliburton ($39.5B), KBR, Blackwater, Lockheed, RTX',
    oilAngle: 'Iraq holds 5th largest oil reserves. Post-invasion oil production contracts went to ExxonMobil, Shell, BP. Petrodollar protection: USD remained the sole oil trading currency.',
    outcome: 'Based on false WMD intelligence. Created ISIS vacuum. Iran regional dominance increased.',
    color: 'border-l-red-500',
    badge: 'bg-red-500/10 text-red-400 border-red-400/30',
  },
  {
    name: 'Libya (2011–Ongoing)',
    aumf: 'No formal AUMF — Executive action under Obama',
    vote: 'No Senate vote',
    duration: '13+ years (civil war ongoing)',
    cost: '$1.1B direct + regional destabilization cost unknown',
    usCasualties: '0 direct (contractors classified)',
    civilianDeaths: '25,000+',
    primaryBeneficiary: 'NATO contractors, French oil interests, defense export market',
    oilAngle: 'Libya holds Africa\'s largest oil reserves. Pre-Gaddafi oil was being moved off the petrodollar system.',
    outcome: 'Failed state. Slave markets emerged. Three competing governments. ISIS presence.',
    color: 'border-l-orange-500',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-400/30',
  },
  {
    name: 'Syria (2014–Present)',
    aumf: 'Used 2001 AUMF as legal cover — Congress never voted',
    vote: 'No dedicated vote',
    duration: '12+ years',
    cost: '$18.6B+ US military expenditure',
    usCasualties: '6 military deaths + unknown contractors',
    civilianDeaths: '300,000+',
    primaryBeneficiary: 'RTX (Tomahawk cruise missiles $2M each), Lockheed',
    oilAngle: 'Syria sits on a key pipeline corridor between Qatar and Europe, bypassing Russia. Strategic energy route, not humanitarian.',
    outcome: 'Assad remained. Kurds abandoned. ISIS partially defeated. Ongoing proxy war.',
    color: 'border-l-rose-500',
    badge: 'bg-rose-500/10 text-rose-400 border-rose-400/30',
  },
  {
    name: 'Ukraine Aid (2022–Present)',
    aumf: 'Multiple supplementals — largest: $61B (April 2024)',
    vote: 'Senate: 79-18',
    duration: 'Ongoing',
    cost: '$175B+ total US commitment (2022-2025)',
    usCasualties: '0 declared (special operations presence classified)',
    civilianDeaths: '45,000+ Ukrainian military + 10,000+ civilian',
    primaryBeneficiary: 'Lockheed Martin (HIMARS), RTX (Patriot/ATACMS), General Dynamics (M1 Abrams)',
    oilAngle: 'NATO expansion eastward since 1990. Ukraine held 7th largest gas reserves in Europe. Nord Stream pipeline neutralized — European LNG now bought from US at 4× price.',
    outcome: 'Ongoing. Largest European conflict since WWII. Defense stocks +40-60%.',
    color: 'border-l-blue-500',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-400/30',
  },
  {
    name: 'Gaza / Israel Aid (2023–Present)',
    aumf: 'Emergency supplemental — $26.4B (April 2024)',
    vote: 'Senate: 79-18',
    duration: 'Ongoing',
    cost: '$18B in first year + $3.8B annual baseline',
    usCasualties: '0 official',
    civilianDeaths: '45,000+ Palestinian civilian deaths (Gaza Health Ministry)',
    primaryBeneficiary: 'Boeing (JDAM kits, F-15), RTX (Iron Dome, AIM-120), Lockheed (F-35)',
    oilAngle: 'Gaza Marine gas field discovered 2000 — estimated $450B value. Israeli maritime boundary expansion post-conflict. Qatar and Saudi energy corridor strategic alignment.',
    outcome: 'Ongoing. ICC arrest warrants for PM Netanyahu. ICJ genocide proceedings by South Africa.',
    color: 'border-l-purple-500',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-400/30',
  },
];

const MONEY_FLOWS = [
  {
    title: 'Defense Contractor War Profits',
    items: [
      'Top 5 contractors received $2.3 trillion from Pentagon post-9/11',
      'For every $1 lobbied, firms earned $1,813 in contracts',
      'Lockheed Martin: $75B in contracts in 2020 alone',
      'Halliburton: $39.5B in Iraq/Afghanistan contracts (CEO was Dick Cheney)',
      'RTX stock price: +41% since Ukraine war started (Feb 2022)',
    ],
    icon: '🏭',
    color: 'border-slate-400/30 bg-slate-400/5',
  },
  {
    title: 'Oil & Petrodollar Mechanics',
    items: [
      '1974 Nixon–Saudi deal: oil priced in USD exclusively, sustaining dollar hegemony',
      'Every Middle East war protects this USD oil pricing system',
      'Iraq and Libya both attempted to sell oil in non-USD currencies — both invaded',
      'US LNG exports to Europe surged 400% after Nord Stream sabotage (2022)',
      'ExxonMobil Q3 2022 profit: $19.7B — highest EVER — during Ukraine energy crisis',
    ],
    icon: '🛢️',
    color: 'border-emerald-400/30 bg-emerald-400/5',
  },
  {
    title: 'Lobby → Senator → Vote Chain',
    items: [
      'AIPAC spent $100M+ per election cycle since 2020',
      'Defense industry spent $1.1B lobbying Congress (2001–2021)',
      '950 active defense lobbyists as of 2024; 2,700+ revolving door hires since 2001',
      'Senators on Armed Services average $450k/cycle from defense PACs',
      'Chuck Schumer: $4.5M+ career AIPAC contributions. Voted YEA on Iraq AND Ukraine AND Gaza',
    ],
    icon: '💰',
    color: 'border-amber-400/30 bg-amber-400/5',
  },
  {
    title: 'Big Three Financial Ownership Loop',
    items: [
      'BlackRock, Vanguard, State Street own 10–20% of EVERY major defense contractor',
      'They also own 8–15% of ExxonMobil, Chevron, ConocoPhillips',
      'Their managed funds grow when wars increase contractor revenues',
      'They fund Senate campaigns through financial sector PACs',
      'Dave McCormick (R-PA): former Bridgewater CEO → Senate Armed Services',
      'Mark Warner (D-VA): venture capitalist → Senate Intelligence & Finance Chair',
    ],
    icon: '🏦',
    color: 'border-yellow-400/30 bg-yellow-400/5',
  },
];

const HOLDOVER_HAWKS = [
  { name: 'Mitch McConnell', party: 'R', state: 'KY', aumf2001: true, aumf2002: true, yearsServed: 40, latestvote: 'YEA — Ukraine $61B, Israel $26B (2024)' },
  { name: 'Chuck Schumer', party: 'D', state: 'NY', aumf2001: true, aumf2002: true, yearsServed: 28, latestvote: 'YEA — Ukraine $61B, Israel $26B (2024)' },
  { name: 'Susan Collins', party: 'R', state: 'ME', aumf2001: true, aumf2002: true, yearsServed: 28, latestvote: 'YEA — Ukraine $61B (2024)' },
  { name: 'Chuck Grassley', party: 'R', state: 'IA', aumf2001: true, aumf2002: true, yearsServed: 44, latestvote: 'YEA — Ukraine & Israel aid' },
  { name: 'Maria Cantwell', party: 'D', state: 'WA', aumf2001: false, aumf2002: true, yearsServed: 24, latestvote: 'YEA — Ukraine $61B (2024)' },
  { name: 'Dick Durbin', party: 'D', state: 'IL', aumf2001: true, aumf2002: false, yearsServed: 28, latestvote: 'YEA — Ukraine $61B, Israel $26B (2024)' },
  { name: 'Jack Reed', party: 'D', state: 'RI', aumf2001: true, aumf2002: false, yearsServed: 28, latestvote: 'Armed Services Chair — drives all defense budgets' },
  { name: 'Patty Murray', party: 'D', state: 'WA', aumf2001: true, aumf2002: false, yearsServed: 32, latestvote: 'Appropriations Chair — controls all Pentagon spending' },
];

// ── Components ────────────────────────────────────────────────

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-surface-1 border border-border rounded-lg p-4 text-center">
      <div className="font-mono text-2xl font-bold text-accent-blue mb-1">{value}</div>
      <div className="font-mono text-xs text-white font-semibold">{label}</div>
      {sub && <div className="font-mono text-[9px] text-slate-500 mt-1">{sub}</div>}
    </div>
  );
}

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-surface text-white font-sans">
      {/* Nav */}
      <div className="sticky top-0 z-50 border-b border-border bg-surface-1/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs text-accent-blue hover:underline flex items-center gap-1.5">
            ← Network Graph
          </Link>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            Senate Intelligence Platform · War Accountability Report
          </span>
          <span className="font-mono text-[9px] text-slate-600">Based on public data</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="text-center">
          <div className="inline-block font-mono text-[9px] text-rose-400 border border-rose-400/30 bg-rose-400/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            ⚠ Declassified Financial Analysis
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4 leading-tight">
            The Senate War Machine<br />
            <span className="text-accent-blue">Who Profits From Forever Wars?</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A data-driven analysis of how Senate members with decade-long tenures repeatedly authorize wars
            that benefit their primary financial donors — and why consecutive-term limits on war doctrine
            decisions would break this cycle.
          </p>
          <div className="mt-4 font-mono text-[9px] text-slate-600">
            Data sources: Senate.gov · OpenSecrets.org · Quincy Institute · Watson Institute (Brown University) · Yahoo Finance
          </div>
        </section>

        {/* Key Stats */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">— Top-Line Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard value="$7.8T" label="Total War Cost 2001–2026" sub="Watson Institute estimate" />
            <StatCard value="$2.3T" label="Pentagon Contracts Top 5 Firms" sub="Post-9/11 through 2024" />
            <StatCard value="$1,813" label="Return per $1 Lobbied" sub="Quincy Institute analysis" />
            <StatCard value="40 yrs" label="Avg Tenure of Holdover Hawks" sub="Senators who voted all war AUMFs" />
          </div>
        </section>

        {/* War by War */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— War-by-War Breakdown</h2>
          <div className="space-y-4">
            {WARS.map((war) => (
              <div key={war.name} className={`border-l-4 ${war.color} bg-surface-1 border border-border rounded-r-lg p-5`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white">{war.name}</h3>
                    <div className="font-mono text-[9px] text-slate-500 mt-0.5">{war.aumf}</div>
                  </div>
                  <span className={`font-mono text-[9px] px-2 py-0.5 rounded border ${war.badge}`}>
                    {war.vote}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  {[
                    { label: 'Duration', val: war.duration },
                    { label: 'Total Cost', val: war.cost },
                    { label: 'US Casualties', val: war.usCasualties },
                    { label: 'Civilian Deaths', val: war.civilianDeaths },
                  ].map((s) => (
                    <div key={s.label} className="bg-surface-3 rounded p-2">
                      <div className="font-mono text-[8px] text-slate-500 uppercase mb-1">{s.label}</div>
                      <div className="font-mono text-xs text-white font-semibold">{s.val}</div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-surface-3 rounded p-2.5">
                    <div className="font-mono text-[8px] text-amber-400 uppercase mb-1">💰 Who Profited</div>
                    <div className="font-mono text-[10px] text-slate-300">{war.primaryBeneficiary}</div>
                  </div>
                  <div className="bg-surface-3 rounded p-2.5">
                    <div className="font-mono text-[8px] text-emerald-400 uppercase mb-1">🛢 Oil Connection</div>
                    <div className="font-mono text-[10px] text-slate-300">{war.oilAngle}</div>
                  </div>
                  <div className="bg-surface-3 rounded p-2.5">
                    <div className="font-mono text-[8px] text-rose-400 uppercase mb-1">📊 Outcome</div>
                    <div className="font-mono text-[10px] text-slate-300">{war.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Money Flows */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">— The Financial Nexus</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {MONEY_FLOWS.map((mf) => (
              <div key={mf.title} className={`border rounded-lg p-5 ${mf.color}`}>
                <h3 className="font-mono text-sm font-bold text-white mb-3">
                  <span className="mr-2">{mf.icon}</span>{mf.title}
                </h3>
                <ul className="space-y-2">
                  {mf.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 flex-shrink-0">›</span>
                      <span className="font-mono text-[11px] text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Holdover Hawks */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">— The Holdover Hawks</h2>
          <p className="font-mono text-xs text-slate-500 mb-5">Current senators who voted YEA in 2001/2002 and are still authorizing wars today</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-3">
                  {['Senator', 'Party', 'State', 'Years Served', 'AUMF 2001', 'AUMF 2002', 'Most Recent War Vote'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HOLDOVER_HAWKS.map((h, i) => (
                  <tr key={h.name} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-surface-1' : 'bg-surface'} hover:bg-surface-3 transition-colors`}>
                    <td className="px-4 py-3 font-bold text-white">{h.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${h.party === 'D' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}`}>
                        {h.party}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{h.state}</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">{h.yearsServed} yrs</td>
                    <td className="px-4 py-3">{h.aumf2001 ? <span className="text-red-400">✓ YEA</span> : <span className="text-slate-600">—</span>}</td>
                    <td className="px-4 py-3">{h.aumf2002 ? <span className="text-red-400">✓ YEA</span> : <span className="text-slate-600">—</span>}</td>
                    <td className="px-4 py-3 text-slate-400 text-[10px]">{h.latestvote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 font-mono text-[9px] text-slate-600 text-right">
            Sources: Senate.gov roll call votes · OpenSecrets.org
          </div>
        </section>

        {/* The Case for Term Limits */}
        <section>
          <div className="border border-rose-500/30 bg-rose-500/5 rounded-xl p-8">
            <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest mb-3">— Core Argument</div>
            <h2 className="font-mono text-xl font-bold text-white mb-2">
              Why Senators Should Not Serve More Than<br />
              <span className="text-rose-400">Two Consecutive Terms in a War Authorization Context</span>
            </h2>
            <p className="font-mono text-xs text-slate-500 mb-6">This is a systemic analysis of structural incentives, not an assertion of individual corruption.</p>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Donor Loyalty Calculates Across Decades',
                  color: 'text-amber-400',
                  content: 'A senator who has served 20–40 years has received millions from defense PACs, oil industry bundlers, and financial-sector donors. By year 6–10, their war vote is not just a policy decision — it is a financial obligation. A senator who has received $4.5M from AIPAC over 30 years (Schumer) cannot be expected to vote with strategic neutrality on military aid. Two consecutive terms (12 years maximum) would force full fundraising cycle refresh and prevent multi-decade donor capture.'
                },
                {
                  number: '02',
                  title: 'The Revolving Door Accelerates With Tenure',
                  color: 'text-blue-400',
                  content: 'Senators who serve 3+ terms become part of the defense-industrial complex through their staff, connections, and post-service employment pipelines. Over 2,700 revolving door lobbyists have been hired by the defense sector since 2001. Long-tenured senators develop permanent relationships with the same contractors they fund. After two terms, a senator naturally moves toward post-service consulting work — incentivizing them to protect the contracts they approved while in office.'
                },
                {
                  number: '03',
                  title: 'War Authorization Has No Accountability Without Consequence',
                  color: 'text-rose-400',
                  content: 'Senators who voted for the 2002 Iraq AUMF based on false WMD intelligence (Schumer, McConnell, Collins, Grassley) have never faced formal accountability — and they voted for every subsequent war and aid package. The same individuals who created the $2.2 trillion Iraq disaster also voted for $61B Ukraine aid and $26B Israel aid. Without term limits, there is no democratic mechanism to remove the architects of policy failure from the very committees that authorize the next war.'
                },
                {
                  number: '04',
                  title: 'Oil Money Distorts Regional Strategy Over Time',
                  color: 'text-emerald-400',
                  content: 'Every senator who receives sustained oil industry contributions (avg $380k–$445k/cycle for TX senators Cruz and Cornyn) has a structural incentive to support military postures that protect the petrodollar system. The 1974 Nixon–Saudi deal made every Middle East war, in part, a currency defense operation. Long-serving senators become embedded in this logic — not through conspiracy, but through institutional socialization. Two-term limits would rotate fresh perspectives into these decisions.'
                },
                {
                  number: '05',
                  title: 'Committee Chairmanships Concentrate War Power in Tenured Senators',
                  color: 'text-purple-400',
                  content: 'Seniority determines who chairs Armed Services, Appropriations, Foreign Relations, and Intelligence — the four committees that control the entire US war machine. Jack Reed (28 years) chairs Armed Services. Patty Murray (32 years) chairs Appropriations. The same senators who authorized the original wars in 2001–2003 now chair the committees that decide how $800B+ in annual Pentagon spending is allocated. By design, the system rewards the longest-serving senators with the most power over defense spending — creating a self-reinforcing cycle.'
                },
              ].map((point) => (
                <div key={point.number} className="flex gap-4">
                  <div className={`font-mono text-2xl font-black ${point.color} opacity-30 flex-shrink-0 w-10`}>
                    {point.number}
                  </div>
                  <div>
                    <h3 className={`font-mono text-sm font-bold mb-2 ${point.color}`}>{point.title}</h3>
                    <p className="font-mono text-xs text-slate-400 leading-relaxed">{point.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proposed Mechanism */}
        <section>
          <h2 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">— Proposed Reform Mechanism</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Two-Consecutive-Term War Recusal',
                desc: 'Senators who have voted YEA on a war authorization (AUMF) must recuse from subsequent AUMF votes for a 12-year period — or step down from Armed Services/Appropriations after two consecutive terms.',
                icon: '⚖️',
              },
              {
                title: 'Lobbying Blackout Before War Votes',
                desc: 'A mandatory 3-cycle (6-year) blackout on defense and energy industry contributions for any senator casting an AUMF vote. Financial conflict of interest should trigger automatic disclosure and independent review.',
                icon: '🚫',
              },
              {
                title: 'Post-War Audit Commission',
                desc: 'Every senator who voted YEA on an AUMF must testify before a bicameral audit commission at the 5-year mark — documenting whether the stated objectives were achieved vs. projected contractor profits.',
                icon: '📋',
              },
            ].map((r) => (
              <div key={r.title} className="bg-surface-1 border border-border rounded-lg p-5">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-mono text-xs font-bold text-white mb-2">{r.title}</h3>
                <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-5">
          <div className="font-mono text-[9px] text-amber-400 uppercase tracking-widest mb-2">Methodology & Disclaimer</div>
          <p className="font-mono text-[10px] text-slate-500 leading-relaxed">
            This report presents <strong className="text-slate-400">correlations</strong> based entirely on publicly available data from Senate.gov, OpenSecrets.org, Watson Institute for International and Public Affairs (Brown University), the Quincy Institute for Responsible Statecraft, and Yahoo Finance institutional ownership data. It does not assert direct causation between financial contributions and voting decisions. All financial figures are approximate and represent reported data at time of publication. The proposed reform mechanisms are analytical proposals for democratic debate, not legal recommendations.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8">
          <Link href="/" className="text-accent-blue/50 hover:text-accent-blue transition-colors">
            ← Return to Network Graph
          </Link>
          <div className="mt-2">Senate Intelligence Platform · Data accurate as of March 2026</div>
        </footer>

      </div>
    </div>
  );
}
