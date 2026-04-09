import { useParams, Link } from "react-router-dom";
import { programs } from "@/data/programs";
import logo from "@/assets/logo.png";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/assets/fonts/fonts.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import img1 from "@/assets/1760878651216.jpg";
import img2 from "@/assets/1760878651244.jpg";
import img3 from "@/assets/1760879501078.jpg";
import img4 from "@/assets/1760879501114.jpg";
import img5 from "@/assets/1760879501236.jpg";
import img6 from "@/assets/1760879501280.jpg";
import img7 from "@/assets/1760879501371.jpg";
import img8 from "@/assets/1760879501406.jpg";
import img9 from "@/assets/1760879501451.jpg";

const photos = [
  { src: img1, alt: "Training photo 1" },
  { src: img2, alt: "Training photo 2" },
  { src: img3, alt: "Training photo 3" },
  { src: img4, alt: "Training photo 4" },
  { src: img5, alt: "Training photo 5" },
  { src: img6, alt: "Training photo 6" },
  { src: img7, alt: "Training photo 7" },
  { src: img8, alt: "Training photo 8" },
  { src: img9, alt: "Training photo 9" },
];

const ProgramPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Πρόγραμμα δεν βρέθηκε</h1>
          <Link to="/">
            <Button variant="default">Επιστροφή στην αρχική</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 flex items-center gap-4 h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Redemption Martial Arts logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Αρχική</span>
            </Button>
          </Link>
          <div className="flex items-baseline gap-1.5 ml-2">
            <span className="text-lg font-blackops text-foreground leading-none">REDEMPTION</span>
            <span className="text-sm font-blackops text-muted-foreground leading-none">Martial Arts & more</span>
          </div>
        </div>
      </header>

      {/* Program Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
            <IconComponent className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">{program.title}</h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          {program.description}
        </p>

        {/* Photo Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full"
        >
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </main>
    </div>
  );
};

export default ProgramPage;
