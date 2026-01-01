
import React, { useEffect } from 'react';
import { ArrowLeft, Gift, ShieldCheck, Truck, Users, MessageCircle, Star, ArrowRight, Quote } from 'lucide-react';

interface GiftingPageProps {
  onBack: () => void;
}

const GIFTING_TESTIMONIALS = [
  {
    text: "The customized boxes for my sister's wedding were a huge hit! Everyone loved the authenticity of the Bal Mithai, and the personalized branding made it so special.",
    author: "Priya S.",
    type: "Wedding Order"
  },
  {
    text: "We ordered 200 hampers for our corporate Diwali event. The packaging was premium, delivery was seamless, and the sweets were fresh as promised.",
    author: "Amit Khurana",
    type: "Corporate Client"
  },
  {
    text: "Almora Rasoi handled our bulk order for a family function with such professionalism. The taste took us back to the hills. Highly recommended!",
    author: "Meera Joshi",
    type: "Bulk Order"
  }
];

const GiftingPage: React.FC<GiftingPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BASE_IMAGE_URL = 'https://almorarasoi.com/images';

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919654325380?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-bold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 text-red-400 border border-red-600/20 font-black text-xs uppercase tracking-[0.3em] mb-8">
            <Gift size={16} />
            Premium Gifting & Bulk Orders
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            CELEBRATE <span className="text-red-600">BIG</span> <br/>
            <span className="italic font-serif lowercase text-white">with pure tradition.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            From customized wedding boxes to grand event platters, Almora Rasoi brings the heritage of pure desi ghee sweets to your most cherished moments.
          </p>
          <button 
            onClick={() => openWhatsApp("Hi Almora Rasoi, I'm interested in bulk gifting/wedding orders.")}
            className="bg-red-600 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* Wedding Collection Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                THE <span className="text-red-600">WEDDING</span> <br/> COLLECTION.
              </h2>
              <p className="text-lg text-slate-500 italic leading-relaxed">
                "Make your wedding invitation unforgettable with our personalized bhaji boxes. Featuring premium branding and the finest assortment of Dehradun's favorite sweets."
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Personalized Branding", desc: "Custom prints like 'Gaurav Weds Astha' on premium quality boxes." },
                  { title: "Signature Sweets", desc: "A curated mix of our best-selling Desi Ghee items." },
                  { title: "Luxury Packaging", desc: "Elegant designs in festive pink and traditional red finishes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-100 transition-colors">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    src={`${BASE_IMAGE_URL}/wedding-box-pink.jpg`} 
                    alt="Personalized Wedding Box" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600">Custom Brand</div>
                </div>
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    src={`${BASE_IMAGE_URL}/wedding-box-inside.jpg`} 
                    alt="Wedding Box Content" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 h-full min-h-[500px]">
                  <img 
                    src={`${BASE_IMAGE_URL}/wedding-box-red.jpg`} 
                    alt="Red Lid Festive Box" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-black text-xl uppercase tracking-tighter">Signature Red Lid Series</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate & Bulk Trays Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">BULK & EVENT TRAYS</h2>
            <p className="text-slate-500 text-lg italic max-w-2xl mx-auto">High-capacity platters designed for events, corporate gifting, and large family celebrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="group relative rounded-[3rem] overflow-hidden bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="h-[450px] rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                  src={`${BASE_IMAGE_URL}/bulk-tray-orange.jpg`} 
                  alt="Large Event Platter" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="px-4">
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">Heritage Party Platter</h3>
                <p className="text-slate-500 mb-6 italic text-lg leading-relaxed">
                  Our massive multi-compartment tray featuring fresh samosas, kachoris, and a curated selection of sweets.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-5 py-2 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest">Ideal for 20+ Guests</span>
                  <span className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Best Seller</span>
                </div>
              </div>
            </div>

            <div className="group relative rounded-[3rem] overflow-hidden bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="h-[450px] rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                  src={`${BASE_IMAGE_URL}/bulk-tray-gold.jpg`} 
                  alt="Premium Gold Tray" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="px-4">
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">Executive Golden Tray</h3>
                <p className="text-slate-500 mb-6 italic text-lg leading-relaxed">
                  A premium golden-finish tray curated for VIP gifting, containing our finest dry fruit sweets and premium snacks.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-5 py-2 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest">VIP Gifting</span>
                  <span className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 font-bold text-xs uppercase tracking-widest mb-4 border border-amber-100">
              <Star size={14} fill="currentColor" />
              Client Love
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Stories of <span className="text-red-600">Celebration</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg font-medium italic">
              Trusted by families and businesses across Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GIFTING_TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative group hover:shadow-lg transition-shadow">
                 <Quote size={48} className="text-red-600/10 absolute top-8 right-8" />
                 <div className="flex gap-1 text-amber-500 mb-6">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 italic font-medium">"{testimonial.text}"</blockquote>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black uppercase tracking-widest shadow-lg shadow-red-600/20">
                      {testimonial.author[0]}
                   </div>
                   <div>
                     <p className="font-black text-slate-900 uppercase tracking-tight">{testimonial.author}</p>
                     <p className="text-xs font-bold text-red-600 uppercase tracking-widest">{testimonial.type}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Almora Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "UNMATCHED PURITY", desc: "100% Pure Desi Ghee and quality ingredients." },
              { icon: <Truck size={32} />, title: "BULK LOGISTICS", desc: "Temperature controlled delivery across Dehradun." },
              { icon: <Users size={32} />, title: "EXPERTS", desc: "Custom curation advisors for your special events." },
              { icon: <MessageCircle size={32} />, title: "FAST QUOTES", desc: "Instant pricing for wedding and party orders." }
            ].map((item, idx) => (
              <div key={idx} className="text-center group p-8 rounded-3xl bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-100">
                <div className="w-20 h-20 bg-red-50 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">LET'S PLAN YOUR <span className="text-red-600">EVENT.</span></h2>
          <p className="text-xl text-slate-400 mb-12 italic leading-relaxed font-medium">
            Contact us today for a complimentary tasting session and customized box sampling at our Sahastradhara Road shop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => openWhatsApp("I want to enquire about wedding/bulk orders.")}
              className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Consult with our Team
              <ArrowRight size={20} />
            </button>
            <a 
              href="/"
              onClick={(e) => { e.preventDefault(); onBack(); }}
              className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              Back to Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftingPage;
