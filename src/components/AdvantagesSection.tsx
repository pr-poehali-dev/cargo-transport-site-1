import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuoteRequestDialog from '@/components/QuoteRequestDialog';

const advantages = [
  {
    icon: 'Shield',
    title: 'Страхование груза',
    description: 'Полное страхование вашего груза на весь период перевозки'
  },
  {
    icon: 'Clock',
    title: 'Доставка в срок',
    description: 'Гарантируем соблюдение сроков доставки или компенсируем задержку'
  },
  {
    icon: 'Truck',
    title: 'Современный автопарк',
    description: 'Более 50 грузовых автомобилей различной грузоподъёмности'
  },
  {
    icon: 'MapPin',
    title: 'Отслеживание груза',
    description: 'Онлайн-мониторинг местоположения вашего груза 24/7'
  },
  {
    icon: 'Users',
    title: 'Опытные водители',
    description: 'Профессиональные водители с опытом работы более 5 лет'
  },
  {
    icon: 'Wallet',
    title: 'Наличный и безналичный расчёт',
    description: 'Любая удобная форма оплаты: наличные, карта, счёт для юр. лиц'
  }
];

export default function AdvantagesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем полный комплекс услуг по грузоперевозкам с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-center">Индивидуальный расчёт</CardTitle>
              <CardDescription className="text-center">Получите точную стоимость доставки</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5" />
                  <div className="text-sm">Персональные условия</div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5" />
                  <div className="text-sm">Расчёт за 15 минут</div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5" />
                  <div className="text-sm">Без переплат</div>
                </div>
              </div>

              <Button onClick={() => setIsDialogOpen(true)} className="w-full font-semibold">
                <Icon name="Calculator" size={16} className="mr-2" />
                Запросить расчёт
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <QuoteRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}