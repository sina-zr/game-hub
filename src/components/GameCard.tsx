import { Badge, Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconList slugs={game.platforms.map((p) => p.platform.slug)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
