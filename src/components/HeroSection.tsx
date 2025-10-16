import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function HeroSection() {
  const { toast } = useToast();
  const [calcWeight, setCalcWeight] = useState('');
  const [calcDistance, setCalcDistance] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const weight = parseFloat(calcWeight);
    const distance = parseFloat(calcDistance);
    
    if (!weight || !distance) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля калькулятора",
        variant: "destructive"
      });
      return;
    }

    const basePrice = 500;
    const pricePerKm = 25;
    const pricePerKg = 3;
    
    const total = basePrice + (distance * pricePerKm) + (weight * pricePerKg);
    setCalculatedPrice(Math.round(total));
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Надежная доставка грузов
            </h1>
            <p className="text-xl text-white/90">
              Профессиональные грузоперевозки по всей России. Гарантируем сохранность груза и соблюдение сроков.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary" className="font-semibold text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg">
                Оставить заявку
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
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

          <Card className="bg-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
              <CardDescription>Узнайте стоимость доставки прямо сейчас</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Вес груза (кг)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  placeholder="1000" 
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distance">Расстояние (км)</Label>
                <Input 
                  id="distance" 
                  type="number" 
                  placeholder="500" 
                  value={calcDistance}
                  onChange={(e) => setCalcDistance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargo-type">Тип груза</Label>
                <Select>
                  <SelectTrigger id="cargo-type">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Генеральные грузы</SelectItem>
                    <SelectItem value="oversized">Негабаритные грузы</SelectItem>
                    <SelectItem value="fragile">Хрупкие грузы</SelectItem>
                    <SelectItem value="refrigerated">Рефрижераторные</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {calculatedPrice !== null && (
                <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white">
                  <div className="text-sm font-semibold">Примерная стоимость:</div>
                  <div className="text-3xl font-bold">{calculatedPrice.toLocaleString()} ₽</div>
                </div>
              )}

              <Button onClick={calculatePrice} className="w-full font-semibold" size="lg">
                <Icon name="Calculator" size={18} className="mr-2" />
                Рассчитать
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}