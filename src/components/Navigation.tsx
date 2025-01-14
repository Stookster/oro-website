import { useState, useEffect } from "react";
import MobileMenu from "./navigation/MobileMenu";
import DesktopMenu from "./navigation/DesktopMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY;
      const headerHeight = 300;
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
        backgroundColor: `rgba(0, 0, 0, ${window.innerWidth >= 768 ? scrollProgress * 0.7 : 0})`,
        backdropFilter: `blur(${window.innerWidth >= 768 ? scrollProgress * 8 : 0}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-4">
          {/* Desktop Navigation */}
          <DesktopMenu />

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
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navigation;