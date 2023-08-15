import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import optimizedImage from "../services/utils";
const GenresList = () => {
  const { data } = useGenres();

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
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
