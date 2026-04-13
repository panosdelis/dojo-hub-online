import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { programs } from "@/data/programs";
import logo from "@/assets/logo.png";
import { Home, Mail, Phone, Instagram, Facebook, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoRow from "@/components/Silhouettes";

import fighter1 from "@/assets/silhouettes/Copilot_20251022_022201_20.png";
import fighter2 from "@/assets/silhouettes/Copilot_20251022_022530_20.png";
import fighter3 from "@/assets/silhouettes/Copilot_20251022_022811_20.png";
import fighter4 from "@/assets/silhouettes/Copilot_20251022_024923_20.png";
import fighter5 from "@/assets/silhouettes/Copilot_20251022_032058_20.png";
import fighter6 from "@/assets/silhouettes/Copilot_20251022_032214_20.png";
import fighter7 from "@/assets/silhouettes/Copilot_20251022_032325_20.png";
import fighter8 from "@/assets/silhouettes/Copilot_20251022_041813_20.png";
import fighter9 from "@/assets/silhouettes/Copilot_20251022_022530_1_20.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// ========================
// PHOTO GROUPS
// ========================

const mmaPhotos = [
  { src: img1, alt: "MMA training 1" },
  { src: img2, alt: "MMA training 2" },
];

const capoeiraPhotos = [
  { src: img3, alt: "Capoeira training 1" },
  { src: img4, alt: "Capoeira training 2" },
];

const pilatesPhotos = [
  { src: img5, alt: "Pilates training 1" },
  { src: img6, alt: "Pilates training 2" },
];

const fitnessPhotos = [
  { src: img7, alt: "Fight For Fitness training 1" },
  { src: img8, alt: "Fight For Fitness training 2" },
];

const selfDefencePhotos = [
  { src: img9, alt: "Self Defence training 1" },
];

const programPhotos: Record<string, { src: string; alt: string }[]> = {
  mma: mmaPhotos,
  capoeira: capoeiraPhotos,
  pilates: pilatesPhotos,
  "fight-for-fitness": fitnessPhotos,
  "full-combat-self-defence": selfDefencePhotos,
};

// ========================
// SILHOUETTES
// ========================

const silhouettes = [
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

// ========================
// COMPONENT
// ========================

const ProgramPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Πρόγραμμα δεν βρέθηκε
          </h1>
          <Link to="/">
            <Button>Επιστροφή στην αρχική</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = program.icon;

  // ✅ FIXED: photos now correctly inside component
  const photos = programPhotos[slug ?? ""] ?? [];

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 border-b border-primary/20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4 flex items-center gap-4 h-16">
          <Link to="/" className="flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-black rounded-full"></div>
              <img
                src={logo}
                alt="Redemption Martial Arts logo"
                className="h-10 w-auto object-contain relative z-10"
              />
            </div>
          </Link>

          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-primary-foreground hover:bg-primary/20"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Αρχική</span>
            </Button>
          </Link>

          <div className="flex items-baseline gap-1.5 ml-2">
            <span className="text-lg font-blackops text-primary-foreground">
              REDEMPTION
            </span>
            <span className="text-sm font-blackops text-primary-foreground/70">
              Martial Arts & more
            </span>
          </div>
        </div>
      </header>

      {/* SILHOUETTES */}
      <div className="w-full overflow-hidden bg-white py-2">
        <LogoRow logos={silhouettes} size={60} speed={40} />
      </div>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
            <IconComponent className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            {program.title}
          </h1>
        </div>

        <p className="text-lg text-muted-foreground mb-12">
          {program.description}
        </p>

        {/* CAROUSEL */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full mb-16"
        >
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video rounded-xl overflow-hidden">
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

        {/* CONTACT */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Επικοινωνήστε μαζί μας</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:anaktisi.redemption@gmail.com">
                  anaktisi.redemption@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Τηλέφωνο
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+306972033728">697 2033728</a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" /> Social
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <a href="https://www.instagram.com/redemption.actionclub/">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100035441212035">
                  <Facebook />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgramPage;
