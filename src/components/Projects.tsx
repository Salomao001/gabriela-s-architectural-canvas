import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "@/data/projects";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="subtitle">Projetos em Destaque</p>
          <h2 className="section-title">Trabalhos Selecionados</h2>
          <div className="w-16 h-px bg-beige-dark mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-background px-6 py-3 text-sm uppercase tracking-widest">
                    Ver Projeto
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.15em] text-stone-light">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-light line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
