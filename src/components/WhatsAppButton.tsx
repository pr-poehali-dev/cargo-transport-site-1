export default function WhatsAppButton() {
  const phoneNumber = '79010370963';
  const message = 'Здравствуйте! Интересует грузоперевозка.';
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <a 
        href="tel:+79010370963"
        className="fixed bottom-24 right-6 z-[60] h-14 w-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 border-4 border-white flex items-center justify-center transition-all md:hidden"
        aria-label="Позвонить"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
      
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] z-50 flex items-center justify-center transition-all md:hidden"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </>
  );
}