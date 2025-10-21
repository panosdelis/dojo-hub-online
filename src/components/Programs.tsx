import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Swords, Users, Trophy, Target, Zap, Heart, Activity, Dumbbell } from "lucide-react";
const programs = [{
  title: "Full Combat Self Defence",
  description: "Ένα συνδιαστικό πρόγραμμα με στοιχεία απο οκτώ διαφορετικές πολεμικές τέχνες. KUNG-FU, KICK BOXING, PANGRATIO, JIU JUSTU, KYOKUSHIN KARATE, MMA, F.C.S. KALI, SAVATE. Εκπαιδεύσου στην όρθια μάχη, στη μάχη εδάφους, προετοιμάσου ακόμα και για ένοπλη συμπλοκή για να μπορείς να προστατεύσεις τον εαυτό σου και τους γύρω σου σε κάθε περίπτωση.",
  icon: Target
}, {
  title: "F.C.S KALI",
  description: "Το Filipino Combat Systems είναι μια δυναμική απόλυτα πρακτική και ρεαλιστική μαχητική τέχνη που εξειδικεύεται κυρίως στην μάχιμη χρήση και εφαρμογή του μαχαιριού και του ραβδιού και στην άοπλη αντιμετώπισής τους.  Επίσης περιέχει πλήρης εκπαίδευση και στην άοπλη μάχη και απευθύνεται σε άντρες και γυναίκες αυστηρά άνω των 17 ετών.  Είναι μια τέχνη εύκολη στην εκμάθησή της, απόλυτα φυσική στην εκτέλεση των τεχνικών της και εντελώς ακίνδυνη στην εξάσκησή της.",
  icon: Swords 
}, {
  title: "M.M.A - Mixed Martial Arts",
  description: "Ένα μαχητικό άθλημα πλήρους επαφής που επιτρέπει τη χρήση τόσο των χτυπημάτων όσο και των λαβών, είτε από όρθια θέση είτε από το έδαφος.",
  icon: Trophy
}, {
  title: "Fight For Fitness",
  description: "Ένα αερόβιο πρόγραμμα εκγύμνασης εμπλουτισμένο με κινήσεις μέσα από τις πολεμικές τέχνες, πράγμα που προσδίδει ποικιλία και ένταση για να μη βαρεθείς ποτέ. Βασικός στόχος είναι βελτίωση της φυσικής κατάστασης, χάσιμο περιττών κιλών και η εκγύμναση ενώ ταυτόχρονα μαθαίνεις βασικές δεξιότητες αυτοάμυνας.",
  icon: Activity
}, {
  title: "Capoeira",
  description: "Μία παραδοσιακή βραζιλιάνικη πολεμική τέχνη, που συνδυάζει το χορό, τη μουσική και τη σωματική άσκηση, αλλά ο βασικός στόχος και η βαθύτερη φιλοσοφία της είναι το αίτημα της ελευθερίας",
  icon: Zap
}, {
  title: "Pilates",
  description: "Το «Pilates» έκανε την εμφάνισή του στα μέσα περίπου του 20ου αιώνα ως μέθοδος αποθεραπείας και ανάρρωσης αθλητών που είχαν τραυματιστεί. O συνδυασμός σωματικής ενδυνάμωσης και πνευματικής άσκησης έκανε τη μέθοδο να διαδοθεί πολύ γρήγορα. Σήμερα είναι μία από τις πιο δημοφιλείς και διαδεδομένες μεθόδους γυμναστικής, κυρίως γιατί έχει άμεσα αποτελέσματα. Ο στόχος του Joseph Pilates ήταν 30 συνεδρίες για ένα καινούριο σώμα. «Μετά από δέκα συνεδρίες», έλεγε «θα παρατηρήσετε μια αλλαγή στο σώμα σας. Μετά από είκοσι, θα την δουν και οι άλλοι, και μετά από τριάντα, θα έχετε ένα ολοκαίνουριο σώμα»",
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

<div className="mt-8 max-w-5xl mx-auto">
  <Card className="hover:shadow-[var(--shadow-elevated)] hover:-translate-y-2 transition-all duration-300 bg-card border-border">
    <CardHeader>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Dumbbell className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="text-xl text-card-foreground">Personal Training</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-card-foreground/80">
        Εξατομικευμένη προπόνηση σχεδιασμένη ειδικά για τους στόχους σου.
      </p>
    </CardContent>
  </Card>
</div>
      </div>
    </section>;
};
export default Programs;
