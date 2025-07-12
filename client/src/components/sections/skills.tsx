import { motion } from "framer-motion";
import { FiActivity, FiSettings, FiServer, FiCloud, FiBarChart, FiCode } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  icon?: React.ComponentType;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
  icon: React.ComponentType;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Streaming & Messaging",
    icon: FiActivity,
    color: "electric",
    skills: [
      { name: "Apache Kafka", level: 5 },
      { name: "Solace PubSub+", level: 4 },
      { name: "RabbitMQ", level: 4 },
      { name: "Apache Pulsar", level: 3 }
    ]
  },
  {
    category: "Testing & Automation",
    icon: FiSettings,
    color: "cyan",
    skills: [
      { name: "Rest Assured", level: 5 },
      { name: "JUnit/TestNG", level: 5 },
      { name: "Selenium", level: 4 },
      { name: "Chaos Engineering", level: 4 }
    ]
  },
  {
    category: "Backend Technologies",
    icon: FiServer,
    color: "purple",
    skills: [
      { name: "Java/Spring Boot", level: 5 },
      { name: "Microservices", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "PostgreSQL/MongoDB", level: 4 }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: FiCloud,
    color: "green",
    skills: [
      { name: "Docker/Kubernetes", level: 5 },
      { name: "Jenkins/GitLab CI", level: 5 },
      { name: "AWS/Azure", level: 4 },
      { name: "Terraform", level: 3 }
    ]
  },
  {
    category: "Monitoring & Observability",
    icon: FiBarChart,
    color: "orange",
    skills: [
      { name: "Prometheus/Grafana", level: 5 },
      { name: "ELK Stack", level: 4 },
      { name: "Jaeger/Zipkin", level: 4 },
      { name: "New Relic/DataDog", level: 3 }
    ]
  },
  {
    category: "Frontend Technologies",
    icon: FiCode,
    color: "blue",
    skills: [
      { name: "React/Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Vue.js", level: 3 }
    ]
  }
];

const colorClasses = {
  electric: "bg-electric text-electric",
  cyan: "bg-cyan text-cyan",
  purple: "bg-purple text-purple",
  green: "bg-green-500 text-green-400",
  orange: "bg-orange-500 text-orange-500",
  blue: "bg-blue-500 text-blue-500"
};

function StarRating({ level }: { level: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= level ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive toolkit for building and testing enterprise-grade distributed systems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="professional-card rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-opacity-20 ${
                  category.color === 'electric' ? 'bg-electric' :
                  category.color === 'cyan' ? 'bg-cyan' :
                  category.color === 'purple' ? 'bg-purple' :
                  category.color === 'green' ? 'bg-green-500' :
                  category.color === 'orange' ? 'bg-orange-500' :
                  'bg-blue-500'
                }`}>
                  <category.icon className={`text-xl ${
                    category.color === 'electric' ? 'text-electric' :
                    category.color === 'cyan' ? 'text-cyan' :
                    category.color === 'purple' ? 'text-purple' :
                    category.color === 'green' ? 'text-green-400' :
                    category.color === 'orange' ? 'text-orange-500' :
                    'text-blue-500'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold ${
                  category.color === 'electric' ? 'text-electric' :
                  category.color === 'cyan' ? 'text-cyan' :
                  category.color === 'purple' ? 'text-purple' :
                  category.color === 'green' ? 'text-green-400' :
                  category.color === 'orange' ? 'text-orange-500' :
                  'text-blue-500'
                }`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <StarRating level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
