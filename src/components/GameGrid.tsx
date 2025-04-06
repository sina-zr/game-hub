import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { games, errors, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid minChildWidth="sm" gap="40px" padding="20px">
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games?.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
}
