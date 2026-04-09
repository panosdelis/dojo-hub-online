import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";

const Programs = () => {
  const mainPrograms = programs.filter((p) => p.slug !== "personal-training");
  const personalTraining = programs.find((p) => p.slug === "personal-training");

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Προγράμματα και Παροχές</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Βρες αυτό που σου ταιρίαζει και γίνε η καλύτερη εκδοχή του εαυτού σου.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainPrograms.map((program, index) => (
            <Link to={`/program/${program.slug}`} key={index} className="block">
              <Card
                className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-2 bg-card border-border h-full cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80">{program.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {personalTraining && (
          <div className="mt-8 max-w-5xl mx-auto">
            <Link to={`/program/${personalTraining.slug}`} className="block">
              <Card className="hover:shadow-[var(--shadow-elevated)] hover:-translate-y-2 transition-all duration-300 bg-card border-border cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Dumbbell className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{personalTraining.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80">{personalTraining.description}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
