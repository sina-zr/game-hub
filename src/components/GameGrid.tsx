import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GameGrid() {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games?.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
}
