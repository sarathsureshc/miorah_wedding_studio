import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: "Aisha R.", text: "Miorah made my wedding dream come true! The customized lehenga was absolutely stunning and fit perfectly. Highly recommend their bridal collection.", role: "Bride" },
  { id: 2, name: "Sneha K.", text: "The best place in Edavannappara for rental outfits. The quality is top-notch and nobody could tell it wasn't bought. Amazing service!", role: "Customer" },
  { id: 3, name: "Fathima S.", text: "Loved the party wear collection. Unique designs and very elegant. The staff was very helpful in styling.", role: "Customer" },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-6 text-miorah-gold">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={16} />)}
            </div>
            <h2 className="text-miorah-gold text-sm tracking-widest uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Love from our Brides</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <motion.div 
                    key={review.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 relative group hover:-translate-y-2 transition-transform duration-300"
                >
                    <Quote className="absolute top-8 right-8 text-miorah-gold/20 rotate-180 group-hover:scale-110 transition-transform" size={60} />
                    <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10 font-light text-lg">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-miorah-gold to-white flex items-center justify-center text-miorah-navy font-bold font-serif text-xl">
                            {review.name[0]}
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg">{review.name}</h4>
                            <span className="text-xs text-miorah-gold uppercase tracking-wider font-medium">{review.role}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border-white/10 hover:bg-white/10 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                <div className="text-left">
                    <div className="text-white font-serif leading-none">5.0 Star Rating</div>
                    <div className="text-xs text-gray-400 mt-1">Based on 100+ Reviews</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
