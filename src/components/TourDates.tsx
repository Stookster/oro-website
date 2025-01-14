const TourDates = () => {
  const tours = [
    { date: "MAR 15", venue: "The Arena", location: "New York, NY", ticketLink: "#" },
    { date: "MAR 18", venue: "Metro", location: "Chicago, IL", ticketLink: "#" },
    { date: "MAR 21", venue: "The Wiltern", location: "Los Angeles, CA", ticketLink: "#" },
    { date: "MAR 25", venue: "Paramount", location: "Seattle, WA", ticketLink: "#" },
  ];

  return (
    <section id="tour" className="bg-metal-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">TOUR DATES</h2>
        
        <div className="space-y-4">
          {tours.map((tour, index) => (
            <div 
              key={index}
              className="bg-metal-light p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0"
            >
              <div className="flex-1">
                <div className="text-xl font-bold text-white">{tour.date}</div>
                <div className="text-gray-400">{tour.venue}</div>
                <div className="text-gray-400">{tour.location}</div>
              </div>
              <a 
                href={tour.ticketLink}
                className="bg-white text-metal-dark px-6 py-2 font-bold hover:bg-gray-200 transition-colors"
              >
                TICKETS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDates;