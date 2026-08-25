import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-thomas-gonthier-idcod.vercel.app'),

  title: {
    default: 'Thomas Gonthier | Développeur logiciel',
    template: '%s | Thomas Gonthier',
  },

  description: 'Portfolio de Thomas Gonthier, développeur logiciel orienté produit. Découvrez mon parcours, mes compétences et mes réalisations web, mobile et cloud.',

  keywords: ['Thomas Gonthier', 'développeur logiciel', 'développeur web', 'développeur frontend', 'Next.js', 'TypeScript', 'AWS', 'Kotlin', 'portfolio développeur'],

  authors: [
    {
      name: 'Thomas Gonthier',
    },
  ],

  creator: 'Thomas Gonthier',

  openGraph: {
    title: 'Thomas Gonthier | Développeur logiciel',
    description: 'Portfolio de Thomas Gonthier : parcours, compétences et réalisations en développement web, mobile et cloud.',
    url: 'https://portfolio-thomas-gonthier-idcod.vercel.app',
    siteName: 'Portfolio Thomas Gonthier',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio de Thomas Gonthier',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Gonthier | Développeur logiciel',
    description: 'Portfolio de Thomas Gonthier : parcours, compétences et réalisations.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${inter.className} flex flex-col items-center mx-auto bg-[url('../../public/bg_light.svg')] dark:bg-[url('../../public/bg_dark.svg')] bg-cover bg-no-repeat text-usual-950 dark:text-usual-100 min-h-screen w-full relative`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {/* <NextIntlClientProvider messages={messages}> */}
          {children}
          <Toaster />
          {/* </NextIntlClientProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
