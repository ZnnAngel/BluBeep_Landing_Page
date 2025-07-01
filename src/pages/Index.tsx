
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import DownloadSection from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Contact />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
