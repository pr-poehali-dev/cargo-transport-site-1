import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import FleetSection from '@/components/FleetSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <StatsSection />
      <ServicesSection />
      <FleetSection />
      <PricingSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}