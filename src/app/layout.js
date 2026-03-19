import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Senate Intelligence 3D',
  description: 'Interactive Nexus of US Senate, Big Three Financials, and the Israel Lobby',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0f172a] text-slate-100 overflow-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
