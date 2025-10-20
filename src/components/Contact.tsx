import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";

const contacts = [
  {
    name: "Yovanny González V",
    role: "Asesor Comercial",
    phone: "3242640544",
    email: "ygonzalez@usapostal.com.co",
  },
  {
    name: "Danilo Baquero",
    role: "Asesor Comercial",
    phone: "3242640544",
    email: "dbaquero@usapostal.com.co",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              ¿Listo para Optimizar su Logística?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              No deje pasar la oportunidad de transformar el transporte de su carga en una ventaja competitiva para su empresa
            </p>
          </div>

          {/* Questions */}
          <div className="mb-12 space-y-4">
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary/30">
              <p className="text-primary-foreground/90">
                ¿Qué tipo de carga transporta con mayor frecuencia y qué retos enfrenta actualmente?
              </p>
            </Card>
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary/30">
              <p className="text-primary-foreground/90">
                ¿Le gustaría contar con un aliado que le garantice seguridad, puntualidad y trazabilidad en cada despacho?
              </p>
            </Card>
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary/30">
              <p className="text-primary-foreground/90">
                ¿Está buscando reducir costos logísticos sin sacrificar calidad ni cumplimiento?
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-card/10 backdrop-blur-sm border-2 border-primary rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                ¡Actúe Ahora!
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl">
                Contáctenos hoy mismo para agendar una reunión personalizada y descubrir cómo podemos transformar su logística
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
              >
                Solicitar Reunión
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/10 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground">
                      {contact.name}
                    </h3>
                    <p className="text-primary-foreground/70">{contact.role}</p>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href={`tel:+57${contact.phone}`}
                      className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{contact.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{contact.email}</span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center mt-12">
            <p className="text-lg text-primary-foreground/80 font-medium">
              Gracias por considerar a <span className="text-primary font-bold">USAPOSTAL</span> como su socio estratégico en transporte.
            </p>
            <p className="text-xl text-primary-foreground font-bold mt-2">
              Estamos listos para comenzar. ¿Y usted?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
