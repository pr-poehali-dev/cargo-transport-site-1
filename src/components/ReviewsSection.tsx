import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ReviewsSection() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    text: '',
    rating: 5
  });
  const reviews = [
    {
      name: 'Алексей Петров',
      company: 'ООО "Строймаркет"',
      text: 'Работаем с компанией уже 3 года. Всегда вовремя, груз в сохранности. Рекомендуем!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      company: 'ИП Иванова М.С.',
      text: 'Отличный сервис! Перевезли хрупкий товар на дальнее расстояние без повреждений.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      company: 'Торговый дом "Профи"',
      text: 'Профессиональный подход, адекватные цены. Особенно нравится возможность отслеживания груза.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за отзыв! Мы свяжемся с вами для подтверждения.');
    setOpen(false);
    setFormData({ name: '', company: '', text: '', rating: 5 });
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground mb-6">Нам доверяют тысячи компаний</p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Icon name="MessageSquare" size={20} />
                Оставить отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Оставить отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своим мнением о нашей работе
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Компания (необязательно)"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="transition-all"
                      >
                        <Icon 
                          name="Star" 
                          size={32} 
                          className={star <= formData.rating ? 'fill-accent text-accent' : 'text-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Ваш отзыв"
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Отправить отзыв</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className={`hover:shadow-lg transition-shadow animate-fade-in-up animation-delay-${idx * 100}`}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.company}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}