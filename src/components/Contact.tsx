"use client";

import { useState } from "react"
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setFormData({
        ...formData,
        [e.target.name] : e.target.value
       });
    };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast("Message Sent!", {
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

    return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m always open to discussing new opportunities, creative projects, 
                or potential collaborations. Don&apos;t hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-primary">john.doe@example.com</p>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                Twitter
              </Button>
            </div>
          </div>

          <Card className="glass border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-foreground">Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};