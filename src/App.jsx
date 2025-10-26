import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const statsRef = useRef([]);
  const [animated, setAnimated] = useState(false);

  // Toggle mobile menu
  const handleHamburgerClick = () => {
    setMobileOpen(!mobileOpen);
  };

  // Animate numbers when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        setAnimated(true);
        statsRef.current.forEach((stat) => {
          const target = +stat.getAttribute("data-target");
          const suffix = stat.getAttribute("data-suffix") || "";
          let count = 0;
          const speed = 25;

          const update = setInterval(() => {
            count += Math.ceil(target / 100);
            if (count >= target) {
              count = target;
              clearInterval(update);
            }
            stat.textContent = count + suffix;
          }, speed);
        });
      }
    });

    if (statsRef.current[0]) observer.observe(statsRef.current[0]);

    return () => observer.disconnect();
  }, [animated]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/1.jpg')", backgroundPosition: "center -3%" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8 relative">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fadeIn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg"
              alt="Philippines Flag"
              className="h-10 w-auto object-contain"
            />
            <div className="text-white text-xl font-semibold">FASTNET SOLUTION</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["HOME", "ABOUT", "COVERAGE", "PACKAGES", "IPTV", "BLOG", "CONTACT"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center px-6 py-2 text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
            >
              +381 IBL FIND
            </a>
          </div>

    {/* Hamburger */}
{/* Hamburger (clean version) */}
<button
  onClick={handleHamburgerClick}
  className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 focus:outline-none z-50 bg-transparent border-none"
>
  <span
    className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
      mobileOpen ? "rotate-45 translate-y-2" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
      mobileOpen ? "opacity-0" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
      mobileOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  ></span>
</button>

        </nav>

     
{/* Mobile Panel */}
<div
  className={`fixed top-0 left-0 w-full h-screen bg-black/40 z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform ${
    mobileOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {["HOME", "ABOUT", "COVERAGE", "PACKAGES", "IPTV", "BLOG", "CONTACT"].map((item) => (
    <a
      key={item}
      href="#"
      className="text-white text-lg font-medium hover:text-purple-400 transition-colors"
      onClick={() => setMobileOpen(false)} // close panel when a link is clicked
    >
      {item}
    </a>
  ))}
  <a
    href="#"
    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
    onClick={() => setMobileOpen(false)}
  >
    +381 IBL FIND
  </a>
</div>


        {/* Hero Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 items-center min-h-[calc(100vh-80px)]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-wide leading-tight mb-6 drop-shadow-lg">
              Fast Internet
              <br />
              With Future
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow-md text-gray-200">
              Fast speed, 99% reliability even during peak times.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 overflow-hidden">
              <a
                href="#"
                className="hidden sm:inline-flex items-center px-5 sm:px-6 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium animate-pulseButton transition-all duration-200 ease-in-out hover:scale-90 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
              >
                Get Started
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="flex gap-2 mt-2 sm:mt-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-1.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black w-full sm:w-auto"
                />
                <button className="px-4 py-1.5 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <section id="quick-stats" className="mt-10 flex justify-between text-white flex-nowrap sm:flex-wrap gap-3 sm:gap-10">
              <div className="flex flex-col items-center w-1/3 sm:w-auto">
                <span
                  ref={(el) => (statsRef.current[0] = el)}
                  className="stat text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  data-target="99"
                  data-suffix="%"
                >
                  0%
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-gray-300">Uptime</span>
              </div>
              <div className="flex flex-col items-center w-1/3 sm:w-auto">
                <span
                  ref={(el) => (statsRef.current[1] = el)}
                  className="stat text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  data-target="1000"
                  data-suffix="Gbps"
                >
                  0Gbps
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-gray-300">Max Speed</span>
              </div>
              <div className="flex flex-col items-center w-1/3 sm:w-auto">
                <span
                  ref={(el) => (statsRef.current[2] = el)}
                  className="stat text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                  data-target="24"
                  data-suffix="/7"
                >
                  0/7
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-gray-300">Support</span>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes pulseButton {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulseButton {
          animation: pulseButton 1.5s ease-in-out infinite;
        }
          
      `}
      
      </style>
    </div>
  );
};

export default Hero;
