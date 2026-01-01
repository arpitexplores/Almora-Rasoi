
import React from 'react';
import { Heart, Instagram, Facebook, MapPin } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View, hash?: string) => void;
}

// Custom TripAdvisor Icon since it's not in Lucide
const TripAdvisorIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12h.01" />
    <path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="12" r="2" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const SOCIALS = [
    {
      icon: <TripAdvisorIcon size={20} />,
      href: "https://www.tripadvisor.com/Restaurant_Review-g297687-d26305732-Reviews-Almora_Rasoi_Dehradun_Sweet_Shop-Dehradun_Dehradun_District_Uttarakhand.html",
      label: "TripAdvisor"
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/almorarasoi",
      label: "Instagram"
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/almorarasoi/",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#/" className="flex items-center gap-4 group">
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
          
          <div className="flex items-center gap-4">
            {SOCIALS.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#A10508] hover:text-white transition-all duration-300 border border-white/10 hover:border-[#A10508]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 py-12 border-y border-white/5">
          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#/menu" className="hover:text-[#A10508] transition-colors">Desi Ghee Sweets</a></li>
              <li><a href="#/menu" className="hover:text-[#A10508] transition-colors">Bengali Specialties</a></li>
              <li><a href="#/menu" className="hover:text-[#A10508] transition-colors">Namkeen & Snacks</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Occasions</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-[#A10508] transition-colors">Wedding Bhaji</a></li>
              <li><a href="#/gifting" className="hover:text-[#A10508] transition-colors">Corporate Gifting</a></li>
              <li><a href="#/gifting" className="hover:text-[#A10508] transition-colors">Custom Hampers</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Our Stores</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-sm">
                <p className="text-[#A10508] font-bold uppercase tracking-wide mb-1 flex items-center gap-1"><MapPin size={12}/> Dehradun</p>
                <p className="text-slate-400 leading-relaxed mb-2">Aranya Vihar, Kandoli, Saundhon wali, Raipur, Uttarakhand 248013</p>
                <a href="tel:+919654325380" className="hover:text-white transition-colors">+91 96543 25380</a>
              </div>
              <div className="text-sm">
                <p className="text-[#A10508] font-bold uppercase tracking-wide mb-1 flex items-center gap-1"><MapPin size={12}/> Almora</p>
                <p className="text-slate-400 leading-relaxed mb-2">Hotel Shelesh Complex, Opp. GGIC School, Paltan Bazar, Dharanaula, 263601</p>
                <a href="tel:+919654325380" className="hover:text-white transition-colors">+91 96543 25380</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] font-medium opacity-60">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/privacy" className="hover:text-white">Privacy</a>
            <span className="hidden md:inline">•</span>
            <a href="#/terms" className="hover:text-white">Terms</a>
            <span className="hidden md:inline">•</span>
            <a href="#/refund" className="hover:text-white">Refunds</a>
          </div>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} Almora Rasoi • Crafted with <Heart size={12} className="text-[#A10508]" fill="currentColor" /> in Dehradun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
