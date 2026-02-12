import { Eye, Scissors, ScanEye, Glasses, Stethoscope, SmilePlus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import oftalmologiaImg from "@/assets/services/oftalmologia-general.jpg";
import cirugiaImg from "@/assets/services/cirugia-ocular.jpg";
import examenesImg from "@/assets/services/examenes-complementarios.jpg";
import opticaImg from "@/assets/services/optica-integral.jpg";
import medicinaImg from "@/assets/services/medicina-interna.jpg";
import odontologiaImg from "@/assets/services/odontologia.jpg";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const services = [
    {
      icon: Eye,
      title: "Oftalmología General",
      description: "Consultas especializadas, diagnóstico y tratamiento de enfermedades oculares con tecnología de punta.",
      image: oftalmologiaImg,
    },
    {
      icon: Scissors,
      title: "Cirugía Ocular",
      description: "Procedimientos de cataratas, pterigión y otras cirugías oftalmológicas con técnicas modernas.",
      image: cirugiaImg,
    },
    {
      icon: ScanEye,
      title: "Exámenes Complementarios",
      description: "OCT, ecografía ocular, paquimetría, topografía corneal y más estudios especializados.",
      image: examenesImg,
    },
    {
      icon: Glasses,
      title: "Óptica Integral",
      description: "Venta de monturas modernas, lunas oftálmicas y lentes de contacto de calidad.",
      image: opticaImg,
    },
    {
      icon: Stethoscope,
      title: "Medicina Interna",
      description: "Atención médica general complementaria para el cuidado integral de tu salud.",
      image: medicinaImg,
    },
    {
      icon: SmilePlus,
      title: "Odontología",
      description: "Servicios dentales complementarios para mantener tu bienestar completo.",
      image: odontologiaImg,
    },
  ];

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-background">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm border border-border card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
