import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaDev, FaStackOverflow } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/alex-thompson", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/alex-thompson", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/alex_thompson", label: "Twitter" },
    { icon: FaMedium, href: "https://medium.com/@alex.thompson", label: "Medium" },
    { icon: FaDev, href: "https://dev.to/alex-thompson", label: "Dev.to" },
    { icon: FaStackOverflow, href: "https://stackoverflow.com/users/alex-thompson", label: "Stack Overflow" }
  ];

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next streaming architecture project or test automation challenge?
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-electric">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Open to discussing new opportunities, collaborations, or consulting projects focused on streaming architectures and distributed systems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center border border-electric/30">
                  <FiMail className="text-electric" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">alex.thompson@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center border border-electric/30">
                  <FaLinkedin className="text-electric" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-semibold">linkedin.com/in/alex-thompson</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center border border-electric/30">
                  <FaGithub className="text-electric" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white font-semibold">github.com/alex-thompson</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center border border-electric/30">
                  <FiMapPin className="text-electric" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <social.icon className="text-electric" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="professional-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind? Let's discuss how we can build scalable streaming solutions together.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-navy/50 border-gray-600 text-white placeholder-gray-400 focus:border-electric focus:ring-electric"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-navy/50 border-gray-600 text-white placeholder-gray-400 focus:border-electric focus:ring-electric"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 bg-navy/50 border-gray-600 text-white placeholder-gray-400 focus:border-electric focus:ring-electric"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 bg-navy/50 border-gray-600 text-white placeholder-gray-400 focus:border-electric focus:ring-electric resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-electric hover:bg-blue-600 text-white font-semibold py-3 tech-glow"
              >
                <FiSend className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
