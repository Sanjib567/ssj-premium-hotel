import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80",
    subtitle: "PREMIUM ROOMS & FAMILY-FRIENDLY HOSPITALITY",
    title: "BEST FAMILY HOTEL IN PATRAPADA BHUBANESWAR WITH PREMIUM ROOMS",
    description:
      "Experience a comfortable and affordable stay with premium rooms, modern amenities, and family-friendly hospitality in the heart of Patrapada.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    subtitle: "EXPERIENCE THE LUXURY.",
    title: "VISIT THE TEMPLE CITY",
    description:
      "Savor exquisite culinary delights and unmatched hospitality during your stay in Bhubaneswar.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
    subtitle: "EXPERIENCE THE LUXURY.",
    title: "A TRULY IMMERSIVE RELAXING PLACE.",
    description:
      "Unwind in elegantly designed spaces crafted for absolute peace and comfort.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef(null);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // AI-style flowing particle wave animation canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create particles for the wave effect
    const particles = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      baseX: Math.random() * width,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.03;

      particles.forEach((p, index) => {
        // Create an organic wave flow movement
        p.angle += p.speed;
        p.y += Math.sin(step + index * 0.1) * 0.6;
        p.x += Math.cos(step * 0.5) * 0.4;

        // Draw the golden particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
        ctx.fill();

        // Loop particles back into view if they drift off-screen
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Background Image with Dark Vignette Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      </div>

      {/* AI Flowing Particle Wave Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

{/* Hero Content Layer */}
<div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 pt-16">
  <div className="max-w-xl animate-fade-in">
    <span className="text-amber-400 font-semibold tracking-widest text-xs md:text-sm uppercase block mb-2 drop-shadow">
      {slide.subtitle}
    </span>
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug mb-4 drop-shadow-xl">
      {slide.title}
    </h1>
    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-md font-light drop-shadow">
      {slide.description}
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      {/* Primary CTA */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Book Your Stay Now
      </button>

      {/* Secondary CTA - Solid Yellow */}
      <button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Call Now
      </button>
    </div>

    {/* Quick Info Boxes */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {/* Rating */}
      <div className="flex flex-col items-center bg-slate-900/70 rounded-lg p-4 shadow-md">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6A1B1A] mb-2">
          <span className="text-amber-400 text-xl">⭐</span>
        </div>
        <p className="text-amber-400 font-bold text-base">4.5+ Rating</p>
        <p className="text-slate-300 text-xs">Google Reviews</p>
      </div>

      {/* AIIMS */}
      <div className="flex flex-col items-center bg-slate-900/70 rounded-lg p-4 shadow-md">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6A1B1A] mb-2">
          <span className="text-amber-400 text-xl">🔑</span>
        </div>
        <p className="text-amber-400 font-bold text-base">5 Min</p>
        <p className="text-slate-300 text-xs">From AIIMS</p>
      </div>

      {/* Temple */}
      <div className="flex flex-col items-center bg-slate-900/70 rounded-lg p-4 shadow-md">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6A1B1A] mb-2">
          <span className="text-amber-400 text-xl">🛕</span>
        </div>
        <p className="text-amber-400 font-bold text-base">10 Min</p>
        <p className="text-slate-300 text-xs">Lingaraj Temple</p>
      </div>

      {/* Parking */}
      <div className="flex flex-col items-center bg-slate-900/70 rounded-lg p-4 shadow-md">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6A1B1A] mb-2">
          <span className="text-amber-400 text-xl">🚗</span>
        </div>
        <p className="text-amber-400 font-bold text-base">Free</p>
        <p className="text-slate-300 text-xs">Private Parking</p>
      </div>
    </div>
  </div>

        {/* Slide Indicators at Bottom Right */}
        <div className="absolute bottom-10 right-12 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-amber-400 w-8" : "bg-white/50 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
