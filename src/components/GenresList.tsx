import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import optimizedImage from "../services/utils";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, loading } = useGenres();

  if (loading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={optimizedImage(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"lg"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
