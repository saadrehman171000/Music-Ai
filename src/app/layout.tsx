import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nagham AI - AI-Powered Music Production',
  description: 'Experience the future of music creation through AI technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

