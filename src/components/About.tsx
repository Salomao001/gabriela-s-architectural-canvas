const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <div className="space-y-6">
            <p className="subtitle">Sobre mim</p>
            <h2 className="section-title">
              Design que une<br />
              <span className="italic text-stone">forma e função</span>
            </h2>
            <div className="w-16 h-px bg-beige-dark" />
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              Durante minha formação, tive a oportunidade de trabalhar com arquitetura 
              residencial e projetos de móveis planejados, onde aprendi a importância 
              de entender as necessidades dos usuários e a otimizar os espaços para 
              garantir conforto e praticidade.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Agora, estou focada em expandir meus conhecimentos, explorando como o 
              design pode criar ambientes que promovam a experiência do cliente e a 
              funcionalidade. Estou em busca de oportunidades para aplicar minha 
              criatividade e habilidades técnicas nesta área, enquanto continuo a 
              aprender e crescer profissionalmente.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          {[
            { number: "2+", label: "Anos de Experiência" },
            { number: "10+", label: "Projetos Realizados" },
            { number: "UCB", label: "Universidade" },
            { number: "2026", label: "Formação Prevista" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <span className="font-display text-3xl md:text-4xl text-primary">{stat.number}</span>
              <p className="text-sm text-stone-light uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
