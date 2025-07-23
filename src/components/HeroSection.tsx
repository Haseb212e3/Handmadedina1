import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('al');

  const content = {
    al: {
      title: 'KUKULLA PA FYTYRË',
      button: 'BLEJ TANI'
    },
    en: {
      title: 'FACELESS DOLLS',
      button: 'BUY NOW'
    },
    de: {
      title: 'GESICHTSLOSE PUPPEN',
      button: 'JETZT KAUFEN'
    }
  };

  const handleBuyNow = () => {
    navigate('/products');
  };

  return (
    <section className="cosmic-bg min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Aurora background effects */}
      <div className="aurora-lines"></div>
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-12 md:mb-16 text-center tracking-wider">
          {content[currentLang as keyof typeof content].title}
        </h2>

        {/* Platform with dolls */}
        <div className="relative mb-12 md:mb-16">
          {/* Glowing platform */}
          <div className="platform-glow absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 md:w-96 h-20 md:h-24"></div>
          
          {/* Circular platform lines */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 md:w-88 h-4 border border-primary/30 rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-80 md:w-96 h-4 border border-primary/20 rounded-full"></div>
          
          {/* Dolls image */}
          <div className="relative">
            <img
              src="/lovable-uploads/ccfc0268-3b7a-4c55-b63f-fb0914a7ef7e.png"
              alt="Handmade Faceless Dolls"
              className="w-80 md:w-96 lg:w-[28rem] h-auto object-contain mx-auto drop-shadow-2xl"
            />
            
            {/* Additional glow effect on dolls */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="btn-buy px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {content[currentLang as keyof typeof content].button}
        </button>
      </div>

      {/* Additional cosmic effects */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;