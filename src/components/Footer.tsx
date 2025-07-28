import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/anirudh-b-nair",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/anirudh-b-nair",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:anirudh.b.nair@example.com",
      label: "Email"
    }
  ];

  const handleQuickLinkClick = (href: string) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-space-grotesk mb-4">
              <span className="gradient-text">Anirudh B Nair</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Computer Science & Engineering student passionate about creating innovative 
              solutions through code. Always eager to learn and contribute to meaningful projects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-border hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Bangalore, India</p>
              <a 
                href="mailto:anirudh.b.nair@example.com"
                className="block hover:text-primary transition-colors animated-underline"
              >
                anirudh.b.nair@example.com
              </a>
              <a 
                href="tel:+919876543210"
                className="block hover:text-primary transition-colors animated-underline"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Anirudh B Nair. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using React & TypeScript</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-border hover:border-primary hover:bg-primary/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;