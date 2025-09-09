import { useState, useEffect } from "react";
import { MapPin, Type, Palette, Shapes, Maximize2, Plus, Minus, Move, RotateCcw } from "lucide-react";
import { CustomCheckbox } from "../components/ui/custom-checkbox";
import { useCart } from "../hooks/useCart";

const Constructor = () => {
  const [activeStep, setActiveStep] = useState('location');
  const { addItem } = useCart();
  const [formData, setFormData] = useState({
    location: '',
    title: 'PARIS',
    divider: 'France',
    subtitle: '48.8644°N / 2.3448°E',
    theme: 'orange',
    shape: 'circle',
    size: '30x40',
    orientation: 'portrait',
    frame: 'no-frame',
    unit: 'cm',
    removeAllText: false,
    hideSubtitle: false
  });

  const steps = [
    { id: 'location', label: 'Локация', icon: MapPin },
    { id: 'title', label: 'Титры', icon: Type },
    { id: 'theme', label: 'Тема', icon: Palette },
    { id: 'shape', label: 'Форма', icon: Shapes },
    { id: 'size', label: 'Размер', icon: Maximize2 }
  ];

  const themes = [
    { id: 'orange', name: 'Classic', color: '#FF8A65' },
    { id: 'blue', name: 'Ocean', color: '#42A5F5' },
    { id: 'dark', name: 'Midnight', color: '#263238' },
    { id: 'green', name: 'Forest', color: '#66BB6A' },
    { id: 'purple', name: 'Lavender', color: '#AB47BC' },
    { id: 'red', name: 'Crimson', color: '#EF5350' },
    { id: 'teal', name: 'Aqua', color: '#26A69A' },
    { id: 'amber', name: 'Sunset', color: '#FFCA28' }
  ];

  const shapes = [
    { id: 'circle', name: 'Круг', icon: '○' },
    { id: 'square', name: 'Квадрат', icon: '□' },
    { id: 'heart', name: 'Сердце', icon: '♥' },
    { id: 'moon', name: 'Луна', icon: '☽' },
    { id: 'star', name: 'Звезда', icon: '★' },
    { id: 'diamond', name: 'Ромб', icon: '◊' }
  ];

  const sizes = {
    cm: [
      { id: '30x40', label: '30×40 см', price: 2990 },
      { id: '50x70', label: '50×70 см', price: 4990 },
      { id: '70x100', label: '70×100 см', price: 7990 }
    ],
    inch: [
      { id: '12x16', label: '12×16 дюймов', price: 2990 },
      { id: '20x28', label: '20×28 дюймов', price: 4990 },
      { id: '28x40', label: '28×40 дюймов', price: 7990 }
    ]
  };

  const frameOptions = [
    { id: 'no-frame', name: 'Без рамки', icon: '⬜', price: 0 },
    { id: 'frame', name: 'Рамка', icon: '⬛', price: 990 },
    { id: 'hanger', name: 'Подвес', icon: '🖼', price: 1490 }
  ];

  const getCurrentPrice = () => {
    const sizeOptions = sizes[formData.unit as keyof typeof sizes];
    const sizePrice = sizeOptions.find(s => s.id === formData.size)?.price || 0;
    const framePrice = frameOptions.find(f => f.id === formData.frame)?.price || 0;
    return sizePrice + framePrice;
  };

  useEffect(() => {
    // Animate step activation
    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => {
      el.classList.remove('active');
    });
    
    const activeElement = document.querySelector(`[data-step="${activeStep}"]`);
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }, [activeStep]);

  const renderStepContent = () => {
    switch (activeStep) {
      case 'location':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Город или адрес</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Введите адрес или название города"
                className="input-glass w-full"
                data-coords-input
              />
            </div>
            <button className="btn-neon px-6 py-2 text-sm">
              Найти на карте
            </button>
            <p className="text-xs text-secondary">
              Карту можно двигать вручную после поиска
            </p>
          </div>
        );

      case 'title':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Заголовок</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="input-glass w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Разделитель</label>
              <input
                type="text"
                value={formData.divider}
                onChange={(e) => setFormData({ ...formData, divider: e.target.value })}
                className="input-glass w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Подзаголовок</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="input-glass w-full"
              />
            </div>
            
            <div className="space-y-3">
              <CustomCheckbox
                id="remove-all"
                label="Удалить весь текст"
                checked={formData.removeAllText}
                onChange={(checked) => setFormData({ ...formData, removeAllText: checked })}
              />
              <CustomCheckbox
                id="hide-subtitle"
                label="Скрыть подзаголовок"
                checked={formData.hideSubtitle}
                onChange={(checked) => setFormData({ ...formData, hideSubtitle: checked })}
              />
            </div>
          </div>
        );

      case 'theme':
        return (
          <div className="space-y-4">
            <p className="text-sm text-secondary mb-4">Выберите цветовую схему карты</p>
            <div className="grid grid-cols-4 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setFormData({ ...formData, theme: theme.id })}
                  data-theme-swatch={theme.id}
                  className={`w-16 h-16 rounded-full border-4 transition-all duration-300 ${
                    formData.theme === theme.id
                      ? 'border-neon-red glow-neon-strong scale-110'
                      : 'border-surface-elevated hover:border-border'
                  }`}
                  style={{ backgroundColor: theme.color }}
                  title={theme.name}
                />
              ))}
            </div>
          </div>
        );

      case 'shape':
        return (
          <div className="space-y-4">
            <p className="text-sm text-secondary mb-4">Выберите форму для вашей карты</p>
            <div className="grid grid-cols-3 gap-3">
              {shapes.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setFormData({ ...formData, shape: shape.id })}
                  data-mask={shape.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                    formData.shape === shape.id
                      ? 'border-neon-red bg-neon-red/10 glow-neon'
                      : 'border-surface-elevated bg-surface hover:border-border'
                  }`}
                >
                  <div className="text-3xl mb-2">{shape.icon}</div>
                  <div className="text-sm font-medium">{shape.name}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'size':
        return (
          <div className="space-y-6">
            {/* Unit Selection */}
            <div>
              <p className="text-sm text-secondary mb-3">Единицы измерения</p>
              <div className="flex bg-surface rounded-full p-1">
                <button
                  onClick={() => setFormData({ ...formData, unit: 'cm', size: '30x40' })}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.unit === 'cm' ? 'bg-neon-red text-white' : 'text-secondary hover:text-white'
                  }`}
                >
                  CM (ЕС)
                </button>
                <button
                  onClick={() => setFormData({ ...formData, unit: 'inch', size: '12x16' })}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.unit === 'inch' ? 'bg-neon-red text-white' : 'text-secondary hover:text-white'
                  }`}
                >
                  INCH (US)
                </button>
              </div>
            </div>

            {/* Size Options */}
            <div>
              <p className="text-sm text-secondary mb-3">Размер</p>
              <div className="space-y-3">
                {sizes[formData.unit as keyof typeof sizes].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setFormData({ ...formData, size: size.id })}
                    data-size-option={size.id}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                      formData.size === size.id
                        ? 'border-neon-red bg-neon-red/10 glow-neon'
                        : 'border-surface-elevated bg-surface hover:border-border'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{size.label}</span>
                      <span className="text-neon-red font-bold">
                        {size.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div>
              <p className="text-sm text-secondary mb-3">Ориентация</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setFormData({ ...formData, orientation: 'portrait' })}
                  data-orientation="portrait"
                  className={`flex-1 p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                    formData.orientation === 'portrait'
                      ? 'border-neon-red bg-neon-red/10'
                      : 'border-surface-elevated bg-surface hover:border-border'
                  }`}
                >
                  <div className="w-8 h-10 bg-current opacity-20 rounded mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Портрет</span>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, orientation: 'landscape' })}
                  data-orientation="landscape"
                  className={`flex-1 p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                    formData.orientation === 'landscape'
                      ? 'border-neon-red bg-neon-red/10'
                      : 'border-surface-elevated bg-surface hover:border-border'
                  }`}
                >
                  <div className="w-10 h-8 bg-current opacity-20 rounded mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Альбом</span>
                </button>
              </div>
            </div>

            {/* Frame Options */}
            <div>
              <p className="text-sm text-secondary mb-3">Рамка</p>
              <div className="space-y-3">
                {frameOptions.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setFormData({ ...formData, frame: frame.id })}
                    data-frame-option={frame.id}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                      formData.frame === frame.id
                        ? 'border-neon-red bg-neon-red/10'
                        : 'border-surface-elevated bg-surface hover:border-border'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {frame.icon} {frame.name}
                      </span>
                      <span className="text-neon-red font-bold">
                        {frame.price > 0 ? `+${frame.price.toLocaleString('ru-RU')} ₽` : 'Бесплатно'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Конструктор <span className="text-neon-red">карт</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Создайте уникальную карту, которая расскажет вашу историю. 
            Настройте каждую деталь по своему вкусу.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Steps */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold mb-6">Шаги создания</h3>
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      data-step={step.id}
                      className={`w-full p-4 rounded-xl transition-all duration-300 text-left flex items-center space-x-3 ${
                        activeStep === step.id
                          ? 'bg-neon-red text-white glow-neon-strong'
                          : 'bg-surface-elevated hover:bg-surface-higher'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeStep === step.id ? 'bg-white/20' : 'bg-surface'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">{step.label}</div>
                        <div className={`text-xs ${
                          activeStep === step.id ? 'text-white/70' : 'text-secondary'
                        }`}>
                          Шаг {index + 1}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center - Preview */}
          <div className="lg:col-span-6">
            <div className="bg-surface rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg mb-2">Предварительный просмотр</h3>
                <p className="text-secondary text-sm">Ваша карта будет выглядеть так</p>
              </div>

              {/* Map Preview Container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl mx-auto max-w-md aspect-[3/4]">
                {/* Map Area */}
                <div 
                  className="relative bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-full aspect-square mb-6 overflow-hidden"
                  data-map-canvas
                  style={{
                    background: formData.shape === 'circle' ? 'radial-gradient(circle, #FF8A65, #FF7043)' :
                               formData.shape === 'square' ? 'linear-gradient(45deg, #FF8A65, #FF7043)' :
                               'radial-gradient(ellipse, #FF8A65, #FF7043)',
                    clipPath: formData.shape === 'heart' ? 'polygon(50% 0%, 0% 40%, 50% 100%, 100% 40%)' :
                             formData.shape === 'square' ? 'none' : 'none',
                    borderRadius: formData.shape === 'square' ? '20px' : '50%'
                  }}
                >
                  {/* Mock map lines */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <path d="M20,50 Q50,20 80,50 T140,50" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M30,80 L170,80" stroke="white" strokeWidth="1.5" fill="none" />
                      <path d="M60,30 L60,170" stroke="white" strokeWidth="1" fill="none" />
                      <path d="M100,120 Q130,90 160,120" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="100" cy="100" r="3" fill="white" />
                    </svg>
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <button 
                      className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      data-zoom-in
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                    <button 
                      className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      data-zoom-out
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Move className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>

                {/* Text Area */}
                <div className="text-center text-gray-800">
                  <h2 className="text-2xl font-bold mb-1">{formData.title}</h2>
                  <div className="w-20 h-px bg-gray-400 mx-auto mb-1"></div>
                  <p className="text-sm font-medium mb-1">{formData.divider}</p>
                  <p className="text-xs text-gray-600">{formData.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Controls */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold mb-6">Настройки</h3>
              
              {renderStepContent()}

              {/* Price & CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-secondary">Стоимость:</span>
                  <span className="text-xl font-bold text-neon-red">
                    {getCurrentPrice().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                
                <button 
                  className="w-full btn-neon py-3 px-6 font-bold"
                  onClick={() => {
                    const configPrice = 7990;
                    addItem({
                      id: `custom-${Date.now()}`,
                      title: `Кастомная карта: ${formData.title}`,
                      artist: "Map Of Love",
                      size: formData.size,
                      price: configPrice,
                      image: "/lovable-uploads/829ba29c-0c29-4a41-b62b-eba9ad99284d.png"
                    });
                  }}
                  data-add-config-to-cart
                >
                  Добавить в корзину
                </button>
                
                <p className="text-xs text-secondary text-center mt-3">
                  Бесплатная доставка по России
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructor;