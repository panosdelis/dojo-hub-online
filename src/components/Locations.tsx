import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Downtown Dojo",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-6PM",
    mapUrl: "https://www.google.com/maps/search/martial+arts+downtown",
  },
  {
    name: "West Side Training Center",
    address: "456 West Avenue, West District",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 5AM-9PM, Sat-Sun: 7AM-5PM",
    mapUrl: "https://www.google.com/maps/search/martial+arts+west+side",
  },
  {
    name: "North Campus",
    address: "789 North Boulevard, University Area",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 6AM-11PM, Sat-Sun: 8AM-8PM",
    mapUrl: "https://www.google.com/maps/search/martial+arts+university",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find a gym near you and start your martial arts journey today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{location.name}</CardTitle>
                <CardDescription className="text-muted-foreground">State-of-the-art facility</CardDescription>
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
