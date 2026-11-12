import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { siteContent } from '@/content/site';
import { Footer } from '@/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: `${siteContent.name} · ${siteContent.tagline}`,
  description: siteContent.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-bg">
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col bg-surface">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
