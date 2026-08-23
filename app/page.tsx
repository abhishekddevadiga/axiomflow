import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Problem from '@/components/Problem';
import ThinkingTrack from '@/components/ThinkingTrack';
import Wall from '@/components/Wall';
import Capabilities from '@/components/Capabilities';
import ContentSystem from '@/components/ContentSystem';
import Advantage from '@/components/Advantage';
import Work from '@/components/Work';
import Reel from '@/components/Reel';
import Archive from '@/components/Archive';
import Testimonials from '@/components/Testimonials';
import Industries from '@/components/Industries';
import Approach from '@/components/Approach';
import WhyUs from '@/components/WhyUs';
import Insights from '@/components/Insights';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import PageChrome from '@/components/interactions/PageChrome';
import NavMenu from '@/components/interactions/NavMenu';
import SectionBehaviours from '@/components/interactions/SectionBehaviours';
import Carousel from '@/components/interactions/Carousel';
import ReelEngine from '@/components/interactions/ReelEngine';
import ContactForm from '@/components/interactions/ContactForm';

/**
 * Every section below is a Server Component: the markup ships as HTML with no
 * client bundle. The `interactions/*` components are the only Client
 * Components; they attach the behaviour to that markup after hydration.
 */
export default function Page() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <ThinkingTrack />
        <Wall />
        <Capabilities />
        <ContentSystem />
        <Advantage />
        <Work />
        <Reel />
        <Archive />
        <Testimonials />
        <Industries />
        <Approach />
        <WhyUs />
        <Insights />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <PageChrome />
      <NavMenu />
      <SectionBehaviours />
      <Carousel />
      <ReelEngine />
      <ContactForm />
    </>
  );
}
