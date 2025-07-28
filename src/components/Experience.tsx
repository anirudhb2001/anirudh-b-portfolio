import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Star, Award, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    // {
    //   company: "Tech Solutions Inc.",
    //   position: "Software Development Intern",
    //   duration: "Jun 2024 - Aug 2024",
    //   location: "Bangalore, India",
    //   type: "Internship",
    //   description: "Worked on developing web applications using React and Node.js, contributing to both frontend and backend development projects.",
    //   achievements: [
    //     "Developed 3 responsive web components using React and TypeScript",
    //     "Optimized database queries resulting in 25% faster load times",
    //     "Collaborated with senior developers on agile development practices",
    //     "Implemented REST API endpoints for user management system"
    //   ],
    //   technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Git"]
    // },
    {
      company: "Suffix solutions",
      position: "Mobile App Development Intern",
      duration: "Jan 2024 - Mar 2024",
      location: "Kochi, India",
      type: "Internship",
      description: "Contributed to cross-platform mobile application development using Flutter, focusing on UI/UX implementation and API integration.",
      achievements: [
        "Built 5+ mobile app screens with pixel-perfect UI implementation",
        "Integrated third-party APIs for payment and authentication",
        "Participated in code reviews and learned best practices",
        "Delivered features ahead of schedule consistently"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "UI/UX"]
    }
  ];

  const certifications = [
    {
      name: "Java Programming Certification",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCP-123456"
    },
    {
      name: "Web Development Bootcamp",
      issuer: "udemy",
      date: "2023",
      credentialId: "FCC-789012"
    },
    {
      name: "Flutter Development Course",
      issuer: "Scope India",
      date: "2023",
      credentialId: "GD-345678"
    },
    {
      name: "SQL Database Fundamentals",
      issuer: "Udemy",
      date: "2023",
      credentialId: "MS-901234"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience and continuous learning through internships and certified courses
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            Internship Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">{exp.position}</h4>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mt-3">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Middle Column - Description & Achievements */}
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-accent" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-accent" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                      <p className="text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          ID: {cert.credentialId}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">Always staying updated with latest technologies and best practices</p>
            </CardContent>
          </Card>

          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">Experience working in agile teams and collaborative environments</p>
            </CardContent>
          </Card>

          <Card className="skill-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">Strong analytical skills developed through real-world projects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;