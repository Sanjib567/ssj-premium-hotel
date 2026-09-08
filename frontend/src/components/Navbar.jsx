import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                
                {/* Brand Logo */}
                <a href="#" className="text-2xl font-black tracking-wider text-white">
                    SSJ <span className="text-amber-400">PREMIUM</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
                    <a href="#" className="text-amber-400 transition">Home</a>
                    <a href="#rooms" className="hover:text-amber-400 transition">Rooms & Suites</a>
                    <a href="#amenities" className="hover:text-amber-400 transition">Amenities</a>
                    <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
                </nav>

                {/* Action Button */}
                <div className="hidden md:block">
                    <a href="#book" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition duration-300">
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-200 focus:outline-none">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
                    <a href="#" className="block text-amber-400 font-medium py-1">Home</a>
                    <a href="#rooms" className="block text-slate-300 hover:text-amber-400 py-1">Rooms & Suites</a>
                    <a href="#amenities" className="block text-slate-300 hover:text-amber-400 py-1">Amenities</a>
                    <a href="#contact" className="block text-slate-300 hover:text-amber-400 py-1">Contact</a>
                </div>
            )}
        </header>
    );
}