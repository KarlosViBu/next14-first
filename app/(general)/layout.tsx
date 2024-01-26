import { Navbar } from '@/components';
import { LayoutProps } from '../../.next/types/app/layout';

export default function GenLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello General Layout</span>
        { children }
      </main>
    </>
  );
}