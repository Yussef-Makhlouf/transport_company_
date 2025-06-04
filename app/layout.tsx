// import FloatingButtons from '@/components/FloatingButtons'
import FloatingButtons from '@/components/FloatingButtons'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

export const viewport: Viewport = {
  themeColor: '#8f1332',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title:"شركة ميفوكس لنقل العفش والاثاث بجدة / افضل وارخص شركة نقل عفش والاثاث المنزلي في جدة",
  description:  "شركة ميفوكس الرائدة في خدمات نقل العفش والأثاث بجدة تقدم حلولاً شاملة تشمل نقل المنازل باحترافية، فك وتركيب الأثاث، التغليف الآمن باستخدام أفضل المواد، ونقل طويل المدى داخل جدة وخارجها. نضمن راحة العملاء وسلامة ممتلكاتهم مع فريق عمل محترف وأسعار تنافسية.",
  keywords: "شركة نقل عفش بجدة, نقل اثاث بجدة, افضل شركة نقل عفش في جدة, شركة نقل عفش رخيصة بجدة, نقل عفش داخل جدة, شركات نقل العفش المعتمدة بجدة, خدمة نقل الاثاث المنزلي بجدة, فك وتركيب غرف النوم بجدة, تغليف الاثاث المنزلي بجدة, نقل اثاث مع الضمان بجدة, شركة نقل عفش 24 ساعة بجدة, خدمات نقل العفش الفندقي بجدة, نقل اثاث المكاتب والشركات بجدة, تخزين اثاث بجدة, رفع الاثاث بالونش بجدة, شركة نقل عفش مع عمال محترفين بجدة, خدمة نقل العفش الفاخر بجدة, نقل عفش من جدة الى المدن الاخرى, شركة نقل عفش مرخصة بجدة, تقييم شركات نقل العفش بجدة, اسعار نقل العفش في جدة, شركة نقل اثاث مع التركيب بجدة, خدمات نقل العفش الشاملة بجدة, نقل عفش بجدة مع الكفالة, افضل سيارات نقل العفش بجدة, شركة ميفوكس لنقل العفش بجدة",
  openGraph: {
    title: 'شركة ميفوكس - نقل عفش وأثاث في جدة',
    description: 'خدمات نقل عفش واثاث احترافية في جدة مع الفك والتركيب والتغليف',
    url: 'https://meuvex-furniture.com/',
    siteName: 'Mevox Transport Company',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mevox Transport Services',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة ميفوكس - نقل عفش وأثاث في جدة',
    description: 'خدمات نقل عفش واثاث احترافية في جدة مع الفك والتركيب والتغليف',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },


  authors: [{ name: 'Mevox Transport Company' }],
  category: 'Transport Services',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={tajawal.className + ' overflow-x-hidden' }>{children}

      </body>
     <FloatingButtons />
    </html>
  )
}