import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div 
        className={`fixed right-0 top-0 h-full w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
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
  );
};

export default MobileMenu;