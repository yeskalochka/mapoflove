import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Map, Shield, Award, CheckCircle } from "lucide-react";
import InteractiveCard from "../components/InteractiveCard";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";

const Home = () => {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const marqueeItems = [
    "Map Of Love",
    "Личный сюжет",
    "Неон и романтика", 
    "Индивидуальный дизайн",
    "Карты чувств",
    "Звёздные моменты"
  ];

  const featuredProducts = [
    {
      id: "1",
      title: "Crimson Dreams",
      artist: "Elena Vasquez",
      size: "24\" x 36\"",
      price: 1299,
      image: "/lovable-uploads/829ba29c-0c29-4a41-b62b-eba9ad99284d.png"
    },
    {
      id: "2", 
      title: "Urban Shadows",
      artist: "Marcus Chen",
      size: "20\" x 30\"",
      price: 899,
      image: "/placeholder-city.jpg"
    },
    {
      id: "3",
      title: "Mystic Waters", 
      artist: "Sarah Thompson",
      size: "30\" x 40\"",
      price: 1599,
      image: "/placeholder-water.jpg"
    }
  ];

  const workflowSteps = [
    {
      id: "kickoff",
      title: "Kickoff",
      subtitle: "Начинаем историю",
      description: "Мы погружаемся в вашу историю, понимаем ваши цели и ожидания. Через детальное обсуждение и исследование создаём концепцию будущего шедевра."
    },
    {
      id: "design", 
      title: "Design",
      subtitle: "Творим магию",
      description: "Наши мастера работают над созданием уникального дизайна, который идеально передаст ваши эмоции и воспоминания в визуальной форме."
    },
    {
      id: "review",
      title: "Review", 
      subtitle: "Совершенствуем детали",
      description: "Вместе дорабатываем каждую деталь, чтобы результат превзошёл ваши ожидания. Вносим правки до достижения идеального результата."
    },
    {
      id: "launch",
      title: "Launch",
      subtitle: "Воплощаем в реальность", 
      description: "Финальное производство и доставка вашего персонального произведения искусства, готового стать частью вашей истории."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated">
          <div className="absolute inset-0 opacity-20">
            {/* Animated particles/lines can be added here with CSS or JS */}
            <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-neon-red to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-info to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neon-red to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-up">
                <span className="text-white">Искусство </span>
                <span className="text-neon-red glow-neon-strong">говорить</span>
                <br />
                <span className="text-white">о чувствах </span>
                <span className="text-white">без слов</span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl fade-up fade-up-delay-1">
                Карта того самого места, где всё началось. Звёздная карта важного момента и украшения с историей. 
                Создаём то, что не выглядит как банальные кружки с надписью «Ты моё всё».
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up fade-up-delay-2">
                <Link
                  to="/constructor"
                  data-open-constructor
                  className="btn-neon px-8 py-4 inline-flex items-center space-x-2 text-lg font-bold"
                >
                  <span>Открыть конструктор</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/products"
                  data-open-products
                  className="btn-outline px-8 py-4 inline-flex items-center space-x-2 text-lg font-bold"
                >
                  <span>Смотреть товары</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right - Interactive Card */}
            <div className="flex justify-center lg:justify-end fade-up fade-up-delay-3">
              <InteractiveCard 
                title="Карта Любви"
                subtitle="Ваша история"
                className="hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeItems} className="py-4 bg-surface border-t border-b border-border" />

      {/* Features Section */}
      <section className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map Cards */}
            <div className="animate-on-scroll bg-surface rounded-2xl p-8 hover-lift hover-glow transition-all duration-300">
              <div className="w-16 h-16 bg-neon-red/10 rounded-2xl flex items-center justify-center mb-6 glow-neon">
                <Map className="w-8 h-8 text-neon-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Карты мест</h3>
              <p className="text-secondary mb-6">
                Место встречи, первое свидание, важный момент — превращаем координаты в искусство.
              </p>
              <Link 
                to="/constructor" 
                className="inline-flex items-center text-neon-red hover:text-neon-red-dark transition-colors"
              >
                В конструктор <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Star Maps */}
            <div className="animate-on-scroll bg-surface rounded-2xl p-8 hover-lift hover-glow transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-info/10 rounded-2xl flex items-center justify-center mb-6 glow-neon">
                <Star className="w-8 h-8 text-info" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Звёздные карты</h3>
              <p className="text-secondary mb-6">
                Карта звёздного неба, каким оно было в самый важный момент вашей жизни.
              </p>
              <Link 
                to="/constructor" 
                className="inline-flex items-center text-neon-red hover:text-neon-red-dark transition-colors"
              >
                В конструктор <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Jewelry */}
            <div className="animate-on-scroll bg-surface rounded-2xl p-8 hover-lift hover-glow transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mb-6 glow-neon">
                <Heart className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Кулоны с историей</h3>
              <p className="text-secondary mb-6">
                Украшения, которые носятся близко к сердцу и хранят вашу уникальную историю.
              </p>
              <Link 
                to="/constructor" 
                className="inline-flex items-center text-neon-red hover:text-neon-red-dark transition-colors"
              >
                В конструктор <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Pinned Section */}
      <section className="sticky-section bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Scrolling Content */}
            <div className="space-y-20">
              <div className="fade-up">
                <div className="inline-block px-4 py-2 bg-surface rounded-full text-sm font-medium text-secondary mb-4">
                  How We Work?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Мы упрощаем путь
                  <br />
                  <span className="text-neon-red">от идеи до шедевра</span>
                </h2>
                <p className="text-xl text-secondary max-w-lg">
                  Мы делаем так, чтобы превратить ваши идеи в жизнь было просто. 
                  Ведём вас от концепции до полностью готового продукта.
                </p>
              </div>

              {workflowSteps.map((step, index) => (
                <div key={step.id} className="animate-on-scroll flex space-x-6" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-surface-elevated rounded-2xl flex items-center justify-center border border-border">
                      <span className="text-neon-red font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-surface rounded-full text-xs font-medium text-neon-red mb-2">
                      Stage {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <h4 className="text-lg text-neon-red font-medium mb-3">{step.subtitle}</h4>
                    <p className="text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Sticky Image */}
            <div className="sticky-content">
              <div className="relative rounded-2xl overflow-hidden bg-surface-elevated aspect-[4/3] sticky top-20">
                <img 
                  src="/lovable-uploads/e7035925-5c8f-4990-bb68-18d33ea3f97e.png"
                  alt="Working process"
                  className="w-full h-full object-cover parallax"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-up">
              Почему именно <span className="text-neon-red">Map Of Love</span>?
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto fade-up fade-up-delay-1">
              Наш стиль — это индивидуально, эмоционально и дерзко. 
              Мы не боимся выйти за рамки, мы их рисуем.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-neon-red/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <CheckCircle className="w-10 h-10 text-neon-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Индивидуально</h3>
              <p className="text-secondary">
                Мы не гуглим «подарок на годовщину», мы создаём его. 
                Каждая работа уникальна и создана специально для вас.
              </p>
            </div>

            <div className="text-center animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <Heart className="w-10 h-10 text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Эмоционально</h3>
              <p className="text-secondary">
                Иногда люди плачут от наших работ — мы предупреждали. 
                Каждое изделие несёт глубокий эмоциональный заряд.
              </p>
            </div>

            <div className="text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <Award className="w-10 h-10 text-info" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дерзко</h3>
              <p className="text-secondary">
                Мы не боимся экспериментировать и воплощать самые смелые идеи. 
                Границы существуют, чтобы их преодолевать.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-up">
              Избранные <span className="text-neon-red">шедевры</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto fade-up fade-up-delay-1">
              Курируемая коллекция от наших самых талантливых мастеров, 
              каждая работа рассказывает свою уникальную историю.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                className={`animate-on-scroll`}
                style={{animationDelay: `${index * 0.1}s`}}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="btn-outline px-8 py-4 inline-flex items-center space-x-2 text-lg font-bold"
            >
              <span>Смотреть все работы</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-red/5 to-info/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-up">
            Готовы создать свою <span className="text-neon-red">историю</span>?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto fade-up fade-up-delay-1">
            Не стесняйтесь писать. Мы уже всё видели, кроме вашей истории. 
            Расскажите, что хотите подарить, а мы оформим это так, будто вы придумали всё сами.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-2">
            <Link
              to="/constructor"
              className="btn-neon px-8 py-4 inline-flex items-center space-x-2 text-lg font-bold"
            >
              <span>Начать создание</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/about"
              className="btn-outline px-8 py-4 inline-flex items-center space-x-2 text-lg font-bold"
            >
              <span>Узнать больше</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;