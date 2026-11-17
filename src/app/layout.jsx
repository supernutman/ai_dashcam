import { Inter, Noto_Sans_Thai, Barlow_Condensed } from 'next/font/google'
import '@/styles/global.css'
import '@/styles/auth.css'
import '@/styles/welcome.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-thai',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata = {
  title: 'AI Dashcam Patrol',
  description: 'ตรวจจับความเสี่ยง ก่อนเกิดปัญหา - การไฟฟ้าส่วนภูมิภาค',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${inter.variable} ${notoSansThai.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
