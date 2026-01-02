import { Star, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <Star size={32} />, title: "Premium Designs", desc: "Curated collection of luxury bridal and party wear from top designers." },
  { icon: <ShieldCheck size={32} />, title: "Quality Assurance", desc: "Every outfit is quality checked and maintained to the highest standards." },
  { icon: <Heart size={32} />, title: "Personalized Care", desc: "Custom fitting and styling advice to help you look your absolute best." },
  { icon: <MapPin size={32} />, title: "Edavannappara's Finest", desc: "Trusted local studio with a reputation for excellence and elegance." },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-miorah-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
             <h2 className="text-miorah-gold text-sm tracking-widest uppercase mb-4">Why Choose Us</h2>
             <h3 className="text-4xl md:text-5xl font-serif text-white">The Miorah Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 hover:bg-white/10 transition-colors border-white/5 hover:border-miorah-gold/30 text-center group relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-miorah-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-miorah-navy to-miorah-dark-navy rounded-2xl rotate-3 flex items-center justify-center text-miorah-gold mb-8 group-hover:rotate-6 transition-transform shadow-lg shadow-miorah-gold/10 border border-white/5">
                        <div className="-rotate-3 group-hover:-rotate-6 transition-transform">
                            {feature.icon}
                        </div>
                    </div>
                    <h4 className="text-xl font-serif text-white mb-4 group-hover:text-miorah-gold transition-colors">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
