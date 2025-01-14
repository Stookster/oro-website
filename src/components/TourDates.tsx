const TourDates = () => {
  const tours = [
    { 
      date: "MAY 30", 
      venue: "VALO ROCK", 
      location: "Vadsø, Norway", 
      ticketLink: "https://kooperativet.ticketco.events/no/nb/e/riv_presenterer_valo_rock_2025?fbclid=IwY2xjawGWEKJleHRuA2FlbQIxMAABHeWZSoASZREsJNfoeMCN73GwiSAGN65n5ZiqzxnzcXF932lbWLRpBUT9PQ_aem_buls-AObaedyKXGbFpbKsA" 
    },
    { 
      date: "MAY 31", 
      venue: "Vaterland", 
      location: "Oslo, Norway", 
      ticketLink: "https://www.vaterlandoslo.no/" 
    },
  ];

  return (
    <section id="tour" className="bg-metal-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">TOUR DATES</h2>
        
        <div className="space-y-4 md:w-3/4 mx-auto">
          {tours.map((tour, index) => (
            <div 
              key={index}
              className="bg-metal-light p-6 flex flex-col sm:flex-row items-center sm:items-center justify-between space-y-4 sm:space-y-0 text-center sm:text-left"
            >
              <div className="flex-1">
                <div className="text-xl font-bold text-white">{tour.date}</div>
                <div className="text-gray-400">{tour.venue}</div>
                <div className="text-gray-400">{tour.location}</div>
              </div>
              <a 
                href={tour.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
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