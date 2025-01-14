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
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-wider">VID VÄGS ÄNDE</h3>
            <p className="text-gray-400 text-lg">
              Experience the latest atmospheric masterpiece from ORO. A journey through darkness and light, 
              where haunting melodies meet crushing intensity.
            </p>
            <button className="bg-white text-metal-dark px-8 py-3 font-bold hover:bg-gray-200 transition-colors tracking-wide">
              LISTEN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;