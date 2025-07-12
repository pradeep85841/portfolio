import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-fade class
    document.querySelectorAll(".scroll-fade").forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
