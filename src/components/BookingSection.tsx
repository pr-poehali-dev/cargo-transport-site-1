import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function BookingSection() {
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Онлайн-бронирование</h2>
            <p className="text-xl text-white/90">Оформите заявку прямо сейчас и получите скидку 10%</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" required placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" required placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">Откуда</Label>
                    <Input id="from" required placeholder="Москва, ул. Ленина 1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Куда</Label>
                    <Input id="to" required placeholder="Санкт-Петербург" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="book-weight">Вес (кг)</Label>
                    <Input id="book-weight" type="number" required placeholder="1000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-volume">Объем (м³)</Label>
                    <Input id="book-volume" type="number" placeholder="10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-date">Дата отправки</Label>
                    <Input id="book-date" type="date" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="book-type">Тип груза</Label>
                  <Select required>
                    <SelectTrigger id="book-type">
                      <SelectValue placeholder="Выберите тип груза" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Генеральные грузы</SelectItem>
                      <SelectItem value="oversized">Негабаритные грузы</SelectItem>
                      <SelectItem value="fragile">Хрупкие грузы</SelectItem>
                      <SelectItem value="refrigerated">Рефрижераторные</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Особые требования к перевозке..." rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
