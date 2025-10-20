import { Card } from "@/components/ui/card";
import { Users, Cpu, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Nuestra Gente",
    description: "Personal altamente calificado en la logística y la seguridad del transporte de carga.",
  },
  {
    icon: Cpu,
    title: "Mejor Tecnología",
    description: "Contamos con una avanzada red de herramientas que nos permite mantener a nuestros clientes informados sobre el estado de sus despachos mediante un software de última generación.",
  },
  {
    icon: Award,
    title: "Satisfacción",
    description: "Nuestro selecto equipo de profesionales altamente especializados, nos capacita para ofrecer una completa satisfacción a nuestros clientes, garantizando un servicio de máximo cumplimiento y responsabilidad.",
  },
];

const Values = () => {
  return (
    <section id="values" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Valores Diferenciales
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Lo que nos hace únicos en el mercado logístico colombiano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/10 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto shadow-glow">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-foreground">
                  {value.title}
                </h3>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
