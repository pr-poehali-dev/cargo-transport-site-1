import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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
    icon: 'FileText',
    title: 'Все документы',
    description: 'Полный пакет документов и сопроводительные накладные'
  }
];

export default function AdvantagesSection() {
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
        </div>
      </div>
    </section>
  );
}
