import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Importa las fotos de pacientes desde la carpeta assets/testimonials
// Ejemplo: import paciente1 from "@/assets/testimonials/paciente1.jpg";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string; // Ruta de la imagen del paciente
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María Elena García",
    location: "Lambayeque",
    rating: 5,
    comment: "Excelente atención desde que llegué. El Dr. Marco me explicó todo con mucha paciencia. Mi operación de cataratas fue un éxito total. ¡Ahora veo perfectamente!",
    initials: "MG",
  },
  {
    id: 2,
    name: "Carlos Alberto Sánchez",
    location: "Chiclayo",
    rating: 5,
    comment: "Llevo más de 10 años atendiéndome en URDIMEDIC. La tecnología que tienen es de primera y el trato humano es incomparable. Los recomiendo al 100%.",
    initials: "CS",
  },
  {
    id: 3,
    name: "Rosa María Fernández",
    location: "Ferreñafe",
    rating: 5,
    comment: "Mi mamá de 78 años fue atendida con mucho cariño. Le explicaron todo paso a paso y la hicieron sentir muy cómoda. Gracias por su dedicación.",
    initials: "RF",
  },
  {
    id: 4,
    name: "José Luis Mendoza",
    location: "Lambayeque",
    rating: 5,
    comment: "Los exámenes de OCT y topografía fueron muy precisos. Me detectaron un problema a tiempo y pude tratarlo. Profesionales de verdad.",
    initials: "JM",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="section-title">
            Lo que dicen nuestros{" "}
            <span className="gradient-text">pacientes</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Más de 25 años de confianza y satisfacción en cada consulta
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="card-hover border-border/50 bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    {testimonial.image ? (
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Pacientes atendidos" },
            { value: "25+", label: "Años de experiencia" },
            { value: "98%", label: "Satisfacción" },
            { value: "5.0", label: "Calificación promedio" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
