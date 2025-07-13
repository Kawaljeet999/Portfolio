
import { useEffect, useState } from "react";
import { Award, Code, GraduationCap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const achievements = [
        "Department Rank 1 Holder, CSE (GPA: 9.04)",
        "Participated in WordPress Workshop for Website Development",
        "Participated in IIIT Delhi Hackathon (Data Science & Machine Learning)"
    ];

    const practiceProjects = [
        "Excel Attendance Tracker",
        "Web Scraper",
        "Disease Classification (ML)"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <Navbar />

            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            I'm a passionate Computer Science Engineering student at Government Engineering College, Ajmer,
                            with expertise in Machine Learning, AI, Full-Stack Development, Cloud Computing, and Data Structures & Algorithms.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Personal Story */}
                        <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-2xl">
                                    <Target className="h-6 w-6 text-primary" />
                                    My Journey
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    Currently in my third year at Government Engineering College, Ajmer, I maintain an impressive
                                    8.81/10 GPA while actively working on cutting-edge projects in Machine Learning, Cloud Development,
                                    and Web Development.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My journey began with a strong foundation in mathematics and programming, which led me to explore
                                    the fascinating world of Artificial Intelligence, Machine Learning, and Cloud Computing. I've
                                    completed specialized courses in Deep Learning, Machine Learning, Data Structures & Algorithms,
                                    and various cloud technologies.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    When I'm not coding, I enjoy participating in hackathons, contributing to open-source projects,
                                    solving algorithmic challenges, and staying updated with the latest technological advancements
                                    in AI, cloud computing, and system administration.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Skills Overview */}
                        <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-2xl">
                                    <Code className="h-6 w-6 text-primary" />
                                    What I Do
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Machine Learning & AI</h4>
                                    <p className="text-muted-foreground">
                                        Specialized in supervised & unsupervised learning, neural networks, computer vision,
                                        and natural language processing with hands-on experience in TensorFlow and PyTorch.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building end-to-end web applications using modern frameworks like Flask and React,
                                        with expertise in both frontend and backend development.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Cloud Development & DevOps</h4>
                                    <p className="text-muted-foreground">
                                        Proficient in AWS and Google Cloud platforms, containerization with Docker,
                                        and Linux system administration for scalable cloud solutions.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Data Structures & Algorithms</h4>
                                    <p className="text-muted-foreground">
                                        Strong foundation in algorithmic problem-solving, optimization techniques,
                                        and competitive programming with focus on efficient code implementation.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Achievements & Practice Projects */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Award className="h-6 w-6 text-primary" />
                                    Achievements & Hackathons
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-200`}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                    Practice Projects
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {practiceProjects.map((project, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{project}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Personal Values */}
                    <Card className={`mt-12 hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-500`}>
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Core Values & Philosophy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <h4 className="font-semibold text-lg mb-3 text-primary">Innovation</h4>
                                    <p className="text-muted-foreground">
                                        Constantly exploring new technologies and pushing the boundaries of what's possible
                                        in AI, cloud computing, and software development.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-3 text-primary">Excellence</h4>
                                    <p className="text-muted-foreground">
                                        Committed to delivering high-quality solutions with attention to detail, optimal
                                        algorithms, and industry best practices.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-3 text-primary">Learning</h4>
                                    <p className="text-muted-foreground">
                                        Embracing continuous learning in emerging technologies, algorithmic challenges,
                                        and staying updated with the latest industry trends.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
