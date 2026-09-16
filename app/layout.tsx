import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Thiago Schneider | Desenvolvedor Oracle APEX',
  description:
    'Desenvolvedor Oracle APEX especializado em soluções empresariais e desenvolvimento de aplicações web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="bg-bg-primary text-text-primary font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-text-inverse">
        {children}
      </body>
    </html>
  )
}
