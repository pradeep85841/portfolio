import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WelcomeOverlay from "@/components/welcome-overlay";
import DevControls from "@/components/dev-controls";
import { useFirstVisit } from "@/hooks/use-first-visit";

export default function Home() {
  const { isFirstVisit, isLoading, markAsVisited } = useFirstVisit();

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy via-deep-navy to-navy flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      {isFirstVisit && (
        <WelcomeOverlay onComplete={markAsVisited} onSkip={markAsVisited} />
      )}
      
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
      <DevControls />
    </div>
  );
}
