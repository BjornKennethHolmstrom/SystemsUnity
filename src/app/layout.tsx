import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Systems Unity',
  description: 'Explore interconnected systems thinking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
