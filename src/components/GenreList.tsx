import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  onSelectGenre(genre: Genre): void;
  selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, errors, isLoading } = useData<Genre>("/genres", undefined, [], true);

  if (errors.length > 0) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List.Root as="ul" listStyleType="none">
      {data?.map((g) => (
        <List.Item key={g.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
            <Button variant={selectedGenre?.id == g.id ? "solid" : "ghost"} onClick={() => onSelectGenre(g)} fontSize="large">
              {g.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
