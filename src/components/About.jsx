import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, TrendingUp, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: MapPin,
      value: '500+',
      label: 'Cities Covered',
      description: 'Across India',
    },
    {
      icon: TrendingUp,
      value: '99.2%',
      label: 'On-Time Delivery',
      description: 'Guaranteed',
    },
  ];

  return (
    <section id="about" className="py-12 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            About <span className="text-accent whitespace-nowrap">Excell Express</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold block mb-2">Est. 2005 · Kolkata</span>
            Founded in Kolkata in 2005, Excell Express was built with a vision to provide 
            trusted and dependable courier solutions for businesses and individuals across India. 
            Over the years, we have grown through our commitment to reliability, timely service, 
            and customer satisfaction.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mt-3">
            From metropolitan cities to Tier 4 towns, from the plains to the hills, and from 
            easily accessible routes to challenging terrains like the North East - we strive 
            to deliver seamlessly across every corner of the nation.
          </p>
        </motion.div>

        {/* Stats Grid - Sharper, more professional */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-accent/10 w-12 h-12 rounded flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center font-mono whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1 text-center whitespace-nowrap">
                {stat.label}
              </div>
              <div className="text-gray-600 text-center text-sm whitespace-nowrap">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement with orange left border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-primary text-white rounded p-6 md:p-8 max-w-4xl mx-auto border-l-4 border-accent shadow-custom-md"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">
            Our Commitment
          </h3>
          <p className="text-base md:text-lg text-center leading-relaxed text-gray-100">
            At Excell Express, we don't just move packages - we connect businesses with customers 
            and people with people. Backed by a dedicated team and an extensive delivery network, 
            we ensure every shipment reaches its destination safely and on time, every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
