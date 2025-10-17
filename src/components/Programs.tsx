import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Swords, Users, Trophy, Target, Zap, Heart } from "lucide-react";
const programs = [{
  title: "Full Combat Self Defence",
  description: "Ένα συνδιαστικό πρόγραμμα με στοιχεία απο εφτά διαφορετικές πολεμικές τέχνες. Εκπαιδεύσου στην όρθια μάχη, στη μάχη εδάφους, προετοιμάσου ακόμα και για ένοπλη συμπλοκή για να μπορείς να προστατεύσεις τον εαυτό σου και τους γύρω σου σε κάθε περίπτωση.",
  icon: Swords
}, {
  title: "F.C.S KALI",
  description: "Το Filipino Combat Systems είναι μια δυναμική απόλυτα πρακτική και ρεαλιστική μαχητική τέχνη που εξειδικεύεται κυρίως στην μάχιμη χρήση και εφαρμογή του μαχαιριού και του ραβδιού και στην άοπλη αντιμετώπισής τους.  Επίσης περιέχει πλήρης εκπαίδευση και στην άοπλη μάχη και απευθύνεται σε άντρες και γυναίκες αυστηρά άνω των 17 ετών.  Είναι μια τέχνη εύκολη στην εκμάθησή της, απόλυτα φυσική στην εκτέλεση των τεχνικών της και εντελώς ακίνδυνη στην εξάσκησή της.",
  icon: Target
}, {
  title: "Mixed Martial Arts",
  description: "Combination of various martial arts disciplines for comprehensive self-defense and competition training.",
  icon: Trophy
}, {
  title: "Fight For Fitness",
  description: "Ground fighting and grappling techniques emphasizing leverage and technique over strength.",
  icon: Users
}, {
  title: "Capoeira",
  description: "Brazilian martial art combining dance, acrobatics, and music with fluid movements and rhythmic flow.",
  icon: Zap
}, {
  title: "Pilates",
  description: "Low-impact exercise method focusing on core strength, flexibility, and body awareness for overall wellness.",
  icon: Heart
}];
const Programs = () => {
  return <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Προγράμματα και Παροχές</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Βρες αυτό που σου ταιρίαζει και  γίνε η καλυτερη εκδοχή του εαυτού σου.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => <Card key={index} className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-2 bg-card border-border" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{program.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Programs;