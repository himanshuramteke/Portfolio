export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a motivated and self-driven MERN stack developer with a strong foundation in modern web development. I enjoy turning ideas into real-world applications with clean, scalable code.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As a fresher, I&apos;m continuously learning and building projects that help me grow my skills and always excited to collaborate, contribute, and create impactful digital experiences.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
          
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-primary font-semibold">10+</span>
                  <span className="text-muted-foreground ml-2">
                    Projects Built
                  </span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-muted-foreground ml-2">
                    Always Learning
                  </span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
                    HR
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Himanshu Ramteke
                </h3>
                <p className="text-primary font-semibold mb-4">
                  Full Stack Developer
                </p>
                <p className="text-muted-foreground">
                  Building real-world solutions with code, creativity, and consistency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
