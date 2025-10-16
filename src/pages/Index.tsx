import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import FleetSection from '@/components/FleetSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import BookingSection from '@/components/BookingSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <FleetSection />
      <PricingSection />
      <ReviewsSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}