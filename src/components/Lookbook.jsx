import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1549416866-28564757c244?q=80&w=800&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1585250482435-950c05876359?q=80&w=800&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop', 
];

const Lookbook = () => {
    return (
        <section id="lookbook" className="py-24 relative">
            <div className="container mx-auto px-4">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <h2 className="text-miorah-gold text-sm tracking-widest uppercase mb-4">Visual Stories</h2>
                        <h3 className="text-4xl md:text-6xl font-serif text-white">Lookbook</h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 group text-white hover:text-miorah-gold transition-colors">
                        <span className="uppercase tracking-widest text-sm font-medium">Follow on Instagram</span>
                        <div className="w-8 h-[1px] bg-white group-hover:bg-miorah-gold transition-colors" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
                    {images.map((img, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-2xl group ${index === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <img 
                                src={img} 
                                alt="Miorah Lookbook" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            
                            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                <span className="text-miorah-gold text-xs uppercase tracking-widest block mb-2">Collection 2024</span>
                                <span className="text-white font-serif text-xl border-b border-miorah-gold pb-1">View Details</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                 <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-miorah-gold border-b border-miorah-gold pb-1 text-sm uppercase tracking-widest">
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Lookbook;
