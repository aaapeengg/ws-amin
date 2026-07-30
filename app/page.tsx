import Hero from "@/components/Hero";
import SearchGame from "@/components/SearchGame";
import GameSection from "@/components/GameSection";
import AllGames from "@/components/AllGames";
import Features from "@/components/Features";
import PromoSection from "@/components/PromoSection";
import WhyChoose from "@/components/WhyChoose";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchGame />
      <GameSection />
      <AllGames />
      <PromoSection />
      <WhyChoose />
      <Statistics />
      <Features />
    </>
  );
}