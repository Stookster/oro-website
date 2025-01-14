const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/placeholder.svg')" }}
      />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            BAND NAME
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            NEW ALBUM OUT NOW
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;