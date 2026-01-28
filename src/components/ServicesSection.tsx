import { Eye, Scissors, ScanEye, Glasses, Stethoscope, SmilePlus } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Oftalmología General",
      description: "Consultas especializadas, diagnóstico y tratamiento de enfermedades oculares con tecnología de punta.",
    },
    {
      icon: Scissors,
      title: "Cirugía Ocular",
      description: "Procedimientos de cataratas, pterigión y otras cirugías oftalmológicas con técnicas modernas.",
    },
    {
      icon: ScanEye,
      title: "Exámenes Complementarios",
      description: "OCT, ecografía ocular, paquimetría, topografía corneal y más estudios especializados.",
    },
    {
      icon: Glasses,
      title: "Óptica Integral",
      description: "Venta de monturas modernas, lunas oftálmicas y lentes de contacto de calidad.",
    },
    {
      icon: Stethoscope,
      title: "Medicina Interna",
      description: "Atención médica general complementaria para el cuidado integral de tu salud.",
    },
    {
      icon: SmilePlus,
      title: "Odontología",
      description: "Servicios dentales complementarios para mantener tu bienestar completo.",
    },
  ];

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">¿Qué ofrecemos?</h2>
          <p className="section-subtitle mx-auto">
            Servicios oftalmológicos especializados con la mejor tecnología y atención personalizada
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contacto"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Más información
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
