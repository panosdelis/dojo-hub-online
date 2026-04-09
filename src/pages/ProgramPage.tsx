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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      {/* Top Bar with hero gradient */}
      <header
        className="sticky top-0 z-50 border-b border-primary/20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4 flex items-center gap-4 h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Redemption Martial Arts logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-primary-foreground hover:bg-primary/20">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Αρχική</span>
            </Button>
          </Link>
          <div className="flex items-baseline gap-1.5 ml-2">
            <span className="text-lg font-blackops text-primary-foreground leading-none">REDEMPTION</span>
            <span className="text-sm font-blackops text-primary-foreground/70 leading-none">Martial Arts & more</span>
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
          className="w-full mb-16"
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

        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Επικοινωνήστε μαζί μας
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:anaktisi.redemption@gmail.com" className="text-primary font-semibold hover:underline text-sm">
                  anaktisi.redemption@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Καλέστε μας
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+306972033728" className="text-primary font-semibold hover:underline">
                  697 2033728
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/redemption.actionclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Instagram className="w-5 h-5" />
                    <span><strong>Instagram</strong></span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100035441212035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Facebook className="w-5 h-5" />
                    <span><strong>Facebook</strong></span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgramPage;
