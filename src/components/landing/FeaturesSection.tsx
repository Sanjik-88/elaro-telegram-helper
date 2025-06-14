
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Inbox, Edit3, Bot, BookOpen, Sparkles, LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  const featureItems: FeatureItem[] = [
    { icon: Inbox, title: "Классифицирует сообщения", description: "Входящие сообщения автоматически сортируются." },
    { icon: Edit3, title: "Генерирует черновики", description: "Создает предварительные варианты ответов." },
    { icon: Bot, title: "Отвечает на типовые вопросы", description: "Быстро предоставляет ответы на частые запросы." },
    { icon: BookOpen, title: "Использует базу знаний", description: "Формирует интеллектуальные ответы на основе ваших данных." },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-primary-purple/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
            <Sparkles className="inline-block h-8 w-8 mr-2 text-primary-purple" />
            Что умеет Elaro
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map(item => (
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
  );
};

export default FeaturesSection;
