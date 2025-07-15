import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Kiran Kumar M</h3>
            <p className="text-background/80 text-sm">
              Aspiring Data Scientist & AI Enthusiast
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Home
              </a>
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                About
              </a>
              <a 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Skills
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a 
              href="mailto:kiran2007appu@gmail.com"
              className="p-3 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="https://share.google/zNphkRWFKLht4oCWm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kiran-kumar-6476b2326"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Kiran Kumar M. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>and passion for technology.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;