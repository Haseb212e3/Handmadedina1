import Header from '@/components/Header';
import FallingFlowers from '@/components/FallingFlowers';

const About = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <FallingFlowers />
      <Header />
      
      <main className="relative z-20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-16 tracking-wider">
            RRETH NESH
          </h1>
          
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-8 border border-border/30">
            <p className="text-foreground text-lg leading-relaxed text-center">
              Mirësevini në botën e Handmade Dina! Ne krijojmë kukulla të bëra me dorë me dashuri dhe kujdes. 
              Çdo kukull është unike dhe e veçantë, e punuar me materiale cilësore dhe me vëmendje ndaj detajeve.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;