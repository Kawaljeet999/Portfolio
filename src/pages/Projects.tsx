
import { useEffect, useState } from "react";
import { ExternalLink, Github, Brain, Leaf, TrendingUp, Target, BarChart, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "VOCALIS-AI",
            description: "Real-time animal sound emotion predictor using KMeans, KNN, and LSTM algorithms. Features audio input processing and returns emotion predictions with confidence levels and natural language phrasing.",
            icon: <Brain className="h-8 w-8" />,
            image: "🎵",
            technologies: ["Python", "TensorFlow", "LSTM", "KMeans", "KNN", "Audio Processing"],
            liveLink: "https://vocalis-ai-r9co.onrender.com/",
            githubLink: "https://github.com/Kawaljeet999/Vocalis-AI",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "POTATO CLASSIFICATION MODEL",
            description: "CNN-based model for potato leaf disease detection using TensorFlow and Keras. Features FastAPI backend with custom Web UI deployment for accurate disease identification.",
            icon: <Leaf className="h-8 w-8" />,
            image: "🥔",
            technologies: ["TensorFlow", "Keras", "CNN", "FastAPI", "Computer Vision", "Web UI"],
            liveLink: "https://potato-classification-model-0oqc.onrender.com/",
            githubLink: "https://github.com/Kawaljeet999/POTATO-CLASSIFICATION",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "CHURN PREDICTION MODEL",
            description: "ML-powered tool for customer churn prediction using PCA and advanced classification algorithms. Interactive Streamlit web app with comprehensive data visualization and user input handling.",
            icon: <TrendingUp className="h-8 w-8" />,
            image: "📊",
            technologies: ["Python", "Scikit-learn", "PCA", "Streamlit", "Data Visualization", "ML Algorithms"],
            liveLink: "https://churn-prj-ht21.onrender.com/",
            githubLink: "https://github.com/Kawaljeet999/Churn_PRJ",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "LEADSCORE AI",
            description: "Advanced lead scoring system powered by machine learning algorithms to predict and rank potential customers based on their likelihood to convert.",
            icon: <Target className="h-8 w-8" />,
            image: "🎯",
            technologies: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling"],
            liveLink: "https://leadscore-ai.onrender.com/",
            githubLink: "https://github.com/Kawaljeet999/LeadScore-AI",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "STREAMLIT CANDLESTICK BOT",
            description: "Interactive trading analysis tool built with Streamlit featuring candlestick chart visualization, technical indicators, and real-time market data processing.",
            icon: <BarChart className="h-8 w-8" />,
            image: "📈",
            technologies: ["Streamlit", "Python", "Trading Analysis", "Data Visualization", "Financial Data"],
            liveLink: "https://streamlit-candlestick-bot.onrender.com/",
            githubLink: "https://github.com/Kawaljeet999/streamlit-candlestick-bot",
            gradient: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <Navbar />

            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            A showcase of innovative machine learning and web development projects,
                            each solving real-world problems with cutting-edge technology.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border-primary/20 overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                                                {project.icon}
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </CardTitle>
                                                <div className="text-6xl mt-2">{project.image}</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Button
                                            className="flex-1 group/btn hover:scale-105 transition-all duration-300"
                                            onClick={() => window.open(project.liveLink, "_blank")}
                                        >
                                            <Play className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            Live Demo
                                        </Button>
                                        {project.githubLink !== "#" && (
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
                                                onClick={() => window.open(project.githubLink, "_blank")}
                                            >
                                                <Github className="h-4 w-4" />
                                            </Button>
                                        )}
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
                                            onClick={() => window.open(project.liveLink, "_blank")}
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Project Stats */}
                    <div className={`grid md:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1000`}>
                        <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                                <div className="text-sm text-muted-foreground">Live Projects</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                                <div className="text-sm text-muted-foreground">Technologies Used</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                                <div className="text-sm text-muted-foreground">Deployment Success</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                                <div className="text-sm text-muted-foreground">Learning & Growing</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1200`}>
                        <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                I'm always excited to work on new projects and collaborate with fellow developers.
                                Let's build something amazing together!
                            </p>
                            <Button
                                size="lg"
                                className="hover:scale-105 transition-all duration-300"
                                onClick={() => navigate("/contact")} // ✅ this works
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
