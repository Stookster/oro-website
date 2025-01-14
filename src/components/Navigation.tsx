import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">ABOUT</a>
            <a href="#music" className="text-white hover:text-gray-300 transition-colors">MUSIC</a>
            <a href="#tour" className="text-white hover:text-gray-300 transition-colors">TOUR</a>
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
            className="md:hidden text-white"
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
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-metal-dark">
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-right"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#music"
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-right"
                onClick={() => setIsOpen(false)}
              >
                MUSIC
              </a>
              <a
                href="#tour"
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-right"
                onClick={() => setIsOpen(false)}
              >
                TOUR
              </a>
              <a
                href="https://oroband.bandcamp.com/merch"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-right"
                onClick={() => setIsOpen(false)}
              >
                MERCH
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;