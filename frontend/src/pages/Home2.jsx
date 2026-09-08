import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=90",
    subtitle: "WELCOME TO PARADISE",
    title: "A Stay Beyond\nYour Expectations",
    description:
      "Experience luxurious rooms, breathtaking views, and warm hospitality designed to make every moment unforgettable.",
    button: "Explore Rooms",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90",
    subtitle: "LUXURY & COMFORT",
    title: "Relax. Refresh.\nReconnect.",
    description:
      "Unwind in beautifully designed spaces where modern luxury meets timeless comfort and exceptional service.",
    button: "Discover More",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90",
    subtitle: "YOUR PERFECT ESCAPE",
    title: "Where Every\nStay Feels Special",
    description:
      "From peaceful mornings to unforgettable evenings, create beautiful memories at our premium hotel.",
    button: "Book Your Stay",
  },
];

const bubbleData = [
  { left: "2%", size: 24, duration: 7, delay: 0 },
  { left: "6%", size: 12, duration: 5, delay: 1 },
  { left: "10%", size: 38, duration: 10, delay: 3 },
  { left: "15%", size: 18, duration: 6, delay: 2 },
  { left: "20%", size: 52, duration: 12, delay: 0 },
  { left: "26%", size: 14, duration: 6, delay: 4 },
  { left: "31%", size: 30, duration: 8, delay: 1 },
  { left: "37%", size: 45, duration: 11, delay: 3 },
  { left: "43%", size: 16, duration: 6, delay: 0 },
  { left: "48%", size: 58, duration: 13, delay: 2 },
  { left: "54%", size: 13, duration: 5, delay: 4 },
  { left: "59%", size: 32, duration: 9, delay: 1 },
  { left: "65%", size: 28, duration: 12, delay: 3 },
  { left: "71%", size: 17, duration: 6, delay: 0 },
  { left: "76%", size: 38, duration: 10, delay: 2 },
  { left: "82%", size: 22, duration: 7, delay: 4 },
  { left: "87%", size: 34, duration: 13, delay: 1 },
  { left: "92%", size: 15, duration: 5, delay: 3 },
  { left: "97%", size: 30, duration: 8, delay: 0 },
  { left: "13%", size: 10, duration: 5, delay: 2 },
  { left: "35%", size: 20, duration: 7, delay: 4 },
  { left: "57%", size: 25, duration: 8, delay: 1 },
  { left: "73%", size: 12, duration: 5, delay: 3 },
  { left: "90%", size: 27, duration: 9, delay: 2 },
];

const Home2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title.replace("\n", " ")}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            } ${currentSlide === index ? "animate-image-zoom" : ""}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="absolute inset-0 z-180 pointer-events-none">
        {bubbleData.map((bubble, index) => (
          <span
            key={index}
            className="hero-bubble"
            style={{
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          >
            <span className="bubble-reflection" />
          </span>
        ))}
      </div>

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-30 flex min-h-screen items-center px-6 pt-32">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="relative z-40 max-w-3xl text-white">
            <p
              key={`subtitle-${currentSlide}`}
              className="mb-3 text-xs font-semibold tracking-[0.3em] text-amber-300 sm:text-sm"
            >
              {slides[currentSlide].subtitle}
            </p>

            <h1
              key={`title-${currentSlide}`}
              className="whitespace-pre-line text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {slides[currentSlide].title}
            </h1>

            <p
              key={`description-${currentSlide}`}
              className="mt-5 max-w-xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:mt-7 md:text-lg"
            >
              {slides[currentSlide].description}
            </p>

            <button
              type="button"
              className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-amber-300 hover:px-9 sm:mt-9 sm:px-8 sm:py-4"
            >
              {slides[currentSlide].button}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-5 sm:right-8 md:right-10">
        {slides.map((slide, index) => (
          <label
            key={slide.id}
            className="group relative flex cursor-pointer items-center"
          >
            <input
              type="radio"
              name="hotel-slide"
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
              className="sr-only"
            />

            <span
              className={`block rounded-full border-2 transition-all duration-300 ${
                currentSlide === index
                  ? "h-4 w-4 scale-125 border-white bg-white"
                  : "h-3 w-3 border-white/70 bg-transparent group-hover:border-white"
              }`}
            />

            {currentSlide === index && (
              <span className="absolute right-6 h-[2px] w-5 bg-white sm:right-7 sm:w-7" />
            )}
          </label>
        ))}
      </div>

      <div className="absolute bottom-7 right-6 z-40 text-sm text-white/80 sm:right-10">
        <span className="font-semibold text-white">0{currentSlide + 1}</span>

        <span className="mx-2 text-white/40">/</span>

        <span>03</span>
      </div>

      <style>{`
        @keyframes imageZoom {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.1);
          }
        }

        .animate-image-zoom {
          animation: imageZoom 6s ease-out forwards;
        }

        @keyframes bubbleFloat {
            0% {
              transform: translate3d(0, 60vh, 0) scale(0.25);
              opacity: 0;
            }

            

            30% {
              transform: translate3d(30px, 40vh, 0) scale(0.55);
              opacity: 0.85;
            }

            50% {
              transform: translate3d(-35px, 20vh, 0) scale(0.8);
              opacity: 0.75;
            }

            70% {
              transform: translate3d(30px, 5vh, 0) scale(1);
              opacity: 0.6;
            }

            85% {
              transform: translate3d(-25px, -10vh, 0) scale(1.15);
              opacity: 0.35;
            }

            100% {
              transform: translate3d(20px, -25vh, 0) scale(1.35);
              opacity: 0;
            }
          }

        .hero-bubble {
          position: absolute;
          bottom: 0px;
          display: block;
          border: 2px solid rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);

          box-shadow:
            inset 2px 2px 8px rgba(255, 255, 255, 0.5),
            inset -4px -4px 10px rgba(255, 255, 255, 0.15),
            0 0 10px rgba(255, 255, 255, 0.35),
            0 0 25px rgba(255, 255, 255, 0.15);

          backdrop-filter: blur(1px);

          animation-name: bubbleFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          will-change: transform, opacity;
        }

        .bubble-reflection {
          position: absolute;
          top: 13%;
          left: 17%;
          width: 28%;
          height: 28%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 7px rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 640px) {
          .hero-bubble:nth-child(4n) {
            display: none;
          }

          .hero-bubble {
            border-width: 1px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-image-zoom {
            animation: none;
          }

          .hero-bubble {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Home2;
