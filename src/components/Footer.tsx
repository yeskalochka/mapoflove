import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = [
    { name: "Главная", path: "/" },
    { name: "Товары", path: "/products" },
    { name: "Конструктор", path: "/constructor" },
    { name: "FAQ", path: "/faq" },
    { name: "О нас", path: "/about" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-5 h-5 text-neon-red">
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
              <span className="font-bold text-lg">Map Of Love</span>
            </div>
            <p className="text-secondary text-sm mb-4 max-w-md">
              Искусство говорить о чувствах без слов. Создаём персональные карты мест, звёздного неба и украшения с историей.
            </p>
            <p className="text-secondary text-sm">
              Доставка по всей России. Упаковываем так, что коробка приедет быстрее, чем вы распакуете.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-secondary hover:text-neon-red transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-secondary">
              <p>Написать нам:</p>
              <div className="messenger-icons">
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
                  data-social="vk"
                  aria-label="VKontakte"
                >
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813 1.031 1.031 0 0 0 .49 1.364 1.04 1.04 0 0 1 .602.936v2.5c0 1.39-.479 2.133-1.386 2.133-.979 0-2.025-.84-2.552-2.301-.405-.781-.684-2.391-.684-2.391A.718.718 0 0 0 4.548 7H1.145a.716.716 0 0 0-.72.824 14.716 14.716 0 0 0 3.181 7.926 8.9 8.9 0 0 0 6.353 2.734A1.89 1.89 0 0 0 11.828 16.5v-2.97a1.295 1.295 0 0 1 .403-.982 1.014 1.014 0 0 1 .777-.315c.883 0 1.556.75 2.021 1.41.937 1.334 1.85 2.442 3.137 2.442h2.65c1.52 0 2.26-.614 1.9-1.843-.397-1.332-3.325-4.27-3.386-4.348-.711-.68-.613-1.076 0-1.71A13.858 13.858 0 0 0 21.893 7.75c.284-.615-.042-1.046-.346-.75z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="messenger-icon" 
                  data-social="whatsapp"
                  aria-label="WhatsApp"
                >
                  <div className="icon-bg"></div>
                  <svg viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-secondary text-sm">
            © 2024 Map Of Love. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;