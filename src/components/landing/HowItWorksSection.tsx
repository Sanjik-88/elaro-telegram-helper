
import { Mail, Brain, Eye, Send, Wrench } from "lucide-react";

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
