import { Progress } from "./ui/progress"

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "Python", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "PostgreSQL", level: 82 },
  { name: "AWS", level: 75 },
  { name: "Docker", level: 78 },
  { name: "GraphQL", level: 70 },
  { name: "Next.js", level: 87 },
  { name: "Tailwind CSS", level: 92 }
]

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
             <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="glass rounded-lg p-6 animate-slide-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3 bg-muted"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git", "Figma", "Adobe XD", "Webpack", "Vite", "Jest", 
                "Cypress", "Redis", "Nginx", "Linux", "Kubernetes", "Jenkins"
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="glass px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}