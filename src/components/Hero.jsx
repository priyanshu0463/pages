import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import bgImage from '../assets/bg.png';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const endValue = typeof end === 'string' ? parseFloat(end) : end;
    const increment = endValue / (duration * 60);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const displayValue = typeof end === 'string' && end.includes('%') 
    ? `${count.toFixed(1)}%` 
    : typeof end === 'string' && end.includes('+')
    ? `${Math.floor(count)}+`
    : Math.floor(count);

  return <span ref={ref}>{displayValue}</span>;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full"
    >
      {/* Background with bg.png blended in */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
      
      {/* bg.png image positioned in the right corner at full brightness */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-2/3 hidden lg:block pointer-events-none">
        <img 
          src={bgImage} 
          alt="" 
          className="w-auto h-full object-contain"
        />
      </div>

      {/* Decorative patterns to complement the image */}
      <div className="absolute right-0 top-0 bottom-0 hidden lg:block pointer-events-none overflow-hidden w-1/2">
        {/* Dotted patterns */}
        <div className="absolute top-20 right-32 w-32 h-32 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#FF6B35" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots1)" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-20 w-24 h-24 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots2" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#FF6B35" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots2)" />
          </svg>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-64 w-16 h-16 border-2 border-accent/20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-48 w-12 h-12 border-2 border-accent/30 rounded-full"></div>
        
        {/* Line patterns */}
        <div className="absolute top-1/3 right-40 w-40 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-56 w-32 h-1 bg-gradient-to-r from-transparent via-accent/15 to-transparent rotate-12"></div>
        
        {/* Small accent dots with floating animation */}
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-40 right-52 w-2 h-2 bg-accent/40 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-52 right-44 w-3 h-3 bg-accent/30 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-60 w-2 h-2 bg-accent/40 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -8, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-52 right-36 w-2.5 h-2.5 bg-accent/35 rounded-full"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Middle section creative patterns - flowing from right to center */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
        {/* Horizontal flowing lines from right to center */}
        <div className="absolute right-0 top-1/4 w-2/3 h-px bg-gradient-to-l from-accent/20 via-accent/10 to-transparent"></div>
        <div className="absolute right-0 top-1/3 w-3/5 h-px bg-gradient-to-l from-accent/15 via-accent/8 to-transparent"></div>
        <div className="absolute right-0 top-2/5 w-1/2 h-px bg-gradient-to-l from-accent/25 via-accent/12 to-transparent"></div>
        
        <div className="absolute right-0 bottom-1/3 w-2/3 h-px bg-gradient-to-l from-accent/18 via-accent/10 to-transparent"></div>
        <div className="absolute right-0 bottom-1/4 w-3/5 h-px bg-gradient-to-l from-accent/22 via-accent/12 to-transparent"></div>
        <div className="absolute right-0 bottom-2/5 w-1/2 h-px bg-gradient-to-l from-accent/15 via-accent/8 to-transparent"></div>

        {/* Dotted trail from right to center */}
        <div className="absolute right-20 top-1/3 w-2 h-2 bg-accent/35 rounded-full"></div>
        <div className="absolute right-32 top-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full"></div>
        <div className="absolute right-44 top-1/3 w-1.5 h-1.5 bg-accent/25 rounded-full"></div>
        <div className="absolute right-56 top-1/3 w-1 h-1 bg-accent/20 rounded-full"></div>
        <div className="absolute right-64 top-1/3 w-1 h-1 bg-accent/15 rounded-full"></div>

        <div className="absolute right-24 bottom-1/3 w-2 h-2 bg-accent/40 rounded-full"></div>
        <div className="absolute right-36 bottom-1/3 w-1.5 h-1.5 bg-accent/32 rounded-full"></div>
        <div className="absolute right-48 bottom-1/3 w-1.5 h-1.5 bg-accent/28 rounded-full"></div>
        <div className="absolute right-60 bottom-1/3 w-1 h-1 bg-accent/22 rounded-full"></div>
        <div className="absolute right-72 bottom-1/3 w-1 h-1 bg-accent/18 rounded-full"></div>

        {/* Diagonal flowing lines from right corner */}
        <div className="absolute right-10 top-1/4 w-96 h-px bg-gradient-to-l from-accent/20 to-transparent rotate-12 origin-right"></div>
        <div className="absolute right-10 top-1/3 w-80 h-px bg-gradient-to-l from-accent/15 to-transparent rotate-6 origin-right"></div>
        <div className="absolute right-10 bottom-1/3 w-96 h-px bg-gradient-to-l from-accent/18 to-transparent -rotate-12 origin-right"></div>
        <div className="absolute right-10 bottom-1/4 w-80 h-px bg-gradient-to-l from-accent/15 to-transparent -rotate-6 origin-right"></div>

        {/* Small geometric shapes flowing from right */}
        <div className="absolute right-40 top-2/5 w-6 h-6 border border-accent/15 rotate-45"></div>
        <div className="absolute right-52 top-1/2 w-8 h-8 border border-accent/12 rounded-full"></div>
        <div className="absolute right-44 bottom-2/5 w-5 h-5 border border-accent/18 rotate-12"></div>
        
        {/* Gradient orbs on the right side for depth */}
        <div className="absolute right-1/4 top-1/3 w-48 h-48 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        <div className="max-w-4xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded mb-6 border border-white/10"
            >
              <Zap className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">India's Trusted Logistics Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block lg:whitespace-nowrap">India's Trusted Logistics Partner</span>
              <span className="text-accent block">Your own logistics partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
            >
              Connecting every corner of India with our prompt and timely delivery services and building trust and safety among businesses and their customers with care
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-semibold text-lg transition-all hover:shadow-2xl flex items-center justify-center group border border-accent-dark">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats with mono type and count-up animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 max-w-2xl pt-8 border-t border-white/10"
            >
              {[
                { value: 500, suffix: '+', label: 'Cities Covered' },
                { value: 99.2, suffix: '%', label: 'On-Time Delivery' },
                { value: 'Northeast', label: 'Expertise. Nationwide Reliability', noCount: true },
              ].map((stat, index) => (
                <div key={index} className="min-w-0">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 font-mono whitespace-nowrap">
                    {stat.noCount ? (
                      <span className="text-base sm:text-xl md:text-3xl">{stat.value}</span>
                    ) : (
                      <>
                        <CountUp end={stat.value} />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
