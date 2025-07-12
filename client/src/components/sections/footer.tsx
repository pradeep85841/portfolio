import { motion } from "framer-motion";
import { FiDownload, FiArrowUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-navy to-deep-navy py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 text-lg font-medium">&copy; 2024 Alex Thompson. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-2">Building enterprise-grade streaming architectures</p>
              <div className="flex justify-center md:justify-start space-x-6 mt-4">
                <span className="text-gray-500 text-sm">San Francisco, CA</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">Senior Software Engineer</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="bg-electric hover:bg-electric/90 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#" download>
                  <FiDownload className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={scrollToTop}
                className="border-electric/30 bg-electric/5 text-white hover:bg-electric hover:border-electric px-8 py-4 font-semibold transition-all duration-300"
              >
                <FiArrowUp className="mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
