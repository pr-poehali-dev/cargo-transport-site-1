import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuoteRequestDialog from '@/components/QuoteRequestDialog';

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e11ae316-4ca9-428c-b69f-6dd56d560283/files/06711f6e-f2fe-456e-bef9-11a939b3a576.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
            Надежная доставка грузов
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Профессиональные грузоперевозки по всей России. Гарантируем сохранность груза и соблюдение сроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" variant="secondary" className="font-semibold text-base md:text-lg w-full sm:w-auto">
              <Icon name="Calculator" size={18} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button onClick={() => setIsDialogOpen(true)} size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold text-base md:text-lg w-full sm:w-auto">
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 md:pt-8 max-w-md mx-auto animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">500+</div>
              <div className="text-xs sm:text-sm text-white/80">клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">99%</div>
              <div className="text-xs sm:text-sm text-white/80">в срок</div>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}