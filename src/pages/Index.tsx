import { useState, useEffect } from "react";
import { ArrowRight, Download, Star, Code, Brain, Palette, ExternalLink, Github, User, GraduationCap, Briefcase, Award, Phone, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Department Rank 1",
      description: "CSE with 9.04 GPA"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "5+ Projects",
      description: "Full-stack & ML projects"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Expert",
      description: "Deep Learning & Computer Vision"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Modern & Responsive"
    }
  ];

  const featuredProjects = [
    {
      title: "VOCALIS-AI",
      description: "Real-time animal sound emotion predictor using KMeans, KNN, and LSTM with audio input support.",
      image: "🎵",
      liveDemo: "https://vocalis-ai-r9co.onrender.com/",
      github: "https://github.com/Kawaljeet999/Vocalis-AI",
      tech: ["Python", "LSTM", "KMeans", "KNN"]
    },
    {
      title: "Potato Classification Model",
      description: "CNN-based model for potato leaf disease detection using TensorFlow and Keras with FastAPI backend.",
      image: "🥔",
      liveDemo: "https://potato-classification-model-0oqc.onrender.com/",
      github: "https://github.com/Kawaljeet999/POTATO-CLASSIFICATION",
      tech: ["TensorFlow", "Keras", "FastAPI", "CNN"]
    },
    {
      title: "Churn Prediction Model",
      description: "ML-powered tool for customer churn prediction using PCA and classification algorithms with Streamlit.",
      image: "📊",
      liveDemo: "https://churn-prj-ht21.onrender.com/",
      github: "https://github.com/Kawaljeet999/Churn_PRJ",
      tech: ["ML", "PCA", "Streamlit", "Classification"]
    }
  ];

  const navigationSections = [
    {
      title: "About Me",
      description: "Learn about my journey and background",
      icon: <User className="h-6 w-6" />,
      path: "/about",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Education",
      description: "Academic achievements and coursework",
      icon: <GraduationCap className="h-6 w-6" />,
      path: "/education",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Experience",
      description: "Professional experience and internships",
      icon: <Briefcase className="h-6 w-6" />,
      path: "/experience",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Skills",
      description: "Technical and soft skills",
      icon: <Award className="h-6 w-6" />,
      path: "/skills",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Contact",
      description: "Get in touch with me",
      icon: <Phone className="h-6 w-6" />,
      path: "/contact",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const handleResumeRequest = (data: any) => {
    toast({
      title: "Resume Request Submitted",
      description: "Your request has been submitted successfully. You'll receive a response soon!",
    });
    setIsResumeDialogOpen(false);
    form.reset();
  };

  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1Old6w8lLoudCHOqFcGvS60if_dW5AVX9/view?usp=sharing", "_blank");
  };

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/uc?export=download&id=1Old6w8lLoudCHOqFcGvS60if_dW5AVX9", "_blank");
  };

  const handleLeetCodeClick = () => {
    window.open("https://leetcode.com/u/Kawalgeet_Singh/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top area with profile image */}
          <div className="flex justify-center mb-8">
            <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl"></div>
                <img
                  src="public/pic.png"
                  alt="Kawaljeet Singh"
                  className="relative z-10 w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-primary/20 hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-lg opacity-20 animate-pulse"></div>
              <div className="absolute bottom-5 left-5 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    KAWALJEET
                  </span>
                  <br />
                  <span className="text-foreground font-black">SINGH</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Full Stack Developer & Machine Learning Engineer passionate about creating
                  innovative solutions with cutting-edge technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Dialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                      <Download className="mr-2 h-4 w-4" />
                      Request Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Request Resume Access</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleResumeRequest)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@company.com" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="linkedin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="purpose"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Purpose *</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Why do you need the resume? (hiring, collaboration, etc.)" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2 pt-4">
                          <Button type="submit" className="flex-1">Submit Request</Button>
                          <Button type="button" variant="outline" onClick={handleViewResume} className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                          <Button type="button" variant="outline" onClick={handleDownloadResume} className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLeetCodeClick}
                  className="group hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  LeetCode
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
                {highlights.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-4 text-center">
                      <div className="text-primary mb-2 flex justify-center">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-blue-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover my top projects showcasing AI/ML expertise and full-stack development skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">{project.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                      className="flex-1 group/btn hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="hover:scale-105 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navigate through different sections to learn more about my background, skills, and experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row: About, Education, Experience */}
            <Link to={navigationSections[0].path}>
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${navigationSections[0].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {navigationSections[0].icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {navigationSections[0].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {navigationSections[0].description}
                    </p>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 mx-auto text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to={navigationSections[1].path}>
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${navigationSections[1].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {navigationSections[1].icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {navigationSections[1].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {navigationSections[1].description}
                    </p>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 mx-auto text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to={navigationSections[2].path}>
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${navigationSections[2].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {navigationSections[2].icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {navigationSections[2].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {navigationSections[2].description}
                    </p>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 mx-auto text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Second Row: Skills, Contact centered */}
            <Link to={navigationSections[3].path}>
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${navigationSections[3].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {navigationSections[3].icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {navigationSections[3].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {navigationSections[3].description}
                    </p>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 mx-auto text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="lg:col-start-2">
              <Link to={navigationSections[4].path}>
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${navigationSections[4].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {navigationSections[4].icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {navigationSections[4].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {navigationSections[4].description}
                      </p>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-4 w-4 mx-auto text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-blue-600/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Quick Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">8.81</div>
              <div className="text-lg font-medium">Overall GPA</div>
              <div className="text-muted-foreground">Government Engineering College, Ajmer</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-lg font-medium">Live Projects</div>
              <div className="text-muted-foreground">Full-stack & Machine Learning</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1st</div>
              <div className="text-lg font-medium">Department Rank</div>
              <div className="text-muted-foreground">Computer Science Engineering</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;