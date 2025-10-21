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
import img1 from '@/assets/1760878651216.jpg';
import img2 from '@/assets/1760878651244.jpg';
import img3 from '@/assets/1760879501078.jpg';
import img4 from '@/assets/1760879501114.jpg';
import img5 from '@/assets/1760879501236.jpg';
import img6 from '@/assets/1760879501280.jpg';
import img7 from '@/assets/1760879501371.jpg';
import img8 from '@/assets/1760879501406.jpg';
import img9 from '@/assets/1760879501451.jpg';

import Autoplay from "embla-carousel-autoplay";

const photos = [
  {
    src: img1,
    alt: "Photo 1760878651216",
  },
  {
    src: img2,
    alt: "Photo 1760878651244",
  },
  {
    src: img3,
    alt: "Photo 1760879501078",
  },
  {
    src: img4,
    alt: "Photo 1760879501114",
  },
  {
    src: img5,
    alt: "Photo 1760879501236",
  },
  {
    src: img6,
    alt: "Photo 1760879501280",
  },
  {
    src: img7,
    alt: "Photo 1760879501371",
  },
  {
    src: img8,
    alt: "Photo 1760879501406",
  },
  {
    src: img9,
    alt: "Photo 1760879501451",
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
  Η Redemption είναι μια ομάδα γεμάτη θετική ενέργεια και διάθεση. Προπονούμαστε μαζί καθημερινά, οργανώνουμε εκδρομές, δραστηριότητες και στηρίζουμε ο ένας τον άλλον για να γίνουμε πιο δυνατοί ψυχικά και σωματικά. Συνδυάζουμε σκληρή προπόνηση με καλή παρέα, βελτιωνόμαστε ολοι μαζί ενω ταυτοχρονα εστιάζουμε στις προσωπικές ανάγκες και στόχους του καθέ μέλους ξεχωριστά.
  <br /><br />
  Η προπόνησή μας επικεντρώνεται στην πρακτική αυτοάμυνα, περιλαμβάνει ποικιλία μαχητικών στυλ για άοπλη και ένοπλη συμπλοκή. Συμμετέχουμε σε σεμινάρια, εκδηλώσεις και αγώνες για όσους θέλουν να δοκιμάσουν τα όριά τους.
  <br /><br />
  Αν ο στόχος σου είναι η βελτίωση της φυσικής σου κατάστασης και όχι η μάχη σώμα με σώμα, τα προγράμματα Fight For Fitness, Capoeira και Pilates είναι ό,τι χρειάζεσαι.
  <br /><br />
  Αν είσαι αρχάριος, βρίσκεσαι στο σωστό μέρος για γρήγορη εξέληξη με γερές βάσεις. Αν έχεις εμπειρία, έλα να το πάμε μαζί σε άλλο επίπεδο!
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
