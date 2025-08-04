"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    id: 1,
    title: "CodeSandbox - An Online IDE ",
    description:
      "CodeSandbox - It provides a collaborative code editing environment for your 'React' projects with real-time file editing, live preview, and terminal integration.",
    image: "/codesandbox-editorPage.png",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Zustand",
      "Socket.io-client",
      "Antd Design",
    ],
    code: "https://github.com/himanshuramteke/CodeSandbox-frontend",
  },
  {
    id: 2,
    title: "Chatty - Chat App",
    description:
      "Chatty is a full-stack real-time chat application featuring user authentication, profile management, image sharing, and an integrated AI assistant powered by Google Gemini. ",
    image: "/Chatty-screenshot.png",
    tags: [
      "React.js",
      "Node.js",
      "Gemini-Api",
      "Socket.io",
      "DaisyUI",
      "MongoDB",
      "TailwindCSS",
    ],
    demo: "chatty-gjo6.onrender.com/",
    code: "https://github.com/himanshuramteke/Chatty",
  },
  {
    id: 3,
    title: "Twitter-Clone",
    description:
      "This project is a full-stack Twitter clone using MERN stack, designed to replicate the core functionality of Twitter.",
    image: "/Twitter-SC.png",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "DaisyUI",
      "TailwindCSS",
      "Tanstack-Query",
      "MongoDB",
    ],
    demo: "twitter-clone-o1s0.onrender.com/",
    code: "https://github.com/himanshuramteke/Twitter-clone",
  },
  {
    id: 4,
    title: "Streamify",
    description:
      "Streamify is a modern social networking platform designed to connect people to learn new Languages, facilitate communication, and foster communities.",
    image: "/streamify-homepage.png",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "DaisyUI",
      "TailwindCSS",
      "Tanstack-Query",
      "MongoDB",
      "Stream-SDK",
    ],
    demo: "streamify-t3pa.onrender.com/",
    code: "https://github.com/himanshuramteke/Streamify",
  },
  {
    id: 5,
    title: "CodeMeet",
    description:
      "CodeMeet is a modern video calling interview platform designed to streamline the interview process. It provides a seamless experience for both interviewers and candidates, offering features like video calls, screen sharing, code editing, and role-based access control.",
    image: "/meeting-page.png",
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Convex",
      "Stream-SDK",
      "Clerk",
    ],
    demo: "codemeet-six.vercel.app",
    code: "https://github.com/himanshuramteke/codemeet",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 cursor-pointer"
                      onClick={() =>
                        window.open(
                          project.demo.startsWith("http")
                            ? project.demo
                            : `https://${project.demo}`,
                          "_blank"
                        )
                      }
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.code && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 flex-1 cursor-pointer"
                      onClick={() => window.open(project.code, "_blank")}
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
