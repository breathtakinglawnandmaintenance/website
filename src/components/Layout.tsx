import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Service pages already include their own Header/Footer
  const isServicePage = location.pathname.startsWith('/services/');

  useEffect(() => {
    // If a hash exists, scroll to the anchored section
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      return;
    }

    // Otherwise, always reset to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      {!isServicePage && <Header />}
      <main className="flex-1">{children}</main>
      {!isServicePage && <Footer />}
      <FloatingCallButton />
    </div>
  );
}
