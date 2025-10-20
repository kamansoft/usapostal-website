import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'none',
            filter: 'blur(100px) brightness(0.3)',
            transform: 'scale(1.2)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            EFICIENCIA, SEGURIDAD Y EXPERIENCIA
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-medium">
            Especializados en brindar servicios de transporte de carga a nivel nacional
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3">
              <Package className="w-5 h-5 text-primary" />
              <span className="text-primary-foreground font-medium">Carga Masiva</span>
            </div>
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-primary-foreground font-medium">Paqueteo Industrial</span>
            </div>
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary-foreground font-medium">Rastreo Satelital</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-full transition-all hover:scale-105 backdrop-blur-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conocer Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl font-display font-bold text-primary">15+</div>
              <div className="text-primary-foreground/80 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-display font-bold text-primary">800m²</div>
              <div className="text-primary-foreground/80 font-medium">Centros de Operación</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-display font-bold text-primary">100%</div>
              <div className="text-primary-foreground/80 font-medium">Rastreo en Tiempo Real</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
