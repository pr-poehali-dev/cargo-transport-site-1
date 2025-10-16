import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">Полный спектр грузоперевозок для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary animate-fade-in-up animation-delay-0">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <CardTitle>Городские перевозки</CardTitle>
              <CardDescription>Быстрая доставка по городу с гарантией времени</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary animate-fade-in-up animation-delay-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <CardTitle>Междугородние перевозки</CardTitle>
              <CardDescription>Доставка по всей России с отслеживанием груза</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary animate-fade-in-up animation-delay-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" size={32} className="text-white" />
              </div>
              <CardTitle>Хранение грузов</CardTitle>
              <CardDescription>Современные склады с системой безопасности</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent animate-fade-in-up animation-delay-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="PackageOpen" size={32} className="text-white" />
              </div>
              <CardTitle>Негабаритные грузы</CardTitle>
              <CardDescription>Перевозка спецтехники и крупногабаритных грузов</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent animate-fade-in-up animation-delay-400">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Snowflake" size={32} className="text-white" />
              </div>
              <CardTitle>Рефрижераторы</CardTitle>
              <CardDescription>Перевозка скоропортящихся товаров с контролем температуры</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary animate-fade-in-up animation-delay-500">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="Globe" size={32} className="text-white" />
              </div>
              <CardTitle>Международные перевозки</CardTitle>
              <CardDescription>Доставка в Беларусь и Казахстан с таможенным оформлением</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent animate-fade-in-up animation-delay-600">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="ShoppingCart" size={32} className="text-white" />
              </div>
              <CardTitle>Доставка на маркетплейсы</CardTitle>
              <CardDescription>Перевозка товаров на склады Wildberries, Ozon, Яндекс.Маркет</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}