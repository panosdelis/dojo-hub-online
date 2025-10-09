import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Locations from "@/components/Locations";
import PhotoCarousel from "@/components/PhotoCarousel";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Programs />
      <PhotoCarousel />
      <Locations />
      <Contact />
      
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Elite Martial Arts Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
