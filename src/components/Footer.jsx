import { 
  Truck, 
  Mail, 
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Excell Express', href: '#why-us' },
    { name: 'Coverage Map', href: '#coverage' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Offset of 100px from top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden">
      {/* Dot-grid texture as faint background watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#F2611E" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent text-white p-2 rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Excell Express</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's trusted logistics partner connecting businesses and customers 
              across 500+ cities with fast, reliable delivery services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-mono whitespace-nowrap">+91 92315 30955</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="break-all">excell_mail@yahoo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="whitespace-nowrap">Kolkata, West Bengal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-300 hover:text-accent transition-colors inline-flex items-center group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left font-mono">
              © 2026 Excell Express All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Made with ❤️ in India | Serving the Nation Since 2005
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
