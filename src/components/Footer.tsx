import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Calcula qué tan cerca está el usuario del final (300px antes del final)
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      
      if (distanceFromBottom < 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ejecutar al cargar
    handleScroll();
    
    // Agregar listener de scroll
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer 
      ref={footerRef}
      className={`bg-primary text-primary-foreground border-t border-primary-glow transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-primary-foreground hover:text-accent transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/80">
            <p>© {new Date().getFullYear()} USAPOSTAL. Todos los derechos reservados.</p>
            <p className="mt-1">Todo el contenido de este sitio está protegido por derechos de autor.</p>
          </div>

          {/* Design Credit */}
          <div className="text-center text-sm text-primary-foreground/70">
            <p>
              Diseño y soporte por{" "}
              <a
                href="https://kamansoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-foreground hover:underline transition-all duration-300"
              >
                kamansoft.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
