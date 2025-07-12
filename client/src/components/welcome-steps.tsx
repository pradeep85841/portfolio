import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiZap, FiCheck } from "react-icons/fi";

interface WelcomeStepProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  isActive: boolean;
  isCompleted: boolean;
}

const stepIcons = {
  1: FiCode,
  2: FiCpu,
  3: FiDatabase,
  4: FiZap,
};

export function WelcomeStep({ step, totalSteps, title, description, icon: Icon, isActive, isCompleted }: WelcomeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
        isActive 
          ? 'border-electric bg-electric/5' 
          : isCompleted 
            ? 'border-green-500 bg-green-500/5' 
            : 'border-gray-700 bg-gray-800/20'
      }`}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
        isCompleted 
          ? 'bg-green-500 text-white' 
          : isActive 
            ? 'bg-electric text-white' 
            : 'bg-gray-700 text-gray-400'
      }`}>
        {isCompleted ? <FiCheck className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
      </div>
      
      <div className="flex-1">
        <h3 className={`font-semibold mb-1 ${
          isActive || isCompleted ? 'text-white' : 'text-gray-400'
        }`}>
          {title}
        </h3>
        <p className={`text-sm ${
          isActive || isCompleted ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {description}
        </p>
      </div>
      
      <div className="flex-shrink-0 text-sm text-gray-400">
        {step}/{totalSteps}
      </div>
    </motion.div>
  );
}

export const welcomeSteps = [
  {
    title: "Welcome to My Portfolio",
    description: "I'm a Senior Software Engineer specializing in real-time data streaming",
    icon: FiCode,
  },
  {
    title: "Apache Kafka Expertise",
    description: "Building systems that handle millions of events per second",
    icon: FiCpu,
  },
  {
    title: "Distributed Systems",
    description: "Designing enterprise-grade solutions that scale globally",
    icon: FiDatabase,
  },
  {
    title: "Test Automation",
    description: "Comprehensive testing frameworks for reliable software delivery",
    icon: FiZap,
  },
];