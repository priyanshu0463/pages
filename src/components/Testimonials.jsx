import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Ramesh Iyer',
      designation: 'Founder',
      company: 'Iyer Textiles',
      rating: 5,
      text: 'Excell Express has transformed our logistics operations. Their COD services and timely deliveries have significantly improved our customer satisfaction. Highly recommended!',
      avatar: 'RI',
    },
    {
      name: 'Priya Nair',
      designation: 'Operations Head',
      company: 'Coastal Crafts Co.',
      rating: 5,
      text: 'Exceptional service! The real-time tracking and dedicated support team make Excell Express our go-to logistics partner. They never disappoint.',
      avatar: 'PN',
    },
    {
      name: 'Arjun Mehta',
      designation: 'CEO',
      company: 'Mumbai Fashion Hub',
      rating: 5,
      text: 'Working with Excell Express for 3 years now. Their pan-India network and express delivery services are unmatched. A reliable partner for our e-commerce business.',
      avatar: 'AM',
    },
    {
      name: 'Sneha Sharma',
      designation: 'Logistics Manager',
      company: 'TechGear India',
      rating: 5,
      text: 'Excell Express\'s B2B freight solutions have been a game-changer for us. Cost-effective, reliable, and professional service every single time.',
      avatar: 'SS',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What Our <span className="text-accent">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses that trust Excell Express 
            for their logistics needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl h-full flex flex-col justify-between">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Quote className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8 flex-grow">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-primary text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].designation}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-accent hover:text-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-accent hover:text-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
