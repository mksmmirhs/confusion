'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useIntelStore } from '@/lib/store';

const MIN_YEAR = 2001;
const MAX_YEAR = 2026;

export default function TimeSlider() {
  const { setFilter, setAnimating, isAnimating } = useIntelStore();
  const [currentYear, setCurrentYear] = useState(MAX_YEAR);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const applyYear = useCallback(
    (year: number) => {
      setCurrentYear(year);
      setFilter({ yearRange: [MIN_YEAR, year] });
    },
    [setFilter]
  );

  const startAnimation = useCallback(() => {
    setAnimating(true);
    setCurrentYear(MIN_YEAR);
    applyYear(MIN_YEAR);

    let y = MIN_YEAR;
    intervalRef.current = setInterval(() => {
      y += 1;
      applyYear(y);
      if (y >= MAX_YEAR) {
        clearInterval(intervalRef.current!);
        setAnimating(false);
      }
    }, 600);
  }, [applyYear, setAnimating]);

  const stopAnimation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setAnimating(false);
  }, [setAnimating]);

  const resetAnimation = useCallback(() => {
    stopAnimation();
    applyYear(MAX_YEAR);
  }, [stopAnimation, applyYear]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const progress = ((currentYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;

  return (
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in"
      style={{ width: '520px' }}
    >
      <div
        className="border border-border rounded-xl p-4"
        style={{ background: 'rgba(13,20,36,0.93)', backdropFilter: 'blur(12px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              Timeline Filter
            </span>
            <div className="font-mono text-2xl font-bold text-accent-blue tabular-nums">
              {currentYear}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetAnimation}
              className="p-2 rounded border border-border hover:border-accent-blue/40 hover:text-accent-blue text-slate-500 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={isAnimating ? stopAnimation : startAnimation}
              className="flex items-center gap-1.5 px-3 py-2 rounded border border-accent-blue/40 text-accent-blue font-mono text-xs font-bold hover:bg-accent-blue/10 transition-all"
            >
              {isAnimating ? (
                <><Pause className="w-3.5 h-3.5" /> PAUSE</>
              ) : (
                <><Play className="w-3.5 h-3.5" /> ANIMATE</>
              )}
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="relative mb-2">
          <div className="h-1.5 bg-surface-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-emerald rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <input
            type="range"
            min={MIN_YEAR}
            max={MAX_YEAR}
            step={1}
            value={currentYear}
            onChange={(e) => applyYear(parseInt(e.target.value, 10))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Tick labels */}
        <div className="flex justify-between font-mono text-[9px] text-slate-600">
          {[2001, 2003, 2008, 2014, 2020, 2023, 2026].map((y) => (
            <span key={y} className={currentYear >= y ? 'text-slate-400' : ''}>
              {y}
            </span>
          ))}
        </div>

        {/* Key events strip */}
        <div className="mt-2 pt-2 border-t border-border/50 flex gap-3 overflow-x-auto scrollbar-hide">
          {[
            { year: 2001, label: '9/11 AUMF', color: 'text-red-500' },
            { year: 2003, label: 'Iraq Invasion', color: 'text-red-400' },
            { year: 2011, label: 'Libya/Iraq End', color: 'text-amber-500' },
            { year: 2022, label: 'Ukraine Aid', color: 'text-blue-400' },
            { year: 2023, label: 'Gaza Crisis', color: 'text-rose-500' },
          ].map((ev) => (
            <button
              key={ev.year}
              onClick={() => applyYear(ev.year)}
              className={`flex-shrink-0 font-mono text-[9px] ${ev.color} hover:opacity-100 opacity-60 transition-opacity`}
            >
              {ev.year} · {ev.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
