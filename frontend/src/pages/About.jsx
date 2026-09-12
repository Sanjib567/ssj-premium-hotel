import React, { useState } from 'react';

export default function AboutUsPage() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-800 pt-32 pb-24">
      
      {/* About Us Content Section */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm inline-block">
              About Us
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Welcome to a Luxury Family Hotel in Patrapada Bhubaneswar
            </h1>

            <h3 className="text-lg font-bold text-slate-700">
              Hotel SSJ Premium — One of the Best Family Hotels in Patrapada Bhubaneswar.
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              If you are looking for a <strong className="text-slate-900">family hotel in Patrapada Bhubaneswar</strong> that offers comfort, convenience, and affordability, Hotel SSJ Premium is the perfect choice. Known as one of the <strong className="text-slate-900">best family hotels in Patrapada</strong>, we provide well-designed rooms, modern amenities, and a peaceful environment for both families and business travelers.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our property is designed to deliver a complete experience, combining the comfort of a <strong className="text-slate-900">luxury family hotel in Patrapada Bhubaneswar</strong> with the affordability of a budget-friendly stay. Bhubaneswar is home to some of the finest temples including the Lingaraja and Mukteswar Temples as well as some of the country’s best sporting infrastructure.
            </p>
          </div>

          {/* Right Unique Creative Image Collage Column */}
          <div className="lg:col-span-6 relative flex justify-center py-6">
            <div className="relative w-full max-w-lg">
              
              {/* Background Decorative Accent Shape */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-red-100 to-amber-100 rounded-full blur-2xl opacity-70 -z-10"></div>

              {/* Main Exterior Image - Styled with a custom asymmetrical rounded frame */}
              <div 
                onClick={() => setActiveImage('/about 2.jpeg')}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer group transform transition duration-500 hover:scale-[1.02]"
              >
                <img 
                  src="/about 2.jpeg" 
                  alt="Hotel SSJ Premium Exterior" 
                  className="w-full h-[360px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-red-600/90 px-3 py-1 rounded-full">Exterior View</span>
                  <p className="text-sm font-semibold mt-1">SSJ Premium Architecture</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                </div>
              </div>

              {/* Secondary Interior Image - Styled as an overlapping rotated Polaroid card */}
              <div 
                onClick={() => setActiveImage('/about 1.jpeg')}
                className="absolute -bottom-10 -left-6 sm:-left-10 w-64 sm:w-72 bg-white p-3 pb-4 rounded-2xl shadow-2xl border border-gray-100 cursor-pointer group transform -rotate-3 hover:rotate-0 transition-all duration-300 z-20"
              >
                <div className="overflow-hidden rounded-xl relative">
                  <img 
                    src="/about 1.jpeg" 
                    alt="Hotel SSJ Premium Interior Lounge" 
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                    Click to Zoom 🔍
                  </div>
                </div>
                <div className="mt-2 px-1 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Interior Lounge & Dining</span>
                  <span className="text-[10px] text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-full">Luxury Stay</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Lightbox Pop-up Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in cursor-zoom-out"
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 text-3xl font-bold cursor-pointer transition"
            >
              &times;
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged View" 
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 animate-scale-up"
            />
          </div>
        </div>
      )}

      {/* Floating Call Now Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="tel:+917656949417" 
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold transition transform hover:scale-105"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span>Call Now</span>
        </a>
      </div>

      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}