import React from 'react';

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Temples to Visit in Bhubaneswar Near Patrapada",
      date: "May 14, 2026",
      readTime: "4 min read",
      category: "Temple Tourism",
      image: "/about 2.jpeg",
      excerpt: "Explore the architectural grandeur of Lingaraja Temple, Mukteswar, and other historic shrines easily accessible from Hotel SSJ Premium."
    },
    {
      id: 2,
      title: "A Guide to Bhubaneswar's Best Sports Infrastructure & Stadiums",
      date: "May 02, 2026",
      readTime: "5 min read",
      category: "Sports & Leisure",
      image: "/about 1.jpeg",
      excerpt: "Bhubaneswar is India's sports capital. Discover how our hotel provides the ideal stay for athletes and sports tourists visiting the city."
    },
    {
      id: 3,
      title: "Why Patrapada is the Best Strategic Location for Business Travelers",
      date: "April 25, 2026",
      readTime: "3 min read",
      category: "Business Travel",
      image: "/about 2.jpeg",
      excerpt: "Seamless highway connectivity, peaceful surroundings, and premium business room amenities make SSJ Premium the top choice."
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-slate-800 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm inline-block">
            Latest Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Hotel News & Travel Guides</h1>
          <p className="text-slate-600">Discover local attractions, travel tips, and updates from Hotel SSJ Premium.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col transition duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative group">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-2 font-medium">
                    <span>📅 {blog.date}</span>
                    <span>•</span>
                    <span>⏱️ {blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{blog.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-3">{blog.excerpt}</p>
                </div>
                <button className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center space-x-1 pt-2 cursor-pointer">
                  <span>Read Full Article</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}