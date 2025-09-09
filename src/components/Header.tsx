import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Grid3X3, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items, isOpen: isCartOpen, setIsOpen: setIsCartOpen, getTotalItems, updateQuantity, removeItem, getTotalPrice } = useCart();

  const navigation = [
    { name: "Главная", path: "/", id: "home" },
    { name: "Товары", path: "/products", id: "products" },
    { name: "Конструктор", path: "/constructor", id: "constructor" },
    { name: "FAQ", path: "/faq", id: "faq" },
    { name: "О нас", path: "/about", id: "about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll to top when navigating
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <header className="header-glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover-scale">
              <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-neon-red">
                  <path
                    d="M8 32 L8 8 L18 8 Q28 8 28 18 Q28 28 18 28 L8 28 Z M8 20 L20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 8 L32 32 M24 20 L32 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="18" r="2" fill="currentColor" />
                  <circle cx="32" cy="15" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-xl">Map Of Love</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  data-nav-link={item.id}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    isActive(item.path)
                      ? "text-neon-red glow-neon"
                      : "text-foreground hover:text-neon-red"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Messenger Icons - Desktop only */}
              <div className="hidden lg:flex messenger-icons">
                <a 
                  href="#" 
                  className="messenger-icon" 
                  data-social="telegram"
                  aria-label="Telegram"
                >
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="messenger-icon" 
                  data-social="instagram"
                  aria-label="Instagram"
                >
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="messenger-icon" 
                  data-social="vk"
                  aria-label="VKontakte"
                >
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813 1.031 1.031 0 0 0 .49 1.364 1.04 1.04 0 0 1 .602.936v2.5c0 1.39-.479 2.133-1.386 2.133-.979 0-2.025-.84-2.552-2.301-.405-.781-.684-2.391-.684-2.391A.718.718 0 0 0 4.548 7H1.145a.716.716 0 0 0-.72.824 14.716 14.716 0 0 0 3.181 7.926 8.9 8.9 0 0 0 6.353 2.734A1.89 1.89 0 0 0 11.828 16.5v-2.97a1.295 1.295 0 0 1 .403-.982 1.014 1.014 0 0 1 .777-.315c.883 0 1.556.75 2.021 1.41.937 1.334 1.85 2.442 3.137 2.442h2.65c1.52 0 2.26-.614 1.9-1.843-.397-1.332-3.325-4.27-3.386-4.348-.711-.68-.613-1.076 0-1.71A13.858 13.858 0 0 0 21.893 7.75c.284-.615-.042-1.046-.346-.75z"/>
                  </svg>
                </a>
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                data-open-cart
                className="relative p-2 hover-scale hover-glow rounded-full bg-surface-elevated"
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-red text-xs rounded-full flex items-center justify-center text-white">
                  {getTotalItems()}
                </span>
              </button>

              {/* Apps Grid */}
              <button className="hidden md:block p-2 hover-scale hover-glow rounded-full bg-surface-elevated">
                <Grid3X3 className="w-6 h-6" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover-scale rounded-full bg-surface-elevated"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-glass border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    data-nav-link={item.id}
                    className={`fade-up text-lg font-medium transition-colors hover:text-neon-red ${
                      isActive(item.path) ? "text-neon-red" : "text-foreground"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div 
            className="w-96 bg-glass border-l border-border p-6"
            data-cart-drawer
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Корзина ({getTotalItems()})</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover-scale rounded-full bg-surface-elevated"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 mb-6 max-h-96 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-secondary text-center py-8">
                  Корзина пуста. Добавьте товары для оформления заказа.
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-surface rounded-2xl p-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{item.title}</h3>
                          <p className="text-sm text-secondary mb-2">{item.artist}</p>
                          <p className="text-sm text-secondary mb-3">{item.size}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full bg-surface-elevated hover:bg-neon-red/20"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full bg-surface-elevated hover:bg-neon-red/20"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 rounded-full bg-surface-elevated hover:bg-neon-red/20 text-neon-red"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-right">
                        <span className="text-neon-red font-bold">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Итого:</span>
                      <span className="text-neon-red">
                        {getTotalPrice().toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/checkout"
              className="w-full btn-neon py-3 px-6 rounded-full font-bold block text-center"
              onClick={() => setIsCartOpen(false)}
              style={{ pointerEvents: items.length === 0 ? 'none' : 'auto', opacity: items.length === 0 ? 0.5 : 1 }}
            >
              Оформить заказ
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;