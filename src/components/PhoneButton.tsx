import { Phone } from "lucide-react";

const PhoneButton = () => {
    return (
        <a
            href="tel:+51074282692"
            className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Llamar por teléfono"
        >
            <Phone className="w-8 h-8 text-primary-foreground z-10" />

            {/* Tooltip */}
            <span className="absolute left-full ml-4 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                Llámanos: 074 - 282692
            </span>

            {/* Subtle pulse animation if needed, but keeping it simpler than WhatsApp */}
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-20" />
        </a>
    );
};

export default PhoneButton;
