import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary tracking-tight">URDIMEDIC</span>
                <span className="text-[10px] text-muted-foreground -mt-1">comprometidos con tu salud</span>
              </div>
            </div>
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
  );
};

export default Header;
