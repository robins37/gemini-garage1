import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Phone,
    ShieldCheck,
    MapPin,
    Clock,
    Star,
    Wrench,
    DoorOpen,
    Calendar,
    Snowflake,
    ChevronRight,
    Verified,
    Mail,
    Globe,
    Settings,
    Zap,
    PhoneCall
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' as Page },
    { name: 'Services', id: 'services' as Page },
    { name: 'About', id: 'about' as Page },
    { name: 'Contact', id: 'contact' as Page },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
          <div className="bg-[#ec1313] p-1.5 rounded-lg text-white">
            <DoorOpen size={28} />
          </div>
          <div>
            <h2 className="text-xl font-black leading-none tracking-tight text-slate-900 uppercase">Garage Repair</h2>
            <p className="text-[10px] font-bold text-[#ec1313] tracking-[0.2em] uppercase">Coral Springs</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm font-semibold transition-colors hover:text-[#ec1313] ${currentPage === item.id ? 'text-[#ec1313]' : 'text-slate-600'}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:9545550123" className="hidden lg:flex items-center justify-center rounded-lg h-11 px-6 bg-[#1e3a8a] text-white text-sm font-bold transition-all hover:bg-[#1e3a8a]/90">
            <Phone size={18} className="mr-2" />
            (954) 555-0123
          </a>
          <button onClick={() => setPage('contact')} className="flex items-center justify-center rounded-lg h-11 px-6 bg-[#ec1313] text-white text-sm font-bold transition-all hover:bg-[#ec1313]/90">
            Get Free Quote
          </button>
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 absolute w-full shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 text-lg font-bold text-slate-800 border-b border-slate-50"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="relative overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 px-4 py-12 lg:py-24 space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#ec1313] text-xs font-bold uppercase tracking-wider">
          <Verified size={14} />
          Same-Day Service Guaranteed
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
          Garage Door Problems Fixed <span className="text-[#ec1313]">Fast</span> in Coral Springs
        </h1>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Don't let a broken spring or stuck door ruin your day. Our expert technicians are ready 24/7 for all repairs, installations, and emergency services across Florida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onCtaClick} className="h-16 px-8 rounded-xl bg-[#ec1313] text-white font-bold text-xl shadow-lg shadow-red-200 transition-transform hover:-translate-y-1">
            Get Free Quote
          </button>
          <a href="tel:9545550123" className="h-16 px-8 rounded-xl bg-[#1e3a8a] text-white font-bold text-xl shadow-lg shadow-blue-200 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[750px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden lg:block"></div>
        <img
           alt="Professional technician repairing a modern white garage door"
           className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1590674033512-42173e655938?auto=format&fit=crop&q=80&w=1200"
           onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Professional+Garage+Repair'; }}
        />
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-slate-50 py-12 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <ShieldCheck />, title: 'Licensed & Insured', desc: 'Fully compliant & bonded' },
          { icon: <MapPin />, title: 'Local Experts', desc: 'Based in Coral Springs' },
          { icon: <Zap />, title: 'Same-Day Service', desc: 'On-site within hours' },
          { icon: <Clock />, title: 'Free Estimates', desc: 'No hidden fees or travel' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="size-14 rounded-xl bg-white flex items-center justify-center text-[#ec1313] shadow-sm group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-white" id="services">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-black tracking-tight text-slate-900">Our Professional Services</h2>
        <p className="text-slate-600">Everything you need for a safe, quiet, and reliable garage door operation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Wrench />, title: 'Emergency Repair', desc: 'Stuck in or out? Our 24/7 team responds immediately to emergency calls throughout Coral Springs.' },
          { icon: <Zap />, title: 'Spring Replacement', desc: 'Broken springs are dangerous. We replace torsion and extension springs with high-cycle parts.' },
          { icon: <Settings />, title: 'Opener Installation', desc: 'Upgrade to modern, quiet, WiFi-enabled openers like LiftMaster and Chamberlain.' },
          { icon: <DoorOpen />, title: 'New Garage Doors', desc: 'Enhance your home\'s curb appeal with a wide selection of modern and hurricane-rated doors.' },
          { icon: <Calendar />, title: 'Maintenance Plans', desc: 'Annual tune-ups to prevent costly repairs and extend the life of your garage system.' },
          { icon: <Snowflake />, title: 'Weather Sealing', desc: 'Keep Florida heat, bugs, and water out with professional weatherstripping and threshold seals.' },
        ].map((service, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#ec1313]/30 transition-all hover:shadow-2xl hover:shadow-red-50 group cursor-default">
            <div className="text-[#ec1313] mb-6 transform group-hover:scale-110 transition-transform origin-left">
              {React.cloneElement(service.icon as React.ReactElement, { size: 40 })}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
            <button className="inline-flex items-center text-[#ec1313] font-bold text-sm group/btn">
              Get Quote <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50" id="reviews">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 text-slate-900">Trusted by Your Neighbors</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Sarah Mitchell', loc: 'Riverside Drive', text: '"Called at 7 AM on a Sunday when my car was trapped. They were at my house by 8:30. Fixed the spring in 45 minutes. Incredible service!"' },
          { name: 'David B.', loc: 'Parkland Border', text: '"Expert installation of our new smart opener. No more noisy rattling! The technician was very professional and clean. Highly recommend."' },
          { name: 'James P.', loc: 'Near Coral Square', text: '"Fastest repair near Coral Square Mall. I was worried about the cost but their estimate was fair and they stuck to it. Best garage company in the area."' },
        ].map((rev, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">{rev.text}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
                {rev.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">{rev.name}</p>
                <p className="text-[10px] uppercase text-slate-400 font-bold">{rev.loc}, Coral Springs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl font-black mb-10 text-slate-900">Request a Free Estimate</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                <ShieldCheck size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                <p>One of our technicians will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required className="w-full h-14 rounded-xl bg-slate-50 border border-slate-100 px-6 focus:ring-2 focus:ring-[#ec1313] outline-none" placeholder="Your name" type="text" />
                  <input required className="w-full h-14 rounded-xl bg-slate-50 border border-slate-100 px-6 focus:ring-2 focus:ring-[#ec1313] outline-none" placeholder="(954) 000-0000" type="tel" />
                </div>
                <select className="w-full h-14 rounded-xl bg-slate-50 border border-slate-100 px-6 outline-none">
                  <option>Repair Service</option>
                  <option>New Installation</option>
                  <option>Spring Replacement</option>
                </select>
                <textarea className="w-full rounded-xl bg-slate-50 border border-slate-100 px-6 py-4 outline-none focus:ring-2 focus:ring-[#ec1313]" placeholder="Message..." rows={4}></textarea>
                <button className="w-full h-16 bg-[#ec1313] text-white font-black text-xl rounded-xl shadow-xl shadow-red-100 hover:scale-[1.01] transition-transform active:scale-95" type="submit">
                  Send Request Now
                </button>
              </form>
            )}
          </div>
          <div className="w-full lg:w-2/5 space-y-8">
            <h3 className="text-2xl font-black text-slate-900">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-[#ec1313]" />
                <p className="text-slate-600 text-sm">9500 W Sample Rd, Coral Springs, FL 33065</p>
              </div>
              <div className="flex gap-4">
                <PhoneCall className="text-[#ec1313]" />
                <p className="text-slate-600 text-sm">(954) 555-0123</p>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#ec1313]" />
                <p className="text-slate-600 text-sm">Open 24/7 for Emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-[#101827] text-white pt-20 pb-28 md:pb-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#ec1313] p-1 rounded-lg">
              <DoorOpen size={24} />
            </div>
            <h2 className="text-xl font-black leading-none tracking-tight">GARAGE REPAIR</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Coral Springs' most trusted garage door service provider. Same-day repairs and emergency help.
          </p>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-white/50">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-bold">
            {['Broken Spring Repair', 'Opener Repair & Install', 'New Garage Doors'].map(s => (
              <li key={s}><a className="hover:text-[#ec1313] transition-colors" href="#">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-white/50">Service Area</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">Serving 33065, 33067, 33071, 33075, and 33076.</p>
        </div>
      </div>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
        © 2024 Garage Repair of Coral Springs.
      </p>
    </div>
  </footer>
);

/**
 * NEW: STICKY MOBILE CALL BAR
 * High-conversion footer specifically for mobile users.
 */
const StickyMobileCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-slate-100 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] p-3 animate-in fade-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-3">
        <a
           href="tel:9545550123"
           className="flex-1 h-14 bg-[#ec1313] text-white flex items-center justify-center gap-3 rounded-xl font-black text-lg active:scale-95 transition-transform"
        >
          <PhoneCall size={20} className="animate-pulse" />
          CLICK TO CALL
        </a>
        <div className="flex flex-col items-center justify-center px-4 border-l border-slate-100">
          <p className="text-[10px] font-black text-[#1e3a8a] uppercase tracking-tighter leading-none mb-1">24/7 Service</p>
          <p className="text-xs font-bold text-slate-900 leading-none">954.555.0123</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderContent = () => {
    switch(page) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setPage('contact')} />
            <TrustBar />
            <Services />
            <Testimonials />
            <ContactSection />
          </>
        );
      case 'services':
        return <Services />;
      case 'contact':
        return <ContactSection />;
      case 'about':
        return (
          <section className="py-24 bg-white min-h-[60vh]">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-black mb-6">About Our Team</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                With over 15 years of experience serving South Florida, we pride ourselves on being the most reliable garage door repair company in Coral Springs.
              </p>
              <button onClick={() => setPage('contact')} className="px-12 py-5 bg-[#ec1313] text-white font-bold rounded-xl shadow-xl shadow-red-100">
                Work With Us
              </button>
            </div>
          </section>
        );
      default:
        return <Hero onCtaClick={() => setPage('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#ec1313] selection:text-white pb-16 md:pb-0">
      <Navbar currentPage={page} setPage={setPage} />

      <main>
        {renderContent()}
      </main>

      <Footer setPage={setPage} />

      {/* STICKY BOTTOM CALL BAR FOR MOBILE */}
      <StickyMobileCallBar />
    </div>
  );
}
