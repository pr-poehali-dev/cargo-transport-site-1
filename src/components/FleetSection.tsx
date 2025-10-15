import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FleetSection() {
  const trucks = [
    { name: 'Газель', capacity: '1.5 тонны', volume: '9 м³', icon: 'Truck' },
    { name: 'Бортовая 5т', capacity: '5 тонн', volume: '30 м³', icon: 'Truck' },
    { name: 'Фура 20т', capacity: '20 тонн', volume: '82 м³', icon: 'Truck' },
    { name: 'Рефрижератор', capacity: '10 тонн', volume: '60 м³', icon: 'Snowflake' },
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наш автопарк</h2>
          <p className="text-xl text-muted-foreground">Современная техника для перевозки любых грузов</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {trucks.map((truck, idx) => (
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
  );
}
