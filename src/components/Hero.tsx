import profileImage from "@/assets/gabriela-profile.jpeg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-32 h-32 border border-beige-dark/30 hidden lg:block animate-float" />
      <div
        className="absolute bottom-40 left-16 w-20 h-20 border border-beige-dark/20 hidden lg:block"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 right-40 w-1 h-32 bg-beige-dark/20 hidden xl:block" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 pt-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr] gap-y-8 lg:gap-y-0 gap-x-12 lg:gap-x-16 xl:gap-x-24 items-center">
          
          {/* 1. TOPO DO TEXTO (Nome e Título) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 space-y-4 self-end lg:mb-4">
            <p
              className="subtitle opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Arquiteta & Urbanista
            </p>
            <h1
              className="section-title opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Gabriela Del Nobile
            </h1>
            <div
              className="w-16 h-px bg-beige-dark opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* 2. IMAGEM DE PERFIL */}
          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex justify-center lg:justify-end lg:pl-4 xl:pl-8">
            <div
              className="relative opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-beige-dark/40" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-beige-dark/20" />

              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Gabriela Del Nobile"
                  className="w-full h-full object-cover object-top grayscale-[20%]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* 3. RESTO DO CONTEÚDO */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 self-start lg:mt-4 space-y-8">
            <p
              className="text-stone-light leading-relaxed max-w-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Sou estudante de Arquitetura e Urbanismo na Universidade Católica de
              Brasília, buscando sempre conhecer projetos que aliem funcionalidade,
              estética e a identidade das marcas e pessoas.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <a href="#projetos" className="btn-primary">
                Ver Projetos
              </a>
              <a href="#contato" className="btn-outline">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* MUDANÇA AQUI: Scroll Indicator */}
        {/* Adicionei 'hidden' para esconder em mobile e 'lg:flex' para mostrar em desktop */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-stone-light">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-stone-light animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;