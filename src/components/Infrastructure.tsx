import { Card } from "@/components/ui/card";
import { Building2, Network, TruckIcon } from "lucide-react";
import infrastructureImage from "@/assets/infrastructure.jpg";

const infrastructure = [
  {
    icon: Building2,
    title: "Centro de Operación",
    description: "Contamos con bodegas y oficinas de 800 m² en cada ciudad donde se proyecta la compañía, dotadas con los mejores recursos tecnológicos.",
  },
  {
    icon: Network,
    title: "Estructura Informática",
    description: "Nuestros centros de operación y equipos de transporte están enlazados a una red de información centralizada y monitoreada a través de un software especializado.",
  },
  {
    icon: TruckIcon,
    title: "Red de Vehículos",
    description: "Contamos con flotillas de vehículos afiliados que cumplen con los más altos estándares de calidad, respetando los requisitos y políticas de nuestra empresa.",
  },
];

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[600px] animate-scale-in">
            <img 
              src={infrastructureImage}
              alt="Infraestructura USAPOSTAL"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Infraestructura
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Instalaciones modernas y tecnología de punta para garantizar un servicio excepcional
              </p>
            </div>

            <div className="space-y-6">
              {infrastructure.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
