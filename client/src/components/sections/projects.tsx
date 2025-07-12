import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiActivity, FiClock, FiServer } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  metrics: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Trading Analytics",
    description: "High-throughput Kafka streaming pipeline processing 50M+ financial events daily. Built with Spring Boot, Redis, and InfluxDB for real-time analytics.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    githubUrl: "#",
    liveUrl: "#",
    technologies: ["Apache Kafka", "Java", "Spring Boot", "Redis"],
    metrics: ["50M+ events/day", "Sub-10ms latency", "99.9% uptime"],
    color: "electric"
  },
  {
    id: 2,
    title: "Distributed Test Automation Suite",
    description: "Comprehensive testing framework for microservices architecture. Automated chaos engineering with intelligent failure injection and recovery validation.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    githubUrl: "#",
    liveUrl: "#",
    technologies: ["TestNG", "Rest Assured", "Docker", "Jenkins"],
    metrics: ["5000+ test cases", "80% faster execution", "95% coverage"],
    color: "cyan"
  },
  {
    id: 3,
    title: "Event-Driven E-Commerce Platform",
    description: "Scalable e-commerce platform using event sourcing and CQRS patterns. Handles millions of transactions with eventual consistency guarantees.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    githubUrl: "#",
    liveUrl: "#",
    technologies: ["Event Sourcing", "MongoDB", "RabbitMQ", "Kubernetes"],
    metrics: ["2M+ transactions", "500K+ users", "10x scale"],
    color: "purple"
  },
  {
    id: 4,
    title: "Observability & Monitoring Platform",
    description: "Comprehensive monitoring solution with distributed tracing, metrics aggregation, and intelligent alerting for microservices ecosystem.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    githubUrl: "#",
    liveUrl: "#",
    technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack"],
    metrics: ["500+ metrics", "Full tracing", "Smart alerts"],
    color: "green"
  }
];

const colorClasses = {
  electric: "text-electric border-electric",
  cyan: "text-cyan border-cyan",
  purple: "text-purple border-purple",
  green: "text-green-400 border-green-400"
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world solutions for high-throughput streaming systems and enterprise-grade test automation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="professional-card rounded-2xl p-8 hover-lift group"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-2xl font-bold leading-tight ${colorClasses[project.color as keyof typeof colorClasses].split(' ')[0]}`}>
                  {project.title}
                </h3>
                <div className="flex space-x-3 flex-shrink-0 ml-4">
                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl} 
                      className="text-gray-400 hover:text-electric transition-colors p-2 rounded-lg hover:bg-electric/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a 
                      href={project.liveUrl} 
                      className="text-gray-400 hover:text-electric transition-colors p-2 rounded-lg hover:bg-electric/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm bg-opacity-20 ${
                      project.color === 'electric' ? 'bg-electric text-electric' :
                      project.color === 'cyan' ? 'bg-cyan text-cyan' :
                      project.color === 'purple' ? 'bg-purple text-purple' :
                      'bg-green-500 text-green-400'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between text-sm text-gray-400">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="flex items-center">
                      {idx === 0 && <FiActivity className="mr-1" />}
                      {idx === 1 && <FiClock className="mr-1" />}
                      {idx === 2 && <FiServer className="mr-1" />}
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
