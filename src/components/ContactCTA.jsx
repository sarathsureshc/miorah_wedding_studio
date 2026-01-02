import { MessageCircle, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-miorah-gold/20 via-miorah-navy to-miorah-navy z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 font-bold text-white">Find Your Perfect Look</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 font-light text-gray-300">
            Let Miorah help you shine on your special day. Book an appointment or visit us today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 min-w-[240px] justify-center"
            >
                <MessageCircle size={20} />
                Chat on WhatsApp
            </a>
            <a 
                href="#location"
                className="btn-outline flex items-center gap-3 min-w-[240px] justify-center bg-miorah-navy/50 backdrop-blur-sm"
            >
                <MapPin size={20} />
                Visit Our Studio
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
