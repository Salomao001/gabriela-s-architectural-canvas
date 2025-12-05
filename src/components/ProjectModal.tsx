import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/data/projects";
import { X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background border-border overflow-hidden">
        <ScrollArea className="h-full">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Images Carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {project.images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="aspect-[16/10]">
                        <img
                          src={image}
                          alt={`${project.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 space-y-8">
              <DialogHeader className="space-y-4">
                <span className="text-xs uppercase tracking-[0.15em] text-stone-light">
                  {project.category}
                </span>
                <DialogTitle className="font-display text-3xl md:text-4xl font-medium">
                  {project.title}
                </DialogTitle>
                <div className="w-12 h-px bg-beige-dark" />
              </DialogHeader>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {/* Details */}
              {project.details && (
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  {project.details.map((detail, index) => (
                    <div key={index} className="space-y-1">
                      <span className="text-xs uppercase tracking-[0.15em] text-stone-light">
                        {detail.label}
                      </span>
                      <p className="text-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tools Used */}
              {project.tools && (
                <div className="pt-6 border-t border-border">
                  <span className="text-xs uppercase tracking-[0.15em] text-stone-light block mb-3">
                    Ferramentas Utilizadas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
