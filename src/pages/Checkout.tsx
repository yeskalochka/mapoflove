import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    messenger: "telegram",
    promoCode: "",
    paymentOption: "partial"
  });

  const [orderSummary] = useState({
    subtotal: 7990,
    discount: 0,
    shipping: 0,
    total: 7990
  });

  const messengers = [
    { id: "telegram", name: "Telegram", icon: "📱" },
    { id: "whatsapp", name: "WhatsApp", icon: "💬" },
    { id: "vk", name: "VKontakte", icon: "🔵" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/products" 
            className="flex items-center space-x-2 text-secondary hover:text-neon-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Вернуться к покупкам</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Оформление заказа</h1>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Контактные данные</h2>
              
              <div>
                <label className="block text-sm text-secondary mb-2">ФИО</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  data-checkout-name
                  className="input w-full"
                  placeholder="Введите ваше полное имя"
                />
              </div>

              <div>
                <label className="block text-sm text-secondary mb-2">Номер телефона</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  data-checkout-phone
                  className="input w-full"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>

              <div>
                <label className="block text-sm text-secondary mb-2">Город доставки</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  data-checkout-city
                  className="input w-full"
                  placeholder="Введите ваш город"
                />
              </div>
            </div>

            {/* Messenger Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Способ связи</h2>
              <div className="radio-input">
                <div className="glass">
                  <div className="glass-inner"></div>
                </div>
                <div className="selector">
                  {messengers.map((messenger) => (
                    <div key={messenger.id} className="choice">
                      <div>
                        <input
                          className="choice-circle"
                          type="radio"
                          name="messenger"
                          id={messenger.id}
                          value={messenger.id}
                          checked={formData.messenger === messenger.id}
                          onChange={(e) => handleInputChange("messenger", e.target.value)}
                          data-checkout-messenger
                        />
                        <div className="ball"></div>
                      </div>
                      <label htmlFor={messenger.id} className="choice-name">
                        {messenger.icon} {messenger.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Промокод</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={formData.promoCode}
                  onChange={(e) => handleInputChange("promoCode", e.target.value)}
                  className="input flex-1"
                  placeholder="Введите промокод"
                />
                <button 
                  className="btn-outline px-6"
                  data-promo-apply
                >
                  Применить
                </button>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Способ оплаты</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 rounded-2xl border border-surface-elevated hover:border-neon-red/30 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="partial"
                    checked={formData.paymentOption === "partial"}
                    onChange={(e) => handleInputChange("paymentOption", e.target.value)}
                    data-payment-option
                    className="text-neon-red"
                  />
                  <div>
                    <div className="font-medium">Предоплата 25%</div>
                    <div className="text-sm text-secondary">Остальное при получении</div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 rounded-2xl border border-surface-elevated hover:border-neon-red/30 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="full"
                    checked={formData.paymentOption === "full"}
                    onChange={(e) => handleInputChange("paymentOption", e.target.value)}
                    data-payment-option
                    className="text-neon-red"
                  />
                  <div>
                    <div className="font-medium">100% оплата сразу</div>
                    <div className="text-sm text-secondary">Скидка 5%</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="bg-surface rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-semibold">Ваш заказ</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-20 bg-surface-elevated rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Crimson Dreams</h3>
                    <p className="text-sm text-secondary">24" x 36"</p>
                    <p className="text-neon-red font-bold">{orderSummary.subtotal.toLocaleString('ru-RU')} ₽</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Подытог:</span>
                  <span>{orderSummary.subtotal.toLocaleString('ru-RU')} ₽</span>
                </div>
                {formData.paymentOption === "full" && (
                  <div className="flex justify-between text-neon-red">
                    <span>Скидка 5%:</span>
                    <span>-{Math.round(orderSummary.subtotal * 0.05).toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-bold text-lg">
                  <span>Итого:</span>
                  <span>
                    {formData.paymentOption === "full" 
                      ? Math.round(orderSummary.subtotal * 0.95).toLocaleString('ru-RU')
                      : orderSummary.subtotal.toLocaleString('ru-RU')
                    } ₽
                  </span>
                </div>
              </div>

              <button 
                className="btn-neon w-full py-4 font-bold flex items-center justify-center space-x-2"
                data-checkout-pay
              >
                <CheckCircle className="w-5 h-5" />
                <span>Перейти к оплате</span>
              </button>

              <p className="text-xs text-secondary text-center">
                Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;