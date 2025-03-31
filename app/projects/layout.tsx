import { PageLayout } from '@/components/layouts/page-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio projects and work',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
