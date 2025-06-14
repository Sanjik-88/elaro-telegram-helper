
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pin, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
