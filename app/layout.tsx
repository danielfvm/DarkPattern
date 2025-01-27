import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '../contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DarkPatterns\'R\'Us',
  description: 'A demonstration of dark patterns in web design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

