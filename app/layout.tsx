import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Senate Intelligence Network | Geopolitical Analysis Platform',
  description:
    'Visualizing relationships between US Senate members, wars (2001–2026), defense companies, oil companies, and lobbying organizations.',
  keywords: ['senate', 'lobbying', 'defense', 'geopolitical', 'intelligence', 'network'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
