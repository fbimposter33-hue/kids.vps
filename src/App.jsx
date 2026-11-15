import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL } from './data/packagesData';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const floatingWhatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'হ্যালো KidsVPS Cloud! আমি একটি প্যাকেজ নিতে চাই।'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#0f172a] selection:bg-indigo-500 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Blur Navigation */}
      <Header onOpenLogin={() => setIsLoginModalOpen(true)} />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <Hero onOpenLogin={() => setIsLoginModalOpen(true)} />

        {/* 4. Packages / Pricing Section */}
        <PackagesSection />

        {/* 5. Features Section ("কেন KidsVPS?") */}
        <FeaturesSection />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Call To Action Section */}
        <CtaSection onOpenLogin={() => setIsLoginModalOpen(true)} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenLogin={() => setIsLoginModalOpen(true)} />

      {/* Interactive Login Modal for Client Portal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Support">
        <a
          href={floatingWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1eb958] text-white p-3.5 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
            WhatsApp চ্যাট
          </span>
        </a>
      </aside>
    </div>
  );
}
