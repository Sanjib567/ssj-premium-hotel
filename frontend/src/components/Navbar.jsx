import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidNav = !isHome || isScrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showSolidNav 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo (2).png" 
              alt="SSJ Premium Logo" 
              className="h-20 w-auto object-contain py-1 drop-shadow-sm"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-bold">
            <Link to="/" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>Home</Link>
            <Link to="/about" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>About</Link>
            <Link to="/rooms" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>Rooms</Link>
            <Link to="/gallery" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>Gallery</Link>
            <Link to="/blog" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>Blog</Link>
            <Link to="/contact" className={`transition-colors duration-200 ${showSolidNav ? 'text-slate-800 hover:text-red-600' : 'text-white hover:text-red-400 drop-shadow'}`}>Contacts</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            
            {/* Book Now Button with Automatic Wave/Aura Effect */}
            <div className="relative group inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-rose-600 opacity-75 blur-md animate-[outsideWave_3s_ease-in-out_infinite]"></div>
              <div className="absolute -inset-2 rounded-full bg-red-600/30 blur-xl animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="relative inline-flex items-center justify-center px-7 py-3 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="relative z-10">Book Now</span>
              </button>
            </div>
            
            {/* WhatsApp Button with Ring / Shake Animation */}
            <a 
              href="https://wa.me/917656949417?text=Hello%20SSJ%20Premium,%20I%20would%20like%20to%20inquire%20about%20room%20booking." 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center space-x-2.5 text-sm font-bold px-4 py-2.5 rounded-full shadow-md transition duration-300 animate-[phoneRing_2s_ease-in-out_infinite] ${
                showSolidNav ? 'bg-gray-100 hover:bg-gray-200 text-slate-900 border border-emerald-500/30' : 'bg-white/95 hover:bg-white text-slate-900'
              }`}
            >
              <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </a>

          </div>

        </div>
      </header>

      {/* Booking Popup Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative text-slate-800">
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-slate-800 text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold text-red-600 mb-2">Book Your Stay</h2>
            <p className="text-gray-600 text-sm mb-6">Experience ultimate luxury at Hotel SSJ Premium, Patrapada, Bhubaneswar.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Booking inquiry submitted successfully!'); setIsBookingOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
                <input type="text" required placeholder="Enter your name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Check-in</label>
                  <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Check-out</label>
                  <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Room Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600">
                  <option>Premium Room</option>
                  <option>Deluxe Family Room</option>
                  <option>Luxury Suite</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3.5 rounded-lg shadow-lg transition duration-300 cursor-pointer mt-2">
                Confirm Reservation Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes outsideWave {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes phoneRing {
          0% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-10deg) scale(1.05); }
          20% { transform: rotate(10deg) scale(1.05); }
          30% { transform: rotate(-10deg) scale(1.05); }
          40% { transform: rotate(10deg) scale(1.05); }
          50% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }
      `}</style>
    </>
  );
}