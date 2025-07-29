import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "College of Engineering Kidangoor",
      location: "Kottayam, Kerala",
      duration: "2023 - 2026",
     // grade: "CGPA: 8.5/10",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, DBMS, OOP",
        "Active member of Computer Science Society",
        // "Participated in multiple coding competitions and hackathons"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      field: "Computer Science",
      institution: "Government Polytechnic College, Pala",
      location: "Kottayam, Kerala",
      duration: "2019 - 2022",
      grade: "first class",
      highlights: [
        "Specialized in software development and programming languages",
        "Developed several projects in HTML,CSS and JavaScript",
        "Member of the college union and technical club"
      ]
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey in Computer Science and Engineering, 
            building a strong foundation for technological innovation
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Main Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-lg text-primary">{edu.field}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="font-semibold text-accent">{edu.grade}</p>
                    </div>
                  </div>

                 {/* Right Column - Highlights */}
<div>
  <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
  <ul className="space-y-3">
    {(edu.highlights ?? []).map((highlight, highlightIndex) => (
      <li key={highlightIndex} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
        <span className="text-muted-foreground">{highlight}</span>
      </li>
    ))}
  </ul>
</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Academic Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground">Consistent high performance in core computer science subjects</p>
            </CardContent>
          </Card>

          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Interest</h3>
              <p className="text-muted-foreground">Exploring AI, machine learning, and software engineering</p>
            </CardContent>
          </Card>

          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extracurricular</h3>
              <p className="text-muted-foreground">Active participation in coding clubs and technical events</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;