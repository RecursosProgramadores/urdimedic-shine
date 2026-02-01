import { MessageCircle, Shield, Microscope, Heart } from "lucide-react";
import heroDoctor from "@/assets/hero/hero-doctor.jpg";

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
                <MessageCircle className="w-6 h-6" />
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

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 animate-fade-up delay-100">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroDoctor}
                  alt="Oftalmólogo realizando examen ocular"
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">25+</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Años de</div>
                    <div className="text-xs text-muted-foreground">experiencia</div>
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
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
