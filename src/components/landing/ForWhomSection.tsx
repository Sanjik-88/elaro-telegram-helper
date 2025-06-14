
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const ForWhomSection = () => {
  return (
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
  );
};

export default ForWhomSection;
