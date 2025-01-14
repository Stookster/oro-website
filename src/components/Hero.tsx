const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/lovable-uploads/009f3bb9-d154-493a-a72c-2dd1146db6b2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="animate-fade-in">
          <div className="w-48 md:w-64 mx-auto mb-6">
            <img 
              src="/lovable-uploads/ce4f176b-398e-4720-8822-1d3ebb7b266c.png"
              alt="ORO Logo"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 tracking-widest uppercase" style={{ fontFamily: "'Trajan Pro', serif" }}>
            Vid Vägs Ände
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;