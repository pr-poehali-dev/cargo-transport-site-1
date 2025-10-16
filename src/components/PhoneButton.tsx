import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PhoneButton() {
  const phoneNumber = '+79010370963';
  
  return (
    <a href={`tel:${phoneNumber}`} className="fixed bottom-[120px] right-6 z-[60] block md:hidden">
      <Button
        className="h-16 w-16 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 border-4 border-white p-0"
        size="icon"
      >
        <Icon name="Phone" size={32} className="text-white" />
      </Button>
    </a>
  );
}