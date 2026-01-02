import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navLinks = [
    { name: 'Collections', href: '/collections', isPage: true },
    { name: 'Why Us', href: '#why-choose', isPage: false },
    { name: 'Reviews', href: '#reviews', isPage: false },
    { name: 'Location', href: '#location', isPage: false },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <nav 
          className={`pointer-events-auto transition-all duration-500 ease-out 
            ${isScrolled ? 'w-full max-w-5xl glass-nav rounded-full px-6 py-3 border' : 'w-full max-w-7xl bg-transparent py-4 border-transparent'}
            flex justify-between items-center
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-miorah-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                <img src="/logo.png" alt="Miorah Logo" className="relative h-10 w-auto md:h-12" />
              </div>
              <span className={`text-xl md:text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-miorah-gold via-white to-miorah-gold bg-300% animate-shine`}>
                  Miorah
              </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                  link.isPage ? (
                    <Link
                        key={link.name} 
                        to={link.href}
                        className="text-miorah-ivory/80 hover:text-miorah-gold transition-colors text-sm uppercase tracking-widest font-medium relative group"
                    >
                         {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-miorah-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <button 
                        key={link.name} 
                        onClick={() => handleNavClick(link.href)}
                        className="text-miorah-ivory/80 hover:text-miorah-gold transition-colors text-sm uppercase tracking-widest font-medium relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-miorah-gold transition-all duration-300 group-hover:w-full" />
                    </button>
                  )
              ))}
              <a 
                  href="https://wa.me/your-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isScrolled ? 'px-6 py-2 text-xs' : 'px-8 py-3 text-sm'} 
                    bg-gradient-to-r from-miorah-gold to-[#bfa030] text-miorah-navy font-bold rounded-full 
                    hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 uppercase tracking-wider`}
              >
                  Enquire
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
              className="md:hidden text-miorah-gold p-2 glass-card rounded-full pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-40 bg-miorah-dark-navy/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        link.isPage ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif text-white hover:text-miorah-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <button 
                                key={link.name} 
                                onClick={() => handleNavClick(link.href)}
                                className="text-3xl font-serif text-white hover:text-miorah-gold transition-colors"
                            >
                                {link.name}
                            </button>
                        )
                    ))}
                     <a 
                        href="https://wa.me/your-number" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary mt-4"
                    >
                        WhatsApp Us
                    </a>
                </div>
                
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute bottom-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <X size={24} />
                </button>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
