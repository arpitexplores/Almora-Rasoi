
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { View } from '../types';

const FEATURED = [
  {
    title: 'Bal Mithai',
    subtitle: 'Signature Specialty',
    image: 'https://images.unsplash.com/photo-1605197509751-62aa1dd42ca1?auto=format&fit=crop&q=80&w=600',
    desc: 'The legendary chocolate-like khoya fudge of Uttarakhand, coated in sugar pearls.'
  },
  {
    title: 'Desi Ghee Jalebi',
    subtitle: 'Freshly Prepared',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=600',
    desc: 'Crispy swirls of happiness, fried in pure desi ghee and soaked in saffron syrup.'
  },
  {
    title: 'Pure Khoya Barfi',
    subtitle: 'Daily Fresh',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    desc: 'Simple, pure, and rich. Made from reduced milk and the finest ingredients.'
  }
];

interface FeaturedSweetsProps {
  onNavigate?: (view: View) => void;
}

const FeaturedSweets: React.FC<FeaturedSweetsProps> = ({ onNavigate }) => {
  return (
    <section id="featured" aria-labelledby="featured-title" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full text-[15rem] font-black text-slate-200/40 select-none pointer-events-none -translate-y-1/2 leading-none uppercase">
        Heritage
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#A10508] mb-4 border border-red-100">
            <Sparkles size={14} />
            <span className="text-xs font-black uppercase tracking-wider">Most Loved</span>
          </div>
          <h2 id="featured-title" className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">OUR SIGNATURE CREATIONS</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium italic">
            Authentic recipes perfected over decades using traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED.map((item, idx) => (
            <article key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 hover:shadow-red-200/50 transition-all duration-700 hover:-translate-y-4 border border-slate-100">
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={`${item.title} - ${item.subtitle}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-amber-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2">{item.subtitle}</p>
                   <h3 className="text-white text-3xl font-black tracking-tighter uppercase">{item.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-500 leading-relaxed mb-8 italic font-medium">"{item.desc}"</p>
                <div className="flex items-center justify-between">
                  <span className="w-12 h-1 bg-[#A10508] rounded-full group-hover:w-20 transition-all duration-500" aria-hidden="true"></span>
                  <a 
                    href="/menu"
                    onClick={(e) => { e.preventDefault(); onNavigate?.('full-menu'); }}
                    aria-label={`Find ${item.title} in our menu`} 
                    className="text-[#A10508] font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View in Menu
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSweets;
