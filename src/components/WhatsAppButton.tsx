import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const phoneNumber = '79010370963';
  const message = 'Здравствуйте! Интересует грузоперевозка.';
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="md:hidden">
      <a 
        href="tel:+79010370963"
        className="fixed bottom-24 right-6 z-[60] h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 flex items-center justify-center transition-all duration-300 hover:shadow-blue-500/50 animate-pulse"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={28} className="text-white" />
      </a>
      
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:scale-110 z-50 flex items-center justify-center transition-all duration-300 hover:shadow-green-500/50 animate-pulse"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
      </button>
    </div>
  );
}