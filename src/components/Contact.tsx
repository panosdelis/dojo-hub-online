import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

const Contact = () => {

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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/mnngrddn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας σύντομα.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
    }
  } catch (error) {
    toast.error("Σφάλμα κατά την αποστολή. Ελέγξτε τη σύνδεσή σας.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Επικοινωνήστε μαζί μας
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Κλειστέ τη θέση σας για μια δωρεάν δοκιμαστική προπόνηση στο τμήμα της επιλογής σας.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Στείλτε μας μήνυμα </CardTitle>
              <CardDescription className="text-muted-foreground">Συμπληρώστε τα στοιχεία και θα επικοινωνήσουμε μαζι σας.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-input"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Αποστολή πληροφοριών
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:anaktisi.redemption@gmail.com" className="text-primary font-semibold hover:underline">
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
      </div>
       <div className="w-full overflow-hidden -mb-20 mt-4">
        <LogoRow logos={logos} size={80} speed={40} />
      </div>
    </section>
  );
};

export default Contact;
