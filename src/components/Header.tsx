import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";

import logoUr from "../assets/logour.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#historia", label: "Nuestra Historia" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Top bar with schedule */}
      <div className={`hidden md:block bg-primary text-primary-foreground text-xs transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden py-0" : "py-1.5"}`}>
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Lun – Sáb: 9:00 AM – 1:00 PM / 3:00 PM – 6:30 PM
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            074 - 282692
          </span>
        </div>
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5 md:top-[34px]"
          }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center transition-transform hover:scale-105 duration-300">
              <img
                src={logoUr}
                alt="URDIMEDIC"
                className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12 md:h-16"}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-secondary text-sm"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/51934401465?text=Hola%2C%20quiero%20reservar%20una%20cita%20oftalmológica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full text-center mt-2"
                >
                  <Phone className="w-5 h-5" />
                  Agenda tu cita
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
