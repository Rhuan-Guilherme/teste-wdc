export const metadata = {
  title: 'Pompolimpíadas 2024 | Ginástica Íntima Feminina',
  description:
    'Participe da superaula gratuita e aprenda Ginástica Íntima para saúde, autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024.',
  keywords:
    'Ginástica Íntima, Pompolimpíadas, saúde feminina, exercícios íntimos',
};

import ContactSection from '@/components/sections/ContactSection';
import FinalSection from '@/components/sections/FinalSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import MidCenterSection from '@/components/sections/MidCenterSection';
import MidSection from '@/components/sections/MidSection';
import './globals.css';

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
