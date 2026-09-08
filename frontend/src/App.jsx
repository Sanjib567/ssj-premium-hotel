import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
    return (
        <div className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden min-h-screen">
            <Navbar />
            <Hero />
        </div>
    );
}