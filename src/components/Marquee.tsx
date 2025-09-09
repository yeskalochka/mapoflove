interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className = "" }: MarqueeProps) => {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-content">
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;