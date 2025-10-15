import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [calcWeight, setCalcWeight] = useState('');
  const [calcDistance, setCalcDistance] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const weight = parseFloat(calcWeight);
    const distance = parseFloat(calcDistance);
    
    if (!weight || !distance) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля калькулятора",
        variant: "destructive"
      });
      return;
    }

    const basePrice = 500;
    const pricePerKm = 25;
    const pricePerKg = 15;
    
    const total = basePrice + (distance * pricePerKm) + (weight * pricePerKg);
    setCalculatedPrice(Math.round(total));
  };

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary/90 to-accent shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Icon name="Truck" size={32} className="font-bold" />
              <span className="text-2xl font-bold">ИВТЛК ЛогиЛюкс</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-white hover:text-accent transition-colors font-semibold">Главная</a>
              <a href="#services" className="text-white hover:text-accent transition-colors font-semibold">Услуги</a>
              <a href="#fleet" className="text-white hover:text-accent transition-colors font-semibold">Автопарк</a>
              <a href="#pricing" className="text-white hover:text-accent transition-colors font-semibold">Тарифы</a>
              <a href="#reviews" className="text-white hover:text-accent transition-colors font-semibold">Отзывы</a>
              <a href="#contacts" className="text-white hover:text-accent transition-colors font-semibold">Контакты</a>
            </div>

            <Button variant="secondary" className="font-semibold">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (901) 037-09-63
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Надежная доставка грузов
              </h1>
              <p className="text-xl text-white/90">
                Профессиональные грузоперевозки по всей России. Гарантируем сохранность груза и соблюдение сроков.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" className="font-semibold text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg">
                  Оставить заявку
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-white/80">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">99%</div>
                  <div className="text-sm text-white/80">в срок</div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
                <CardDescription>Узнайте стоимость доставки прямо сейчас</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Вес груза (кг)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="1000" 
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distance">Расстояние (км)</Label>
                  <Input 
                    id="distance" 
                    type="number" 
                    placeholder="500" 
                    value={calcDistance}
                    onChange={(e) => setCalcDistance(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo-type">Тип груза</Label>
                  <Select>
                    <SelectTrigger id="cargo-type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Генеральные грузы</SelectItem>
                      <SelectItem value="oversized">Негабаритные грузы</SelectItem>
                      <SelectItem value="fragile">Хрупкие грузы</SelectItem>
                      <SelectItem value="refrigerated">Рефрижераторные</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {calculatedPrice !== null && (
                  <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white">
                    <div className="text-sm font-semibold">Примерная стоимость:</div>
                    <div className="text-3xl font-bold">{calculatedPrice.toLocaleString()} ₽</div>
                  </div>
                )}

                <Button onClick={calculatePrice} className="w-full font-semibold" size="lg">
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр грузоперевозок для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle>Городские перевозки</CardTitle>
                <CardDescription>Быстрая доставка по городу с гарантией времени</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle>Междугородние перевозки</CardTitle>
                <CardDescription>Доставка по всей России с отслеживанием груза</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <CardTitle>Хранение грузов</CardTitle>
                <CardDescription>Современные склады с системой безопасности</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PackageOpen" size={32} className="text-white" />
                </div>
                <CardTitle>Негабаритные грузы</CardTitle>
                <CardDescription>Перевозка спецтехники и крупногабаритных грузов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Snowflake" size={32} className="text-white" />
                </div>
                <CardTitle>Рефрижераторы</CardTitle>
                <CardDescription>Перевозка скоропортящихся товаров с контролем температуры</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={32} className="text-white" />
                </div>
                <CardTitle>Международные перевозки</CardTitle>
                <CardDescription>Доставка в Беларусь и Казахстан с таможенным оформлением</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" size={32} className="text-white" />
                </div>
                <CardTitle>Доставка на маркетплейсы</CardTitle>
                <CardDescription>Перевозка товаров на склады Wildberries, Ozon, Яндекс.Маркет</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground">Современная техника для перевозки любых грузов</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Газель', capacity: '1.5 тонны', volume: '9 м³', icon: 'Truck' },
              { name: 'Бортовая 5т', capacity: '5 тонн', volume: '30 м³', icon: 'Truck' },
              { name: 'Фура 20т', capacity: '20 тонн', volume: '82 м³', icon: 'Truck' },
              { name: 'Рефрижератор', capacity: '10 тонн', volume: '60 м³', icon: 'Snowflake' },
            ].map((truck, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={truck.icon as any} size={40} className="text-white" />
                  </div>
                  <CardTitle>{truck.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>Грузоподъемность: {truck.capacity}</div>
                    <div>Объем: {truck.volume}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Эконом</CardTitle>
                <div className="text-4xl font-bold text-primary my-4">от 500₽</div>
                <CardDescription>Для небольших грузов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Газель до 1.5т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>По городу</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Базовая страховка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-accent scale-105">
              <CardHeader className="text-center bg-gradient-to-br from-primary to-accent text-white rounded-t-lg">
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  ПОПУЛЯРНЫЙ
                </div>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <div className="text-4xl font-bold my-4">от 1500₽</div>
                <CardDescription className="text-white/90">Оптимальный выбор</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Бортовая до 5т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Межгород до 500км</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Полная страховка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>GPS-отслеживание</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-primary my-4">от 5000₽</div>
                <CardDescription>Для крупных грузов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Фура до 20т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>По всей России</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>VIP-страховка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Личный менеджер</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Экспедирование</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют тысячи компаний</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Петров',
                company: 'ООО "Строймаркет"',
                text: 'Работаем с компанией уже 3 года. Всегда вовремя, груз в сохранности. Рекомендуем!',
                rating: 5
              },
              {
                name: 'Мария Иванова',
                company: 'ИП Иванова М.С.',
                text: 'Отличный сервис! Перевезли хрупкий товар на дальнее расстояние без повреждений.',
                rating: 5
              },
              {
                name: 'Дмитрий Сидоров',
                company: 'Торговый дом "Профи"',
                text: 'Профессиональный подход, адекватные цены. Особенно нравится возможность отслеживания груза.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-lg">
                  +7 (901) 037-09-63
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-lg">
                  info@cargo-company.ru<br />
                  order@cargo-company.ru
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-lg">
                  г. Москва<br />
                  ул. Грузовая, д. 15
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Режим работы: Пн-Вс 24/7</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={28} />
              <span className="text-xl font-bold">ИВТЛК ЛогиЛюкс</span>
            </div>
            <p className="text-white/80">© 2024 ИВТЛК ЛогиЛюкс. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}