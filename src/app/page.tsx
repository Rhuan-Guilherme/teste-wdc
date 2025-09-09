import ContactSection from '@/components/sections/ContactSection';
import FinalSection from '@/components/sections/FinalSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import MidCenterSection from '@/components/sections/MidCenterSection';
import MidSection from '@/components/sections/MidSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MidSection />
      <ContactSection />
      <MidCenterSection />
      <FinalSection />
      <FooterSection />
    </>
  );
}
