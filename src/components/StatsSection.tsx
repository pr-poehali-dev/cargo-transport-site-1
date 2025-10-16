import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const stats = [
  {
    icon: 'Package',
    value: '12 500+',
    label: 'Успешных доставок',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: 'Users',
    value: '500+',
    label: 'Довольных клиентов',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: 'Truck',
    value: '50+',
    label: 'Автомобилей в парке',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: 'MapPin',
    value: '200+',
    label: 'Городов доставки',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: 'Clock',
    value: '99%',
    label: 'Доставка в срок',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: 'Award',
    value: '10 лет',
    label: 'На рынке',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Наши достижения</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Цифры, которые говорят о нашем профессионализме
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in-up animation-delay-${index * 100}`}
            >
              <CardContent className="pt-6 text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <Icon name={stat.icon} size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
