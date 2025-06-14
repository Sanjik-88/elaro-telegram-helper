
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pin,
  Mail,
  Brain,
  Eye,
  Send,
  Inbox,
  Edit3,
  Bot,
  BookOpen,
  MessageSquare,
  Settings2,
  Lock,
  FileText,
  CreditCard,
  BarChart2,
  Mic,
  ChevronRight,
  Rocket,
  Users,
  Target,
  Wrench,
  Sparkles,
  ShieldCheck,
  Clock,
  HelpCircle,
  Info,
} from "lucide-react";

const Index = () => {
  const navLinks = [
    { href: "#about", label: "О проекте" },
    { href: "#for-whom", label: "Для кого" },
    { href: "#how-it-works", label: "Как работает" },
    { href: "#features", label: "Что умеет" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#coming-soon", label: "Скоро" },
    { href: "#faq", label: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Сколько времени нужно, чтобы запустить Elaro?",
      answer:
        "До 15 минут: загружаете базу знаний, настраиваете запрос (промпт), получаете Telegram-ссылки.",
    },
    {
      question: "Я смогу редактировать ответы?",
      answer:
        "Да. Каждый ответ приходит как черновик — вы можете его поправить или подтвердить.",
    },
    {
      question: "Бот отвечает вместо меня?",
      answer:
        "Нет. Это помощник — он не отправляет ничего без вашего одобрения.",
    },
    {
      question: "Как загружается база знаний?",
      answer:
        "Через простой веб-интерфейс — текст, списки, инструкции и часто задаваемые вопросы.",
    },
    {
      question: "Если я один преподаватель — мне это подходит?",
      answer: "Да! Даже при 5–10 учениках Elaro заметно экономит время.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold">Flexberry Elaro</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Flexberry Elaro
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Ваш AI-ассистент в Telegram, который экономит часы на переписке и помогает сосредоточиться на важном
          </p>
          <div className="mt-4 flex items-center justify-center text-md text-muted-foreground">
            <Pin className="mr-2 h-5 w-5 text-primary" />
            <span>Без лишней рутины. С контролем. От вашего имени.</span>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Купить
            </Button>
            <Button size="lg" variant="outline">
              Демо <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Info className="inline-block h-8 w-8 mr-2 text-primary" />
              Что такое Flexberry Elaro?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Flexberry Elaro — это инновационный ИИ-ассистент, разработанный специально для преподавателей, самозанятых специалистов и владельцев образовательных курсов. Он предлагает решение на базе современных технологий искусственного интеллекта, которое работает непосредственно в привычных инструментах пользователя.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ассистент работает с помощью двух Telegram-ботов:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-6 w-6 text-primary" />
                  Бот для учеников/клиентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Они пишут свои вопросы.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit3 className="mr-2 h-6 w-6 text-primary" />
                  Бот для вас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Вы видите черновики ответов, подтверждаете или редактируете.</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
            Все ответы перед отправкой проверяются, утверждаются и рецензируются вами.
          </p>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Users className="inline-block h-8 w-8 mr-2 text-primary" />
              Для кого Flexberry Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Онлайн-школам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">И образовательным проектам, где важно быстро и качественно отвечать учащимся.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Репетиторам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">И преподавателям с десятками учеников и повторяющимися вопросами.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Командам поддержки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Которые заботятся о клиентском опыте.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Wrench className="inline-block h-8 w-8 mr-2 text-primary" />
              Как работает Flexberry Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Ученики задают вопросы</h3>
              <p className="mt-2 text-muted-foreground">Через Telegram-бота.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">ИИ ищет ответ</h3>
              <p className="mt-2 text-muted-foreground">В базе знаний.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Вы проверяете</h3>
              <p className="mt-2 text-muted-foreground">Вопрос и черновик ответа — подтверждаете или редактируете.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Send className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Ответ уходит ученику</h3>
              <p className="mt-2 text-muted-foreground">После вашего одобрения.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Sparkles className="inline-block h-8 w-8 mr-2 text-primary" />
              Что умеет Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Inbox, title: "Классифицирует сообщения", description: "Входящие сообщения автоматически сортируются." },
              { icon: Edit3, title: "Генерирует черновики", description: "Создает предварительные варианты ответов." },
              { icon: Bot, title: "Отвечает на типовые вопросы", description: "Быстро предоставляет ответы на частые запросы." },
              { icon: BookOpen, title: "Использует базу знаний", description: "Формирует интеллектуальные ответы на основе ваших данных." },
            ].map(item => (
              <Card key={item.title}>
                <CardHeader className="items-center">
                  <item.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <ShieldCheck className="inline-block h-8 w-8 mr-2 text-primary" />
              Преимущества использования
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageSquare, title: "Управление общением", description: "Ответы не отправляются автоматически — вы всегда подтверждаете или редактируете сообщение." },
              { icon: Brain, title: "Умные шаблоны", description: "ИИ формирует черновики ответов на основе вашей базы знаний и часто задаваемых вопросов." },
              { icon: Settings2, title: "Простота запуска", description: "Работает в Telegram — без интеграций, настроек и технических сложностей." },
              { icon: Lock, title: "Ответы по вашей базе", description: "Ассистент использует только ту информацию, которую вы загрузили и одобрили." },
            ].map(item => (
               <Card key={item.title}>
                <CardHeader className="items-center">
                  <item.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Clock className="inline-block h-8 w-8 mr-2 text-primary" />
              Скоро в Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileText, title: "Автоматические отчёты", description: "По урокам и активности." },
              { icon: CreditCard, title: "Интеграция с платежами", description: "Для удобного приёма оплат." },
              { icon: BarChart2, title: "Аналитика времени", description: "Отслеживание сэкономленного времени." },
              { icon: Mic, title: "Расшифровка голосовых", description: "Преобразование аудио в текст." },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <HelpCircle className="inline-block h-8 w-8 mr-2 text-primary" />
              Часто задаваемые вопросы (FAQ)
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-blue-600 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Готовы делегировать рутину?
          </h2>
          <p className="mt-6 text-lg leading-8 sm:text-xl">
            Попробуйте Flexberry Elaro — 7 дней бесплатно
          </p>
          <div className="mt-10">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:bg-gray-200">
              <Rocket className="mr-2 h-5 w-5" />
              Получить доступ в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flexberry
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Поддержка
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

