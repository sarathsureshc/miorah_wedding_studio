import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-miorah-dark-navy text-miorah-ivory pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Info */}
            <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                     <img src="/logo.png" alt="Miorah Logo" className="h-12 w-auto" />
                     <h3 className="text-2xl font-serif text-miorah-gold">Miorah</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                    Luxury bridal fashion and designer wear studio in Edavannappara. Creating timeless looks for your special moments.
                </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
                <h4 className="text-miorah-gold font-serif text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#collections" className="hover:text-miorah-gold transition-colors">Bridal Collection</a></li>
                    <li><a href="#collections" className="hover:text-miorah-gold transition-colors">Rental Outfits</a></li>
                    <li><a href="#about" className="hover:text-miorah-gold transition-colors">About Us</a></li>
                    <li><a href="#contact" className="hover:text-miorah-gold transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right space-y-4">
                 <h4 className="text-miorah-gold font-serif text-lg mb-6">Visit Us</h4>
                 <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
                    <p className="flex items-center gap-2">
                         Edavannappara, Kerala <MapPin size={16} className="text-miorah-gold" />
                    </p>
                     <p className="flex items-center gap-2">
                        +91 123 456 7890 <Phone size={16} className="text-miorah-gold" />
                    </p>
                 </div>
                 <div className="flex justify-center md:justify-end gap-4 mt-4">
                    <a href="#" className="p-2 border border-white/10 rounded-full hover:border-miorah-gold hover:text-miorah-gold transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 border border-white/10 rounded-full hover:border-miorah-gold hover:text-miorah-gold transition-colors">
                        <Facebook size={20} />
                    </a>
                 </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Miorah Designer Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
