import { Calendar, Users, Award } from "lucide-react";

const HistorySection = () => {
  const milestones = [
    { year: "1998", event: "Fundación de Óptica Díaz" },
    { year: "2010", event: "Expansión de servicios oftalmológicos" },
    { year: "2024", event: "Nacimiento de URDIMEDIC" },
  ];

  return (
    <section id="historia" className="py-20 sm:py-28 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-title mb-6">
              Más de 25 años cuidando tu salud
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fundado el <span className="text-primary font-semibold">21 de mayo de 1998</span> en Lambayeque 
              por <span className="font-medium text-foreground">Hermelinda Díaz Herencia</span> y{" "}
              <span className="font-medium text-foreground">Marco Antonio Urbina Santamaría</span> como Óptica Díaz.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Hoy, sus hijos <span className="font-medium text-foreground">Marco, Kevin y Paola Urbina Díaz</span> unifican 
              el legado bajo <span className="text-primary font-semibold">URDIMEDIC</span>, combinando experiencia, 
              tecnología moderna y calidez humana.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
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
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12">
              <div className="h-full rounded-2xl bg-card shadow-xl border border-border p-8 flex flex-col justify-center">
                {/* Stats */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">25+</div>
                      <div className="text-sm text-muted-foreground">Años de experiencia</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">10,000+</div>
                      <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">100%</div>
                      <div className="text-sm text-muted-foreground">Compromiso con tu salud</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
