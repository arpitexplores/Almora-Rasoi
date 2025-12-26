
import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View, hash?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: View, hash?: string) => {
    e.preventDefault();
    onNavigate(view, hash);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="/" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-4 group">
            <img 
              src="https://almorarasoi.com/images/Almora_Rasoi_Logo.png" 
              alt="Almora Rasoi" 
              className="h-20 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-serif font-black tracking-tighter text-white group-hover:text-[#A10508] transition-colors">
                ALMORA <span className="text-[#A10508] group-hover:text-white transition-colors">RASOI</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-1">Authentic Tradition</span>
            </div>
          </a>
          
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#A10508] hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#A10508] hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#A10508] hover:text-white transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-12 border-y border-white/5">
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/menu" onClick={(e) => handleLinkClick(e, 'full-menu')} className="hover:text-[#A10508] transition-colors">Desi Ghee Sweets</a></li>
              <li><a href="/menu" onClick={(e) => handleLinkClick(e, 'full-menu')} className="hover:text-[#A10508] transition-colors">Bengali Specialties</a></li>
              <li><a href="/menu" onClick={(e) => handleLinkClick(e, 'full-menu')} className="hover:text-[#A10508] transition-colors">Namkeen & Snacks</a></li>
              <li><a href="/menu" onClick={(e) => handleLinkClick(e, 'full-menu')} className="hover:text-[#A10508] transition-colors">Specialities</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Occasions</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/#festive" onClick={(e) => handleLinkClick(e, 'home', 'festive')} className="hover:text-[#A10508] transition-colors">Wedding Bhaji</a></li>
              <li><a href="/gifting" onClick={(e) => handleLinkClick(e, 'gifting')} className="hover:text-[#A10508] transition-colors">Corporate Gifting</a></li>
              <li><a href="/#festive" onClick={(e) => handleLinkClick(e, 'home', 'festive')} className="hover:text-[#A10508] transition-colors">Diwali Specials</a></li>
              <li><a href="/gifting" onClick={(e) => handleLinkClick(e, 'gifting')} className="hover:text-[#A10508] transition-colors">Custom Hampers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Shop</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/#home" onClick={(e) => handleLinkClick(e, 'home', 'home')} className="hover:text-[#A10508] transition-colors">About Us</a></li>
              <li><a href="/gifting" onClick={(e) => handleLinkClick(e, 'gifting')} className="hover:text-[#A10508] transition-colors">Bulk Order</a></li>
              <li><a href="/#contact" onClick={(e) => handleLinkClick(e, 'home', 'contact')} className="hover:text-[#A10508] transition-colors">Store Locator</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-[#A10508] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-[#A10508] transition-colors">Terms of Service</a></li>
              <li><a href="/refund" onClick={(e) => handleLinkClick(e, 'refund')} className="hover:text-[#A10508] transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] font-medium opacity-60">
          <p>© {new Date().getFullYear()} Almora Rasoi Sweet Shop. All Rights Reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Crafted with <Heart size={12} className="text-[#A10508]" fill="currentColor" /> in Dehradun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
