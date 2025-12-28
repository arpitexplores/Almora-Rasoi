
import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Heart, Users, Home, TrendingUp, MapPin } from 'lucide-react';

interface StoryPageProps {
  onBack: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const TIMELINE = [
    {
      year: '2008 - 2018',
      title: 'Inception & Determination',
      icon: <Home size={24} />,
      content: "Almora Rasoi began as a humble dream in Mrs. Anuradha's kitchen. Starting as a vegetarian tiffin business, she prepared 60 tiffins daily with unwavering dedication. It wasn't just about food; it was about supporting her family and funding her children's education through pure hard work.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: '2019',
      title: 'A Brief Pause',
      icon: <Clock size={24} />,
      content: "Life often brings unexpected turns. Due to personal reasons, Mrs. Anuradha had to temporarily halt her beloved tiffin business. It was a quiet year, but the fire to serve authentic food never truly extinguished.",
      image: null
    },
    {
      year: 'August 5th, 2020',
      title: 'Resurgence Amidst Adversity',
      icon: <Heart size={24} />,
      content: "The global pandemic brought challenges, with her children returning home jobless. Turning adversity into opportunity, Mrs. Anuradha revived Almora Rasoi. This time, they innovated with 'Desi Ghee Sweets and Namkeen' delivered from home. The kitchen was bustling again, fueled by family unity.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: 'November 9th, 2020',
      title: 'The First Shop',
      icon: <MapPin size={24} />,
      content: "The flavors of the hills couldn't be contained. Overwhelming love and demand from satisfied customers led to a major milestone: the opening of the first physical Almora Rasoi shop. It was a testament to the quality and love poured into every sweet.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: '2023 - Present',
      title: 'Carrying the Legacy',
      icon: <Users size={24} />,
      content: "Today, the legacy is carried forward by Mrs. Anuradha's children. With a second branch now open in Dehradun, Almora Rasoi is recognized not just for its unparalleled Desi Ghee sweets, but for its inspiring story of resilience. We continue to serve with the same values we started with.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: 'The Future',
      title: 'Dreaming Bigger',
      icon: <TrendingUp size={24} />,
      content: "Our journey is far from over. Our ultimate dream is to take the authentic taste of Almora to cities across India, sharing the essence of Mrs. Anuradha's homemade delights with a wider audience.",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="/"
          onClick={(e) => { e.preventDefault(); onBack(); }}
          className="group flex items-center gap-2 text-slate-500 hover:text-[#A10508] font-bold transition-colors mb-12 inline-flex"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A10508]/10 text-red-600 border border-[#A10508]/20 font-black text-xs uppercase tracking-[0.3em] mb-6">
            <Heart size={14} />
            Established 2008
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            Our <span className="text-[#A10508]">Journey</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium italic">
            "From a mother's resolve to support her family, to a beloved brand in Dehradun. This is the story of Almora Rasoi."
          </p>
        </header>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -ml-px md:mx-auto"></div>

          <div className="space-y-20">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-[#A10508] rounded-full z-10 flex items-center justify-center text-[#A10508] shadow-xl">
                  {item.icon}
                </div>

                {/* Content Side */}
                <div className="ml-24 md:ml-0 md:w-1/2 md:px-12 pt-4">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <span className="text-[#A10508] font-black text-2xl mb-2">{item.year}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 italic">{item.content}</p>
                    
                    {item.image && (
                      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg mt-2 group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer Side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center p-12 bg-white rounded-[3rem] shadow-xl shadow-slate-200 border border-slate-100">
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Be Part of Our Story</h3>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Every order you place supports the dream that Mrs. Anuradha started in 2008. Taste the tradition today.
          </p>
          <a 
            href="/menu"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 bg-[#A10508] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#8a0407] transition-all shadow-lg"
          >
            Order Now
            <ArrowLeft size={20} className="rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
