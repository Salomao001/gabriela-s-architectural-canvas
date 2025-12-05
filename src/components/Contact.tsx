import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="subtitle">Contato</p>
              <h2 className="section-title">
                Vamos criar<br />
                <span className="italic text-stone">algo juntos?</span>
              </h2>
              <div className="w-16 h-px bg-beige-dark" />
            </div>

            <p className="text-foreground/80 leading-relaxed max-w-md">
              Estou disponível para novos projetos e oportunidades. 
              Entre em contato e vamos conversar sobre como posso 
              ajudar a transformar suas ideias em realidade.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:gabi30062004@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.15em] text-stone-light">E-mail</span>
                  <p className="group-hover:text-primary transition-colors">gabi30062004@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+5514996139019"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.15em] text-stone-light">Telefone</span>
                  <p className="group-hover:text-primary transition-colors">(14) 99613-9019</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.15em] text-stone-light">Localização</span>
                  <p>Brasília, DF</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Decorative */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Geometric decoration */}
              <div className="w-64 h-64 border border-beige-dark/30 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-beige-dark/50 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-beige/30 rotate-45" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="font-display text-6xl text-primary/20">G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
