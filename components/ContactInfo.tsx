
import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#A10508]/20 text-red-400 border border-[#A10508]/30 font-bold text-xs uppercase tracking-widest mb-6">
              Find Us
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">WE'RE WAITING <br/><span className="text-[#A10508] italic">FOR YOU.</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-[#A10508] group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Shop No 1, Sahastradhara Rd, <br/>
                    Danda Lakhond, Dehradun, <br/>
                    Uttarakhand 248001
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/Almora+Rasoi+Dehradun/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[#A10508] font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Open in Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-[#A10508] group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call for Orders</h4>
                  <p className="text-slate-400 text-lg font-medium italic">+91 96543 25380</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-[#A10508] group-hover:text-white transition-all duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Opening Hours</h4>
                  <p className="text-slate-400 text-lg">Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-[#A10508]/10 rounded-[4rem] blur-2xl"></div>
             <div className="relative bg-white/5 border border-white/10 rounded-[3.5rem] p-6 backdrop-blur-md">
                <div className="aspect-square w-full rounded-[2.5rem] overflow-hidden bg-slate-800 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                  <iframe 
                    title="Almora Rasoi Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.12345!2d78.0789!3d30.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x46473fd361730097!2sAlmora%20Rasoi!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
