import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Swords, Users, Trophy, Target } from "lucide-react";

const programs = [
  {
    title: "Karate",
    description: "Traditional Japanese martial art focusing on strikes, kicks, and defensive techniques. Perfect for all ages.",
    icon: Swords,
    duration: "3x per week",
  },
  {
    title: "Taekwondo",
    description: "Korean martial art known for dynamic kicks and fast-paced movements. Build strength and flexibility.",
    icon: Target,
    duration: "2x per week",
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description: "Ground fighting and grappling techniques emphasizing leverage and technique over strength.",
    icon: Users,
    duration: "4x per week",
  },
  {
    title: "Mixed Martial Arts",
    description: "Combination of various martial arts disciplines for comprehensive self-defense and competition training.",
    icon: Trophy,
    duration: "5x per week",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of martial arts disciplines, each designed to help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
