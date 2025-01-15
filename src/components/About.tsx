import { useState } from "react";
import { X } from "lucide-react";

const About = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section id="about" className="bg-metal-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">ABOUT</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              Emerging from the depths of the Nordic metal scene, ORO crafts a unique blend of 
              atmospheric black metal and post-metal elements. Their latest opus "Vid Vägs Ände" 
              showcases the band's evolution into more experimental territories while staying true 
              to their heavy roots.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              The five-piece ensemble continues to push boundaries, creating immersive soundscapes 
              that bridge the gap between crushing heaviness and ethereal atmosphere.
            </p>
          </div>
          
          <div className="relative group">
            <img 
              src="/lovable-uploads/c1dcb9d4-8dc6-4b16-acb6-5537c89b9431.png"
              alt="ORO Band Photo"
              className="w-full rounded-lg shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setIsImageOpen(true)}
            />
            <p className="text-xs text-gray-500 mt-2 text-right">Photo: Camilla Björkgren</p>
          </div>
        </div>
      </div>

      {/* Full screen image modal */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setIsImageOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsImageOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="w-full h-full p-4 flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/c1dcb9d4-8dc6-4b16-acb6-5537c89b9431.png"
              alt="ORO Band Photo"
              className="max-h-[90vh] max-w-[90vw] object-contain animate-scale-in"
            />
            <p className="text-sm text-gray-400 mt-2">From left to right: Richard Stöök, Petter Cete, Jerker Rundlöf, Seb Andersson, John Stöök</p>
            <p className="text-xs text-gray-400 mt-2">Photo: Camilla Björkgren</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;