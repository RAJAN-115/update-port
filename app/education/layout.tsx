import { PageLayout } from '@/components/layouts/page-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Educational background and qualifications',
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
