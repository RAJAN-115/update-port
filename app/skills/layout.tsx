import { PageLayout } from '@/components/layouts/page-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and expertise',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
