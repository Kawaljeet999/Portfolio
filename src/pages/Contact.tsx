import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, User, FileText, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Submitted!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kawalgeet999@gmail.com",
      action: () => {},
      gradient: "from-blue-500 to-cyan-500",
      clickable: false
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "Kawaljeet999",
      action: () => window.open("https://github.com/Kawaljeet999/Kawaljeet999", "_blank"),
      gradient: "from-gray-700 to-gray-900",
      clickable: true
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "kawalgeetsingh",
      action: () => window.open("https://www.linkedin.com/in/kawalgeetsingh/", "_blank"),
      gradient: "from-blue-600 to-blue-800",
      clickable: true
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "LeetCode",
      value: "Kawalgeet_Singh",
      action: () => window.open("https://leetcode.com/u/Kawalgeet_Singh/", "_blank"),
      gradient: "from-orange-500 to-yellow-500",
      clickable: true
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Ajmer, Rajasthan",
      action: () => {},
      gradient: "from-green-500 to-emerald-500",
      clickable: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow developers and tech enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration / Job Opportunity / etc."
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      required
                      className="focus:ring-primary focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                        info.clickable 
                          ? 'hover:bg-primary/5 cursor-pointer group' 
                          : 'bg-muted/20'
                      }`}
                      onClick={info.clickable ? info.action : undefined}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} text-white shadow-lg ${
                        info.clickable ? 'group-hover:scale-110' : ''
                      } transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className={`font-semibold transition-colors ${
                          info.clickable ? 'group-hover:text-primary' : ''
                        }`}>{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-300`}>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full justify-start hover:scale-105 transition-all duration-300" 
                    variant="outline"
                    onClick={() => window.open("https://drive.google.com/file/d/1Old6w8lLoudCHOqFcGvS60if_dW5AVX9/view?usp=sharing", "_blank")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                  
                  <Button 
                    className="w-full justify-start hover:scale-105 transition-all duration-300" 
                    variant="outline"
                    onClick={() => window.open("https://github.com/Kawaljeet999/Kawaljeet999", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Button>
                  
                  <Button 
                    className="w-full justify-start hover:scale-105 transition-all duration-300" 
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/in/kawalgeetsingh/", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>

                  <Button 
                    className="w-full justify-start hover:scale-105 transition-all duration-300" 
                    variant="outline"
                    onClick={() => window.open("https://leetcode.com/u/Kawalgeet_Singh/", "_blank")}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View LeetCode Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-600`}>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-green-600">Available for Opportunities</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking internships and full-time positions in Software Development, 
                      Machine Learning, and Data Science roles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1000`}>
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                I typically respond to emails within 24 hours. Whether you have a project idea, 
                job opportunity, or just want to chat about technology, I'd love to hear from you!
              </p>
              <p className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;