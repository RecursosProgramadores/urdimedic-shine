import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
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
  ];

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Estamos aquí para ayudarte</h2>
          <p className="section-subtitle mx-auto">
            Agenda tu cita fácilmente por WhatsApp o visítanos en nuestro consultorio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
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
                <div className="text-sm opacity-90">Contáctanos por</div>
                <div className="text-2xl font-bold">WhatsApp +51 934 401 465</div>
              </div>
            </a>

            {/* Note for elderly */}
            <div className="flex items-start gap-3 p-4 bg-accent rounded-xl border border-primary/20">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Personas mayores</span> prefieren 
                llamar al fijo o WhatsApp para agendar su cita cómodamente. ¡Estamos aquí para ayudarles!
              </p>
            </div>

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
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2654073476367!2d-79.90772492411437!3d-6.700957465867397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef16ffbbf4dd%3A0x7d2ad6d87d56cc7a!2sAv.%20Ram%C3%B3n%20Castilla%20449%2C%20Lambayeque%2014700!5e0!3m2!1ses-419!2spe!4v1706500000000!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación URDIMEDIC"
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex"
          >
            <MessageCircle className="w-6 h-6" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
