'use client';

import { useEffect, useState } from 'react';
import { getCurrentDebt, getDebtHistory } from '@/lib/treasury';

export default function NationalDebt() {
  const [currentDebt, setCurrentDebt] = useState<number | null>(null);
  const [ticker, setTicker] = useState<number>(0);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const current = await getCurrentDebt();
      const hist = await getDebtHistory();
      if (current) {
        const val = parseFloat(current.tot_pub_debt_out_amt);
        setCurrentDebt(val);
        setTicker(val);
      }
      setHistory(hist);
    };
    fetchData();

    // Subtle ticker effect to simulate real-time increase (roughly $10k/sec)
    const interval = setInterval(() => {
      setTicker((prev: number) => prev + Math.random() * 50000);
    }, 2000);

    return () => clearInterval(interval);
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
      <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">Total Public Debt Outstanding</h2>
      <div className="text-4xl md:text-6xl font-black text-white mb-6 tabular-nums">
        {currentDebt ? formatCurrency(ticker) : 'Loading...'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
          <p className="text-xs text-gray-400 uppercase mb-1">Debt in 2000</p>
          <p className="text-xl font-bold text-gray-200">$5,674,178,209,886</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
          <p className="text-xs text-gray-400 uppercase mb-1">Increase since 2000</p>
          <p className="text-xl font-bold text-red-500">
            {currentDebt ? `+${Math.round(((currentDebt - 5674178209886) / 5674178209886) * 100)}%` : '...'}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-bold uppercase text-gray-400 mb-4">Historical Milestones</h3>
        <div className="space-y-3">
          {history.length > 0 ? (
            history.filter((_: any, i: number) => i % 4 === 0).map((h: any, i: number) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">{new Date(h.record_date).getFullYear()}</span>
                <span className="text-gray-200 font-mono">{formatCurrency(parseFloat(h.debt_outstanding_amt))}</span>
              </div>
            ))
          ) : (
            <div className="animate-pulse h-4 bg-white/10 rounded w-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}
