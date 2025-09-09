import { useEffect, useRef } from "react";

interface InteractiveCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const InteractiveCard = ({ title = "Карта Любви", subtitle = "Ваша история", className = "" }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * -0.1;
      
      // Start at 20deg right, go to 0, then -20deg left
      const rotation = Math.max(-20, Math.min(20, 20 - (scrolled * 0.08)));
      
      cardRef.current.style.transform = `rotate(${rotation}deg) scale(1.2)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={cardRef} className={`card-3d transform rotate-[20deg] scale-110 transition-transform duration-75 ${className}`}>
      {/* 5x5 Tracker Grid */}
      <div className="tracker-grid">
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="tracker"></div>
        ))}
      </div>
      
      {/* Card */}
      <div className="card-inner">
        <div className="card-title">
          {title}
        </div>
        <div className="card-prompt">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;