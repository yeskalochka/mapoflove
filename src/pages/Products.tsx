import { useState, useEffect } from "react";
import { Search, Filter, SlidersHorizontal, Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [filterBy, setFilterBy] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: "1",
      title: "Crimson Dreams",
      artist: "Elena Vasquez",
      size: "24\" x 36\"",
      price: 1299,
      image: "/lovable-uploads/829ba29c-0c29-4a41-b62b-eba9ad99284d.png",
      category: "maps",
      rating: 4.8,
      reviews: 24
    },
    {
      id: "2", 
      title: "Urban Shadows",
      artist: "Marcus Chen",
      size: "20\" x 30\"",
      price: 899,
      image: "/placeholder-city.jpg",
      category: "maps",
      rating: 4.9,
      reviews: 18
    },
    {
      id: "3",
      title: "Mystic Waters", 
      artist: "Sarah Thompson",
      size: "30\" x 40\"",
      price: 1599,
      image: "/placeholder-water.jpg",
      category: "maps",
      rating: 5.0,
      reviews: 31
    },
    {
      id: "4",
      title: "Constellation Love",
      artist: "David Rodriguez",
      size: "18\" x 24\"",
      price: 749,
      image: "/placeholder-stars.jpg",
      category: "stars",
      rating: 4.7,
      reviews: 15
    },
    {
      id: "5",
      title: "Midnight Galaxy",
      artist: "Luna Mitchell",
      size: "24\" x 36\"",
      price: 1149,
      image: "/placeholder-galaxy.jpg",
      category: "stars",
      rating: 4.8,
      reviews: 22
    },
    {
      id: "6",
      title: "Heart Pendant Classic",
      artist: "Maria Santos",
      size: "2cm x 2cm",
      price: 299,
      image: "/placeholder-pendant.jpg",
      category: "jewelry",
      rating: 4.9,
      reviews: 45
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', count: products.length },
    { id: 'maps', name: 'Карты', count: products.filter(p => p.category === 'maps').length },
    { id: 'stars', name: 'Звёзды', count: products.filter(p => p.category === 'stars').length },
    { id: 'jewelry', name: 'Кулоны', count: products.filter(p => p.category === 'jewelry').length }
  ];

  const sortOptions = [
    { value: 'popular', label: 'По популярности' },
    { value: 'price-low', label: 'Сначала дешевле' },
    { value: 'price-high', label: 'Сначала дороже' },
    { value: 'newest', label: 'Новинки' },
    { value: 'rating', label: 'По рейтингу' }
  ];

  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = filterBy === 'all' || product.category === filterBy;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artist.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-up">
              Наши <span className="text-neon-red">товары</span>
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto fade-up fade-up-delay-1">
              Каждая работа собирается вручную: место, дата, имена, координаты, стиль — всё под тебя
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-6 bg-surface-elevated border-t border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left - Search & Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  className="input-glass pl-10 pr-4 py-2 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilterBy(category.id)}
                    data-filter={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filterBy === category.id
                        ? 'bg-neon-red text-white glow-neon'
                        : 'bg-surface text-secondary hover:bg-surface-higher hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Sort & View */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                data-sort
                className="input-glass px-4 py-2 pr-8 rounded-full"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Price Range */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-secondary">Цена:</span>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  data-price-range
                  className="w-24"
                />
                <span className="text-sm text-secondary">
                  до {priceRange[1].toLocaleString('ru-RU')} ₽
                </span>
              </div>

              {/* View Toggle */}
              <div className="flex bg-surface rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === 'grid' ? 'bg-neon-red text-white' : 'text-secondary hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === 'list' ? 'bg-neon-red text-white' : 'text-secondary hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Товары не найдены</h3>
              <p className="text-secondary">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-secondary">
                  Найдено {filteredProducts.length} {filteredProducts.length === 1 ? 'товар' : 'товаров'}
                </p>
              </div>

              <div className={`grid gap-8 mb-12 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    className={`animate-on-scroll ${viewMode === 'list' ? 'flex-row' : ''}`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-surface rounded-lg hover:bg-surface-higher transition-colors">
                    Предыдущая
                  </button>
                  <button className="px-4 py-2 bg-neon-red text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 bg-surface rounded-lg hover:bg-surface-higher transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-surface rounded-lg hover:bg-surface-higher transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-surface rounded-lg hover:bg-surface-higher transition-colors">
                    Следующая
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не нашли то, что искали?
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Создайте уникальный дизайн в нашем конструкторе или свяжитесь с нами для индивидуального заказа
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon px-8 py-3">
              Открыть конструктор
            </button>
            <button className="btn-outline px-8 py-3">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;