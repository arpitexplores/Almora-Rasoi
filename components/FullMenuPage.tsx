
import React, { useEffect } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { MenuCategory } from '../types';

interface FullMenuPageProps {
  data: MenuCategory[];
  loading?: boolean;
  onBack: () => void;
}

const FullMenuPage: React.FC<FullMenuPageProps> = ({ data, loading, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <a 
              href="#/"
              onClick={(e) => { e.preventDefault(); onBack(); }}
              className="group flex items-center gap-2 text-slate-500 hover:text-[#A10508] font-bold transition-colors mb-4 inline-flex"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter">
              Our <span className="text-[#A10508] italic">Signature</span> Menu
            </h1>
            <p className="text-slate-500 text-xl max-w-2xl mt-4 font-medium italic">
              Explore our full range of authentic sweets and snacks, prepared fresh daily for you.
            </p>
          </div>
          <button 
            onClick={() => window.open(`https://wa.me/919654325380`, '_blank')}
            className="bg-[#A10508] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8a0407] transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-900/20 h-fit"
          >
            <ShoppingBag size={20} />
            Order Online
          </button>
        </div>

        <div className="space-y-24">
          {data.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              <div className="relative h-64 md:h-80 w-full rounded-[2.5rem] overflow-hidden mb-10 shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center px-10 md:px-16">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-tight">
                      {category.title}
                    </h2>
                    <div className="w-20 h-1 bg-[#A10508] mt-4"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-red-100 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#A10508] transition-colors uppercase tracking-tight">
                        {item.name}
                      </h4>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-2xl font-black text-slate-900">{item.price}</span>
                        {item.unit && <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{item.unit}</span>}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description || "Handcrafted with tradition and pure ingredients."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-950 rounded-[3rem] text-center">
          <h3 className="text-3xl font-black text-white mb-4 uppercase">Planning a Grand Event?</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us for wholesale pricing on bulk orders for weddings and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open(`https://wa.me/919654325380?text=I'm interested in a bulk order quote.`, '_blank')}
              className="bg-[#A10508] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#8a0407] transition-all"
            >
              Request Bulk Quote
            </button>
            <a 
              href="#/"
              onClick={(e) => { e.preventDefault(); onBack(); }}
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenuPage;
