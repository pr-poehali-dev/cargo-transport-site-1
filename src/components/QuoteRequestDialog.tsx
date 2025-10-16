import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface QuoteRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuoteRequestDialog({ open, onOpenChange }: QuoteRequestDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weight: '',
    distance: '',
    cargoType: '',
    routeFrom: '',
    routeTo: '',
    comment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля: имя, телефон, email",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/7473148f-2f8a-4926-bb87-90392695731b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        onOpenChange(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          weight: '',
          distance: '',
          cargoType: '',
          routeFrom: '',
          routeTo: '',
          comment: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или позвоните нам",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Запрос на расчёт стоимости</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы рассчитаем стоимость доставки вашего груза
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя *</Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="routeFrom">Откуда</Label>
              <Input
                id="routeFrom"
                placeholder="Москва"
                value={formData.routeFrom}
                onChange={(e) => setFormData({ ...formData, routeFrom: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="routeTo">Куда</Label>
              <Input
                id="routeTo"
                placeholder="Санкт-Петербург"
                value={formData.routeTo}
                onChange={(e) => setFormData({ ...formData, routeTo: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Вес груза (кг)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="1000"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="distance">Расстояние (км)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="700"
                value={formData.distance}
                onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cargoType">Тип груза</Label>
            <Select value={formData.cargoType} onValueChange={(value) => setFormData({ ...formData, cargoType: value })}>
              <SelectTrigger id="cargoType">
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

          <div className="space-y-2">
            <Label htmlFor="comment">Дополнительная информация</Label>
            <Textarea
              id="comment"
              placeholder="Укажите особенности груза, сроки доставки и другие важные детали"
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}