import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      icon: Globe,
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management"
      ],
      github: "https://github.com/anirudh-b-nair/ecommerce-app",
      live: "https://ecommerce-demo.example.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "A cross-platform mobile application developed using Flutter and Dart, helping users organize tasks with intuitive UI and offline functionality.",
      technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
      icon: Smartphone,
      features: [
        "Cross-platform mobile application",
        "Offline task storage and sync",
        "Real-time notifications",
        "Dark/Light theme support"
      ],
      github: "https://github.com/anirudh-b-nair/task-manager",
      live: "",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Student Information System",
      description: "A comprehensive database management system for educational institutions, built with Java and SQL, featuring student records, attendance tracking, and grade management.",
      technologies: ["Java", "MySQL", "JavaFX", "JDBC"],
      icon: Database,
      features: [
        "Student registration and profile management",
        "Attendance tracking system",
        "Grade calculation and reporting",
        "Admin and teacher role management"
      ],
      github: "https://github.com/anirudh-b-nair/student-info-system",
      live: "",
      status: "Completed"
    },
    {
      id: 4,
      title: "Algorithm Visualizer",
      description: "An interactive web application that visualizes various sorting and searching algorithms, helping students understand algorithmic concepts through animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      icon: Code,
      features: [
        "Interactive algorithm animations",
        "Multiple sorting algorithms",
        "Step-by-step execution control",
        "Performance comparison metrics"
      ],
      github: "https://github.com/anirudh-b-nair/algorithm-visualizer",
      live: "https://algo-viz-demo.example.com",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating proficiency in various 
            programming languages and development frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-border hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-glow"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/anirudh-b-nair" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;