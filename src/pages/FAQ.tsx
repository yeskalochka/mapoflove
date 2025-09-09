import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>(['original']);

  const faqs = [
    {
      id: 'original',
      question: 'Все картины — оригинальные работы?',
      answer: 'Да, каждая работа в нашей коллекции — это оригинальная картина, созданная художником. Мы не продаём репродукции или принты. Каждое произведение искусства поставляется с сертификатом подлинности.'
    },
    {
      id: 'authenticity',
      question: 'Как вы обеспечиваете подлинность картин?',
      answer: 'Мы работаем напрямую с художниками и тщательно проверяем происхождение каждой работы. Все картины проходят экспертизу, и мы предоставляем полную документацию, включая сертификат подлинности и информацию о художнике.'
    },
    {
      id: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем все основные банковские карты (Visa, MasterCard, МИР), банковские переводы, электронные кошельки (ЮMoney, QIWI, WebMoney) и наличные при получении. Также доступна рассрочка на 3-12 месяцев.'
    },
    {
      id: 'shipping',
      question: 'Как упаковываются и отправляются картины?',
      answer: 'Все картины упаковываются в специальные защитные материалы с амортизацией. Используем профессиональную упаковку для произведений искусства. Доставка осуществляется курьерскими службами с обязательным страхованием. Время доставки: 2-5 дней по России.'
    },
    {
      id: 'international',
      question: 'Осуществляете ли международную доставку?',
      answer: 'Да, мы доставляем по всему миру. Международная доставка занимает 7-14 дней. Стоимость рассчитывается индивидуально в зависимости от страны назначения и размера работы. Все таможенные документы оформляем мы.'
    },
    {
      id: 'returns',
      question: 'Какая у вас политика возврата?',
      answer: 'У вас есть 14 дней с момента получения для возврата картины, если она не соответствует описанию или повреждена при доставке. Работа должна быть возвращена в оригинальной упаковке. Возврат средств осуществляется в течение 7 рабочих дней.'
    },
    {
      id: 'preview',
      question: 'Можно ли увидеть картину перед покупкой?',
      answer: 'Для жителей Москвы и СПб мы предлагаем персональные просмотры в нашем шоуруме по предварительной записи. Также мы можем предоставить дополнительные фотографии работы и детальное видео по запросу.'
    },
    {
      id: 'custom',
      question: 'Делаете ли вы работы на заказ?',
      answer: 'Да, мы выполняем индивидуальные заказы. Наши художники могут создать уникальную работу специально для вас. Сроки выполнения: 2-6 недель в зависимости от сложности. Стоимость рассчитывается индивидуально.'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-neon-red">Questions</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Найдите ответы на часто задаваемые вопросы о наших работах, доставке и услугах
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);
              
              return (
                <div 
                  key={faq.id}
                  className={`accordion-item bg-surface rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'glow-neon' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className={`accordion-trigger w-full px-6 py-6 flex items-center justify-between hover:bg-surface-elevated transition-colors ${
                      isOpen ? 'text-neon-red' : ''
                    }`}
                    data-state={isOpen ? 'open' : 'closed'}
                  >
                    <span className="text-left font-bold text-lg">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <div 
                    className={`accordion-content overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    data-state={isOpen ? 'open' : 'closed'}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center p-8 bg-surface-elevated rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-secondary mb-6">
              Свяжитесь с нами любым удобным способом, и мы ответим в течение нескольких часов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon px-8 py-3">
                Написать в Telegram
              </button>
              <button className="btn-outline px-8 py-3">
                Написать на почту
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;