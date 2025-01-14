import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-metal-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Youtube size={24} />
          </a>
        </div>
        
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BAND NAME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;