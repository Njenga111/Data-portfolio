import HeroImg from "@/assets/images/hero.jpg";
import { motion, useMotionTemplate, useMotionValue, animate, useScroll, useTransform } from "framer-motion";
import { Sparkles, Database, Zap, ArrowRight, Server, Cpu, HardDrive, Network } from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Professional floating elements
  const count = 15;
  const nodes = Array.from({ length: count });
  
  // Gradient animation
  const color = useMotionValue("#0ea5e9");
  const accentColor = useMotionValue("#3b82f6");
  
  useEffect(() => {
    animate(color, ["#0ea5e9", "#8b5cf6", "#06b6d4", "#0ea5e9"], {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    });
    animate(accentColor, ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"], {
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="min-h-screen py-20 text-white bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden relative"
    >
      {/* Modern Data Flow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle wave pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 30%)
            `,
            y: y1
          }}
        />
        
        {/* Animated data streams */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 65%, rgba(59, 130, 246, 0.2) 75%, transparent 85%),
              linear-gradient(-45deg, transparent 65%, rgba(16, 185, 129, 0.2) 75%, transparent 85%)
            `,
            backgroundSize: "200px 200px",
            y: y2
          }}
        />
        
        {/* Floating data nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0
              }}
              animate={{
                x: [null, (Math.random() - 0.5) * 20],
                y: [null, (Math.random() - 0.5) * 20],
                opacity: [0, 0.3, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
              }}
              className="absolute rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                filter: "blur(8px)"
              }}
            />
          ))}
        </div>
      </div>

      {/* Data engineering floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {nodes.map((_, i) => {
          const icons = [Database, Server, Cpu, HardDrive, Network];
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100],
                x: [null, (Math.random() - 0.5) * 50],
                opacity: [0, 0.4, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 25 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
              }}
              className="absolute"
            >
              <div className="relative">
                <div className="p-2 rounded-lg backdrop-blur-sm border border-blue-400/30 bg-gray-900/50">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div 
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent)",
                    transform: "scale(2)"
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        style={{ opacity }}
        className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10"
      >
        {/* Hero Section */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-300">Available for new opportunities</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <TypewriterText 
                  baseText="Building " 
                  highlightText="Scalable" 
                  trailText=" Data Systems"
                />
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Architecting robust data pipelines and distributed systems that transform raw data into strategic assets. 
              I build infrastructure that scales with your business needs.Architecting robust data pipelines and distributed systems that transform raw data into strategic assets. 
              I build infrastructure that scales with your business needs.Architecting robust data pipelines and distributed systems that transform raw data into strategic assets. 
              I build infrastructure that scales with your business needs.npm 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <StatCard icon={Database} label="Data Pipelines" value="10" />
              <StatCard icon={Server} label="Systems Built" value="25+" />
              <StatCard icon={Zap} label="Throughput" value="1M+ TPS" />
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <HolographicImage src={HeroImg} />
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <PhilosophyCard />
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CurrentFocusCard />
        </motion.div>
      </motion.div>
    </section>
  );
}

const TypewriterText = ({ baseText, highlightText, trailText }) => {
  return (
    <span className="block">
      {baseText.split("").map((char, i) => (
        <motion.span
          key={`base-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03, duration: 0.3 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {highlightText.split("").map((char, i) => (
          <motion.span
            key={`highlight-${i}`}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: baseText.length * 0.03 + i * 0.02,
              duration: 0.4,
              type: "spring",
              stiffness: 200
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
      <span className="block mt-2">
        {trailText.split("").map((char, i) => (
          <motion.span
            key={`trail-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: (baseText + highlightText).length * 0.02 + i * 0.02,
              duration: 0.3
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
};

const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/50 border border-blue-500/30 backdrop-blur-sm"
  >
    <div className="p-2 rounded-lg bg-blue-500/20">
      <Icon className="w-4 h-4 text-blue-400" />
    </div>
    <div>
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  </motion.div>
);

const HolographicImage = ({ src }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      whileHover="hover"
      initial={{ rotateY: 0, rotateX: 0 }}
      variants={{
        hover: {
          rotateY: () => x.get() * 10,
          rotateX: () => -y.get() * 10,
          transition: { type: 'spring', damping: 10, stiffness: 100 }
        }
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative group cursor-grab active:cursor-grabbing"
    >
      {/* Data engineering themed background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl shadow-2xl" />
      <div className="absolute inset-0 rounded-2xl border border-blue-400/20" />
      
      <motion.img
        src={src}
        alt="Profile"
        className="relative rounded-xl w-full z-10 border border-gray-700/50"
        style={{
          transform: 'translateZ(20px)',
          boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        whileDrag={{ scale: 1.02 }}
      />
      
      {/* Holographic overlay */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${x => (x.get() + 0.5) * 100}% ${y => (y.get() + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 80%)`,
          transition: "opacity 0.3s ease"
        }}
      />
      
      {/* Data flow animation overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(59,130,246,0.2) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(34,197,94,0.2) 50%, transparent 60%)
            `,
            backgroundSize: "100px 100px"
          }}
        />
      </div>
    </motion.div>
  );
};

const PhilosophyCard = () => {
  const philosophy = "Data infrastructure should be invisible, reliable, and scale effortlessly—like electricity.";
  const words = philosophy.split(" ");
  
  return (
    <motion.div className="relative p-1 rounded-2xl overflow-hidden">
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
          backgroundSize: "300% 300%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative bg-slate-900/90 rounded-2xl p-8 backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-widest text-blue-300 mb-4 font-medium"
            >
              My Philosophy
            </motion.h3>
            
            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-white">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    color: [
                      "#ffffff",
                      "#3b82f6",
                      "#8b5cf6",
                      "#ffffff"
                    ]
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    color: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.2
                    }
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CurrentFocusCard = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl"
  >
    <div className="flex items-start gap-6">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
      >
        <Zap className="w-6 h-6 text-blue-400" />
      </motion.div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">Current Focus</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-4">
          Building <span className="text-blue-300 font-semibold">real-time data platforms</span> that 
          process millions of events per second with sub-second latency. Developing self-optimizing 
          pipelines that adapt to workload patterns automatically.
        </p>
        
        <motion.div
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
        >
          <span className="font-medium">View Recent Projects</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);
const AboutBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />
      
      {/* Glow points */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 30%)
          `,
          y
        }}
      />
      
      {/* Data streams */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 65%, rgba(59, 130, 246, 0.15) 75%, transparent 85%),
            linear-gradient(-45deg, transparent 65%, rgba(16, 185, 129, 0.15) 75%, transparent 85%)
          `,
          backgroundSize: "200px 200px"
        }}
      />
    </div>
  );
};