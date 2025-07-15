import { Rocket, Calendar, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const upcomingProjects = [
    {
      title: 'AI-Powered Data Analysis Dashboard',
      description: 'Building an interactive dashboard for visualizing and analyzing large datasets using Python and machine learning algorithms.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      timeline: 'Q2 2025'
    },
    {
      title: 'Machine Learning Model for Prediction',
      description: 'Developing predictive models to solve real-world problems using various ML algorithms and techniques.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
      timeline: 'Q3 2025'
    },
    {
      title: 'Personal Portfolio Website Enhancement',
      description: 'Continuously improving this portfolio with new features, projects, and enhanced user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      timeline: 'Ongoing'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              Upcoming projects and current work in progress
            </p>
          </div>

          {/* Current Status */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 card-shadow-hover transition-smooth">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Projects in Development</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I'm currently working on several exciting projects that will showcase my skills in data science, 
                  AI, and software development. Each project is carefully planned to demonstrate different aspects 
                  of my learning journey and technical capabilities.
                </p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium">Expected Launch: 2025</span>
              </div>
            </div>
          </Card>

          {/* Upcoming Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Upcoming Projects</h3>
            
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="p-8 card-shadow-hover transition-smooth hover:scale-105 group">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {project.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="skill-badge text-sm transition-smooth hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 text-center bg-muted/30 card-shadow-hover transition-smooth">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'll be updating this portfolio regularly as I complete projects and learn new technologies. 
                Feel free to reach out if you'd like to collaborate or learn more about my work!
              </p>
              <Button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary-hover text-primary-foreground mt-4"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;