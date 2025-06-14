
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import ComingSoonSection from "@/components/landing/ComingSoonSection";
import FaqSection from "@/components/landing/FaqSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import PageFooter from "@/components/landing/PageFooter";

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
      <Header navLinks={navLinks} />
      <HeroSection />
      <AboutSection />
      <ForWhomSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AdvantagesSection />
      <ComingSoonSection />
      <FaqSection faqItems={faqItems} />
      <CallToActionSection />
      <PageFooter />
    </div>
  );
};

export default Index;
