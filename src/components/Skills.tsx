import { Briefcase, GraduationCap } from "lucide-react";

const Skills = () => {
  const skills = [
    "Desenho Técnico",
    "AutoCAD",
    "SketchUp",
    "Layout",
    "Revit Básico",
    "V-Ray (em estudo)",
    "Promob",
  ];

  const experiences = [
    {
      period: "Atualmente",
      role: "Estagiária",
      company: "Studio Treliça",
      description: "Projetos de arquitetura e interiores",
    },
    {
      period: "2025",
      role: "Estagiária",
      company: "Celmar Móveis",
      description: "Projetos de móveis planejados",
    },
    {
      period: "Freelancer",
      role: "Arquiteta",
      company: "Arquiteta Náthalia",
      description: "Projetos diversos como freelancer",
    },
    {
      period: "2023 - 2025",
      role: "Estagiária",
      company: "Arquiteta Ana Novais",
      description: "Desenvolvimento de projetos executivos e detalhamentos",
    },
  ];

  return (
    <section id="habilidades" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <p className="subtitle">Habilidades</p>
              </div>
              <h2 className="font-display text-2xl md:text-3xl">
                Ferramentas e<br />
                <span className="italic text-stone">Competências</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 border border-border hover:border-beige-dark hover:bg-secondary/50 transition-all duration-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <p className="subtitle">Experiência</p>
              </div>
              <h2 className="font-display text-2xl md:text-3xl">
                Trajetória<br />
                <span className="italic text-stone">Profissional</span>
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l border-border hover:border-beige-dark transition-colors group"
                >
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-beige-dark group-hover:bg-primary transition-colors" />
                  <span className="text-xs uppercase tracking-[0.15em] text-stone-light">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-lg mt-1">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-sm text-stone-light mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
