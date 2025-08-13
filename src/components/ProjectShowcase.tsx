import { CodePreview } from "./CodePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Globe, 
  Link, 
  Users, 
  Calendar,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Emaan LMS",
    description: "A comprehensive Learning Management System designed for educational institutions to manage courses, students, and learning materials efficiently.",
    preview: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Course Dashboard</h3>
          </div>
          <Badge variant="secondary">Active</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-muted p-3">
            <div className="text-sm font-medium">Total Courses</div>
            <div className="text-2xl font-bold text-primary">24</div>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <div className="text-sm font-medium">Active Students</div>
            <div className="text-2xl font-bold text-primary">1,247</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">MongoDB</Badge>
        </div>
      </div>
    ),
    code: `// Course Dashboard Component
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Course {
  id: string;
  title: string;
  instructor: string;
  students: number;
  status: 'active' | 'draft';
}

export function CourseDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <Badge variant="secondary">24 Active Courses</Badge>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Instructor: {course.instructor}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm">{course.students} students</span>
                <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                  {course.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}`,
    liveUrl: "https://lms.emaan.edu.pk",
    githubUrl: "https://github.com/AbdulMannan7860/emaan-lms",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Emaan Website",
    description: "Modern institutional website with optimized performance, responsive design, and seamless user experience.",
    preview: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Institutional Website</h3>
          </div>
          <Badge variant="secondary">Live</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>98% Performance Score</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-blue-500" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>Mobile Optimized</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Vercel</Badge>
        </div>
      </div>
    ),
    code: `// Homepage Component
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Emaan Institute
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Empowering minds through quality education and innovative learning approaches.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Explore Programs</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Quality Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive curriculum designed for modern learning needs.
              </p>
            </CardContent>
          </Card>
          {/* More feature cards... */}
        </div>
      </section>
    </div>
  );
}`,
    liveUrl: "https://emaan.edu.pk",
    githubUrl: "https://github.com/AbdulMannan7860/emaan-website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 3,
    title: "ListLink",
    description: "A powerful link management application for creating and sharing organized link collections with teams and individuals.",
    preview: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Link Management</h3>
          </div>
          <Badge variant="secondary">Pro</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Total Links</span>
            <span className="font-semibold">156</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Collections</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Team Members</span>
            <span className="font-semibold">8</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Firebase</Badge>
          <Badge variant="outline">Vercel</Badge>
        </div>
      </div>
    ),
    code: `// Link Management Component
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Link {
  id: string;
  title: string;
  url: string;
  description?: string;
  category: string;
}

export function LinkManager() {
  const [links, setLinks] = useState<Link[]>([]);
  const [newLink, setNewLink] = useState({
    title: '',
    url: '',
    description: '',
    category: 'general'
  });

  const addLink = () => {
    if (newLink.title && newLink.url) {
      const link: Link = {
        id: Date.now().toString(),
        ...newLink
      };
      setLinks([...links, link]);
      setNewLink({ title: '', url: '', description: '', category: 'general' });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Link title"
            value={newLink.title}
            onChange={(e) => setNewLink({...newLink, title: e.target.value})}
          />
          <Input
            placeholder="URL"
            value={newLink.url}
            onChange={(e) => setNewLink({...newLink, url: e.target.value})}
          />
          <Button onClick={addLink}>Add Link</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {links.map((link) => (
          <Card key={link.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.url}</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}`,
    liveUrl: "https://listlinkapp.com",
    githubUrl: "https://github.com/AbdulMannan7860/listlink",
    technologies: ["React", "Firebase", "Tailwind CSS", "Vercel"]
  }
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development practices, 
            responsive design, and innovative solutions.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <CodePreview
              key={project.id}
              title={project.title}
              description={project.description}
              preview={project.preview}
              code={project.code}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/AbdulMannan7860" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
