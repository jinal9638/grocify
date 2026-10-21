import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA Banner */}
        <div className="bg-gradient-to-r from-brand-600 to-amber-600 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Decorative Circle */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
                Join Our Green Family
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Get 15% Off Your First Harvest Order!
              </h3>
              <p className="text-amber-100 text-sm mt-2 max-w-md">
                Subscribe to our weekly newsletter for organic farming tips, seasonal discounts, and fresh arrivals.
              </p>
            </div>

            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                id="newsletter-email"
                name="email"
                autoComplete="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-amber-100/70 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-7 py-3.5 rounded-2xl bg-white text-brand-600 font-bold text-sm hover:bg-amber-50 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {subscribed && (
            <div className="mt-4 p-3 bg-white/20 backdrop-blur rounded-xl text-white text-xs font-semibold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-amber-200" />
              <span>Thank you for subscribing! Check your inbox for your 15% off coupon.</span>
            </div>
          )}
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Grocify<span className="text-brand-500">.</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for 100% certified organic fruits, vegetables, and daily kitchen essentials. From local soil to your table in under 2 hours.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Process', 'Our Organic Farm', 'Special Offers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-brand-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              {['Organic Fruits', 'Fresh Vegetables', 'Farm Dairy Products', 'Cold-Pressed Juices', 'Fresh Bakery'].map((item) => (
                <li key={item}>
                  <a href="#products" className="hover:text-brand-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>124 Organic Avenue, Harvest Hill, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>+1 (800) 476-2439</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>support@grocify.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Grocify Website. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using React.js & TailwindCSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}