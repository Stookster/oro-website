import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-metal-dark/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">BAND NAME</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                HOME
              </a>
              <a href="#tour" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                TOUR
              </a>
              <a href="#music" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                MUSIC
              </a>
              <a href="#merch" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                MERCH
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-metal-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
            HOME
          </a>
          <a href="#tour" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
            TOUR
          </a>
          <a href="#music" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
            MUSIC
          </a>
          <a href="#merch" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
            MERCH
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;