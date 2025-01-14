import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/lovable-uploads/009f3bb9-d154-493a-a72c-2dd1146db6b2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollPosition * 0.3}px)`
        }}
      />
      
      {/* Content with fade-in animation */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div 
          className="animate-fade-in"
          style={{ 
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        >
          <div className="w-48 md:w-64 mx-auto mb-6 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/ce4f176b-398e-4720-8822-1d3ebb7b266c.png"
              alt="ORO Logo"
              className="w-full h-auto"
            />
          </div>
          <p 
            className="text-xl md:text-2xl text-gray-300 tracking-widest uppercase opacity-0 animate-[fade-in_0.5s_ease-out_0.3s_forwards]" 
            style={{ fontFamily: "'Trajan Pro', serif" }}
          >
            Vid Vägs Ände
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;