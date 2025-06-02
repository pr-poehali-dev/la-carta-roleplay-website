import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import GameFeatures from "@/components/GameFeatures";
import ServerStats from "@/components/ServerStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ServerStats />
      <FeatureCards />
      <GameFeatures />
      <Footer />
    </div>
  );
};

export default Index;
