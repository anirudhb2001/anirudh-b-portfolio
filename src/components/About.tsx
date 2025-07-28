import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Computer Science student with a strong foundation in software development 
            and a drive to create impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Anirudh B Nair, a dedicated Computer Science and Engineering student with a passion 
              for technology and innovation. I thrive on solving complex problems and turning ideas 
              into reality through code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in computer science has equipped me with a strong foundation in multiple 
              programming languages and frameworks. I'm always eager to learn new technologies 
              and apply them to create meaningful projects.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <Target className="h-6 w-6 text-accent" />
              <h4 className="text-xl font-semibold">Goal</h4>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To leverage my technical skills and creativity to build innovative software solutions 
              that make a positive impact on people's lives and contribute to the advancement of technology.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            <Card className="skill-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Computer Science & Engineering</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing my degree with a focus on software development, 
                  algorithms, and modern technology stacks.
                </p>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold">Technical Expertise</h3>
                    <p className="text-muted-foreground">Full-Stack Development</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Proficient in multiple programming languages and frameworks, 
                  with experience in both frontend and backend development.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="skill-card">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">10+</h4>
                  <p className="text-sm text-muted-foreground">Programming Languages</p>
                </CardContent>
              </Card>
              
              <Card className="skill-card">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-accent mb-2">15+</h4>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;