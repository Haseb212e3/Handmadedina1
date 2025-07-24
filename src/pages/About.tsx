import { useState } from 'react';
import Header from '@/components/Header';
import FallingFlowers from '@/components/FallingFlowers';

const About = () => {
  const [currentLang, setCurrentLang] = useState('al');

  const content = {
    al: {
      title: 'RRETH NESH',
      paragraphs: [
        'Përshëndetje! Unë jam Dina, dhe dua t\'ju tregoj pak për botën time të vogël plot ngjyra dhe dashuri.',
        'Që kur isha e vogël, kam pasur një dashuri të veçantë për krijimtarinë me duar. Me kalimin e viteve, kjo dashuri u shndërrua në një pasion të madh për të thurur. Sot, thurja nuk është vetëm një hobi për mua – është mënyra ime për të shprehur ndjenjat, për të sjellë gëzim dhe për të ndarë pak butësi me botën.',
        'Me përkushtim e shumë kujdes, krijoj kukulla të buta e të ëmbla, lepurusha të vegjël që duket sikur do të të përqafojnë, trëndafila që nuk vyshken kurrë dhe shumë personazhe të tjera të imagjinuara nga fijet e leshit dhe duart e mia.',
        'Çdo punim që realizoj ka dashuri – jo vetëm për shkak të orëve që i kushtoj, por sepse i bëj me dashuri të vërtetë. Më pëlqen të mendoj që gjithçka që krijoj nuk është vetëm një objekt, por një copëz gëzimi që dikush do ta mbajë afër.',
        'Nëse edhe ty të pëlqejnë gjërat e veçanta, të bëra me dorë dhe me zemër, atëherë je në vendin e duhur. Mirë se erdhe në botën time!'
      ]
    },
    en: {
      title: 'ABOUT US',
      paragraphs: [
        'Hello! I am Dina, and I want to tell you a little about my small world full of colors and love.',
        'Since I was little, I have had a special love for creativity with hands. Over the years, this love turned into a great passion for knitting. Today, knitting is not just a hobby for me – it\'s my way of expressing feelings, bringing joy and sharing some tenderness with the world.',
        'With dedication and great care, I create soft and sweet dolls, little rabbits that look like they want to hug you, roses that never wither and many other characters imagined from yarn threads and my hands.',
        'Every piece I create has love – not just because of the hours I dedicate to it, but because I make them with true love. I like to think that everything I create is not just an object, but a piece of joy that someone will keep close.',
        'If you also like special things, handmade and with heart, then you are in the right place. Welcome to my world!'
      ]
    },
    de: {
      title: 'ÜBER UNS',
      paragraphs: [
        'Hallo! Ich bin Dina und möchte Ihnen ein wenig über meine kleine Welt voller Farben und Liebe erzählen.',
        'Seit ich klein war, habe ich eine besondere Liebe zur Handwerkskunst. Im Laufe der Jahre verwandelte sich diese Liebe in eine große Leidenschaft für das Stricken. Heute ist Stricken nicht nur ein Hobby für mich – es ist meine Art, Gefühle auszudrücken, Freude zu bringen und etwas Zärtlichkeit mit der Welt zu teilen.',
        'Mit Hingabe und großer Sorgfalt erschaffe ich weiche und süße Puppen, kleine Häschen, die aussehen, als wollten sie dich umarmen, Rosen, die niemals verwelken, und viele andere Charaktere, die aus Garnen und meinen Händen entstehen.',
        'Jedes Stück, das ich erschaffe, hat Liebe – nicht nur wegen der Stunden, die ich ihm widme, sondern weil ich sie mit wahrer Liebe mache. Ich denke gerne, dass alles, was ich erschaffe, nicht nur ein Objekt ist, sondern ein Stück Freude, das jemand nah bei sich behalten wird.',
        'Wenn Sie auch besondere Dinge mögen, handgemacht und mit Herz, dann sind Sie am richtigen Ort. Willkommen in meiner Welt!'
      ]
    }
  };

  return (
    <div className="cosmic-bg min-h-screen">
      <FallingFlowers />
      <Header />
      
      <main className="relative z-20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Language selector */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentLang('al')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentLang === 'al' ? 'bg-accent text-accent-foreground' : 'bg-card/50 text-foreground hover:bg-card'}`}
              >
                🇦🇱 Shqip
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentLang === 'en' ? 'bg-accent text-accent-foreground' : 'bg-card/50 text-foreground hover:bg-card'}`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setCurrentLang('de')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentLang === 'de' ? 'bg-accent text-accent-foreground' : 'bg-card/50 text-foreground hover:bg-card'}`}
              >
                🇩🇪 Deutsch
              </button>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-16 tracking-wider">
            {content[currentLang as keyof typeof content].title}
          </h1>
          
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-8 border border-border/30">
            <div className="space-y-6 text-foreground text-lg leading-relaxed">
              {content[currentLang as keyof typeof content].paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;