import { Card } from "@/components/ui/card";
import { Package, Truck, Container, Ship, Shield, Satellite } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Carga Masiva",
    description: "Transporte de grandes volúmenes de mercancía con eficiencia y seguridad garantizada.",
  },
  {
    icon: Truck,
    title: "Paqueteo Industrial Nacional",
    description: "Servicio especializado para envíos industriales a nivel nacional con entrega puntual.",
  },
  {
    icon: Container,
    title: "Transporte de Contenedores",
    description: "Retiro y transporte de contenedores desde puerto hasta destino final.",
  },
  {
    icon: Ship,
    title: "Logística Portuaria",
    description: "Gestión completa de importación y exportación con retiro ágil de contenedores.",
  },
  {
    icon: Shield,
    title: "Seguridad Integral",
    description: "Pólizas de seguro respaldadas por Zurich Colombia y estudios de seguridad completos.",
  },
  {
    icon: Satellite,
    title: "Rastreo Satelital",
    description: "Monitoreo en tiempo real de su carga mediante tecnología GPS avanzada.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Soluciones logísticas integrales adaptadas a las necesidades específicas de su empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Fleet Types */}
        <div className="mt-12 p-6 md:p-8 bg-muted/50 rounded-xl">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center">
            Tipos de Vehículos Disponibles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Vehículos NHR (2.5 ton)",
              "Turbos (4.5 ton)",
              "Camiones 10-16 ton",
              "Tractomulas 30-35 ton",
              "Patinetas tipo plancha",
              "Camas bajas 2-4 ejes",
              "Vehículos dedicados",
              "Servicio de escoltas"
            ].map((vehicle, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-3 bg-card rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{vehicle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
