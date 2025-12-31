
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Instagram, Facebook, Map } from 'lucide-react';

// Custom TripAdvisor Icon
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

const LOCATIONS = [
  {
    city: "Dehradun",
    badge: "Main Branch",
    address: "Aranya Vihar, Kandoli, Saundhon wali, Raipur, Dehradun, Uttarakhand 248013",
    phone: "+91 96543 25380",
    mapQuery: "Almora+Rasoi+Aranya+Vihar+Dehradun",
    hours: "Mon - Sun: 8:00 AM - 10:00 PM"
  },
  {
    city: "Almora",
    badge: "The Origin",
    address: "HOTEL SHELESH COMPLEX, opposite GGIC SCHOOL TAXI STAND, Paltan Bazar, Dharanaula, Almora, Uttarakhand 263601",
    phone: "+91 96543 25380",
    mapQuery: "Almora+Rasoi+Hotel+Shelesh+Complex+Almora",
    hours: "Mon - Sun: 8:00 AM - 9:30 PM"
  }
];

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#A10508]/20 text-red-400 border border-[#A10508]/30 font-bold text-xs uppercase tracking-widest mb-6">
            Visit Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">OUR <span className="text-[#A10508]">LOCATIONS</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
            Serving authentic happiness from the hills of Almora to the valley of Dehradun.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#A10508]/50 transition-colors duration-300 flex flex-col">
              {/* Map Section */}
              <div className="h-64 w-full bg-slate-800 relative group">
                <iframe 
                  title={`${loc.city} Location`}
                  src={`https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY_PLACEHOLDER&q=${loc.mapQuery}&zoom=15`}
                  // Note: Since we don't have a real API key in this environment, we use the simple embed format below for display
                  srcDoc={`
                    <style>body{margin:0;overflow:hidden;background:#1e293b;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-family:sans-serif;}</style>
                    <a href="https://www.google.com/maps/search/${loc.mapQuery}" target="_blank" style="text-decoration:none;color:inherit;text-align:center;">
                      <div style="font-size:24px;margin-bottom:8px;">🗺️</div>
                      <div style="font-weight:bold;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Click to view ${loc.city} Map</div>
                    </a>
                  `}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                ></iframe>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                  {loc.badge}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Map size={24} className="text-[#A10508]" />
                  <h3 className="text-3xl font-black uppercase tracking-tight">{loc.city}</h3>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[20px] text-slate-500"><MapPin size={20} /></div>
                    <p className="text-slate-300 leading-relaxed text-sm font-medium">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="min-w-[20px] text-slate-500"><Phone size={20} /></div>
                    <p className="text-slate-300 text-sm font-bold tracking-wider">{loc.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="min-w-[20px] text-slate-500"><Clock size={20} /></div>
                    <p className="text-slate-400 text-sm">{loc.hours}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a 
                    href={`https://www.google.com/maps/search/${loc.mapQuery}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-white text-slate-950 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#A10508] hover:text-white transition-all flex items-center justify-center gap-2 group"
                  >
                    Get Directions
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Connect Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto">
             <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">Stay Updated</h3>
             <p className="text-slate-400 text-lg mb-8 italic">
               Join our community online for exclusive offers, new menu announcements, and a daily dose of sweetness.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <a 
                 href="https://www.instagram.com/almorarasoi" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-900/40"
               >
                 <Instagram size={20} />
                 Follow on Instagram
               </a>
               <a 
                 href="https://www.facebook.com/almorarasoi/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1877F2] text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-900/40"
               >
                 <Facebook size={20} />
                 Facebook
               </a>
               <a 
                 href="https://www.tripadvisor.com/Restaurant_Review-g297687-d26305732-Reviews-Almora_Rasoi_Dehradun_Sweet_Shop-Dehradun_Dehradun_District_Uttarakhand.html" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#00AA6C] text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-green-900/40"
               >
                 <TripAdvisorIcon size={20} />
                 Rate us on TripAdvisor
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
