
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, Settings2, Lock, ShieldCheck, LucideIcon } from "lucide-react";

interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AdvantagesSection = () => {
  const advantageItems: AdvantageItem[] = [
    { icon: MessageSquare, title: "Управление общением", description: "Ответы не отправляются автоматически — вы всегда подтверждаете или редактируете сообщение." },
    { icon: Brain, title: "Умные шаблоны", description: "ИИ формирует черновики ответов на основе вашей базы знаний и часто задаваемых вопросов." },
    { icon: Settings2, title: "Простота запуска", description: "Работает в Telegram — без интеграций, настроек и технических сложностей." },
    { icon: Lock, title: "Ответы по вашей базе", description: "Ассистент использует только ту информацию, которую вы загрузили и одобрили." },
  ];

  return (
    <section id="advantages" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
            <ShieldCheck className="inline-block h-8 w-8 mr-2 text-primary-purple" />
            Преимущества использования
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantageItems.map(item => (
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

export default AdvantagesSection;
