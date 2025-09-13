import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'


export const metadata: Metadata = {
  title: 'Zoop Exim Private Limited - Global Import & Export Company',
  description:
    'Zoop Exim Private Limited (Zoop Exim / Zoopexim) is a leading import-export company in India, specializing in agro products, industrial goods, and consumer products with seamless global logistics.',
  keywords: [
    'Zoop Exim Private Limited',
    'Zoop Exim',
    'Zoopexim',
    'Zoop Exim India',
    'Zoop Exim import export',
    'Zoopexim global trade',
    'Zoop Exim Private Limited India',
    'import export company India',
    'international trade company',
    'import export services',
    'agro product exporters India',
    'industrial goods import export',
    'consumer products export',
    'global logistics partner',
    'best import export company in India',
    'international business solutions',
  ],
  openGraph: {
    title: 'Zoop Exim Private Limited (Zoop Exim / Zoopexim) - Import & Export Experts',
    description:
      'Zoop Exim Private Limited (also known as Zoop Exim / Zoopexim) delivers excellence in global trade with premium agro products, industrial goods, and consumer products.',
    url: 'https://yourdomain.com',
    siteName: 'Zoop Exim Private Limited',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zoop Exim Private Limited - Global Import Export Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoop Exim Private Limited (Zoop Exim / Zoopexim) - Import & Export Experts',
    description:
      'Trusted global trade partner for agro products, industrial goods, and consumer products. Zoop Exim Private Limited (Zoop Exim / Zoopexim) connects businesses worldwide.',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}