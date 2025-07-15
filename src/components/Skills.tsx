import { Code, Database, Brain, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      icon: Code,
      description: 'Core programming language for data science and AI development',
      level: 'Intermediate'
    },
    {
      name: 'Data Structures',
      icon: Database,
      description: 'Fundamental algorithms and data organization concepts',
      level: 'Learning'
    },
    {
      name: 'AI Tools',
      icon: Brain,
      description: 'Basic understanding of artificial intelligence frameworks',
      level: 'Basic'
    },
    {
      name: 'React JSS',
      icon: Layers,
      description: 'Front-end development with React and styling',
      level: 'Basic'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Intermediate':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Learning':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Basic':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Current technical skills and areas of focus
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-8 card-shadow-hover transition-smooth hover:scale-105 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Learning Journey */}
          <Card className="mt-12 p-8 bg-primary/5 border-primary/20 card-shadow-hover transition-smooth">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Continuous Learning Journey</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                As a passionate learner in the AI and Data Science field, I'm constantly expanding my skill set. 
                I'm currently deepening my knowledge in machine learning algorithms, data visualization, 
                and exploring new AI frameworks and tools that emerge in this rapidly evolving field.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {['Machine Learning', 'Data Analytics', 'Neural Networks', 'TensorFlow', 'Pandas', 'NumPy'].map((topic) => (
                  <span 
                    key={topic}
                    className="skill-badge transition-smooth hover:scale-105"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;