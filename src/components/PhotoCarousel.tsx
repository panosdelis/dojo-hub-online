import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import training1 from "@/assets/training1.jpg";
import training2 from "@/assets/training2.jpg";
import training3 from "@/assets/training3.jpg";
import Autoplay from "embla-carousel-autoplay";

const photos = [
  {
    src: "/images/1760878651216.jpg",
    alt: "Photo 1760878651216",
    caption: "Caption for 1760878651216"
  },
  {
    src: "/images/1760878651244.jpg",
    alt: "Photo 1760878651244",
    caption: "Caption for 1760878651244"
  },
  {
    src: "/images/1760879501078.jpg",
    alt: "Photo 1760879501078",
    caption: "Caption for 1760879501078"
  },
  {
    src: "/images/1760879501114.jpg",
    alt: "Photo 1760879501114",
    caption: "Caption for 1760879501114"
  },
  {
    src: "/images/1760879501236.jpg",
    alt: "Photo 1760879501236",
    caption: "Caption for 1760879501236"
  },
  {
    src: "/images/1760879501280.jpg",
    alt: "Photo 1760879501280",
    caption: "Caption for 1760879501280"
  },
  {
    src: "/images/1760879501371.jpg",
    alt: "Photo 1760879501371",
    caption: "Caption for 1760879501371"
  },
  {
    src: "/images/1760879501406.jpg",
    alt: "Photo 1760879501406",
    caption: "Caption for 1760879501406"
  },
  {
    src: "/images/1760879501451.jpg",
    alt: "Photo 1760879501451",
    caption: "Caption for 1760879501451"
  }
];

const PhotoCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ποιοί είμαστε:
          </h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Η Redemption είναι μια ζεστή ομάδα γεμάτη θετική ενέργεια. Προπονούμαστε μαζί καθημερινά, οργανώνουμε εκδρομές και βόλτες και στηρίζουμε ο ένας τον άλλον για να γίνουμε πιο δυνατοί — ψυχικά και σωματικά. Συνδυάζουμε σκληρή προπόνηση με καλή παρέα, προσαρμόζοντας την πορεία του καθενός στις προσωπικές του ανάγκες και στόχους.
  <br /><br />
  Η προπόνησή μας επικεντρώνεται στην πρακτική αυτοάμυνα και περιλαμβάνει ποικιλία μαχητικών στυλ για άοπλη και ένοπλη άμυνα. Συμμετέχουμε σε σεμινάρια, εκδηλώσεις και αγώνες για όσους θέλουν να δοκιμάσουν τα όριά τους.
  <br /><br />
  Αν είσαι αρχάριος, βρίσκεσαι στο σωστό μέρος για γρήγορη πρόοδο με γερά θεμέλια. Αν έχεις εμπειρία, έλα να το πάμε μαζί σε άλλο επίπεδο!
  <br /><br />
  <strong>DANGER IS REAL</strong><br />
  <strong>BUT FEAR IS A CHOICE</strong>
</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
                    <p className="text-2xl font-bold text-secondary-foreground">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoCarousel;
