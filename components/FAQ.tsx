
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Are all your sweets made in Desi Ghee?",
    a: "Yes! Purity is our cornerstone. We use 100% pure Desi Ghee for all our traditional sweets and snacks, ensuring the authentic taste of the hills."
  },
  {
    q: "What is the shelf life of Bal Mithai?",
    a: "Our Bal Mithai is made with high-quality khoya. It typically stays fresh for up to 15-20 days when stored in a cool, dry place. For longer freshness, we recommend airtight containers."
  },
  {
    q: "Do you offer shipping to other cities?",
    a: "Currently, we offer local delivery in Dehradun and bulk shipping for weddings pan-India. For individual outstation orders, please contact us on WhatsApp to discuss feasibility."
  },
  {
    q: "Can I customize the wedding bhaji boxes?",
    a: "Absolutely! We offer full customization for wedding and corporate gifting, including brand names, festive packaging designs, and curated sweet assortments."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 mb-4 border border-slate-200">
            <HelpCircle size={14} />
            <span className="text-xs font-black uppercase tracking-wider">Common Queries</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">FREQUENTLY ASKED</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left bg-slate-50 hover:bg-white transition-colors group"
              >
                <span className="text-lg font-bold text-slate-800 uppercase tracking-tight group-hover:text-[#A10508] transition-colors">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-[#A10508]' : ''}`} 
                  size={20} 
                />
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[500px] opacity-100 p-8 pt-0 bg-white' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-500 leading-relaxed font-medium italic border-l-2 border-[#A10508] pl-6 ml-1">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
