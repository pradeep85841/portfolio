import { useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw, FiSettings, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function DevControls() {
  const [isOpen, setIsOpen] = useState(false);

  const clearWelcomeData = () => {
    localStorage.removeItem('portfolio-visited');
    window.location.reload();
  };

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
        >
          <FiSettings className="h-5 w-5" />
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl min-w-[200px]"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium">Dev Controls</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <FiX className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            onClick={clearWelcomeData}
            className="w-full bg-electric hover:bg-electric/90 text-white flex items-center justify-center space-x-2"
          >
            <FiRefreshCw className="h-4 w-4" />
            <span>Reset Welcome</span>
          </Button>
          
          <p className="text-xs text-gray-400 mt-2">
            Clear localStorage and reload to see welcome animation
          </p>
        </motion.div>
      )}
    </div>
  );
}