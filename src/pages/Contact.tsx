import Header from '@/components/Header';
import FallingFlowers from '@/components/FallingFlowers';

const Contact = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <FallingFlowers />
      <Header />
      
      <main className="relative z-20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-16 tracking-wider">
            KONTAKT
          </h1>
          
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-8 border border-border/30 text-center">
            <p className="text-foreground text-lg mb-6">
              Na kontaktoni për porosi të personalizuara ose pyetje.
            </p>
            
            <a
              href="https://www.instagram.com/handmade_diinaa?igsh=MTV0d3IyeTd4cWxpaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-buy inline-block px-8 py-4 rounded-lg text-lg font-bold"
            >
              Instagram: @handmade_diinaa
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;