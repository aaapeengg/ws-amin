import HeroSlider from "@/components/HeroSlider";
import RecommendedGames from "@/components/RecommendedGames";
import GameSection from "@/components/GameSection";
import AllGames from "@/components/AllGames";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 pt-5">

        <div
          className="
            relative
            w-full
            h-[180px]
            sm:h-[220px]
            lg:h-[340px]
            overflow-hidden
            rounded-3xl
          "
        >
          <HeroSlider />
        </div>

      </section>

      <RecommendedGames />

      <GameSection />

      <AllGames />

      <Features />
    </>
  );
}