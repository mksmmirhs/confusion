'use client';

import { useEffect, useState } from 'react';
import { getDODSpending, WAR_SUPPLEMENTALS } from '@/lib/usaspending';

export default function WarSpending() {
  const [dodSpending, setDodSpending] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dod = await getDODSpending(2024);
      setDodSpending(dod as number);
    };
    fetchData();
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-2">War & Defense Spending</h2>
      <div className="text-4xl md:text-5xl font-black text-white mb-6 tabular-nums">
        {dodSpending ? formatCurrency(dodSpending) : 'Loading...'}
      </div>
      <p className="text-xs text-gray-400 -mt-4 mb-8">Estimated FY2024 Base Defense Outlays</p>

      <div className="space-y-6">
        <h3 className="text-xs font-bold uppercase text-gray-400">War Supplementals & Aid</h3>
        {WAR_SUPPLEMENTALS.map((s, i) => (
          <div key={i} className="group relative">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-semibold text-gray-200">{s.conflict}</span>
              <span className="text-sm font-mono text-gray-400">{formatCurrency(s.amount)}</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full transition-all duration-1000 ease-out delay-500"
                style={{ width: `${Math.min((s.amount / 800000000000) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">
              Period: {s.period} {s.note ? `| ${s.note}` : ''}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
        <p className="text-xs text-red-200/80 leading-relaxed font-medium">
          Note: Supplemental aid is often provided in addition to the base DOD budget, funded via emergency appropriations.
          Total estimated cost of US post-9/11 wars exceeds $8 Trillion.
        </p>
      </div>
    </div>
  );
}
