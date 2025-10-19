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
    src: training1,
    alt: "Dynamic martial arts training session",
    caption: "Intense Training Sessions"
  },
  {
    src: training2,
    alt: "Instructor teaching martial arts techniques",
    caption: "Expert Instruction"
  },
  {
    src: training3,
    alt: "Children's martial arts class",
    caption: "Programs for All Ages"
  },
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
          Redemption σημαινει σεβασμος , δυναμη και πειθαρχια, ταυτοχρονα με την εκγυμναση του σωματος αναπτυσουμε και καλες διατροφικες συνηθειες και φιλους.
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
