import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  DollarSign, 
  Truck, 
  ShoppingBag, 
  Clock, 
  RefreshCw 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Zap,
      title: 'Express Delivery',
      description: 'Lightning-fast delivery across metros and tier-1 cities. Get your packages delivered within 24-48 hours.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: DollarSign,
      title: 'COD Logistics',
      description: 'Seamless Cash-on-Delivery solutions with instant remittance. Perfect for e-commerce businesses.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Truck,
      title: 'B2B Freight',
      description: 'Bulk shipment solutions for businesses. Reliable, cost-effective freight services across India.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce Fulfillment',
      description: 'End-to-end fulfillment services including warehousing, picking, packing, and last-mile delivery.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Same-Day Delivery',
      description: 'Ultra-fast same-day delivery services available in major cities. Perfect for urgent shipments.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: RefreshCw,
      title: 'Reverse Logistics',
      description: 'Hassle-free product returns and exchange management. Complete reverse logistics solutions.',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Our <span className="text-accent">Speciality Services</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet every business need. 
            From express delivery to complete fulfillment, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <button className="mt-4 text-accent font-semibold flex items-center group-hover:gap-2 transition-all text-sm">
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
