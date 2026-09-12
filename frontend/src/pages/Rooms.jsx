import React, { useState } from 'react';

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomsData = [
    {
      id: 1,
      title: "Premium AC Room",
      price: "₹2,499",
      period: "per night",
      image: "/about 1.jpeg",
      capacity: "2 Adults + 1 Child",
      size: "220 sq.ft",
      description: "Designed for modern comfort, featuring plush bedding, high-speed Wi-Fi, air conditioning, and a clean luxury bathroom.",
      amenities: ["Free Wi-Fi", "AC", "Smart TV", "Room Service", "Coffee Maker"]
    },
    {
      id: 2,
      title: "Deluxe Family Room",
      price: "₹3,899",
      period: "per night",
      image: "/about 2.jpeg",
      capacity: "4 Adults",
      size: "350 sq.ft",
      description: "Spacious layout tailored for families visiting Bhubaneswar, equipped with twin queen beds and premium seating area.",
      amenities: ["Free Wi-Fi", "AC", "King Beds", "Mini Fridge", "Complimentary Breakfast"]
    },
    {
      id: 3,
      title: "SSJ Luxury Suite",
      price: "₹5,499",
      period: "per night",
      image: "/about 1.jpeg",
      capacity: "3 Adults + 2 Children",
      size: "500 sq.ft",
      description: "The pinnacle of luxury at Patrapada featuring an independent living lounge, premium designer furnishings, and executive amenities.",
      amenities: ["Living Lounge", "Bathtub", "Ocean/City View", "Mini Bar", "24/7 Butler"]
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-slate-800 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm inline-block">
            Our Accommodations
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Rooms & Suites Designed for Comfort
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience uncompromised hospitality at Hotel SSJ Premium with contemporary decor and world-class amenities.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              
              <div className="relative h-64 overflow-hidden group">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                  {room.price} <span className="text-[10px] font-normal">/ night</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                    <span>👥 {room.capacity}</span>
                    <span>📐 {room.size}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{room.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-2">{room.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                  {room.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedRoom(room)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors duration-300 cursor-pointer shadow-md text-sm"
                >
                  Book This Room
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick Booking Confirmation Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 text-gray-400 hover:text-slate-900 text-xl font-bold">×</button>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">Reserve: {selectedRoom.title}</h3>
            <p className="text-red-600 font-bold text-sm mb-4">{selectedRoom.price} per night</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert(`Booking request sent for ${selectedRoom.title}!`); setSelectedRoom(null); }} className="space-y-3">
              <input type="text" placeholder="Full Name" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" />
              <input type="tel" placeholder="Phone Number" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" />
              <div className="grid grid-cols-2 gap-2">
                <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs" />
                <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs" />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-md text-sm mt-2">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}