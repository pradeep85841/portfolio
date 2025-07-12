import { motion } from "framer-motion";
import { FiDownload, FiArrowUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-300">&copy; 2024 Alex Thompson. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2">Building the future of streaming architectures</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-electric hover:bg-blue-600 text-white px-6 py-3 font-semibold tech-glow"
              asChild
            >
              <a href="#" download>
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </Button>
            
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="border-electric text-electric hover:bg-electric hover:text-white px-6 py-3 font-semibold"
            >
              <FiArrowUp className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
