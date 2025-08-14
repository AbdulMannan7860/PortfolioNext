import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Users,
  Target
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    color: "text-blue-500"
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
    color: "text-green-500"
  },
  {
    category: "Deployment",
    icon: Globe,
    skills: ["Vercel", "Netlify", "Git", "GitHub", "CI/CD"],
    color: "text-purple-500"
  }
];

const achievements = [
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized applications achieving 95%+ Lighthouse scores"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Implemented robust authentication and data protection"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Led development teams and mentored junior developers"
  },
  {
    icon: Target,
    title: "Delivery",
    description: "Consistently delivered projects on time and within scope"
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Passionate Full-Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm a dedicated MERN stack developer with over 3 years of experience
                creating innovative web applications. My passion lies in building
                scalable, user-centric solutions that solve real-world problems.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                With expertise in React, Next.js, Node.js, and MongoDB, I specialize
                in developing modern web applications that are both performant and
                maintainable. I believe in writing clean, efficient code and staying
                up-to-date with the latest industry trends and best practices.
              </p>

              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always eager to learn and take on
                new challenges that push my skills forward.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="border-0 bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <achievement.icon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm">{achievement.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Technical Expertise</h3>
              <p className="text-muted-foreground">
                My skill set spans the entire development stack, from frontend
                interfaces to backend systems and deployment.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="border-0 bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <skillGroup.icon className={`h-5 w-5 ${skillGroup.color}`} />
                      <h4 className="font-semibold">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
