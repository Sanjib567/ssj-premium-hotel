import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo (2).png" 
                alt="SSJ Premium Logo" 
                className="h-24 w-auto object-contain bg-white/5 p-2 rounded-xl"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Hotel SSJ Premium is a leading family hotel in Patrapada Bhubaneswar, offering premium rooms, modern amenities, and exceptional hospitality. Ideal for families, business travelers, and short-term visitors seeking comfortable lodging services near AIIMS Bhubaneswar.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.facebook.com/hotelssjpremium/?ref=embed_page#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="https://www.instagram.com/hotel_ssj_premium?stkn=MTBwNTR6dnA1bGg4MQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-500">Contact Us</h3>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 shrink-0" />
                <p>Aiginia, Patrapada, Bhubaneswar, Odisha 751019</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 shrink-0" />
                <p>ssjresorts2022@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500 shrink-0" />
                <p>7656949427</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500 shrink-0" />
                <p>7656949417</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-500">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• About</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• Rooms</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition flex items-center space-x-1.5">
                  <span>• Contacts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Facebook Page Embed Box */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-500">Follow Us</h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-3 text-slate-900 max-w-xs">
              <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">SSJ</div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Hotel SSJ Premium</h4>
                  <p className="text-[10px] text-gray-500">3.2K followers</p>
                </div>
              </div>
              <div className="pt-2 text-center">
                <a 
                  href="https://www.facebook.com/hotelssjpremium/?ref=embed_page#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#1877F2] hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition"
                >
                  View on Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Policies & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="#terms" className="hover:text-white transition">Terms and Conditions</a>
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#refund" className="hover:text-white transition">Refund and Cancellation Policy</a>
          </div>
          <p>© 2026 Hotel SSJ Premium. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}