import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'EKAGRA — Understand your attention', description: 'A calm, local-first way to understand how your attention behaves.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
