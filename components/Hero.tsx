
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <header id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#3d0000]/40 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1920" 
          alt="Almora Sweet Shop Exterior in Dehradun"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0000] via-[#1a0000]/70 to-transparent z-20"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A10508]/20 border border-[#A10508]/30 text-red-200 backdrop-blur-xl">
              <Star size={14} fill="currentColor" className="text-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Dehradun's Sweet Legacy</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-xl">
              <span className="text-amber-400 font-black">4.8/5</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="text-amber-400" />)}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">1,200+ Reviews</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 uppercase tracking-tighter">
            ALMORA <br/>
            <span className="text-[#A10508]">RASOI.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-medium italic">
            "Experience the purity of 100% Desi Ghee traditions. From Bal Mithai to handcrafted snacks, we serve the heart of Uttarakhand."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#/menu"
              aria-label="Explore the sweet and snack menu"
              className="bg-[#A10508] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#8a0407] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-900/40"
            >
              Explore Menu
              <ArrowRight size={22} />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
               <CheckCircle size={20} className="text-[#A10508]" />
               <span className="text-white font-bold text-sm uppercase tracking-widest">Purity Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof badge */}
      <div className="absolute bottom-20 right-10 hidden lg:block z-30">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] max-w-xs text-center">
          <img 
            src="https://almorarasoi.com/images/Almora_Rasoi_Logo.png" 
            alt="Almora Rasoi mascot character" 
            className="w-32 h-auto mx-auto mb-4 drop-shadow-2xl"
            loading="eager"
          />
          <div className="flex justify-center items-center gap-1 text-amber-500 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-white font-bold text-lg leading-snug">"The best Bal Mithai in Dehradun, period."</p>
          <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-black">— Local Food Guide</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
