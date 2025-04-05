import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid minChildWidth="sm" gap="40px" padding="20px">
        {games?.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
}
