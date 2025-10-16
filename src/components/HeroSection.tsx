import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuoteRequestDialog from '@/components/QuoteRequestDialog';

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e11ae316-4ca9-428c-b69f-6dd56d560283/files/06711f6e-f2fe-456e-bef9-11a939b3a576.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Надежная доставка грузов
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Профессиональные грузоперевозки по всей России. Гарантируем сохранность груза и соблюдение сроков.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" variant="secondary" className="font-semibold text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button onClick={() => setIsDialogOpen(true)} size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg">
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto">
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
      </div>

      <QuoteRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}