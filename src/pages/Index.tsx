import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Infrastructure from "@/components/Infrastructure";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Values />
      <Infrastructure />
      <Advantages />
      <Contact />
    </main>
  );
};

export default Index;
