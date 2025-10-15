import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Container" size={28} />
            <span className="text-xl font-bold">ИВТЛК ЛогиЛюкс</span>
          </div>
          <p className="text-white/80">© 2024 ИВТЛК ЛогиЛюкс. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}