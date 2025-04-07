import useData from "./useData";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: { slug: string } }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText } },
    [gameQuery]
  );
export default useGames;
