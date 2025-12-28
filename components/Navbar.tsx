
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View, hash?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Parse the href to determine view and hash
    
    let view: View = 'home';
    let hash: string | undefined = undefined;

    if (href.startsWith('/menu')) {
      view = 'full-menu';
    } else if (href.startsWith('/gifting')) {
      view = 'gifting';
    } else if (href.startsWith('/story')) {
      view = 'story';
    } else if (href.includes('#')) {
      view = 'home';
      hash = href.split('#')[1];
    } else {
      view = 'home';
    }

    onNavigate(view, hash);
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919654325380', '_blank');
  };

  const isHome = currentView === 'home';
  const navBgClass = !isHome || scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4';
  const navTextClass = !isHome || scrolled ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex-shrink-0 flex items-center gap-3"
            aria-label="Almora Rasoi Home"
          >
            <img 
              src="https://almorarasoi.com/images/Almora_Rasoi_Logo.png" 
              alt="Almora Rasoi Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            <div className="flex flex-col items-start leading-none">
              <span className={`text-xl md:text-2xl font-serif font-black tracking-tight ${navTextClass}`}>
                ALMORA <span className="text-[#A10508]">RASOI</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-400">Authentic Tradition</span>
            </div>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#A10508] cursor-pointer ${navTextClass}`}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={openWhatsApp}
                className="bg-[#A10508] text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#8a0407] transition-all flex items-center gap-2 shadow-lg shadow-red-900/20"
              >
                <ShoppingBag size={16} />
                Order
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${navTextClass} p-2`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-white border-b border-slate-100' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-3 text-sm font-black uppercase tracking-widest text-slate-700 hover:text-[#A10508] hover:bg-slate-50 rounded-xl"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#A10508] text-white px-5 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Order Online
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
