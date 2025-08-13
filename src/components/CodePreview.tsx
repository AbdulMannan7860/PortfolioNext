import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Code, ExternalLink, Github } from "lucide-react";

interface CodePreviewProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export function CodePreview({
  title,
  description,
  preview,
  code,
  liveUrl,
  githubUrl,
  technologies,
}: CodePreviewProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {liveUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b bg-muted/30">
            <TabsList className="grid w-full grid-cols-2 rounded-none border-0 bg-transparent">
              <TabsTrigger
                value="preview"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Code className="h-4 w-4" />
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="m-0 p-6">
            <div className="rounded-lg border bg-background p-4">
              {preview}
            </div>
          </TabsContent>
          <TabsContent value="code" className="m-0">
            <div className="relative">
              <pre className="max-h-96 overflow-auto rounded-none bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{code}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
