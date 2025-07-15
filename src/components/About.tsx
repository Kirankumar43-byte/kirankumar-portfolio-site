import { GraduationCap, MapPin, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey and aspirations
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio */}
            <Card className="p-8 card-shadow-hover transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">My Story</h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Hello! I'm Kiran Kumar M, a passionate and driven B.Tech Artificial Intelligence and Data Science (AIDS) 
                    student currently pursuing my degree at Dhaanish Ahmed College of Engineering, Chennai. I hail from the 
                    beautiful hills of The Nilgiris, Tamil Nadu, and I'm deeply inspired by the possibilities of technology 
                    to solve real-world problems.
                  </p>
                  
                  <p>
                    My primary career goal is to become a Data Scientist, with a strong interest in Artificial Intelligence 
                    tools, Machine Learning, and Data Analytics. I am enthusiastic about exploring AI-powered solutions, 
                    working on innovative projects, and continuously learning emerging technologies in the AI and Data Science space.
                  </p>
                  
                  <p>
                    Every day, I'm motivated by the endless possibilities that AI and data science offer to transform industries 
                    and improve lives. I believe that with the right combination of technical skills, creativity, and persistence, 
                    we can build solutions that make a meaningful impact on society.
                  </p>
                </div>
              </div>
            </Card>

            {/* Education & Location */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <Card className="p-8 card-shadow-hover transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        B.Tech Artificial Intelligence and Data Science
                      </h4>
                      <p className="text-primary font-medium">
                        Dhaanish Ahmed College of Engineering, Chennai
                      </p>
                      <p className="text-muted-foreground">Expected Graduation: 2028</p>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Focusing on core concepts in AI, machine learning, data analytics, 
                        and software development with hands-on project experience.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Location & Background */}
              <Card className="p-8 card-shadow-hover transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Background</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">From The Nilgiris</h4>
                      <p className="text-muted-foreground">
                        Originally from the beautiful hills of The Nilgiris, Tamil Nadu, 
                        bringing a unique perspective shaped by nature's tranquility and beauty.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Currently in Chennai</h4>
                      <p className="text-muted-foreground">
                        Pursuing my studies in Chennai, immersing myself in the vibrant 
                        tech ecosystem and learning opportunities the city offers.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;