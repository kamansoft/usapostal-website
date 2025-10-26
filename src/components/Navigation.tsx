import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Servicios", id: "services" },
    { label: "Valores", id: "values" },
    { label: "Infraestructura", id: "infrastructure" },
    { label: "Ventajas", id: "advantages" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
      style={isScrolled ? { boxShadow: 'var(--glow-white)' } : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "" : "bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
            }`}
            aria-label="USAPOSTAL - Ir al inicio"
          >
            <img
              src={logo}
              alt="USAPOSTAL - Transporte de Carga Colombia"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-12 md:h-14"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`transition-colors font-medium ${
                  isScrolled 
                    ? "text-secondary-foreground hover:text-primary" 
                    : "text-primary-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  isScrolled
                    ? "text-secondary-foreground hover:text-primary hover:bg-primary/10"
                    : "text-primary-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-secondary">
              <div className="flex flex-col gap-6 mt-8">
                <img src={logo} alt="USAPOSTAL - Transporte de Carga Colombia" className="h-12 mb-4" />
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-left text-lg text-secondary-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
