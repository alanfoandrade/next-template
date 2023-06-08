import { Roboto_Flex as Roboto } from 'next/font/google';
import { ReactNode } from 'react';

import { ReactQueryProvider } from './providers';

import '../styles/globals.css';

import '@/lib/dayjs';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  description: 'Vitrine CJ-Concierge',
  title: {
    default: 'Descomplique suas compras | CJ-Concierge',
    template: '%s | CJ-Concierge',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} bg-gray-200 font-default leading-relaxed text-gray-900`}
      >
        <main className="h-screen w-full">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
