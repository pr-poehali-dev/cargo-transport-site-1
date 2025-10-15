import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ReviewsSection() {
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

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground">Нам доверяют тысячи компаний</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
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
