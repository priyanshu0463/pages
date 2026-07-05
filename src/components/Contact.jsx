import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('phone');

  const tabs = [
    { id: 'phone', label: 'Customer Service', icon: Phone },
    { id: 'email', label: 'Email Us', icon: Mail },
    { id: 'address', label: 'Office Address', icon: MapPin },
  ];

  const contactInfo = {
    phone: {
      title: 'Customer Service',
      details: [
        { label: 'Customer Support', value: '+91 92315 30955', link: 'tel:+919231530955', type: 'phone' },
        { label: 'WhatsApp', value: '+91 70038 07470', link: 'https://wa.me/917003807470', type: 'whatsapp' },
      ],
    },
    email: {
      title: 'Email Support',
      details: [
        { label: 'Primary Email', value: 'excell_mail@yahoo.com' },
        { label: 'Alternate Email', value: 'excellexpress71@gmail.com' },
      ],
    },
    address: {
      title: 'Our Office',
      details: [
        {
          label: 'Registered Office',
          value: 'HB 8, Esplanade, Chowringhee North, Bow Barracks, Kolkata, West Bengal 700069, India',
        },
      ],
    },
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In <span className="text-accent whitespace-nowrap">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the 
            channels below and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gray-100 rounded-2xl p-2 mb-8"
          >
            <div className="grid grid-cols-3 gap-2 relative">
              {/* Sliding Background */}
              <motion.div
                layoutId="activeTab"
                className="absolute inset-y-2 bg-white rounded-xl shadow-md"
                style={{
                  left: `calc(${tabs.findIndex((t) => t.id === activeTab)} * 33.333% + 0.5rem)`,
                  width: 'calc(33.333% - 1rem)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />

              {/* Tab Buttons */}
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 rounded-xl font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm md:text-base leading-tight text-center whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {contactInfo[activeTab].title}
            </h3>

            <div className={`${activeTab === 'address' ? 'flex justify-center' : 'grid md:grid-cols-2 gap-6'}`}>
              {contactInfo[activeTab].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all ${
                    activeTab === 'address' ? 'max-w-2xl w-full text-center' : ''
                  }`}
                >
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    {detail.label}
                  </div>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      target={detail.type === 'whatsapp' ? '_blank' : '_self'}
                      rel={detail.type === 'whatsapp' ? 'noopener noreferrer' : ''}
                      className={`flex items-center gap-3 text-base sm:text-lg font-bold transition-colors break-all font-mono ${
                        detail.type === 'whatsapp' 
                          ? 'text-[#25D366] hover:text-[#128C7E]' 
                          : 'text-primary hover:text-accent'
                      } ${activeTab === 'address' ? 'justify-center' : ''}`}
                    >
                      {detail.type === 'whatsapp' && (
                        <div className="bg-[#25D366] text-white p-2 rounded-full flex-shrink-0">
                          <MessageCircle className="w-5 h-5 fill-current" />
                        </div>
                      )}
                      <span className="break-words font-mono whitespace-nowrap">{detail.value}</span>
                    </a>
                  ) : (
                    <div className="text-base sm:text-lg font-bold text-primary break-words">
                      {detail.value}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Business Hours - Centered Below */}
            {activeTab === 'phone' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center bg-white rounded-xl p-6 shadow-md"
              >
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  Business Hours
                </div>
                <div className="text-lg font-bold text-primary">
                  Mon-Sat, 10:00 AM - 8:00 PM
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              Contact us today for a customized logistics solution tailored to your business needs.
            </p>
            <a href="tel:+919231530955" className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
