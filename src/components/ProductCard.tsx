import { ShoppingCart } from "lucide-react";
import { useCart } from "../hooks/useCart";

interface ProductCardProps {
  id: string;
  title: string;
  artist: string;
  size: string;
  price: number;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({ id, title, artist, size, price, image, className = "", style }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      artist,
      size,
      price,
      image
    });
  };
  return (
    <div className={`product-card ${className}`} data-product-id={id} style={style}>
      <div className="product-image">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-secondary text-sm mb-1">by {artist}</p>
        <p className="text-secondary text-sm mb-3">{size}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-neon-red font-bold text-xl">
            {price.toLocaleString('ru-RU')} ₽
          </span>
          
          <button
            onClick={handleAddToCart}
            className="cart-btn"
            data-tooltip={`Цена ${price.toLocaleString('ru-RU')} ₽`}
            data-add-to-cart={id}
          >
            <div className="btn-text">В корзину</div>
            <div className="btn-icon">
              <ShoppingCart className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;