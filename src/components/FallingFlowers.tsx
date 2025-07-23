import { useEffect, useState } from 'react';

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FallingFlowers = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const createFlower = (id: number): Flower => ({
      id,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 0.5 + Math.random() * 0.5,
    });

    // Create initial flowers
    const initialFlowers = Array.from({ length: 15 }, (_, i) => createFlower(i));
    setFlowers(initialFlowers);

    // Add new flowers periodically
    const interval = setInterval(() => {
      setFlowers(prev => {
        const newFlower = createFlower(Date.now());
        return [...prev.slice(-14), newFlower];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="falling-flower absolute text-pink-300/40"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            fontSize: `${flower.size}rem`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FallingFlowers;