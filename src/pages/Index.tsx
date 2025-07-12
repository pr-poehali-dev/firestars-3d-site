import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      icon: "Box",
      title: "3D-моделирование",
      description:
        "Игровые карты, маппинг, интерьеры – создаем высококачественные 3D-модели любой сложности",
      features: ["Игровые карты", "Маппинг", "Интерьеры", "Персонажи"],
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description:
        "Графический дизайн, UI/UX дизайн, создание стильных иконок и логотипов",
      features: ["Графический дизайн", "UI/UX дизайн", "Иконки", "Логотипы"],
    },
    {
      icon: "Gamepad2",
      title: "GTA проекты",
      description:
        "Воссоздание любых интересов заказчика в стиле GTA. Хотите увидеть свой город в игре?",
      features: ["Карты городов", "Моды GTA", "Текстуры", "Освещение"],
    },
    {
      icon: "Zap",
      title: "Любые задачи",
      description:
        "Не ограничиваемся GTA! Готовы взяться за проекты любой сложности",
      features: ["Разработка", "Дизайн", "3D-моделирование", "Анимация"],
    },
  ];

  const portfolio = [
    {
      title: "GTA Vice City Remake",
      category: "3D Моделирование",
      image: "/img/003c64b7-6fad-4970-a2b0-1ea6704b82ec.jpg",
    },
    {
      title: "Cyberpunk Interface",
      category: "UI/UX Дизайн",
      image: "/img/a0510456-7737-4f16-9fea-149f782cf54f.jpg",
    },
    {
      title: "Liberty City Map",
      category: "Маппинг",
      image: "/img/53b21371-255b-4d8d-b3ab-2a8bfaa58c0d.jpg",
    },
    {
      title: "Neon Car Pack",
      category: "3D Модели",
      image: "/img/003c64b7-6fad-4970-a2b0-1ea6704b82ec.jpg",
    },
    {
      title: "Los Santos Mod",
      category: "GTA Моды",
      image: "/img/53b21371-255b-4d8d-b3ab-2a8bfaa58c0d.jpg",
    },
    {
      title: "Retro Gaming UI",
      category: "Интерфейсы",
      image: "/img/a0510456-7737-4f16-9fea-149f782cf54f.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      role: "Indie разработчик",
      content:
        "FireStars превратили мою идею в потрясающую 3D-модель! Качество работы на высшем уровне.",
      rating: 5,
    },
    {
      name: "Мария К.",
      role: "Геймдизайнер",
      content:
        "Отличная команда! Создали карту моего родного города в стиле GTA. Просто невероятно!",
      rating: 5,
    },
    {
      name: "Дмитрий П.",
      role: "Стример",
      content:
        "Заказывал UI для стрима. Ребята сделали всё быстро и стильно. Рекомендую!",
      rating: 5,
    },
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт и профессионализм",
      description:
        "В нашей команде – опытные разработчики, дизайнеры и 3D-модельеры",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description:
        "Мы внимательно относимся к каждому проекту и предлагаем уникальные решения",
    },
    {
      icon: "Shield",
      title: "Высокое качество",
      description:
        "Мы гарантируем высокое качество нашей работы и стремимся к идеальному результату",
    },
    {
      icon: "Sparkles",
      title: "Креативность",
      description:
        "Мы всегда ищем новые идеи и подходы, чтобы создавать что-то по-настоящему особенное",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Icon name="Flame" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-white">FireStars</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#services"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#order"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Заказать
            </a>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
            🔥 Студия 3D-дизайна в стиле GTA
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent font-heading">
            FireStars
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Воплощаем ваши идеи в стиле GTA! 3D-моделирование, дизайн и креатив
            на высшем уровне.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть работы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-3"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Обсудить проект
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Превращаем ваши идеи в реальность с помощью передовых технологий
            3D-моделирования и дизайна
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} className="text-white" size={28} />
                </div>
                <CardTitle className="text-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" className="text-green-400" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading">
            Почему выбирают нас
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={advantage.icon} className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-400">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading">
            Портфолио
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Посмотрите на наши лучшие работы в области 3D-моделирования и
            дизайна
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-orange-500/80">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Посмотреть все работы
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2 font-heading">
                Заказать проект
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Расскажите о своей идее, и мы воплотим её в реальность!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Ваше имя</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Тип проекта</label>
                <select className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white">
                  <option value="">Выберите тип проекта</option>
                  <option value="3d">3D-моделирование</option>
                  <option value="design">Дизайн</option>
                  <option value="gta">GTA проект</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">
                  Описание проекта
                </label>
                <Textarea
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                  placeholder="Расскажите подробно о вашем проекте, ваших идеях и пожеланиях..."
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
              <p className="text-center text-gray-400 text-sm">
                Мы свяжемся с вами в течение 24 часов
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Icon name="Flame" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-white">FireStars</span>
              </div>
              <p className="text-gray-400">
                Студия 3D-дизайна и разработки в стиле GTA. Воплощаем ваши идеи
                в реальность!
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Услуги</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  3D-моделирование
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Дизайн
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  GTA проекты
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Разработка
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Компания</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  О нас
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Портфолио
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Отзывы
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Mail" size={16} />
                  <span>hello@firestars.studio</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon name="Youtube" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 FireStars Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
