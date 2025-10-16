import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CallbackDialog from '@/components/CallbackDialog';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#fleet', label: 'Автопарк' },
    { href: '#pricing', label: 'Тарифы' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#contacts', label: 'Контакты' }
  ];

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary/90 to-accent shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Icon name="Container" size={32} className="font-bold" />
            <span className="text-xl md:text-2xl font-bold">ИВДоставка</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white hover:text-accent transition-colors font-semibold">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+79010370963" className="hidden sm:block">
              <Button variant="secondary" className="font-semibold">
                <Icon name="Phone" size={18} className="mr-2" />
                <span className="hidden lg:inline">+7 (901) 037-09-63</span>
                <span className="lg:hidden">Позвонить</span>
              </Button>
            </a>
            
            <Button onClick={() => setIsCallbackOpen(true)} variant="outline" className="font-semibold hidden sm:flex border-white text-white hover:bg-white/10">
              <Icon name="PhoneCall" size={18} className="mr-2" />
              <span className="hidden md:inline">Заказать звонок</span>
              <span className="md:hidden">Заявка</span>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white/10">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-primary">
              <div className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleMenuClick}
                    className="text-white hover:text-accent transition-colors font-semibold text-lg"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="tel:+79010370963" className="w-full">
                  <Button variant="secondary" className="w-full justify-start text-lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                </a>
                <Button onClick={() => { setIsCallbackOpen(true); setOpen(false); }} variant="outline" className="w-full justify-start text-lg border-white text-white hover:bg-white/10">
                  <Icon name="PhoneCall" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      <CallbackDialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen} />
    </header>
  );
}