"use client";

import { useMemo, useState } from "react";

import AdminSearch from "./ui/AdminSearch";

import GameRow from "./GameRow";

type Game = {
  id: string;
  name: string;
  slug: string;
  image: string;
};

type Props = {
  games: Game[];
};

export default function GameTable({
  games,
}: Props) {

const [search, setSearch] = useState("");

const filteredGames = useMemo(() => {
  return games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );
}, [games, search]);

return (

<>

<AdminSearch
  value={search}
  onChange={setSearch}
  placeholder="Cari game..."
/>

<div className="space-y-5">

  {filteredGames.map((game) => (

    <GameRow
      key={game.id}
      game={game}
    />

  ))}

</div>

</>

);
}