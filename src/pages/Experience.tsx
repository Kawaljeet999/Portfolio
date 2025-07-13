
import { useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Users, BarChart, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Technical Support Intern",
      company: "Horizon Career Consultants Pvt. Ltd",
      location: "Ajmer, Rajasthan",
      duration: "April 2024 – April 2024",
      type: "Internship",
      responsibilities: [
        "Filtered and managed data across about 100 Excel sheets",
        "Handled CSV files and managed Google Contacts",
        "Helped calculate productivity of 100+ employees",
        "Awarded Certificate of Completion"
      ],
      icon: Briefcase
    },
    {
      title: "Linux System Administration Intern",
      company: "CyberGyan",
      location: "Remote",
      duration: "June 2024 – July 2024",
      type: "Internship",
      responsibilities: [
        "Worked with Linux system administration and command-line operations",
        "Gained hands-on experience with shell scripting and automation",
        "Learned system monitoring and troubleshooting techniques",
        "Completed practical assignments on file management and permissions"
      ],
      icon: Terminal
    }
  ];

  const positions = [
    {
      title: "Data Management Intern",
      organization: "Horizon Intern",
      description: "Led data management initiatives and streamlined data processing workflows"
    },
    {
      title: "GitHub Project Coordinator",
      organization: "Open Source Community",
      description: "Coordinated multiple GitHub projects and managed version control workflows"
    }
  ];

  const skills = [
    "Data Management",
    "Excel Advanced Functions",
    "CSV Processing",
    "Google Workspace",
    "Productivity Analysis",
    "Technical Documentation",
    "Linux Administration",
    "Shell Scripting",
    "System Monitoring",
    "Command Line Operations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hands-on experience in data management, technical support, Linux system administration, and project coordination 
              with a focus on delivering results and continuous learning.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-12 space-y-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <Card key={index} className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <CardTitle className="text-2xl">{experience.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {experience.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-primary" />
                          Key Responsibilities & Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <div key={respIndex} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {index === 0 && (
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Impact & Results</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                              <div className="text-2xl font-bold text-primary mb-1">100+</div>
                              <div className="text-sm text-muted-foreground">Excel Sheets Managed</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                              <div className="text-2xl font-bold text-primary mb-1">100+</div>
                              <div className="text-sm text-muted-foreground">Employee Productivity Calculated</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                              <div className="text-2xl font-bold text-primary mb-1">✓</div>
                              <div className="text-sm text-muted-foreground">Certificate Awarded</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Positions of Responsibility */}
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-300`}>
              Positions of <span className="text-primary">Responsibility</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      {position.title}
                    </CardTitle>
                    <div className="text-muted-foreground font-medium">
                      {position.organization}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Gained */}
          <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1000`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="h-6 w-6 text-primary" />
                Skills & Competencies Gained
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1200`}>
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for New Opportunities</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm actively seeking internship and full-time opportunities where I can apply my technical skills, 
                contribute to meaningful projects, and continue growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;