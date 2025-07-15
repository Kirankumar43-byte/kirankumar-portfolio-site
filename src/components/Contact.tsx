import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kiran2007appu@gmail.com',
      href: 'mailto:kiran2007appu@gmail.com',
      color: 'bg-red-100 text-red-600 border-red-200'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7449169135',
      href: 'tel:7449169135',
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://share.google/zNphkRWFKLht4oCWm',
      color: 'bg-gray-100 text-gray-600 border-gray-200'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/kiran-kumar-6476b2326',
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's connect and explore opportunities together
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 card-shadow-hover transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Let's Connect</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to connect with fellow technology enthusiasts, potential collaborators, 
                    mentors, or anyone interested in AI and data science. Whether you have questions about my 
                    projects, want to discuss opportunities, or simply want to chat about the latest in tech, 
                    I'd love to hear from you!
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group"
                      >
                        <Card className="p-4 card-shadow hover:card-shadow-hover transition-smooth group-hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${contact.color}`}>
                              <contact.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-sm text-muted-foreground">{contact.label}</p>
                              <p className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground h-auto p-6"
                >
                  <a href="mailto:kiran2007appu@gmail.com">
                    <div className="text-center">
                      <Mail className="h-6 w-6 mx-auto mb-2" />
                      <div>
                        <p className="font-semibold">Send Email</p>
                        <p className="text-sm opacity-90">kiran2007appu@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-auto p-6"
                >
                  <a href="tel:7449169135">
                    <div className="text-center">
                      <Phone className="h-6 w-6 mx-auto mb-2" />
                      <div>
                        <p className="font-semibold">Call Me</p>
                        <p className="text-sm opacity-90">+91 7449169135</p>
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="space-y-6">
              <Card className="p-6 card-shadow-hover transition-smooth">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">Location</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Currently:</strong> Chennai, Tamil Nadu</p>
                    <p><strong>Home:</strong> The Nilgiris, Tamil Nadu</p>
                    <p><strong>Available for:</strong> Remote work, Local meetups</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20 card-shadow-hover transition-smooth">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Response Time</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 Email: Within 24 hours</p>
                    <p>📱 Phone: During business hours</p>
                    <p>💬 LinkedIn: 1-2 days</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-shadow-hover transition-smooth">
                <div className="space-y-4">
                  <h4 className="font-semibold">Interested in</h4>
                  <div className="space-y-2">
                    {['Data Science Projects', 'AI Research', 'Internship Opportunities', 'Tech Collaborations', 'Learning Partnerships'].map((interest) => (
                      <span 
                        key={interest}
                        className="inline-block w-full px-3 py-2 bg-muted rounded-lg text-sm text-muted-foreground"
                      >
                        • {interest}
                      </span>
                    ))}
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

export default Contact;