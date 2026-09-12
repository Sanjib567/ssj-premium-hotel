import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUsPage from './pages/About';
import RoomsPage from './pages/Rooms';
import GalleryPage from './pages/Gallery';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

function Home() {
    return (
        <>
            <Hero />
            <AboutUsPage />
            <RoomsPage/>
            <GalleryPage/>
            <BlogPage/>
            <ContactPage/>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <div className="bg-white text-slate-800 font-sans antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route path="/rooms" element={<RoomsPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}