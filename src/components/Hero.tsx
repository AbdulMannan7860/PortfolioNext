import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="animate-fade-in">
                Available for new opportunities
              </Badge>
              <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Abdul Mannan{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Siddiqui
                </span>
              </h1>
              <h2 className="animate-fade-in-up-delay text-2xl font-semibold text-muted-foreground sm:text-3xl">
                MERN Stack Developer
              </h2>
            </div>

            <p className="animate-fade-in-up-delay-2 mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
              Passionate full-stack developer with 3+ years of experience building scalable web applications.
              Specialized in React, Next.js, Node.js, and MongoDB. Creating digital experiences that matter.
            </p>

            <div className="animate-fade-in-up-delay-3 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:abdulmannan.dev@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up-delay-4 flex justify-center gap-4 lg:justify-start">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/AbdulMannan7860" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/abdulmannan-dev" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-fade-in-up-delay-2">
            <div className="relative mx-auto max-w-md">
              {/* Profile Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-8 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative space-y-6">
                  {/* Avatar placeholder */}
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <img src="/src/assets/image.jpg" alt="AMS Logo" className="h-full w-full rounded-full bg-background flex items-center justify-center" />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">Abdul Mannan Siddiqui</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>

                  {/* Tech stack preview */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-secondary/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
