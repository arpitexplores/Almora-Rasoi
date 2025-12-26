
import React, { useState, useEffect } from 'react';
import { MenuCategory } from '../types';
import { Utensils, Info } from 'lucide-react';

interface MenuSectionProps {
  data: MenuCategory[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (data.length > 0 && !activeTab) {
      setActiveTab(data[0].id);
    }
  }, [data, activeTab]);

  if (data.length === 0) return null;

  const activeCategory = data.find(cat => cat.id === activeTab);

  return (
    <section id="menu-section" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 id="menu-title" className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">OUR MENU</h2>
            <p className="text-slate-500 max-w-xl text-lg font-medium italic">
              Explore Dehradun's finest selection of traditional recipes, made with 100% pure desi ghee.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-2 md:justify-end" aria-label="Menu categories">
            {data.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                aria-pressed={activeTab === category.id}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === category.id 
                  ? 'bg-[#A10508] text-white shadow-xl shadow-red-900/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 h-[500px] sticky top-32">
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden group shadow-2xl">
              <img 
                key={activeCategory?.image}
                src={activeCategory?.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={`Freshly prepared items from our ${activeCategory?.title} category`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4">
                  <Utensils size={24} />
                </div>
                <h3 className="text-4xl font-serif font-bold text-white mb-2">{activeCategory?.title}</h3>
                <p className="text-slate-300 text-lg italic">Handcrafted with pure love & tradition.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {activeCategory?.items.map((item, idx) => (
              <article 
                key={idx} 
                className="group p-6 bg-slate-50 hover:bg-white rounded-[2rem] border border-transparent hover:border-red-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 hover:scale-[1.01] transform"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#A10508] transition-colors uppercase tracking-tight">{item.name}</h4>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-slate-900">{item.price}</span>
                    {item.unit && <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.unit}</span>}
                  </div>
                </div>
                {item.description ? (
                  <p className="text-slate-500 text-sm italic mt-2 flex items-center gap-2">
                    <Info size={14} className="text-[#A10508] opacity-50" aria-hidden="true" />
                    {item.description}
                  </p>
                ) : (
                  <p className="text-slate-400 text-sm mt-2">Prepared daily with authentic Satvik ingredients.</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
