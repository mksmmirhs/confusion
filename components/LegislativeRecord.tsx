'use client';

import { LEGISLATIVE_RECORDS } from '@/lib/legislation';

export default function LegislativeRecord() {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-6 underline underline-offset-8 decoration-emerald-500/30">Legislative Voting Records</h2>
      
      <div className="space-y-10">
        {LEGISLATIVE_RECORDS.map((rec, i) => (
          <div key={i} className="group border-l border-emerald-500/20 pl-6 relative">
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{rec.bill}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">{rec.year}</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 italic leading-relaxed">{rec.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Senate Component */}
              <div className="p-4 rounded-xl bg-gray-900/50 border border-white/5">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">United States Senate</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-emerald-400 font-bold">Yea: {rec.senate_yea}</span>
                      <span className="text-red-400 font-bold">Nay: {rec.senate_nay}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${(rec.senate_yea / (rec.senate_yea + rec.senate_nay)) * 100}%` }}></div>
                      <div className="h-full bg-red-500" style={{ width: `${(rec.senate_nay / (rec.senate_yea + rec.senate_nay)) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* House Component */}
              <div className="p-4 rounded-xl bg-gray-900/50 border border-white/5">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">House of Representatives</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-emerald-400 font-bold">Yea: {rec.house_yea}</span>
                      <span className="text-red-400 font-bold">Nay: {rec.house_nay}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${(rec.house_yea / (rec.house_yea + rec.house_nay)) * 100}%` }}></div>
                      <div className="h-full bg-red-500" style={{ width: `${(rec.house_nay / (rec.house_yea + rec.house_nay)) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {rec.total_funding && (
              <div className="mt-4 text-[10px] text-gray-500 font-mono tracking-tighter uppercase">
                Funding Authorized: <span className="text-white font-bold">{rec.total_funding}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
