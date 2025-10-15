import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary/90 to-accent shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Icon name="Container" size={32} className="font-bold" />
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
  );
}