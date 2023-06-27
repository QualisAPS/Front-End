import '../globals.css';
import Header from '@/components/Header';

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#f8f8f8', height: '100vh' }}>
      <Header />
      {children}
    </div>
  );
}
