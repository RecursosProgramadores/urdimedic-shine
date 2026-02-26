import { MapPin, Phone, Mail } from "lucide-react";

import logoFooter from "../assets/logofooter.png";
import libroReclamaciones from "../assets/logo/libroreclamaciones.jpeg";
import logoDev from "../assets/logo/logo.svg";

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
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Comprometidos con tu salud visual. Más de 25 años brindando atención
              oftalmológica de calidad en Lambayeque.
            </p>
            <a
              href="https://forms.gle/YaXB1nhvNkimJGUT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 duration-300"
              title="Libro de Reclamaciones"
            >
              <img
                src={libroReclamaciones}
                alt="Libro de Reclamaciones"
                className="h-16 w-auto rounded-lg shadow-md transition-all duration-300"
              />
            </a>
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
                <div className="flex items-center gap-3 text-background/70">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm">074 - 282692 / +51 934 401 465</span>
                </div>
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
              <li className="pt-2 flex flex-col gap-2">
                <a
                  href="/terminos"
                  className="text-xs text-background/50 hover:text-background transition-colors"
                >
                  Términos y condiciones
                </a>
                <a
                  href="/privacidad"
                  className="text-xs text-background/50 hover:text-background transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-background/60 text-sm">
              © {currentYear} URDIMEDIC – Comprometidos con tu salud
            </p>
            <p className="text-background/40 text-xs text-center sm:text-right">
              Consultorio Oftalmológico • Lambayeque, Perú
            </p>
          </div>
          <a
            href="https://fly-software.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 pt-4 border-t border-background/5 group"
          >
            <span className="text-background/40 text-xs font-medium uppercase tracking-wider group-hover:text-background/60 transition-colors">
              Desarrollado por
            </span>
            <img src={logoDev} alt="Developer Logo" className="h-5 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
