import { useState } from 'react'
import { Grid, Show, GridItem } from '@chakra-ui/react'
import { NavBar, GamesGrid, GenreList } from '@components/index'
import type { Genre } from './services'

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const onGenreSelect = (genre: Genre | null) => setSelectedGenre(genre)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '240px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX='10px'>
          <GenreList onGenreSelect={onGenreSelect} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}
