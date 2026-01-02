import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Contact Details */}
            <div className="w-full lg:w-1/3 glass-card p-8 lg:p-12 flex flex-col justify-center">
                <div>
                     <h2 className="text-miorah-gold text-sm tracking-widest uppercase mb-4">Visit Us</h2>
                     <h3 className="text-4xl font-serif text-white mb-8">Our Studio</h3>
                     <p className="text-gray-300 leading-relaxed mb-10 font-light">
                        Experience the elegance firsthand. Visit our boutique in Edavannappara to explore our collections or discuss your custom bridal outfit.
                     </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-full text-miorah-gold border border-white/10 shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-2">Address</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Main Road, Edavannappara<br/>Malappuram, Kerala, India</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-full text-miorah-gold border border-white/10 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-2">Phone</h4>
                            <p className="text-gray-400 text-sm hover:text-miorah-gold transition-colors pointer-events-auto cursor-pointer">+91 123 456 7890</p>
                            <p className="text-gray-400 text-sm hover:text-miorah-gold transition-colors pointer-events-auto cursor-pointer">+91 987 654 3210</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-full text-miorah-gold border border-white/10 shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-2">Business Hours</h4>
                            <p className="text-gray-400 text-sm">Mon - Sat: 9:30 AM - 8:00 PM</p>
                            <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-2/3 min-h-[400px] glass-card p-2 overflow-hidden relative group">
                 <div className="w-full h-full rounded-xl overflow-hidden relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 invert-[.1] group-hover:invert-0">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.973950664986!2d75.95256565!3d11.18731055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64e4307567795%3A0x62916104bc8f0462!2sEdavannappara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709325890000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Miorah Location"
                    ></iframe>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
