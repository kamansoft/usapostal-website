import { Card } from "@/components/ui/card";
import { Clock, Shield, Settings, Target } from "lucide-react";
import fleetImage from "@/assets/fleet.jpg";

const advantages = [
  {
    icon: Clock,
    title: "Eficiencia y Puntualidad",
    description: "Cumplimos rigurosamente con los tiempos de entrega, optimizando cada etapa del proceso logístico.",
  },
  {
    icon: Shield,
    title: "Seguridad Integral",
    description: "Rastreo satelital en tiempo real, pólizas de seguro respaldadas por Zurich Colombia Seguros S.A., y estudios completos de seguridad.",
  },
  {
    icon: Settings,
    title: "Flexibilidad y Personalización",
    description: "Diseñamos soluciones logísticas a la medida, adaptándonos a los requerimientos operativos y comerciales de cada cliente.",
  },
  {
    icon: Target,
    title: "Optimización de Recursos",
    description: "Al delegar el transporte en nosotros, su empresa puede enfocarse en sus procesos estratégicos y core business.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Ventajas Competitivas
          </h2>
          <p className="text-lg text-muted-foreground">
            Por qué las empresas líderes confían en USAPOSTAL para sus necesidades logísticas
          </p>
        </div>

        {/* Image with overlay */}
        <div className="relative rounded-2xl overflow-hidden h-[300px] mb-12">
          <img 
            src={fleetImage}
            alt="Flota USAPOSTAL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center">
            <div className="text-center text-primary-foreground space-y-2">
              <div className="text-5xl font-display font-bold">+100</div>
              <div className="text-xl font-medium">Vehículos en Nuestra Red</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <advantage.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits List */}
        <div className="mt-12 p-8 bg-card rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            Beneficios para su Empresa
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold text-foreground">Optimización de Recursos</span>
              </div>
              <p className="text-sm text-muted-foreground pl-4">
                Enfoque en su negocio principal
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold text-foreground">Reducción de Riesgos</span>
              </div>
              <p className="text-sm text-muted-foreground pl-4">
                Cobertura completa de seguros
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold text-foreground">Mejora en la Cadena</span>
              </div>
              <p className="text-sm text-muted-foreground pl-4">
                Reducción de tiempos y costos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
