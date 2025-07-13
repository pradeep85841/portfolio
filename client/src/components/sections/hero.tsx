import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiApachekafka, SiSpring, SiDocker, SiKubernetes, SiOpenjdk } from "react-icons/si";
import FloatingParticles from "../floating-particles";
import ThreeBackground from "../three-background";

export default function Hero() {
  const techStack = [
    { icon: SiApachekafka, name: "Apache Kafka", color: "text-electric" },
    { icon: SiSpring, name: "Microservices", color: "text-green-400" },
    { icon: SiDocker, name: "Docker", color: "text-blue-400" },
    { icon: SiKubernetes, name: "JavaScript", color: "text-blue-500" },
    { icon: SiOpenjdk, name: "Java", color: "text-orange-500" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden animated-bg">
      <ThreeBackground />
      <FloatingParticles />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-electric to-cyan bg-clip-text text-transparent"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pradeep Kunchala
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-semibold mb-6 text-electric"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Senior Software Engineer
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building enterprise-grade{" "}
              <span className="text-electric font-semibold">streaming architectures</span> and{" "}
              <span className="text-cyan font-semibold">distributed systems</span> that power critical business operations. 
              Expert in Apache Kafka, event-driven design, and comprehensive test automation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="group bg-electric hover:bg-electric/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.button>
              
              <motion.button 
                onClick={scrollToContact}
                className="group border-2 border-electric/30 bg-electric/5 text-white hover:bg-electric hover:border-electric px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail className="mr-2 group-hover:translate-x-0.5 transition-transform" />
                Get In Touch
              </motion.button>
              
              <motion.a
                href="/analytics"
                className="group border-2 border-purple-500/30 bg-purple-500/5 text-white hover:bg-purple-500 hover:border-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="mr-2 group-hover:rotate-12 transition-transform" />
                View Analytics
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 mb-8 text-lg">Core Technologies</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="professional-card px-6 py-3 rounded-full text-sm font-medium flex items-center border border-white/10 hover:border-electric/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <tech.icon className={`mr-2 text-lg ${tech.color}`} />
                  <span className="text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const element = document.querySelector("#projects");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-electric/60 rounded-full flex justify-center hover:border-electric transition-colors">
          <motion.div 
            className="w-1 h-3 bg-electric rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
