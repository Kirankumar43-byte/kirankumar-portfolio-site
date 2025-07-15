import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 hero-gradient">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-primary">Kiran Kumar M</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Aspiring Data Scientist | AI Enthusiast | Technology Learner
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Exploring AI-powered solutions and passionate about solving real-world problems through data science. 
                Currently pursuing B.Tech in Artificial Intelligence and Data Science.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium transition-smooth group"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="mailto:kiran2007appu@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:7449169135"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://share.google/zNphkRWFKLht4oCWm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kiran-kumar-6476b2326"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 card-shadow-hover transition-smooth">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-2">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">KM</span>
                      </div>
                      <p className="text-sm">Professional Photo</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-60"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;