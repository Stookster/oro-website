import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LatestRelease from "@/components/LatestRelease";
import TourDates from "@/components/TourDates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-metal-dark text-white">
      <Navigation />
      <Hero />
      <LatestRelease />
      <TourDates />
      <Footer />
    </div>
  );
};

export default Index;