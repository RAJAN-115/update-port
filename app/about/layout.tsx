import { PageLayout } from '@/components/layouts/page-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About me and my background',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
