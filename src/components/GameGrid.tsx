import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "./GenreList";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { data, errors, isLoading } = useGames(selectedGenre);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid minChildWidth="sm" gap="40px" padding="20px">
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {!isLoading && data?.map((g) => <GameCard key={g.id} game={g} />)}
      </SimpleGrid>
    </>
  );
}
