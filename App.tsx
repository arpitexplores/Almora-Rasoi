import React, { Component, useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSweets from './components/FeaturedSweets';
import MenuSection from './components/MenuSection';
import ContactInfo from './components/ContactInfo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { View, MenuCategory } from './types';
import { GOOGLE_SHEET_ID } from './constants';
import { ArrowRight, Loader2, Gift, CheckCircle2, Star, Quote, Map, Heart } from 'lucide-react';
import { fetchMenuFromSheet } from './utils/menuFetcher';

// Lazy load heavy page components for better performance (Code Splitting)
const FullMenuPage = React.lazy(() => import('./components/FullMenuPage'));
const GiftingPage = React.lazy(() => import('./components/GiftingPage'));
const LegalPage = React.lazy(() => import('./components/LegalPage'));
const StoryPage = React.lazy(() => import('./components/StoryPage'));

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Simple Error Boundary to catch lazy loading errors
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error instanceof Error ? this.state.error.message : 'Unknown error occurred';
      return (
        <div className="min-h-screen flex items-center justify-center flex-col text-center p-4">
           <h2 className="text-2xl font-bold mb-4">Something went wrong loading the page.</h2>
           <p className="text-slate-500 mb-4 text-sm">{errorMessage}</p>
           <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-6 py-2 rounded-full">
             Reload Page
           </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [view, setView] = useState<View>('home');
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Router & SEO Logic ---

  // Helper to determine View from URL path
  const getViewFromPath = (path: string): View => {
    if (path.startsWith('/menu')) return 'full-menu';
    if (path.startsWith('/gifting')) return 'gifting';
    if (path.startsWith('/story')) return 'story';
    if (path.startsWith('/privacy')) return 'privacy';
    if (path.startsWith('/terms')) return 'terms';
    if (path.startsWith('/refund')) return 'refund';
    return 'home';
  };

  // Helper to determine URL path from View
  const getPathFromView = (v: View): string => {
    switch (v) {
      case 'full-menu': return '/menu';
      case 'gifting': return '/gifting';
      case 'story': return '/story';
      case 'privacy': return '/privacy';
      case 'terms': return '/terms';
      case 'refund': return '/refund';
      case 'home': default: return '/';
    }
  };

  // 1. Initialize View from URL on Mount & Handle Browser Back/Forward
  useEffect(() => {
    const handleUrlChange = () => {
      const currentView = getViewFromPath(window.location.pathname);
      setView(currentView);
      
      // Handle hash scrolling if present
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (currentView === 'home' && window.location.pathname === '/') {
         window.scrollTo(0, 0);
      }
    };

    // Initial check
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // 2. Update SEO Metadata (Title & Description) when View changes
  useEffect(() => {
    let title = 'Almora Rasoi | Best Desi Ghee Sweets & Bal Mithai in Dehradun';
    let desc = 'Authentic Indian sweets made with 100% pure Desi Ghee. Experience the heritage of Almora in Dehradun.';

    switch (view) {
      case 'full-menu':
        title = 'Our Menu | Almora Rasoi - Authentic Sweets Prices';
        desc = 'View our complete menu of Bal Mithai, Jalebi, Singodi, and Namkeen. Freshly prepared daily with pure Desi Ghee.';
        break;
      case 'gifting':
        title = 'Wedding Gifting & Bulk Orders | Almora Rasoi';
        desc = 'Premium wedding bhaji boxes, customized corporate hampers, and bulk sweet orders in Dehradun.';
        break;
      case 'story':
        title = 'Our Story | Almora Rasoi - From Home Kitchen to Brand';
        desc = 'Read the inspiring journey of Mrs. Anuradha, who started Almora Rasoi from her home kitchen in 2008 to support her family.';
        break;
      case 'privacy':
        title = 'Privacy Policy | Almora Rasoi';
        break;
      case 'terms':
        title = 'Terms of Service | Almora Rasoi';
        break;
      case 'refund':
        title = 'Refund Policy | Almora Rasoi';
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, [view]);

  // 3. Navigation Handler (Updates State & Pushes URL)
  const handleNavigate = (newView: View, hash?: string) => {
    const basePath = getPathFromView(newView);
    const fullPath = hash ? `${basePath}#${hash}` : basePath;
    
    // Only push state if URL is different
    if (window.location.pathname + window.location.hash !== fullPath) {
      window.history.pushState({}, '', fullPath);
    }
    
    setView(newView);
    
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  // --- Data Loading ---

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchMenuFromSheet(GOOGLE_SHEET_ID);
        setMenuData(data);
      } catch (err) {
        console.error("Failed to load menu data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const openWhatsApp = (message?: string) => {
    const encodedMsg = message ? encodeURIComponent(message) : '';
    window.open(`https://wa.me/919654325380${encodedMsg ? `?text=${encodedMsg}` : ''}`, '_blank');
  };

  const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="animate-spin text-[#A10508]" size={48} />
    </div>
  );

  const renderHome = () => (
    <>
      <Hero onExploreMenu={() => handleNavigate('full-menu')} />
      
      <main id="main-content">
        {/* Intro Section - Our Story Teaser */}
        <section id="story" aria-labelledby="story-title" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <article className="relative">
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-xs font-black uppercase tracking-widest">
                    <Map size={14} className="text-[#A10508]" />
                    Est. 2008
                  </div>
                  <h2 id="story-title" className="text-5xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                    Started from a <br/>
                    <span className="text-[#A10508] italic font-serif lowercase">Mother's Kitchen.</span>
                  </h2>
                  <p className="text-slate-600 text-xl leading-relaxed font-medium italic">
                    "Almora Rasoi began in 2008 with Mrs. Anuradha making 60 tiffins a day to support her family's education. After a brief pause, the pandemic saw her children return, reviving the kitchen into the beloved brand it is today."
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href="/story"
                      onClick={(e) => { e.preventDefault(); handleNavigate('story'); }}
                      className="inline-flex items-center gap-2 text-[#A10508] font-black uppercase tracking-widest border-b-2 border-[#A10508] pb-1 hover:text-[#8a0407] transition-colors"
                    >
                      Read Our Full Journey <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    <div>
                      <p className="text-4xl font-black text-slate-900">2008</p>
                      <p className="text-slate-400 uppercase tracking-widest text-[10px] font-black mt-1">The Beginning</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900">2nd</p>
                      <p className="text-slate-400 uppercase tracking-widest text-[10px] font-black mt-1">Branch Open</p>
                    </div>
                  </div>
                </div>
              </article>
              
              <div className="relative grid grid-cols-2 gap-4 h-[500px]">
                <div className="h-full pt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
                    alt="Traditional Indian kitchen preparation"
                    loading="lazy"
                  />
                </div>
                <div className="h-full pb-12">
                  <img 
                    src="https://images.unsplash.com/photo-1628088062854-d1870b4553ad?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
                    alt="The modern interior of Almora Rasoi"
                    loading="lazy"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-3">
                   <div className="bg-red-100 p-2 rounded-full text-[#A10508]"><Heart size={20} fill="currentColor" /></div>
                   <div>
                     <p className="font-black text-xs uppercase tracking-widest">Made with Love</p>
                     <p className="text-[10px] text-slate-500 font-bold">Since 2008</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" aria-label="Customer Reviews" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <div className="flex items-center justify-center gap-1 text-amber-500 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                 <span className="ml-3 text-2xl font-black text-slate-900">4.8/5</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">LOVED BY DEHRADUN</h2>
               <p className="text-slate-500 mt-4 font-medium uppercase tracking-widest text-sm italic">Verified Reviews from our Valued Customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "The Bal Mithai is as authentic as it gets. Brings back memories of the hills. Highly recommend their Desi Ghee Jalebis too!",
                  author: "Ankit Negi",
                  role: "Local Guide"
                },
                {
                  text: "We ordered 200 boxes for a wedding invitation. The packaging was premium and the sweets were fresh. Exceptional service.",
                  author: "Priya Sharma",
                  role: "Wedding Client"
                },
                {
                  text: "Purest sweets in the city. You can actually taste the quality of the ghee. The shop is also very clean and modern.",
                  author: "Rahul Verma",
                  role: "Regular Customer"
                }
              ].map((review, i) => (
                <figure key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100 relative group">
                  <Quote size={40} className="text-[#A10508]/10 absolute top-8 right-8" />
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 italic font-medium">"{review.text}"</blockquote>
                  <figcaption className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#A10508] rounded-2xl flex items-center justify-center text-white font-black uppercase tracking-tighter">
                      {review.author[0]}
                    </div>
                    <div>
                      <cite className="font-black text-slate-900 uppercase tracking-tight not-italic">{review.author}</cite>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <FeaturedSweets onNavigate={handleNavigate} />
        
        <section id="menu" aria-labelledby="menu-title">
          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="animate-spin mb-4 text-[#A10508]" size={48} />
              <p className="font-black uppercase tracking-[0.2em] text-xs">Unveiling Fresh Sweets...</p>
            </div>
          ) : (
            <>
              <MenuSection data={menuData} />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex justify-center">
                <a 
                  href="/menu"
                  onClick={(e) => { e.preventDefault(); handleNavigate('full-menu'); }}
                  aria-label="View the full menu of Almora Rasoi"
                  className="group bg-slate-950 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3 shadow-2xl shadow-slate-300"
                >
                  Explore Full Menu
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform text-[#A10508]" />
                </a>
              </div>
            </>
          )}
        </section>

        {/* Festive Section */}
        <section id="festive" aria-labelledby="festive-title" className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-red-500/10 rounded-[3rem] blur-2xl"></div>
                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="space-y-4">
                    <img src="https://almorarasoi.com/images/wedding-box-pink.jpg" className="rounded-[3rem] w-full h-80 object-cover shadow-2xl border border-white/5" alt="Custom Pink Wedding Mithai Box" loading="lazy" />
                    <div className="bg-[#A10508] rounded-[3rem] p-8 aspect-square flex flex-col justify-center shadow-xl shadow-red-900/40">
                      <Gift size={40} className="mb-4 text-white/50" />
                      <p className="text-2xl font-black uppercase tracking-tighter leading-none">PREMIUM<br/>PACKAGING</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="bg-slate-900 rounded-[3rem] p-8 aspect-square flex flex-col justify-center border border-white/5">
                      <p className="text-[#A10508] font-black text-4xl mb-2">500+</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Weddings Served</p>
                    </div>
                    <img src="https://almorarasoi.com/images/wedding-box-red.jpg" className="rounded-[3rem] w-full h-80 object-cover shadow-2xl border border-white/5" alt="Signature Red Wedding Gift Box" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A10508]/10 text-red-400 border border-[#A10508]/20 font-black text-[10px] uppercase tracking-widest mb-8">
                  Bulk & Gifting
                </div>
                <h2 id="festive-title" className="text-5xl md:text-7xl font-black mb-8 uppercase leading-[0.9] tracking-tighter">
                  WEDDING <span className="text-[#A10508]">BHAJI</span> <br/>
                  <span className="italic font-serif lowercase text-white">& custom gifts.</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium italic">
                  From personalized wedding boxes to corporate hampers, we create memories wrapped in tradition and taste.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Customized Wedding Boxes",
                    "Corporate Gift Hampers",
                    "Bulk Event Orders",
                    "Signature Dry Fruit Sweets",
                    "Personalized Branding",
                    "Safe Bulk Logistics"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <CheckCircle2 size={20} className="text-[#A10508] group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-bold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/gifting"
                    onClick={(e) => { e.preventDefault(); handleNavigate('gifting'); }}
                    aria-label="View our special gifting options"
                    className="bg-[#A10508] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#8a0407] transition-all shadow-xl shadow-red-900/40 flex items-center justify-center gap-3"
                  >
                    View Gifting Catalog
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <ContactInfo />
      </main>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          {view === 'home' && renderHome()}
          
          {view === 'full-menu' && (
            <FullMenuPage 
              data={menuData} 
              loading={loading}
              onBack={() => handleNavigate('home')} 
            />
          )}
          
          {view === 'gifting' && (
            <GiftingPage onBack={() => handleNavigate('home')} />
          )}
          
          {view === 'story' && (
            <StoryPage onBack={() => handleNavigate('home')} />
          )}
          
          {['privacy', 'terms', 'refund'].includes(view) && (
            <LegalPage type={view as any} onBack={() => handleNavigate('home')} />
          )}
        </Suspense>
      </ErrorBoundary>

      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-[60] flex items-center justify-end pointer-events-none">
        <div className="relative flex items-center justify-end pointer-events-auto">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 scale-125"></div>
          <button 
            onClick={() => openWhatsApp()}
            className="relative bg-[#25D366] text-white p-0 rounded-full shadow-2xl shadow-green-900/40 hover:scale-105 transition-all duration-500 active:scale-95 group flex items-center justify-center overflow-hidden w-[64px] h-[64px] hover:w-auto hover:px-8 border-2 border-white/20"
            aria-label="Chat with us on WhatsApp for orders"
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white" className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap font-black text-xs uppercase tracking-widest">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;