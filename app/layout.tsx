import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thiago Schneider | Desenvolvedor Oracle APEX',
  description: 'Desenvolvedor Oracle APEX especializado em soluções empresariais e desenvolvimento de aplicações web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
