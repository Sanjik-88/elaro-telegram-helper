
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Bot, Edit3 } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
