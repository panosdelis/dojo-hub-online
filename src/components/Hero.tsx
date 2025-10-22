import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import LogoRow from "@/components/Silhouettes";
import "../assets/fonts/fonts.css";
import './image.css';

import fighter1 from "@/assets/silhouettes/Copilot_20251022_022201_20.png";
import fighter2 from "@/assets/silhouettes/Copilot_20251022_022530_20.png";
import fighter3 from "@/assets/silhouettes/Copilot_20251022_022811_20.png";
import fighter4 from "@/assets/silhouettes/Copilot_20251022_024923_20.png";
import fighter5 from "@/assets/silhouettes/Copilot_20251022_032058_20.png";
import fighter6 from "@/assets/silhouettes/Copilot_20251022_032214_20.png";
import fighter7 from "@/assets/silhouettes/Copilot_20251022_032325_20.png";
import fighter8 from "@/assets/silhouettes/Copilot_20251022_041813_20.png";
import fighter9 from "@/assets/silhouettes/Copilot_20251022_022530_1_20.png";

const Hero = () => {
  const logos = [
    { src: fighter1, alt: "Fighter 1" },
    { src: fighter2, alt: "Fighter 2" },
    { src: fighter3, alt: "Fighter 3" },
    { src: fighter4, alt: "Fighter 4" },
    { src: fighter5, alt: "Fighter 5" },
    { src: fighter6, alt: "Fighter 6" },
    { src: fighter7, alt: "Fighter 7" },
    { src: fighter8, alt: "Fighter 8" },
    { src: fighter9, alt: "Fighter 9" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative -mt-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-0 sm:pt-0">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Top Silhouettes row */}
      
      {/* <div className="w-full overflow-hidden">
        <LogoRow logos={logos} size={80} speed={40} />
      </div>
      */}
      
      {/* Content */}
      <div className="w-full relative z-10 text-center animate-fade-in-up px-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo}
            alt="Redemption Martial Arts Academy logo"
            className="w-64 md:w-80 h-auto drop-shadow-2xl object-contain"
            loading="lazy"
          />
        </div>

       {/* Titles */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-0 leading-snug tracking-normal font-blackops">
        REDEMPTION
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-snug font-blackops">
        Martial Arts & more
      </h1>
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-bold">
          Danger is Real, But Fear is A Choice
        </p>

        {/* Bottom Silhouettes row (mirrored) */}
        <div className="w-full overflow-hidden mt-4">
          <LogoRow logos={logos} size={80} speed={40} reverse />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
