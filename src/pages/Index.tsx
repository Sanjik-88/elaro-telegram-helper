
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Label } from "@/components/ui/label"; // Assuming you have a Label component

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
    <div className="min-h-screen bg-white text-text-dark font-roboto">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary-purple text-white backdrop-blur supports-[backdrop-filter]:bg-primary-purple/90">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-accent-green" />
            <span className="font-bold">Flexberry Elaro</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent-green/80"
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
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-text-dark">
            Flexberry Elaro
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-dark/80 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Ваш AI-ассистент в Telegram, который экономит часы на переписке и помогает сосредоточиться на важном
          </p>
          <div className="mt-4 flex items-center justify-center text-md text-text-dark/80">
            <Pin className="mr-2 h-5 w-5 text-primary-purple" />
            <span>Без лишней рутины. С контролем. От вашего имени.</span>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-accent-green text-black hover:bg-accent-green/90 rounded-xl shadow-md font-medium">
              Купить
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/10 rounded-xl shadow-md font-medium">
                  Демо <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white rounded-xl shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-text-dark font-bold">Запрос Демо</DialogTitle>
                  <DialogDescription className="text-text-dark/80">
                    Оставьте ваши данные, и мы свяжемся с вами для демонстрации.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-text-dark">
                      Имя
                    </Label>
                    <Input id="name" defaultValue="Иван Петров" className="col-span-3 border-gray-300 rounded-md text-text-dark" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right text-text-dark">
                      Email
                    </Label>
                    <Input id="email" type="email" defaultValue="ivan@example.com" className="col-span-3 border-gray-300 rounded-md text-text-dark" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                     <Button type="button" variant="outline" className="rounded-xl text-text-dark font-medium">Отмена</Button>
                  </DialogClose>
                  <Button type="submit" className="bg-accent-green text-black hover:bg-accent-green/90 rounded-xl shadow-md font-medium">Отправить</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <Info className="inline-block h-8 w-8 mr-2 text-primary-purple" />
              Что такое Flexberry Elaro?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-dark/80">
              Flexberry Elaro — это инновационный ИИ-ассистент, разработанный специально для преподавателей, самозанятых специалистов и владельцев образовательных курсов. Он предлагает решение на базе современных технологий искусственного интеллекта, которое работает непосредственно в привычных инструментах пользователя.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-dark/80">
              Ассистент работает с помощью двух Telegram-ботов:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-text-dark font-bold">
                  <Bot className="mr-2 h-6 w-6 text-primary-purple" />
                  Бот для учеников/клиентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark/80">Они пишут свои вопросы.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-text-dark font-bold">
                  <Edit3 className="mr-2 h-6 w-6 text-primary-purple" />
                  Бот для вас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark/80">Вы видите черновики ответов, подтверждаете или редактируете.</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-text-dark/80">
            Все ответы перед отправкой проверяются, утверждаются и рецензируются вами.
          </p>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="py-16 md:py-24 bg-primary-purple/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <Users className="inline-block h-8 w-8 mr-2 text-primary-purple" />
              Для кого Flexberry Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-text-dark font-bold">Онлайн-школам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark/80">И образовательным проектам, где важно быстро и качественно отвечать учащимся.</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-text-dark font-bold">Репетиторам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark/80">И преподавателям с десятками учеников и повторяющимися вопросами.</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-text-dark font-bold">Командам поддержки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark/80">Которые заботятся о клиентском опыте.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <Wrench className="inline-block h-8 w-8 mr-2 text-primary-purple" />
              Как работает Flexberry Elaro
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Mail className="h-12 w-12 text-primary-purple mb-4" />
              <h3 className="text-xl font-semibold text-text-dark">Ученики задают вопросы</h3>
              <p className="mt-2 text-text-dark/80">Через Telegram-бота.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Brain className="h-12 w-12 text-primary-purple mb-4" />
              <h3 className="text-xl font-semibold text-text-dark">ИИ ищет ответ</h3>
              <p className="mt-2 text-text-dark/80">В базе знаний.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 text-primary-purple mb-4" />
              <h3 className="text-xl font-semibold text-text-dark">Вы проверяете</h3>
              <p className="mt-2 text-text-dark/80">Вопрос и черновик ответа — подтверждаете или редактируете.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Send className="h-12 w-12 text-primary-purple mb-4" />
              <h3 className="text-xl font-semibold text-text-dark">Ответ уходит ученику</h3>
              <p className="mt-2 text-text-dark/80">После вашего одобрения.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-primary-purple/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <Sparkles className="inline-block h-8 w-8 mr-2 text-primary-purple" />
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
              <Card key={item.title} className="bg-white shadow-lg rounded-xl">
                <CardHeader className="items-center">
                  <item.icon className="h-10 w-10 text-primary-purple mb-2" />
                  <CardTitle className="text-center text-text-dark font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-dark/80 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <ShieldCheck className="inline-block h-8 w-8 mr-2 text-primary-purple" />
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
               <Card key={item.title} className="bg-white shadow-lg rounded-xl">
                <CardHeader className="items-center">
                  <item.icon className="h-10 w-10 text-primary-purple mb-2" />
                  <CardTitle className="text-center text-text-dark font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-dark/80 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-16 md:py-24 bg-primary-purple/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <Clock className="inline-block h-8 w-8 mr-2 text-primary-purple" />
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
              <div key={item.title} className="flex flex-col items-center text-center p-6 border border-primary-purple/20 rounded-xl bg-white shadow-lg">
                <item.icon className="h-10 w-10 text-primary-purple mb-4" />
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-dark/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
              <HelpCircle className="inline-block h-8 w-8 mr-2 text-primary-purple" />
              Часто задаваемые вопросы (FAQ)
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index} className="border-primary-purple/20">
                  <AccordionTrigger className="text-lg text-left hover:no-underline text-text-dark font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-text-dark/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-primary-purple text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Готовы делегировать рутину?
          </h2>
          <p className="mt-6 text-lg leading-8 sm:text-xl">
            Попробуйте Flexberry Elaro — 7 дней бесплатно
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-accent-green text-black hover:bg-accent-green/90 rounded-xl shadow-md font-medium">
              <Rocket className="mr-2 h-5 w-5" />
              Получить доступ в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary-purple/20 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-text-dark/80">
            © {new Date().getFullYear()} Flexberry
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-text-dark/80 hover:text-primary-purple">
              Поддержка
            </a>
            <a href="#" className="text-sm text-text-dark/80 hover:text-primary-purple">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

