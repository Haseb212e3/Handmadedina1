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
            <div className="space-y-6 text-foreground text-lg leading-relaxed">
              <p>
                Përshëndetje! Unë jam Dina, dhe dua t'ju tregoj pak për botën time të vogël plot ngjyra dhe dashuri.
              </p>
              
              <p>
                Që kur isha e vogël, kam pasur një dashuri të veçantë për krijimtarinë me duar. Me kalimin e viteve, kjo dashuri u shndërrua në një pasion të madh për të thurur. Sot, thurja nuk është vetëm një hobi për mua – është mënyra ime për të shprehur ndjenjat, për të sjellë gëzim dhe për të ndarë pak butësi me botën.
              </p>
              
              <p>
                Me përkushtim e shumë kujdes, krijoj kukulla të buta e të ëmbla, lepurusha të vegjël që duket sikur do të të përqafojnë, trëndafila që nuk vyshken kurrë dhe shumë personazhe të tjera të imagjinuara nga fijet e leshit dhe duart e mia.
              </p>
              
              <p>
                Çdo punim që realizoj ka dashuri – jo vetëm për shkak të orëve që i kushtoj, por sepse i bëj me dashuri të vërtetë. Më pëlqen të mendoj që gjithçka që krijoj nuk është vetëm një objekt, por një copëz gëzimi që dikush do ta mbajë afër.
              </p>
              
              <p>
                Nëse edhe ty të pëlqejnë gjërat e veçanta, të bëra me dorë dhe me zemër, atëherë je në vendin e duhur. Mirë se erdhe në botën time!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;