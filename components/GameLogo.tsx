import Image from "next/image";

export default function GameLogo({
  game,
}: {
  game: string;
}) {
  const logos: Record<string, string> = {
    "Mobile Legends": "/games/ml.jpg",
    "Free Fire": "/games/ff.jpg",
    PUBG: "/games/pubg.jpg",
    Valorant: "/games/valorant.jpg",
  };

  return (
    <Image
      src={logos[game] || "/logo.png"}
      alt={game}
      width={80}
      height={80}
      className="rounded-xl"
    />
  );
}