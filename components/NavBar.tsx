'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Network, FileText, Eye, Shield, RepeatIcon, Landmark, Wrench, Menu, X, LayoutGrid, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

const NAV_LINKS = [
  { href: '/', label: 'Network', icon: Network, short: 'Map' },
  { href: '/power', label: 'Power Pillars', icon: Eye, short: 'Pillars' },
  { href: '/structure', label: 'System Structure', icon: LayoutGrid, short: 'Structure' },
  { href: '/scams', label: 'Organizational Scams', icon: AlertTriangle, short: 'Scams' },
  { href: '/analysis/system-graph', label: 'System Analysis', icon: Network, short: 'System' },
  { href: '/lobby', label: 'Lobby Encyclopedia', icon: Shield, short: 'Lobby' },
  { href: '/money-loop', label: 'Money Loop', icon: RepeatIcon, short: 'Money' },
  { href: '/revolving-door', label: 'Revolving Door', icon: Landmark, short: 'Door' },
  { href: '/power/pete-hegseth', label: 'Pete Hegseth', icon: Shield, short: 'Hegseth' },
  { href: '/report', label: 'War Report', icon: FileText, short: 'War' },
  { href: '/prevention', label: 'How to Fix It', icon: Wrench, short: 'Fix' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface-1/95 backdrop-blur-sm" style={{ background: 'rgba(10,15,26,0.97)' }}>
      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="flex items-center justify-between h-12">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase font-bold">⬡ USA Intel</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-[10px] transition-all duration-150 uppercase tracking-wider',
                    active
                      ? 'bg-accent-blue/15 text-accent-blue font-bold border border-accent-blue/30'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-surface-3'
                  )}
                >
                  <Icon className="w-3 h-3" />
                  {link.short}
                </Link>
              );
            })}
          </div>

          {/* Right side: classification badge */}
          <div className="hidden md:block font-mono text-[8px] text-slate-700 uppercase tracking-widest">
            Public Data · Educational
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border pb-2 pt-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    'flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-wider',
                    active ? 'text-accent-blue' : 'text-slate-500'
                  )}
                >
                  <Icon className="w-3 h-3" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
