import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import QuoteRequestDialog from '@/components/QuoteRequestDialog';

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e11ae316-4ca9-428c-b69f-6dd56d560283/files/06711f6e-f2fe-456e-bef9-11a939b3a576.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/70"></div>
      <div className="container mx-auto px-4 relative z-10">
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
              <CardTitle className="text-2xl">Индивидуальный расчёт</CardTitle>
              <CardDescription>Получите точную стоимость доставки для вашего груза</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Персональные условия</div>
                    <div className="text-sm text-muted-foreground">Учитываем все параметры вашего груза</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Быстрый ответ</div>
                    <div className="text-sm text-muted-foreground">Расчёт за 15 минут в рабочее время</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Без переплат</div>
                    <div className="text-sm text-muted-foreground">Оптимальный маршрут и честная цена</div>
                  </div>
                </div>
              </div>

              <Button onClick={() => setIsDialogOpen(true)} className="w-full font-semibold" size="lg">
                <Icon name="Calculator" size={18} className="mr-2" />
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