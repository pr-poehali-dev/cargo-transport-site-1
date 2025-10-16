import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const phoneNumber = '79010370963';
  const message = 'Здравствуйте! Интересует грузоперевозка.';
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <a href="tel:+79010370963" className="fixed bottom-24 right-6 z-50 md:hidden">
        <Button
          className="h-14 w-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 p-0 border-2 border-white"
          size="icon"
        >
          <Icon name="Phone" size={28} className="text-white" />
        </Button>
      </a>
      
      <Button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] z-50 p-0 md:hidden"
        size="icon"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
      </Button>
    </>
  );
}