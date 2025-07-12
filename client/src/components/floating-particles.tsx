import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "hsl(207, 90%, 54%)",
            borderRadius: "50%",
            left: `${20 + (i * 15)}%`,
            top: `${20 + (i * 15)}%`
          }}
        />
      ))}
    </div>
  );
}
