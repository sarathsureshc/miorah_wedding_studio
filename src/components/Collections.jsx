import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  { id: 1, title: 'Bridal Collection', image: 'https://images.unsplash.com/photo-1596386461350-326ccbc93761?q=80&w=800&auto=format&fit=crop', desc: 'Timeless elegance for your special day', link: '/collections?category=Bridal' },
  { id: 2, title: 'Rental Outfits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', desc: 'Luxury fashion made accessible', link: '/collections?category=Rental' },
  { id: 3, title: 'Party Wear', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop', desc: 'Make a statement at every event', link: '/collections?category=Party%20Wear' },
  { id: 4, title: 'New Arrivals', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop', desc: 'Latest trends in designer wear', link: '/collections' },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-miorah-gold text-sm tracking-widest uppercase mb-4 pl-1">Curated for You</h2>
                <h3 className="text-4xl md:text-6xl font-serif text-white">Our Collections</h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm md:text-right">
                Explore our exclusive range of handpicked designs, crafted to perfection for every occasion.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl h-[450px]"
                >
                    <Link to={item.link}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Glass Overlay Card */}
                        <div className="absolute inset-0 bg-gradient-to-t from-miorah-dark-navy/90 via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-4 left-4 right-4 p-6 glass-card border-white/5 bg-black/20 backdrop-blur-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-2xl font-serif text-white group-hover:text-miorah-gold transition-colors">{item.title}</h4>
                                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" size={20} />
                            </div>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                                {item.desc}
                            </p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
