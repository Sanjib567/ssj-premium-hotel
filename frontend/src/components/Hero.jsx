import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "/slide.1.jpeg",
    subtitle: "PREMIUM ROOMS & FAMILY-FRIENDLY HOSPITALITY",
    title: "BEST FAMILY HOTEL IN PATRAPADA BHUBANESWAR WITH PREMIUM ROOMS",
    description:
      "Experience a comfortable and affordable stay with premium rooms, modern amenities, and family-friendly hospitality in the heart of Patrapada.",
  },
  {
    image: "/slide.21.jpeg",
    subtitle: "EXPERIENCE THE LUXURY.",
    title: "VISIT THE TEMPLE CITY",
    description:
      "Savor exquisite culinary delights and unmatched hospitality during your stay in Bhubaneswar.",
  },
  {
    image: "/slide.3.jpeg",
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

  // Floating Bubble & Particle Animation Canvas
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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 6 + 2,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseAngle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.pulseAngle) * 0.2;
        p.pulseAngle += p.pulseSpeed;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 215, 0, 0.6)";
        
        ctx.fill();
        ctx.stroke();
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
      {/* Background Container: Side-by-Side Split Layout for Slide 1 to show full vertical building on the right */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 flex">
        {currentSlide === 0 ? (
          <>
            {/* Left side solid dark background for text */}
            <div className="w-full lg:w-1/2 h-full bg-slate-950 z-10" />
            {/* Right side background image container showing the entire building vertically */}
            <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative bg-slate-950">
              <img
                src={slide.image}
                alt="SSJ Premium Building"
                className="w-full h-full object-cover object-center animate-fade-in"
                style={{ imageRendering: 'high-quality' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-black/30" />
            </div>
          </>
        ) : (
          <div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out animate-fade-in w-full h-full"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              imageRendering: 'high-quality'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
          </div>
        )}
      </div>

      {/* Floating Bubble & Particle Animation Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Hero Content Layer */}
      <div className="relative z-30 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 pt-16">
        <div className="max-w-2xl animate-fade-in">
          <span className="text-amber-400 font-semibold tracking-widest text-xs md:text-sm uppercase block mb-2 drop-shadow">
            {slide.subtitle}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug mb-4 drop-shadow-xl">
            {slide.title}
          </h1>
          <p className="text-slate-200 text-sm md:text-base mb-6 max-w-lg font-light drop-shadow">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a 
              href="https://wa.me/917656949417?text=Hello%20SSJ%20Premium,%20I%20would%20like%20to%20book%20a%20stay."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-center"
            >
              Book Your Stay Now
            </a>

            <a 
              href="tel:+917656949417"
              className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-center"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Slide Indicators at Bottom Right */}
        <div className="absolute bottom-10 right-12 flex space-x-3 z-40">
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