import { Facebook, Instagram, Youtube, Music, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-metal-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.instagram.com/oro_gloom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/OROband" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.youtube.com/@oro_gloom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <Youtube size={24} />
          </a>
          <a 
            href="https://oroband.bandcamp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <Music size={24} />
          </a>
          <a 
            href="https://open.spotify.com/artist/3GWrGtD5slUBfW2o5ugDpp?si=sv8OAeGXRAah55bFRivXsA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <Music2 size={24} />
          </a>
        </div>
        
        <div className="flex flex-col items-center space-y-4 text-gray-400">
          <p className="text-xl font-bold">ORO</p>
          <p>&copy; {new Date().getFullYear()} ORO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;