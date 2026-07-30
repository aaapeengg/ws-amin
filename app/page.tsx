import Hero from "@/components/Hero";
import SearchGame from "@/components/SearchGame";
import GameSection from "@/components/GameSection";
import AllGames from "@/components/AllGames";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchGame />
      <GameSection />
      <AllGames />
      <Features />
    </>
  );
}