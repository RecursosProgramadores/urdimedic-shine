import { Target, Lightbulb } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-accent/50 rounded-3xl p-8 lg:p-10 border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Brindar atención oftalmológica de alta calidad mediante el uso de tecnología 
              innovadora y diagnósticos precisos, garantizando una visión segura y promoviendo 
              el cuidado integral de la salud visual de nuestros pacientes, con un enfoque 
              <span className="text-primary font-medium"> humano, ético y profesional</span>.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-secondary/5 rounded-3xl p-8 lg:p-10 border-2 border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Proyectarnos como un consultorio 
              <span className="text-secondary font-medium"> innovador en oftalmología</span>, 
              comprometido con diagnósticos precisos que garanticen una visión segura y 
              contribuyan al cuidado integral de la salud visual de la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
