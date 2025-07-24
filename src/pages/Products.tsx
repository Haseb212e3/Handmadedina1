import { useState } from 'react';
import Header from '@/components/Header';
import FallingFlowers from '@/components/FallingFlowers';

const Products = () => {
  const [currentLang, setCurrentLang] = useState('al');

  const products = [
    {
      id: 1,
      name: { al: 'Batanije me buqetë trëndafilash', en: 'Blanket with Rose Bouquet', de: 'Decke mit Rosenstrauß' },
      price: '25€',
      image: '/lovable-uploads/5886189c-e3e5-42b3-9895-821a6ea2345a.png'
    },
    {
      id: 2,
      name: { al: 'Kukulla Jeshile', en: 'Green Doll', de: 'Grüne Puppe' },
      price: '25€',
      image: '/lovable-uploads/ccfc0268-3b7a-4c55-b63f-fb0914a7ef7e.png'
    },
    {
      id: 3,
      name: { al: 'Kukulla Krem', en: 'Cream Doll', de: 'Creme Puppe' },
      price: '25€',
      image: '/lovable-uploads/ccfc0268-3b7a-4c55-b63f-fb0914a7ef7e.png'
    },
    {
      id: 4,
      name: { al: 'Kukulla Blu', en: 'Blue Doll', de: 'Blaue Puppe' },
      price: '25€',
      image: '/lovable-uploads/ccfc0268-3b7a-4c55-b63f-fb0914a7ef7e.png'
    }
  ];

  const content = {
    al: {
      title: 'PRODUKTET TONA',
      orderButton: 'POROSIT TANI'
    },
    en: {
      title: 'OUR PRODUCTS',
      orderButton: 'ORDER NOW'
    },
    de: {
      title: 'UNSERE PRODUKTE',
      orderButton: 'JETZT BESTELLEN'
    }
  };

  const handleOrderNow = () => {
    window.open('https://www.instagram.com/handmade_diinaa?igsh=MTV0d3IyeTd4cWxpaw==', '_blank');
  };

  return (
    <div className="cosmic-bg min-h-screen">
      <FallingFlowers />
      <Header />
      
      <main className="relative z-20 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-16 tracking-wider">
            {content[currentLang as keyof typeof content].title}
          </h1>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative mb-4">
                  <div className="platform-glow absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-8 opacity-50"></div>
                  <img
                    src={product.image}
                    alt={product.name[currentLang as keyof typeof product.name]}
                    className="w-full h-40 object-contain rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {product.name[currentLang as keyof typeof product.name]}
                </h3>
                
                <p className="text-accent text-lg font-bold text-center mb-4">
                  {product.price}
                </p>
                
                <button
                  onClick={handleOrderNow}
                  className="btn-buy w-full py-3 rounded-lg text-sm font-bold"
                >
                  {content[currentLang as keyof typeof content].orderButton}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;