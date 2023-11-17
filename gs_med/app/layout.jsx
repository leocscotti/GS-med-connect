import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from 'app/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Solution- Med Connect',
  description: '1TDSPM - Global Solution 2 semestre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="dark:bg-slate-400">
        <Cabecalho/>
        {children}
      </body>
    </html>
  )
}
