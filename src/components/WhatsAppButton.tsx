import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const phoneNumber = '79010370963';
  const message = 'Здравствуйте! Интересует грузоперевозка.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] z-50 p-0"
      size="icon"
    >
      <Icon name="MessageCircle" size={28} className="text-white" />
    </Button>
  );
}