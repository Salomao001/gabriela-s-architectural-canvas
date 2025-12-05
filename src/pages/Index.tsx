import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCarousel from "@/components/ProjectCarousel";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects, carouselImages } from "@/data/projects";

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ProjectCarousel images={carouselImages} onViewProjects={scrollToProjects} />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
