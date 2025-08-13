import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Users, Code, Database } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "SASKA Solutions",
    position: "Full Stack Developer",
    duration: "2022 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Leading development of enterprise web applications using modern technologies.",
    achievements: [
      "Designed and developed scalable web applications using React, Next.js, Node.js, and MongoDB",
      "Optimized application performance achieving 95%+ Lighthouse scores",
      "Implemented robust authentication systems and RESTful APIs",
      "Collaborated with cross-functional teams to deliver user-centric solutions",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    icon: Building2
  },
  {
    id: 2,
    company: "Emaan Institute (EIMS)",
    position: "Application Developer",
    duration: "2021 - 2022",
    location: "Karachi, Pakistan",
    type: "Part-time",
    description: "Developed institutional applications focused on reliability and performance.",
    achievements: [
      "Built and maintained institutional management systems",
      "Developed custom modules for student and course management",
      "Implemented responsive design for mobile accessibility",
      "Provided technical support and user training",
      "Contributed to UI/UX improvements and feature enhancements"
    ],
    technologies: ["React", "Node.js", "MySQL", "Bootstrap", "JavaScript"],
    icon: Users
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "University of Karachi",
    duration: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and web development fundamentals.",
    icon: Code
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path has been focused on building innovative solutions 
            and growing as a full-stack developer.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.id} className="relative border-0 bg-card shadow-lg">
                  <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-primary"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <exp.icon className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="border-0 bg-card shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Database className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Core Competencies</h3>
              
              <div className="grid gap-4">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Backend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "GraphQL"].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-500/5">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Tools & Deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Vercel", "Netlify", "Docker", "CI/CD"].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
