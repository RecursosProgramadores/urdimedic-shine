import { MapPin, Phone, Mail } from "lucide-react";

import logoFooter from "../assets/logofooter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#historia", label: "Nuestra Historia" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logoFooter} alt="URDIMEDIC" className="h-14 w-auto mb-4" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Comprometidos con tu salud visual. Más de 25 años brindando atención
              oftalmológica de calidad en Lambayeque.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-1 shrink-0" />
                <span className="text-background/70 text-sm">
                  Av. Ramón Castilla 449, Lambayeque, Perú
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/51934401465"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm">+51 934 401 465</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:urdimedic@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-sm">urdimedic@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} URDIMEDIC – Comprometidos con tu salud
            </p>
            <p className="text-background/40 text-xs">
              Consultorio Oftalmológico • Lambayeque, Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
