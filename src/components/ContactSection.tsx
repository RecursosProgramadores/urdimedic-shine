import { MapPin, Phone, Mail, MessageCircle, Clock, Send, User, FileText } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.nombre.trim() || !formData.telefono.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y teléfono.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message with form data
    const message = `Hola, soy ${formData.nombre}.%0A%0ATeléfono: ${formData.telefono}%0AEmail: ${formData.email || "No proporcionado"}%0AServicio de interés: ${formData.servicio || "Consulta general"}%0A%0AMensaje: ${formData.mensaje || "Me gustaría agendar una cita."}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/51934401465?text=${message}`, "_blank");

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Tu mensaje se ha preparado. Envíalo por WhatsApp para confirmar tu cita.",
    });

    setIsSubmitting(false);
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      servicio: "",
      mensaje: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Dirección",
      value: "Av. Ramón Castilla 449, Urb. Ramón Castilla",
      subvalue: "Lambayeque – Lambayeque – Lambayeque, Perú",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+51 934 401 465",
      href: "https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica",
    },
    {
      icon: Mail,
      label: "Email",
      value: "urdimedic@gmail.com",
      href: "mailto:urdimedic@gmail.com",
    },
    {
      icon: Clock,
      label: "Horarios de atención",
      value: "Lun – Vie: 9:00 AM – 1:00 PM / 4:00 PM – 7:00 PM",
      subvalue: "Sáb: 9:00 AM – 1:00 PM | Dom: Cerrado",
    },
  ];

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Estamos aquí para ayudarte</h2>
          <p className="section-subtitle mx-auto">
            Agenda tu cita fácilmente completando el formulario o contáctanos por WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Solicita tu cita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email (opcional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Oftalmología General">Oftalmología General</option>
                  <option value="Cirugía Ocular">Cirugía Ocular</option>
                  <option value="Exámenes Complementarios">Exámenes Complementarios</option>
                  <option value="Óptica Integral">Óptica Integral</option>
                  <option value="Medicina Interna">Medicina Interna</option>
                  <option value="Odontología">Odontología</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje adicional
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu consulta o síntomas..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-cta"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Enviando..." : "Enviar solicitud por WhatsApp"}
              </Button>
            </form>

            {/* Note for elderly */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-accent rounded-xl border border-primary/20">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Personas mayores</span> pueden 
                llamar al fijo o WhatsApp para agendar su cita cómodamente. ¡Estamos aquí para ayudarles!
              </p>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Main WhatsApp CTA */}
            <a
              href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-primary rounded-2xl text-primary-foreground hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm opacity-90">Contáctanos directo por</div>
                <div className="text-2xl font-bold">WhatsApp +51 934 401 465</div>
              </div>
            </a>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <div className="font-medium text-foreground">{item.value}</div>
                        {item.subvalue && (
                          <div className="text-sm text-muted-foreground">{item.subvalue}</div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2654073476367!2d-79.90772492411437!3d-6.700957465867397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef16ffbbf4dd%3A0x7d2ad6d87d56cc7a!2sAv.%20Ram%C3%B3n%20Castilla%20449%2C%20Lambayeque%2014700!5e0!3m2!1ses-419!2spe!4v1706500000000!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación URDIMEDIC"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
