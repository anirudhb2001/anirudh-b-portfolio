import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = './Anirudh_B_Nair_Resume.pdf';
    link.download = 'Anirudh_B_Nair_Resume.pdf';
     link.click(); // Uncomment when you have an actual resume file
    console.log('Resume download clicked');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="section-reveal animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">
            <span className="gradient-text">Anirudh</span>
            <br />
            <span className="text-foreground">B  </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science & Engineering Student passionate about building innovative solutions through code
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-button bg-primary hover:bg-primary-glow px-8 py-4 text-lg"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/anirudh-b-nair-9745elkm/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/anirudhb2001" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;