import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  MapPin, 
  IndianRupee, 
  Headphones, 
  Award 
} from 'lucide-react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'Reliability You Can Trust',
      description: '99.2% on-time delivery rate with secure handling of every shipment.',
    },
    {
      icon: MapPin,
      title: 'Pan-India Network',
      description: 'Extensive coverage from metros to tier-4 towns across India.',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Competitive and affordable rates without compromising on quality of service or speed.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Dedicated customer support to assist you with any queries or concerns.',
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '21+ years of experience serving thousands of satisfied customers.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise, National Reach',
      description: 'Combining deep regional knowledge with a Pan-India network to deliver reliable logistics solutions.',
    },
  ];

  return (
    <section id="why-us" className="py-12 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Why Choose <span className="text-accent whitespace-nowrap">Excell Express</span>?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-base text-gray-200 max-w-2xl mx-auto">
            We're not just another logistics company. We're your trusted partner 
            committed to delivering excellence with every shipment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, boxShadow: '0 8px 16px rgba(242, 97, 30, 0.2)' }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all relative overflow-hidden group"
            >
              {/* Orange top edge sweep on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-lg mb-4">Ready to experience the Excell Express difference?</p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
