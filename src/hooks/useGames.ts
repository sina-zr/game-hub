import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

export default function useGames() {
  const [games, setGames] = useState<Game[]>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
}
