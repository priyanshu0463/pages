import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import RouteConnector from './RouteConnector';

const MapEmbed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-6 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            Visit <span className="text-accent whitespace-nowrap">Our Office</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-[420px_1fr] gap-5 lg:items-stretch">
            {/* Address Card */}
            <div className="lg:col-span-1 space-y-3 flex flex-col">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg flex-shrink-0">
                <div className="bg-accent/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
                  Registered Office
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                  Excell Express<br />
                  8, Waterloo Street<br />
                  Kolkata : 700069<br />
                  West Bengal, India<br />
                </p>
                <div className="pt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 break-all">
                    <strong>Phone:</strong> <span className="font-mono">+91 92315 30955</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 break-all mb-2">
                    <strong>Email:</strong>  excellexpress71@gmail.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>Hours:</strong> Mon-Sat, 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Route Connector */}
              <div className="hidden lg:flex justify-center my-2 flex-shrink-0">
                <RouteConnector orientation="vertical" className="opacity-60" />
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-6 shadow-custom-lg flex-shrink-0">
                <Navigation className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Get Directions</h3>
                <p className="text-sm text-gray-100 mb-4">
                  Use the map to navigate to our office or click below for directions.
                </p>
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=22.5673332,88.3513906', '_blank')}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all w-full"
                >
                  Open in Maps
                </button>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-1 flex">
              <div className="bg-white rounded-2xl p-4 shadow-lg w-full flex flex-col">
                <div className="relative w-full flex-1 min-h-[280px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.8825098764672!2d88.3513051!3d22.5671217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f7dfada1a1%3A0x8e0b67322be1e1c6!2sExcell%20Express!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin&z=19"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Excell Express Office Location"
                    className="rounded-xl"
                  />
                  
                  {/* Overlay with office info - positioned at top right, parallel to Google's banner - hidden on mobile */}
                  <div className="hidden sm:block absolute top-[9px] right-3 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg w-[200px] md:w-[240px]">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-accent text-white p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-primary text-sm md:text-base leading-tight mb-0.5">
                          Excell Express
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">
                          Esplanade, Kolkata
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-4 bg-white rounded-2xl p-4 shadow-lg"
        >
          <h3 className="text-xl font-bold text-primary mb-4 text-center">
            Office Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-custom-sm">
              <div className="flex justify-center mb-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="font-semibold text-primary mb-2">Weekdays</p>
              <p className="text-gray-600">Monday - Saturday</p>
              <p className="text-lg font-bold text-accent font-mono">10:00 AM - 8:00 PM</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-custom-sm">
              <div className="flex justify-center mb-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="font-semibold text-primary mb-2">Sunday</p>
              <p className="text-gray-600">Closed</p>
              <div className="mt-2">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                  Dedicated Emergency support available
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapEmbed;
