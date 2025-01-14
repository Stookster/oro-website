import { useState, useEffect } from "react";
import { X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY;
      const headerHeight = 300; // Approximate height where we want the animation to complete
      const progress = Math.min(scrollPosition / headerHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${hasScrolled ? 'md:bg-black/70 md:backdrop-blur-sm' : 'bg-transparent'}`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.7})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#music" className="text-white hover:text-gray-300 transition-colors">MUSIC</a>
            <a href="#tour" className="text-white hover:text-gray-300 transition-colors">TOUR</a>
            <a href="#video" className="text-white hover:text-gray-300 transition-colors">VIDEO</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">ABOUT</a>
            <a 
              href="https://oroband.bandcamp.com/merch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              MERCH
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`absolute right-0 top-0 h-screen w-64 bg-metal-dark transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-end pt-20 px-6 space-y-6">
              <a
                href="#music"
                className="text-white hover:text-gray-300 transition-colors text-xl font-light tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                MUSIC
              </a>
              <a
                href="#tour"
                className="text-white hover:text-gray-300 transition-colors text-xl font-light tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                TOUR
              </a>
              <a
                href="#video"
                className="text-white hover:text-gray-300 transition-colors text-xl font-light tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                VIDEO
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition-colors text-xl font-light tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="https://oroband.bandcamp.com/merch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors text-xl font-light tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                MERCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
