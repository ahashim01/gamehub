import { Grid, GridItem, Show, HStack, Box, Flex } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 3fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Box>
        </Flex>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
