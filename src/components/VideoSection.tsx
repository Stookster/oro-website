const VideoSection = () => {
  return (
    <section className="bg-metal-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">VIDEO</h2>
        
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZEyjvzwKKa4"
            title="ORO - Vid Vägs Ände"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;