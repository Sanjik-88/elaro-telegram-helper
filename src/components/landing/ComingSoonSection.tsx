
import { FileText, CreditCard, BarChart2, Mic, Clock, LucideIcon } from "lucide-react";

interface ComingSoonItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ComingSoonSection = () => {
  const comingSoonItems: ComingSoonItem[] = [
    { icon: FileText, title: "Автоматические отчёты", description: "По урокам и активности." },
    { icon: CreditCard, title: "Интеграция с платежами", description: "Для удобного приёма оплат." },
    { icon: BarChart2, title: "Аналитика времени", description: "Отслеживание сэкономленного времени." },
    { icon: Mic, title: "Расшифровка голосовых", description: "Преобразование аудио в текст." },
  ];

  return (
    <section id="coming-soon" className="py-16 md:py-24 bg-primary-purple/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
            <Clock className="inline-block h-8 w-8 mr-2 text-primary-purple" />
            Скоро в Elaro
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {comingSoonItems.map(item => (
            <div key={item.title} className="flex flex-col items-center text-center p-6 border border-primary-purple/20 rounded-xl bg-white shadow-lg">
              <item.icon className="h-10 w-10 text-primary-purple mb-4" />
              <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-text-dark/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
