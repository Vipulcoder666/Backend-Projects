import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-deep-orange text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-bold">Incredible India Tours</span>
            </div>
            <p className="text-primary-foreground/80">
              Your trusted partner in exploring the incredible beauty and rich culture of India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:scale-110 transition-transform cursor-pointer" />
              <Instagram className="h-5 w-5 hover:scale-110 transition-transform cursor-pointer" />
              <Twitter className="h-5 w-5 hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-gold transition-colors">Home</Link>
              <Link to="/tours" className="block hover:text-gold transition-colors">Tour Packages</Link>
              <Link to="/about" className="block hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="block hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Popular Tours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Tours</h3>
            <div className="space-y-2">
              <Link to="/tours" className="block hover:text-gold transition-colors">Kerala Backwaters</Link>
              <Link to="/tours" className="block hover:text-gold transition-colors">Rajasthan Heritage</Link>
              <Link to="/tours" className="block hover:text-gold transition-colors">Leh-Ladakh Adventure</Link>
              <Link to="/tours" className="block hover:text-gold transition-colors">Golden Triangle</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@incredibleindiatours.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Travel Street, New Delhi, India 110001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Incredible India Tours. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm mt-4 md:mt-0">
            <span className="text-primary-foreground/60">Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span className="text-primary-foreground/60">in India</span>
            <span className="text-gold ml-2">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;