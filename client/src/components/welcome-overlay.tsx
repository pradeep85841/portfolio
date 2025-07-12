import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiZap, FiArrowRight, FiX, FiUser, FiClock, FiMapPin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WelcomeOverlayProps {
  onComplete: () => void;
  onSkip: () => void;
}

export default function WelcomeOverlay({ onComplete, onSkip }: WelcomeOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [visitTime] = useState(new Date().toLocaleTimeString());
  const [userLocation, setUserLocation] = useState<string>("Welcome");

  useEffect(() => {
    // Get user's approximate location/timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const city = timezone.split('/')[1]?.replace('_', ' ') || 'there';
    setUserLocation(city);
  }, []);

  const steps = [
    {
      title: "Welcome to My Portfolio",
      subtitle: `Good to see you${userLocation !== "Welcome" ? ` from ${userLocation}` : ''}!`,
      content: "I'm a Senior Software Engineer specializing in real-time data streaming and distributed systems. Let me show you what I do best...",
      icon: FiUser,
      color: "from-blue-500 to-purple-600",
      duration: 4000
    },
    {
      title: "Apache Kafka & Streaming",
      subtitle: "Building Systems That Never Sleep",
      content: "I design and implement event-driven architectures that process millions of messages per second, ensuring your data flows seamlessly across distributed systems.",
      icon: FiCpu,
      color: "from-green-500 to-blue-600",
      duration: 4000
    },
    {
      title: "Distributed Architecture",
      subtitle: "Enterprise-Grade Solutions",
      content: "From microservices to cloud-native applications, I build scalable systems that grow with your business needs and handle global traffic loads.",
      icon: FiDatabase,
      color: "from-purple-500 to-pink-600",
      duration: 4000
    },
    {
      title: "Test Automation",
      subtitle: "Quality Through Comprehensive Testing",
      content: "I implement robust testing frameworks that ensure reliability, from unit tests to end-to-end automation, giving you confidence in every deployment.",
      icon: FiZap,
      color: "from-orange-500 to-red-600",
      duration: 3000
    }
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        if (currentStep === steps.length - 1) {
          setShowPersonalization(true);
        } else {
          setCurrentStep(prev => prev + 1);
        }
      }, steps[currentStep].duration);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-navy/98 via-deep-navy/98 to-navy/98 backdrop-blur-sm flex items-center justify-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-full h-full opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-electric/30 via-transparent to-cyan/30 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Skip Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onSkip}
          className="absolute top-6 right-6 text-gray-400 hover:text-white hover:bg-gray-800/50 z-10"
        >
          <FiX className="h-6 w-6" />
        </Button>

        {/* Time and Location Info */}
        <div className="absolute top-6 left-6 flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <FiClock className="h-4 w-4" />
            <span>Visited at {visitTime}</span>
          </div>
          {userLocation !== "Welcome" && (
            <div className="flex items-center space-x-1">
              <FiMapPin className="h-4 w-4" />
              <span>{userLocation}</span>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            {!showPersonalization ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${currentStepData.color} shadow-2xl`}>
                    <currentStepData.icon className="h-12 w-12 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {currentStepData.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl md:text-2xl text-electric font-medium mb-6"
                >
                  {currentStepData.subtitle}
                </motion.h2>

                {/* Content */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                >
                  {currentStepData.content}
                </motion.p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-12"
                >
                  <div className="flex justify-center space-x-2 mb-4">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-12 h-1 rounded-full transition-all duration-500 ${
                          index === currentStep ? 'bg-electric' : 
                          index < currentStep ? 'bg-electric/50' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">
                    Step {currentStep + 1} of {steps.length}
                  </p>
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
                  Ready to Explore?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto mb-8"
                >
                  Dive into my portfolio to see real-world projects, technical expertise, and the impact I've made in building scalable systems.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
                >
                  {[
                    { icon: FiCode, label: "Full-Stack", color: "from-blue-500 to-purple-600" },
                    { icon: FiCpu, label: "Kafka", color: "from-green-500 to-blue-600" },
                    { icon: FiDatabase, label: "Distributed", color: "from-purple-500 to-pink-600" },
                    { icon: FiZap, label: "Testing", color: "from-orange-500 to-red-600" }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="bg-gray-800/50 border-gray-700 hover:border-electric/50 transition-all duration-300">
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 bg-gradient-to-br ${skill.color}`}>
                            <skill.icon className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-white font-medium text-sm">{skill.label}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="space-y-4"
                >
                  <Button
                    onClick={onComplete}
                    className="bg-electric hover:bg-electric/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto text-lg"
                  >
                    <span className="mr-2">Enter Portfolio</span>
                    <FiArrowRight className="h-5 w-5" />
                  </Button>
                  
                  <button
                    onClick={onSkip}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mx-auto"
                  >
                    Skip introduction
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}