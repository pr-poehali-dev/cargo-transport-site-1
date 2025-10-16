import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PhoneButton() {
  const phoneNumber = '+79010370963';
  
  return (
    <a href={`tel:${phoneNumber}`} className="fixed bottom-24 right-6 z-50 sm:hidden">
      <Button
        className="h-14 w-14 rounded-full shadow-2xl bg-green-500 hover:bg-green-600 p-0"
        size="icon"
      >
        <Icon name="Phone" size={28} className="text-white" />
      </Button>
    </a>
  );
}
