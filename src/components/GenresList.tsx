import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
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
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={optimizedImage(genre.image_background)}
                alt={genre.name}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectedGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"md"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
