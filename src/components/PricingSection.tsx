import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
          <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Эконом</CardTitle>
              <div className="text-4xl font-bold text-primary my-4">от 500₽</div>
              <CardDescription>Для небольших грузов</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Газель до 1.5т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>По городу</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Базовая страховка</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-accent scale-105">
            <CardHeader className="text-center bg-gradient-to-br from-primary to-accent text-white rounded-t-lg">
              <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                ПОПУЛЯРНЫЙ
              </div>
              <CardTitle className="text-2xl">Стандарт</CardTitle>
              <div className="text-4xl font-bold my-4">от 1500₽</div>
              <CardDescription className="text-white/90">Оптимальный выбор</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Бортовая до 5т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Межгород до 500км</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Полная страховка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>GPS-отслеживание</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Премиум</CardTitle>
              <div className="text-4xl font-bold text-primary my-4">от 5000₽</div>
              <CardDescription>Для крупных грузов</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Фура до 20т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>По всей России</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>VIP-страховка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Личный менеджер</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Экспедирование</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
