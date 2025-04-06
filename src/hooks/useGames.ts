import useData from "./useData";
import { Genre } from "../components/GenreList";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: { slug: string } }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id]);
export default useGames;
