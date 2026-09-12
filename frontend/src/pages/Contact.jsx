import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact & Address Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs">
                Experience the luxury.
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">
                Address
              </h1>
            </div>

            <div className="space-y-6 text-slate-700">
              
              {/* Reach Us */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-slate-900 text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Reach Us</h4>
                  <p className="text-base font-medium text-slate-900 mt-0.5">
                    near Hotel Sai Jagannath, Aiginia, Patrapada, Bhubaneswar, Odisha 751019
                  </p>
                </div>
              </div>

              {/* Contact Us 1 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-slate-900 text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact Us</h4>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    7656949427
                  </p>
                </div>
              </div>

              {/* Contact Us 2 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-slate-900 text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact Us</h4>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    7656949427
                  </p>
                </div>
              </div>

              {/* Mail Us */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-slate-900 text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Mail Us</h4>
                  <p className="text-base font-medium text-slate-900 mt-0.5">
                    ssjresorts2022@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
          

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative bg-gray-100">
              <iframe
                title="SSJ Premium Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0457639459346!2d85.7705141!3d20.245231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a71b12b5d4e1%3A0x6b74e1d3e8587d5e!2sSSJ%20PREMIUM%20HOTEL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}