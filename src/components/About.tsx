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
            <p className="text-gray-400 text-lg leading-relaxed md:text-left text-center">
              ORO was born beneath the Kilsbergen mountains, in the shadows of the deep forests that 
              swathe those rocky slopes in 2014 and in the brief years of their existence they have 
              forged a sound like no other. A towering, crushing magnificence is wrapped in coils of 
              poignant intimacy and the fact that the band choose to sing in their native tongue only 
              adds to the grim beauty of these powerful songs.
            </p>
          </div>
          
          <div className="relative group">
            <img 
              src="/oro-website/lovable-uploads/c1dcb9d4-8dc6-4b16-acb6-5537c89b9431.png"
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
              src="/oro-website/lovable-uploads/c1dcb9d4-8dc6-4b16-acb6-5537c89b9431.png"
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