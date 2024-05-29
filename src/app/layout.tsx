import type { Metadata } from 'next';
import './globals.css';
import { typeSecond } from '@/functions/fonts';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={typeSecond.variable}>{children}</body>
    </html>
  );
}
