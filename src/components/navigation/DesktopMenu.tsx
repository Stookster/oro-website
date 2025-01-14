const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <a href="#music" className="text-white hover:text-gray-300 transition-colors">MUSIC</a>
      <a href="#tour" className="text-white hover:text-gray-300 transition-colors">TOUR</a>
      <a href="#video" className="text-white hover:text-gray-300 transition-colors">VIDEO</a>
      <a href="#about" className="text-white hover:text-gray-300 transition-colors">ABOUT</a>
      <a href="#contact" className="text-white hover:text-gray-300 transition-colors">CONTACT</a>
      <a 
        href="https://oroband.bandcamp.com/merch" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-gray-300 transition-colors"
      >
        MERCH
      </a>
    </div>
  );
};

export default DesktopMenu;