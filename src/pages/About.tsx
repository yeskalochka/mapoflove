import { Link } from "react-router-dom";
import { ArrowRight, Heart, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up">
            О нас — <span className="text-neon-red">Map Of Love</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto fade-up fade-up-delay-1">
            Запустить историю, сохранить момент, удивить человека. 
            Иногда с юмором, иногда без, но всегда с любовью.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Map Of Love родился из простой идеи: есть моменты, которые хочется сохранить не в телефоне, 
                а в чём-то более осязаемом, более личном. Место первой встречи, звёзды в ту самую ночь, 
                координаты, которые изменили всё.
              </p>
              <p className="text-secondary mb-8 leading-relaxed">
                Мы не просто создаём картины — мы помогаем людям материализовать свои самые важные воспоминания. 
                Каждая наша работа несёт в себе частичку чьей-то истории любви, дружбы или важного жизненного момента.
              </p>
            </div>
            
            <div className="fade-up fade-up-delay-1 parallax">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e7035925-5c8f-4990-bb68-18d33ea3f97e.png"
                  alt="Our story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-red/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-neon-red/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <Target className="w-10 h-10 text-neon-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Индивидуально</h3>
              <p className="text-secondary">
                Мы не гуглим «подарок на годовщину», мы создаём его. Каждая работа уникальна, 
                как уникальна ваша история.
              </p>
            </div>

            <div className="text-center animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <Heart className="w-10 h-10 text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Эмоционально</h3>
              <p className="text-secondary">
                Иногда люди плачут от наших работ — мы предупреждали. 
                Мы создаём не просто картины, а эмоциональные переживания.
              </p>
            </div>

            <div className="text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-neon">
                <Zap className="w-10 h-10 text-info" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дерзко</h3>
              <p className="text-secondary">
                Мы не боимся выйти за рамки — мы их рисуем. 
                Готовы воплотить самые смелые и необычные идеи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Расскажите нам свою <span className="text-neon-red">историю</span>
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Не стесняйтесь писать. Мы уже всё видели, кроме вашей истории.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/constructor" className="btn-neon px-8 py-3 inline-flex items-center space-x-2">
              <span>Начать создание</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-outline px-8 py-3">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;