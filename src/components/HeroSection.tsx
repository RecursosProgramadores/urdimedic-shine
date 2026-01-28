import { MessageCircle, Shield, Microscope, Heart } from "lucide-react";

const HeroSection = () => {
  const badges = [
    { icon: Microscope, text: "Tecnología avanzada" },
    { icon: Shield, text: "Diagnósticos precisos" },
    { icon: Heart, text: "Atención humana" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center gradient-hero pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Icon */}
          <div className="animate-fade-up mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/30 animate-float">
              <div className="text-primary-foreground">
                <svg
                  viewBox="0 0 48 48"
                  className="w-14 h-14"
                  fill="currentColor"
                >
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z" opacity="0.3" />
                  <circle cx="24" cy="24" r="8" />
                  <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up delay-100 section-title text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-primary">URDIMEDIC</span>
            <span className="block mt-2 text-foreground">Tu Visión, Nuestra Pasión</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 section-subtitle mx-auto mb-10 text-lg sm:text-xl">
            Consultorio Oftalmológico especializado con más de{" "}
            <span className="text-primary font-semibold">25 años</span> cuidando tu salud visual en Lambayeque
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up delay-300 mb-6">
            <a
              href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg sm:text-xl px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Agenda tu cita por WhatsApp ahora
            </a>
          </div>

          {/* Secondary text */}
          <p className="animate-fade-up delay-400 text-sm text-muted-foreground mb-12">
            Llamadas a fijo o WhatsApp para adultos mayores. ¡Atención personalizada!
          </p>

          {/* Badges */}
          <div className="animate-fade-up delay-500 flex flex-wrap justify-center gap-4 sm:gap-6">
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
