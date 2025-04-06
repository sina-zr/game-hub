import useData from "./useData";
import { Genre } from "../components/GenreList";

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

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
export default useGames;
