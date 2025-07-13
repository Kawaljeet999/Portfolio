import { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Trophy, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const education = [
        {
            degree: "Bachelor of Technology",
            institution: "Government Engineering College, Ajmer",
            duration: "2025 – Present | Third Year",
            gpa: "8.81/10",
            status: "Current",
            description: "Computer Science Engineering with focus on Machine Learning and AI"
        },
        {
            degree: "Senior School (12th)",
            institution: "Kendriya Vidyalaya No. 2, Ajmer",
            duration: "Passed: 2022",
            gpa: "82.5%",
            status: "Completed",
            description: "Physics, Chemistry, Mathematics (PCM)"
        },
        {
            degree: "High School (10th)",
            institution: "Kendriya Vidyalaya No. 2, Ajmer",
            duration: "Passed: 2020",
            gpa: "80%",
            status: "Completed",
            description: "General Education with strong foundation in Science and Mathematics"
        }
    ];

    const coursework = [
        "Working on Data Structures and Algorithms from HackerRank",
        "Completed Deep Learning via Code Basics",
        "Completed Machine Learning with Coursera",
        "Completed Nutshells of Cyber Security and Introduction to Cloud Computing",
        "Completed SQL for Data Science"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <Navbar />

            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Academic excellence and continuous learning have been the cornerstone of my journey in Computer Science and Engineering.
                        </p>
                    </div>

                    {/* Education Timeline */}
                    <div className="space-y-8 mb-16">
                        {education.map((edu, index) => (
                            <Card
                                key={index}
                                className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="h-6 w-6 text-primary" />
                                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                        </div>
                                        <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                                            {edu.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <BookOpen className="h-4 w-4" />
                                                <span className="font-medium">{edu.institution}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Trophy className="h-4 w-4 text-primary" />
                                                <span className="font-semibold text-primary text-lg">{edu.gpa}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Coursework Section */}
                    <Card className={`hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <BookOpen className="h-6 w-6 text-primary" />
                                Additional Coursework & Certifications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    {coursework.slice(0, 3).map((course, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground leading-relaxed">{course}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    {coursework.slice(3).map((course, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground leading-relaxed">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Academic Highlights */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-500`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">8.81</div>
                                <div className="font-medium mb-2">Current GPA</div>
                                <div className="text-sm text-muted-foreground">Out of 10.0</div>
                            </CardContent>
                        </Card>

                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-700`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">1st</div>
                                <div className="font-medium mb-2">Department Rank</div>
                                <div className="text-sm text-muted-foreground">Computer Science Engineering</div>
                            </CardContent>
                        </Card>

                        <Card className={`text-center hover:shadow-xl transition-all duration-500 border-primary/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-1000`}>
                            <CardContent className="pt-6">
                                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                <div className="font-medium mb-2">Certifications</div>
                                <div className="text-sm text-muted-foreground">AI/ML & Development</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Education;
