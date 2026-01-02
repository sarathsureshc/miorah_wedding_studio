import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-miorah-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: 'easeOut' }}
           className="relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-miorah-gold via-white to-miorah-gold opacity-10 blur-3xl rounded-full" />
            
            <h2 className="text-miorah-gold tracking-[0.3em] text-sm md:text-base mb-8 uppercase font-medium">
                Edavannappara's Finest
            </h2>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
                Miorah
                <span className="block text-2xl md:text-4xl lg:text-5xl font-sans font-light mt-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-miorah-ivory to-gray-400">
                    Designer Studio
                </span>
            </h1>

            <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl mb-12 font-light leading-relaxed">
                Where timeless elegance meets modern luxury. 
                <span className="block text-miorah-gold/80 mt-2">Bridal • Rental • Designer Wear</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a 
                    href="#collections"
                    className="btn-primary min-w-[200px]"
                >
                    Explore Collections
                </a>
                <a 
                    href="https://wa.me/your-number"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline min-w-[200px]"
                >
                    WhatsApp Enquiry
                </a>
            </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-miorah-gold flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-miorah-gold to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
