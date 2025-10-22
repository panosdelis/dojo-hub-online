import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import LogoRow from "@/components/Silhouettes";


import fighter1 from "@/assets/silhouettes/Copilot_20251022_022201_20.png";
import fighter2 from "@/assets/silhouettes/Copilot_20251022_022530_20.png";




const Hero = () => {


  
  const logos = [
    { src: fighter1, alt: "Fighter 1" },
    { src: fighter2, alt: "Fighter 2" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };


  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0"
        style={{background: "var(--gradient-hero)"}}
        />
      <h2 className="text-center text-2xl font-bold text-foreground mb-6">
        Silhouettes
      </h2>
      <LogoRow logos={logos} size={80} />
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo}
            alt="Redemption Martial Arts Academy logo"
            className="w-64 md:w-80 h-auto drop-shadow-2xl object-contain"
            loading="lazy"
          />
        </div>

        {/* Title */}
<h1 className="flex flex-col text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 leading-tight">
  <span className="tracking-[0.25em] uppercase">
    <strong>Redemption</strong>
  </span>
  <span className="mt-1">Martial Arts</span>
</h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-bold">
          Danger is Real, But Fear is A Choice
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("programs")}
            className="hover:scale-105 transition-transform duration-300"
          >
            Προγράμματα
          </Button>
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="hover:scale-105 transition-transform duration-300"
          >
            Επικοινωνία
          </Button>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
