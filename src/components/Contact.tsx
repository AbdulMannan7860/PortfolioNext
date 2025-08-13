import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Calendar,
  MessageSquare,
  Send
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "abdulmannan.dev@gmail.com",
    href: "mailto:abdulmannan.dev@gmail.com",
    color: "text-blue-500"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/AbdulMannan7860",
    href: "https://github.com/AbdulMannan7860",
    color: "text-gray-500"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/abdulmannan-dev",
    href: "https://linkedin.com/in/abdulmannan-dev",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karachi, Pakistan",
    href: "#",
    color: "text-red-500"
  }
];

const availability = [
  {
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
    status: "Available"
  },
  {
    day: "Saturday",
    time: "10:00 AM - 4:00 PM",
    status: "Available"
  },
  {
    day: "Sunday",
    time: "By Appointment",
    status: "Limited"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I typically 
                respond within 24 hours during business days.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <Card key={contact.title} className="border-0 bg-muted/30 hover:bg-muted/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-background ${contact.color}`}>
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{contact.title}</h4>
                        <a 
                          href={contact.href} 
                          target={contact.href.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Availability</h3>
              <Card className="border-0 bg-muted/30">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {availability.map((slot) => (
                      <div key={slot.day} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{slot.day}</p>
                          <p className="text-sm text-muted-foreground">{slot.time}</p>
                        </div>
                        <Badge 
                          variant={slot.status === 'Available' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {slot.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Send a Message</h3>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <Card className="border-0 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Quick Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project inquiry"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <Button className="w-full group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://github.com/AbdulMannan7860" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="mailto:abdulmannan.dev@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://linkedin.com/in/abdulmannan-dev" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help you build something amazing. 
                Whether it's a new application, website redesign, or technical consultation, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:abdulmannan.dev@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Start a Conversation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">
                    View My Work
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
