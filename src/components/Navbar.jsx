import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo2 from '../assets/5.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Why Us', href: '#why-us' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    
    // Close mobile menu first and restore scroll
    setIsMobileMenuOpen(false);
    
    // Small delay to ensure menu closes and body scroll is restored
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -100; // Offset of 100px from top
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Text Based */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            <img 
              src={logo2} 
              alt="Excell Express Icon" 
              className="w-14 h-14 object-contain p-0"
            />
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className={`text-2xl sm:text-3xl md:text-4xl font-black italic transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`} style={{ fontStretch: 'condensed', transform: 'scaleY(1.05) skewX(-6deg)', fontWeight: 900 }}>
                EXCELL
              </span>
              <span 
                className="text-2xl sm:text-3xl md:text-4xl font-black italic bg-gradient-to-r from-[#ff7a1a] to-[#ff9a3d] bg-clip-text text-transparent"
                style={{ fontStretch: 'condensed', transform: 'scaleY(1.05) skewX(-6deg)', fontWeight: 900 }}
              >
                EXPRESS
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-medium transition-colors text-sm tracking-wide focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-accent' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded font-semibold transition-all hover:shadow-lg border border-accent-dark text-sm"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors z-50 ${
              isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-2xl md:hidden z-50 overflow-y-auto"
            >
              {/* Close Button Inside Menu */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-primary hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col px-6 pb-6 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg text-gray-700 hover:text-accent font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded font-semibold transition-all border border-accent-dark text-center"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Mobile Menu Overlay - Prevents scroll-through */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 md:hidden z-40 backdrop-blur-sm touch-none"
              style={{ touchAction: 'none' }}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
