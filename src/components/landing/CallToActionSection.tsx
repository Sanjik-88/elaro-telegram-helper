
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
