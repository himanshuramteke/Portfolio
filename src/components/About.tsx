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
                I&apos;m a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and have a keen eye for
                design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-primary font-semibold">5+</span>
                  <span className="text-muted-foreground ml-2">
                    Years Experience
                  </span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-primary font-semibold">50+</span>
                  <span className="text-muted-foreground ml-2">
                    Projects Completed
                  </span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-primary font-semibold">20+</span>
                  <span className="text-muted-foreground ml-2">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
                    JD
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  John Doe
                </h3>
                <p className="text-primary font-semibold mb-4">
                  Full Stack Developer
                </p>
                <p className="text-muted-foreground">
                  Crafting digital experiences with passion and precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
