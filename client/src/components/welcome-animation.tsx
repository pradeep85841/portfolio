import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiZap, FiArrowRight, FiX } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const skillIcons = [
  { icon: FiCode, label: "Full-Stack Development", delay: 0.2 },
  { icon: FiCpu, label: "Apache Kafka", delay: 0.4 },
  { icon: FiDatabase, label: "Distributed Systems", delay: 0.6 },
  { icon: FiZap, label: "Test Automation", delay: 0.8 },
];

const welcomeSteps = [
  {
    title: "Welcome to My Portfolio",
    subtitle: "I'm a Senior Software Engineer specializing in real-time data streaming",
    content: "Let me show you what I do best...",
    duration: 3000
  },
  {
    title: "Real-Time Data Processing",
    subtitle: "Building systems that handle millions of events per second",
    content: "Apache Kafka • Event-Driven Architecture • Stream Processing",
    duration: 3000
  },
  {
    title: "Enterprise-Grade Solutions",
    subtitle: "Designing distributed systems that scale globally",
    content: "Microservices • Cloud Architecture • Performance Testing",
    duration: 3000
  },
  {
    title: "Ready to Explore?",
    subtitle: "Discover my projects, experience, and technical expertise",
    content: "Let's dive into the details of what I've built...",
    duration: 2000
  }
];

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < welcomeSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowSkills(true);
      }
    }, welcomeSteps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  const handleContinue = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-navy/95 via-deep-navy/95 to-navy/95 backdrop-blur-sm flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.1)_49%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" />
          </div>

          {/* Skip Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSkip}
            className="absolute top-6 right-6 text-gray-400 hover:text-white hover:bg-gray-800/50 z-10"
          >
            <FiX className="h-6 w-6" />
          </Button>

          {/* Main Content */}
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <AnimatePresence mode="wait">
              {!showSkills ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-electric to-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                  >
                    {welcomeSteps[currentStep].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl text-electric font-medium mb-6"
                  >
                    {welcomeSteps[currentStep].subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {welcomeSteps[currentStep].content}
                  </motion.p>

                  {/* Progress Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex justify-center space-x-2 mt-8"
                  >
                    {welcomeSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStep ? 'bg-electric' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                  >
                    My Core Expertise
                  </motion.h2>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {skillIcons.map((skill, index) => (
                      <motion.div
                        key={skill.label}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skill.delay }}
                      >
                        <Card className="bg-gray-800/50 border-gray-700 hover:border-electric/50 transition-all duration-300">
                          <CardContent className="p-6 text-center">
                            <skill.icon className="h-8 w-8 text-electric mx-auto mb-3" />
                            <p className="text-white font-medium text-sm">{skill.label}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-300 text-lg mb-6">
                      Ready to explore my work and see how I can help your team?
                    </p>
                    
                    <Button
                      onClick={handleContinue}
                      className="bg-electric hover:bg-electric/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto"
                    >
                      <span className="mr-2">Enter Portfolio</span>
                      <FiArrowRight className="h-5 w-5" />
                    </Button>
                    
                    <button
                      onClick={handleSkip}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mx-auto mt-4"
                    >
                      Skip introduction
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}