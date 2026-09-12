import React, { useState } from 'react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = [
    { id: 1, category: 'exterior', src: '/about 2.jpeg', title: 'Hotel Grand Exterior' },
    { id: 2, category: 'interior', src: '/about 1.jpeg', title: 'Lobby & Lounge' },
    { id: 3, category: 'rooms', src: '/about 1.jpeg', title: 'Luxury Suite Bedroom' },
    { id: 4, category: 'dining', src: '/about 2.jpeg', title: 'Fine Dining Area' },
    { id: 5, category: 'exterior', src: '/about 1.jpeg', title: 'Evening Illumination' },
    { id: 6, category: 'rooms', src: '/about 2.jpeg', title: 'Deluxe Family Room' },
  ];

  const filteredImages = activeFilter === 'all' ? images : images.filter(img => img.category === activeFilter);

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-800 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm inline-block">
            Visual Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Explore Our Gallery</h1>
          <p className="text-slate-600">Take a visual journey through the exquisite architecture and interiors of Hotel SSJ Premium.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['all', 'exterior', 'interior', 'rooms', 'dining'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => setLightboxImg(img.src)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-gray-100"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">{img.category}</span>
                <h4 className="text-white text-lg font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div onClick={() => setLightboxImg(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out">
          <img src={lightboxImg} alt="Enlarged gallery view" className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-white/10" />
        </div>
      )}
    </div>
  );
}