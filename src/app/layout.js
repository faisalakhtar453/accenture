import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Let There Be Change | Accenture',
  description: 'Accenture embraces the power of change to create 360° value & shared success in the US for our clients people shareholders partners and communities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script> */}
      </body>
    </html>
  )
}
