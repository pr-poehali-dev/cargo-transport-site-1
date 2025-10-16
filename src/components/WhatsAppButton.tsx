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
        className="fixed bottom-24 right-6 z-[60] h-14 w-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 border-4 border-white flex items-center justify-center transition-all"
      >
        <span style={{fontSize: '24px'}}>📞</span>
      </a>
      
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] z-50 flex items-center justify-center transition-all"
      >
        <span style={{fontSize: '24px'}}>💬</span>
      </button>
    </div>
  );
}