import { Calendar, Users, Award, Camera } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// ============================================
// 📸 INSTRUCCIONES PARA AGREGAR FOTOS:
// ============================================
// 1. Sube las fotos a la carpeta src/assets/familia/
// 2. Importa las fotos aquí:
//    import fotoFamilia from "@/assets/familia/familia-completa.jpg";
//    import fotoFundadores from "@/assets/familia/fundadores.jpg";
//    import fotoConsultorio from "@/assets/consultorio/consultorio.jpg";
// 3. Reemplaza los placeholders con las imágenes importadas
// ============================================

// Placeholder images - Reemplaza con tus fotos importadas
const galleryImages = [
  {
    id: 1,
    src: null, // Reemplaza con: fotoFamilia
    alt: "Familia Urbina Díaz",
    caption: "La familia Urbina Díaz continúa el legado",
    placeholder: "Foto Familia",
  },
  {
    id: 2,
    src: null, // Reemplaza con: fotoFundadores
    alt: "Fundadores Óptica Díaz",
    caption: "Hermelinda y Marco Antonio - Fundadores",
    placeholder: "Foto Fundadores",
  },
  {
    id: 3,
    src: null, // Reemplaza con: fotoConsultorio
    alt: "Consultorio URDIMEDIC",
    caption: "Nuestras modernas instalaciones",
    placeholder: "Foto Consultorio",
  },
];

const HistorySection = () => {
  const milestones = [
    { year: "1998", event: "Fundación de Óptica Díaz" },
    { year: "2010", event: "Expansión de servicios oftalmológicos" },
    { year: "2024", event: "Nacimiento de URDIMEDIC" },
  ];

  return (
    <section id="historia" className="py-20 sm:py-28 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
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
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fundado el{" "}
              <span className="text-primary font-semibold">
                21 de mayo de 1998
              </span>{" "}
              en Lambayeque por{" "}
              <span className="font-medium text-foreground">
                Hermelinda Díaz Herencia
              </span>{" "}
              y{" "}
              <span className="font-medium text-foreground">
                Marco Antonio Urbina Santamaría
              </span>{" "}
              como Óptica Díaz.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Hoy, sus hijos{" "}
              <span className="font-medium text-foreground">
                Marco, Kevin y Paola Urbina Díaz
              </span>{" "}
              unifican el legado bajo{" "}
              <span className="text-primary font-semibold">URDIMEDIC</span>,
              combinando experiencia, tecnología moderna y calidez humana.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {milestone.event}
                  </span>
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
          <div className="space-y-4">
            {/* Main Photo */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <AspectRatio ratio={16 / 10}>
                {galleryImages[0].src ? (
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center">
                    <Camera className="w-12 h-12 text-primary/40 mb-3" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {galleryImages[0].placeholder}
                    </span>
                    <span className="text-xs text-muted-foreground/70 mt-1">
                      Sube a: src/assets/familia/
                    </span>
                  </div>
                )}
              </AspectRatio>
              <div className="p-3 bg-card">
                <p className="text-sm text-center text-muted-foreground">
                  {galleryImages[0].caption}
                </p>
              </div>
            </div>

            {/* Secondary Photos */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1).map((image) => (
                <div
                  key={image.id}
                  className="rounded-xl overflow-hidden border border-border shadow-md"
                >
                  <AspectRatio ratio={4 / 3}>
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex flex-col items-center justify-center">
                        <Camera className="w-8 h-8 text-muted-foreground/40 mb-2" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {image.placeholder}
                        </span>
                      </div>
                    )}
                  </AspectRatio>
                  <div className="p-2 bg-card">
                    <p className="text-xs text-center text-muted-foreground">
                      {image.caption}
                    </p>
                  </div>
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
