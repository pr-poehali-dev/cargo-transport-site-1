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
      <div className="fixed bottom-24 right-6 z-[60] group">
        <a 
          href="tel:+79010370963"
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 flex items-center justify-center transition-all duration-300 hover:shadow-blue-500/50 animate-pulse"
          aria-label="Позвонить"
        >
          <Icon name="Phone" size={28} className="text-white" />
        </a>
        <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-medium">
            Позвонить
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={handleWhatsApp}
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:scale-110 flex items-center justify-center transition-all duration-300 hover:shadow-green-500/50 animate-pulse"
          aria-label="WhatsApp"
        >
          <Icon name="MessageCircle" size={28} className="text-white" />
        </button>
        <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#25D366] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-medium">
            WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}