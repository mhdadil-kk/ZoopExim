'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Loader = dynamic(() => import('../components/Loader'), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
