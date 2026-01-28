import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
