import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Building2, Navigation2, TrendingUp } from 'lucide-react';
import indiaMap from '../assets/india_map.png';

const CoverageMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '28', label: 'States Covered', icon: MapPin },
    { value: '500+', label: 'Cities', icon: Building2 },
    { value: '10,000+', label: 'Pin Codes', icon: Navigation2 },
    { value: '100%', label: 'Major Metros', icon: TrendingUp },
  ];

  return (
    <section id="coverage" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            Pan-<span className="text-accent whitespace-nowrap">India Coverage</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From Kashmir to Kanyakumari, Gujarat to Guwahati—we deliver everywhere. 
            Our extensive network ensures your packages reach every corner of India.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map with Markers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* India Map Container */}
              <div className="relative bg-white rounded border border-gray-200 p-4 shadow-custom-lg">
                {/* Coverage Badge - with more spacing */}
                <div className="mb-6 text-center">
                  <div className="inline-block bg-accent text-white px-4 py-2 rounded shadow-custom-md border border-accent-dark">
                    <div className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap">Pan-India Coverage</div>
                  </div>
                </div>

                <div className="relative w-full">
                  {/* India Map Image - Larger and better fit */}
                  <img 
                    src={indiaMap} 
                    alt="India Coverage Map" 
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded border border-gray-200 p-4 shadow-custom-sm hover:shadow-custom-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 font-mono whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm sm:text-base whitespace-nowrap">{stat.label}</div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-accent text-white rounded p-4 mt-6 border border-accent-dark shadow-custom-sm"
              >
                <p className="text-base font-semibold mb-1">Complete Coverage</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  From tier-1 metro cities to tier-4 towns, we ensure seamless delivery across India.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
