import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Redemption Action Club, Χαλάνδρι",
    address: "Κολοκοτρώνη 9, Χαλάνδρι",
    phone: "697 2033728",
    hours: "Mon-Fri: 5AM-10PM, Sat-Sun: Closed",
    mapUrl: "https://maps.app.goo.gl/3Bjz55rAg6YD7qF17",
  },
  {
    name: "Redemption Martial Arts, Νέα Ιωνία",
    address: "Σπάρτης 84, Νέα Ιωνία",
    phone: "697 2033728",
    hours: "Mon-Fri: 5AM-10PM, Sat-Sun: Closed",
    mapUrl: "https://maps.app.goo.gl/gkTQLVxQrvCp5Xb66",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Βρείτε μας
          </h2>
          /*<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find a gym near you and start your martial arts journey today
          </p>
          */
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{location.name}</CardTitle>
                // <CardDescription className="text-muted-foreground">State-of-the-art facility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-card-foreground/80">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-card-foreground/80">{location.phone}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-card-foreground/80">{location.hours}</p>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full mt-4"
                  onClick={() => window.open(location.mapUrl, '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
