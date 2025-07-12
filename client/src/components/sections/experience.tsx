import { motion } from "framer-motion";
import { FiUsers, FiSettings, FiCode } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
  color: string;
  icon: React.ComponentType;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Software Engineer",
    description: "Lead architect for real-time data processing platform handling 100M+ events daily. Designed and implemented Kafka-based streaming architecture with 99.9% uptime.",
    technologies: ["Kafka", "Java", "Spring Boot", "Kubernetes"],
    startDate: "2022",
    endDate: "Present",
    current: true,
    color: "electric",
    icon: FiUsers
  },
  {
    id: 2,
    company: "DataStream Inc.",
    position: "Software Development Engineer in Test",
    description: "Built comprehensive test automation framework for distributed systems. Implemented chaos engineering practices reducing production incidents by 60%.",
    technologies: ["TestNG", "Rest Assured", "Docker", "Jenkins"],
    startDate: "2020",
    endDate: "2022",
    current: false,
    color: "cyan",
    icon: FiSettings
  },
  {
    id: 3,
    company: "StreamFlow Technologies",
    position: "Backend Engineer",
    description: "Developed microservices architecture with event-driven design patterns. Implemented Solace messaging for high-throughput financial applications.",
    technologies: ["Spring Boot", "Solace", "PostgreSQL", "RabbitMQ"],
    startDate: "2018",
    endDate: "2020",
    current: false,
    color: "purple",
    icon: FiCode
  }
];

const colorClasses = {
  electric: "bg-electric border-electric text-electric",
  cyan: "bg-cyan border-cyan text-cyan",
  purple: "bg-purple border-purple text-purple"
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building scalable streaming architectures and robust test frameworks across industry-leading companies
          </p>
        </motion.div>
        
        <div className="relative min-h-[600px]">
          {/* Timeline Line - spans full container height */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-electric/60 hidden lg:block h-full rounded-full"></div>
          
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 lg:px-8">
                  <div className="professional-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-opacity-20 border border-white/10 ${
                        exp.color === 'electric' ? 'bg-electric' :
                        exp.color === 'cyan' ? 'bg-cyan' :
                        'bg-purple'
                      }`}>
                        <exp.icon className={`text-xl ${
                          exp.color === 'electric' ? 'text-electric' :
                          exp.color === 'cyan' ? 'text-cyan' :
                          'text-purple'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-1 ${
                          exp.color === 'electric' ? 'text-electric' :
                          exp.color === 'cyan' ? 'text-cyan' :
                          'text-purple'
                        }`}>
                          {exp.position}
                        </h3>
                        <p className="text-gray-300 font-medium">{exp.company}</p>
                        <div className="flex items-center mt-1">
                          <p className="text-sm text-gray-400">{exp.startDate} - {exp.endDate}</p>
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 bg-electric/20 text-electric text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm bg-opacity-20 ${
                            exp.color === 'electric' ? 'bg-electric text-electric' :
                            exp.color === 'cyan' ? 'bg-cyan text-cyan' :
                            'bg-purple text-purple'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full border-4 border-navy shadow-lg ${
                  exp.color === 'electric' ? 'bg-electric' :
                  exp.color === 'cyan' ? 'bg-cyan' :
                  'bg-purple'
                }`}></div>
                
                <div className="lg:w-1/2 lg:px-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
