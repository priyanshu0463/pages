import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Mission & <span className="text-accent whitespace-nowrap">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-custom-lg hover:shadow-custom-xl transition-all"
          >
            {/* Dashed ring icon */}
            <div className="relative w-16 h-16 mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#F2611E"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="0.3"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="20"
                  fill="#FEF3F0"
                  stroke="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="w-7 h-7 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To connect every corner of India with fast, affordable, and reliable delivery 
              services. We strive to empower businesses of all sizes with world-class 
              logistics solutions that drive growth and customer satisfaction.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8 md:p-10 shadow-custom-lg hover:shadow-custom-xl transition-all"
          >
            {/* Dashed ring icon */}
            <div className="relative w-16 h-16 mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="0.3"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="20"
                  fill="rgba(255, 255, 255, 0.2)"
                  stroke="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-100 text-lg leading-relaxed">
              To become India's most trusted and preferred logistics partner for businesses 
              of every size. We envision a future where distance is no barrier, and every 
              delivery strengthens the bond between businesses and their customers.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {[
            'Reliability',
            'Affordability',
            'Customer First',
            'Excellence',
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-4 text-center shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-primary font-bold text-base md:text-lg whitespace-nowrap">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
