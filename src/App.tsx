import React, { useState } from 'react';
import { Currency } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BooksScrollBanner } from './components/BooksScrollBanner';
import { QuickSummarySection } from './components/QuickSummarySection';
import { WhyLifeKidsWorks } from './components/WhyLifeKidsWorks';
import { WhyStartEarly } from './components/WhyStartEarly';
import { TransformationChecklist } from './components/TransformationChecklist';
import { WhoIsBehind } from './components/WhoIsBehind';
import { DetailedResourcesShowcase } from './components/DetailedResourcesShowcase';
import { BonoPremium } from './components/BonoPremium';
import { DigitalCompanion } from './components/DigitalCompanion';
import { PricingCheckout } from './components/PricingCheckout';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-['Montserrat',sans-serif] selection:bg-amber-500 selection:text-white flex flex-col">
      {/* Sticky Header Navbar */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section 2: Key Summary Highlights ("Life Kids en un Vistazo") */}
        <QuickSummarySection
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section 3: Why Start Early (Crucial Childhood Worldview & Curiosity) */}
        <WhyStartEarly />

        {/* Section 4: Why Life Kids Works (Educational Methodology & 4 Pillars) */}
        <WhyLifeKidsWorks />

        {/* Section 5: What Will Change in Your Children (Transformation Checklist) */}
        <TransformationChecklist />

        {/* Section 6: Full-width Horizontal Scroll Gallery for Books & Materials */}
        <BooksScrollBanner
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section 7: Detailed Program Resources Showcase (Individual Product Blocks) */}
        <DetailedResourcesShowcase />

        {/* Section 8: Who is Behind Life Kids (Purpose, Team & Biblical Alignment) */}
        <WhoIsBehind />

        {/* Section 9: Bono Premium (High-Value Gift Box) */}
        <BonoPremium
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section 9B: Acompañante Digital ("¿Y AHORA QUÉ LE DIGO?") */}
        <DigitalCompanion />

        {/* Section 10: Pricing & Offer Stack Checkout */}
        <PricingCheckout
          onOpenCheckout={handleOpenCheckout}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Section 11: Frequently Asked Questions (Accordion) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        currency={currency}
      />
    </div>
  );
}
