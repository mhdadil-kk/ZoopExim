import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

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
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'icon', url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/favicon_io/site.webmanifest',
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}