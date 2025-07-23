import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FallingFlowers from '@/components/FallingFlowers';

const Index = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <FallingFlowers />
      <Header />
      <HeroSection />
    </div>
  );
};

export default Index;
