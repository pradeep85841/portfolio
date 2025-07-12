import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  readTime: number;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Resilient Kafka Consumers: Advanced Patterns",
    description: "Deep dive into consumer group management, offset strategies, and error handling patterns for production-grade Kafka applications.",
    imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Kafka",
    publishedAt: "Dec 15, 2023",
    readTime: 8,
    slug: "resilient-kafka-consumers"
  },
  {
    id: 2,
    title: "Testing Distributed Systems: Chaos Engineering in Practice",
    description: "Implementing chaos engineering principles to build more resilient distributed systems through controlled failure injection.",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Testing",
    publishedAt: "Dec 8, 2023",
    readTime: 12,
    slug: "chaos-engineering-practice"
  },
  {
    id: 3,
    title: "Event Sourcing vs Traditional CRUD: When to Choose What",
    description: "Comparing event sourcing patterns with traditional CRUD operations, including practical implementation considerations.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Architecture",
    publishedAt: "Nov 30, 2023",
    readTime: 15,
    slug: "event-sourcing-vs-crud"
  },
  {
    id: 4,
    title: "Observability in Microservices: Beyond Basic Monitoring",
    description: "Building comprehensive observability strategies for microservices architectures with distributed tracing and metrics correlation.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Monitoring",
    publishedAt: "Nov 22, 2023",
    readTime: 10,
    slug: "microservices-observability"
  },
  {
    id: 5,
    title: "Optimizing Kafka Producer Performance at Scale",
    description: "Practical techniques for optimizing Kafka producer throughput and latency in high-volume production environments.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Performance",
    publishedAt: "Nov 15, 2023",
    readTime: 7,
    slug: "kafka-producer-optimization"
  },
  {
    id: 6,
    title: "CI/CD Strategies for Microservices: Lessons Learned",
    description: "Building robust CI/CD pipelines for microservices architectures, including deployment strategies and rollback mechanisms.",
    imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "CI/CD",
    publishedAt: "Nov 8, 2023",
    readTime: 9,
    slug: "microservices-cicd"
  }
];

const categoryColors = {
  "Kafka": "bg-electric text-electric",
  "Testing": "bg-cyan text-cyan",
  "Architecture": "bg-purple text-purple",
  "Monitoring": "bg-orange-500 text-orange-500",
  "Performance": "bg-green-500 text-green-400",
  "CI/CD": "bg-blue-500 text-blue-500"
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights on distributed systems, streaming architectures, and test automation strategies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="professional-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm bg-opacity-20 ${
                    categoryColors[post.category as keyof typeof categoryColors]
                  }`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm space-x-3">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {post.publishedAt}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center text-electric group-hover:text-cyan transition-colors">
                  <span className="mr-2">Read More</span>
                  <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center bg-electric/20 text-electric px-6 py-3 rounded-lg hover:bg-electric/30 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
            </svg>
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
