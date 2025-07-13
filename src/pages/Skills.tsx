import { useEffect, useState } from "react";
import { Code, Database, Brain, Palette, Server, Trophy, Globe, Layers, Terminal, CloudCog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const technicalSkills = [
        {
            title: "Programming Languages",
            icon: <Code className="h-5 w-5" />,
            skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "TypeScript", "Java"],
            gradient: "from-blue-500 to-purple-500"
        },
        {
            title: "Machine Learning & AI",
            icon: <Brain className="h-5 w-5" />,
            skills: ["TensorFlow", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP", "PyTorch"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Data Structures & Algorithms",
            icon: <Terminal className="h-5 w-5" />,
            skills: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Sorting & Searching", "Greedy Algorithms", "Recursion"],
            gradient: "from-red-500 to-orange-500"
        },
        {
            title: "Web Development",
            icon: <Server className="h-5 w-5" />,
            skills: ["Flask", "FastAPI", "Streamlit", "React", "Node.js", "Django"],
            gradient: "from-green-500 to-teal-500"
        },
        {
            title: "Cloud & DevOps",
            icon: <CloudCog className="h-5 w-5" />,
            skills: ["AWS", "Google Cloud", "Docker", "Linux Administration", "CI/CD", "Kubernetes"],
            gradient: "from-sky-500 to-blue-500"
        },
        {
            title: "System Administration",
            icon: <Globe className="h-5 w-5" />,
            skills: ["Linux Commands", "Shell Scripting", "System Monitoring", "Network Configuration", "Security", "Performance Tuning"],
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Data Science & Visualization",
            icon: <Database className="h-5 w-5" />,
            skills: ["Matplotlib", "Seaborn", "Plotly", "Pandas", "NumPy", "Jupyter"],
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            title: "Development Tools",
            icon: <Layers className="h-5 w-5" />,
            skills: ["VS Code", "Jupyter Notebook", "Google Colab", "Cursor", "Windsurf", "Postman"],
            gradient: "from-cyan-500 to-blue-500"
        }
    ];

    const softSkills = [
        "Problem Solving", "Algorithmic Thinking", "Team Collaboration",
        "Communication", "Leadership", "Project Management", "Critical Thinking", "Adaptability",
        "System Design", "Code Optimization", "Technical Documentation", "Mentoring"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <Navbar />

            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Technical <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            A comprehensive overview of my technical expertise, from programming languages
                            to advanced machine learning frameworks, cloud technologies, algorithmic problem-solving,
                            and system administration tools.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
                        {technicalSkills.map((category, index) => (
                            <Card
                                key={index}
                                className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-3 text-lg">
                                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}>
                                            {category.icon}
                                        </div>
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 text-center"
                                            >
                                                <span className="font-medium text-sm">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Soft Skills & Abilities */}
                    <Card className={`mb-12 hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1000`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Trophy className="h-6 w-6 text-primary" />
                                Soft Skills & Abilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {softSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 text-center"
                                    >
                                        <span className="font-medium text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Skill Highlights */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-1200`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                                <div className="font-medium mb-2">Technologies & Frameworks</div>
                                <div className="text-sm text-muted-foreground">Actively used in projects</div>
                            </CardContent>
                        </Card>

                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-1400`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                                <div className="font-medium mb-2">Technical Domains</div>
                                <div className="text-sm text-muted-foreground">From Full-Stack to Cloud & AI/ML</div>
                            </CardContent>
                        </Card>

                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-1600`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <div className="font-medium mb-2">Continuous Learning</div>
                                <div className="text-sm text-muted-foreground">Always exploring new technologies</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Learning Philosophy */}
                    <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1800`}>
                        <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
                            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                                Technology evolves rapidly, and I believe in staying ahead of the curve. I'm constantly
                                learning new frameworks, exploring emerging technologies like cloud-native solutions,
                                mastering algorithmic challenges, and applying them to solve real-world problems.
                                My journey in tech is driven by curiosity and the desire to create meaningful impact
                                through efficient, scalable code and innovative cloud solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Skills;