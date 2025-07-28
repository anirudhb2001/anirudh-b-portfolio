import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "Dart"]
    },
    {
      icon: Palette,
      title: "Frontend Development",
      color: "text-accent",
      skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-primary-glow",
      skills: ["SQL", "Node.js", "REST APIs", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Tools",
      color: "text-accent",
      skills: ["Flutter", "Git", "VS Code", "Android Studio"]
    }
  ];

  const technologies = [
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Dart/Flutter", level: 65 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies 
            that I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-skill-bg border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;