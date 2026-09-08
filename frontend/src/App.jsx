import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Home2 from './pages/Home2';

function Home() {
    return <Hero />;
}

export default function App() {
    return (
        <BrowserRouter>
            <div className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/amenities" element={<Amenities />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/home2" element={<Home2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
