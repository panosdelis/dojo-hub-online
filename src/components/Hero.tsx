import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      background: "var(--gradient-hero)"
    }} />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="Martial Arts Academy Logo" className="w-40 h-40 md:w-52 md:h-52 drop-shadow-2xl" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
            Elite Martial Arts Academy
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-bold md:text-2xl">Danger is Real, But Fear is A Choice</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("programs")}>
              View Programs
            </Button>
            <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;