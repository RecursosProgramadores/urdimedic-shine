import { Calendar, Users, Award } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import fotoFamilia from "@/assets/familia/legado.png";
import fotoFundadores from "@/assets/familia/fundadores.jpg";
import fotoConsultorio from "@/assets/consultorio/consultorio.jpg";

const galleryImages = [
  {
    id: 1,
    src: fotoFamilia,
    alt: "Familia Urbina Díaz",
    caption: "",
  },
  {
    id: 2,
    src: fotoFundadores,
    alt: "Fundadores Óptica Díaz",
    caption: "",
  },
  {
    id: 3,
    src: fotoConsultorio,
    alt: "Consultorio URDIMEDIC",
    caption: "",
  },
];

const HistorySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const milestones = [
    { year: "1998", event: "Fundación de Óptica Díaz" },
    { year: "2010", event: "Expansión de servicios oftalmológicos" },
    { year: "2024", event: "Nacimiento de URDIMEDIC" },
  ];

  return (
    <section id="historia" className="py-20 sm:py-28 bg-muted/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nuestra Historia
          </span>
          <h2 className="section-title">
            Más de 25 años{" "}
            <span className="gradient-text">cuidando tu salud</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fundado en{" "}
              <span className="text-primary font-semibold">1998</span>{" "}
              en Lambayeque como Óptica Díaz, nuestra institución nació del compromiso de sus fundadores por brindar salud visual de calidad a la comunidad.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Hoy, el legado familiar continúa y se unifica bajo{" "}
              <span className="text-primary font-semibold">URDIMEDIC</span>,
              combinando más de 25 años de experiencia con tecnología moderna y una atención profundamente humana.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-medium text-muted-foreground">{milestone.event}</span>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-xs text-muted-foreground">Años</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-xs text-muted-foreground">Pacientes</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Compromiso</div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className={`space-y-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Main Photo */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              {galleryImages[0].caption && (
                <div className="p-3 bg-card">
                  <p className="text-sm text-center text-muted-foreground">{galleryImages[0].caption}</p>
                </div>
              )}
            </div>

            {/* Secondary Photos */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1).map((image) => (
                <div key={image.id} className="rounded-xl overflow-hidden border border-border shadow-md group">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                  {image.caption && (
                    <div className="p-2 bg-card">
                      <p className="text-xs text-center text-muted-foreground">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
