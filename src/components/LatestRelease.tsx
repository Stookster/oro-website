import { Music4, Music2 } from "lucide-react";

const LatestRelease = () => {
  return (
    <section id="music" className="bg-metal-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">LATEST RELEASE</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-metal-light">
            <img 
              src="/lovable-uploads/009f3bb9-d154-493a-a72c-2dd1146db6b2.png"
              alt="Vid Vägs Ände Album Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white tracking-wider">VID VÄGS ÄNDE</h3>
            <p className="text-gray-400 text-lg">
              Experience the latest atmospheric masterpiece from ORO. A journey through darkness and light, 
              where haunting melodies meet crushing intensity.
            </p>
            
            <div className="flex flex-col space-y-4">
              <p className="text-gray-400">Available on:</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://open.spotify.com/artist/3GWrGtD5slUBfW2o5ugDpp?si=-Ynwrt4YRFeQMu2j93NhpQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-metal-light px-6 py-3 rounded-md hover:bg-metal-gray transition-colors"
                >
                  <Music4 className="w-5 h-5" />
                  <span>Spotify</span>
                </a>
                <a 
                  href="https://music.apple.com/se/artist/oro/344822804" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-metal-light px-6 py-3 rounded-md hover:bg-metal-gray transition-colors"
                >
                  <Music2 className="w-5 h-5" />
                  <span>Apple Music</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;