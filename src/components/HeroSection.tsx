import { Shield, Microscope, Heart } from "lucide-react";
import home1 from "@/assets/hero/home1.png";
import home2 from "@/assets/hero/home2.png";
import home3 from "@/assets/hero/home3.png";
import whatsappIcon from "@/assets/logo/whatsapp.svg";

const HeroSection = () => {
  const badges = [
    { icon: Microscope, text: "Tecnología avanzada" },
    { icon: Shield, text: "Diagnósticos precisos" },
    { icon: Heart, text: "Atención humana" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center gradient-hero pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="animate-fade-up section-title text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className="text-primary">URDIMEDIC</span>
              <span className="block mt-2 text-foreground">Tu Visión, Nuestra Pasión</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-100 section-subtitle text-lg sm:text-xl mb-8">
              Consultorio Oftalmológico especializado con más de{" "}
              <span className="text-primary font-semibold">25 años</span> cuidando tu salud visual en Lambayeque
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up delay-200 mb-6">
              <a
                href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-lg sm:text-xl px-8 py-4 inline-flex"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 brightness-0 invert mr-2" />
                Agenda tu cita por WhatsApp ahora
              </a>
            </div>

            {/* Secondary text */}
            <p className="animate-fade-up delay-300 text-sm text-muted-foreground mb-8">
              Llamadas a fijo o WhatsApp para adultos mayores. ¡Atención personalizada!
            </p>

            {/* Badges */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-3 sm:gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-md border border-border"
                >
                  <badge.icon className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image Collage */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">
            <div className="relative max-w-[550px] mx-auto lg:ml-auto">
              {/* Symmetrical Top Row Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {/* Image home2 */}
                <div className="hover:scale-105 transition-transform duration-500 cursor-pointer">
                  <img
                    src={home2}
                    alt="Consultorio interior"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Image home3 */}
                <div className="hover:scale-105 transition-transform duration-500 cursor-pointer">
                  <img
                    src={home3}
                    alt="Equipamiento oftalmológico"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Image home1 - Large bottom spanning */}
              <div className="hover:scale-105 transition-transform duration-500 cursor-pointer">
                <img
                  src={home1}
                  alt="Centro URDIMEDIC"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating experience badge - Modern styling */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-card/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-primary/20 animate-float z-20">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transform rotate-3">
                    <span className="text-primary-foreground font-bold text-xl">25+</span>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-primary leading-none mb-1">Años de</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest opacity-80">Excelencia</div>
                  </div>
                </div>
              </div>

              {/* Decorative background glow for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
