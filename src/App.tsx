import { Grid, Show, GridItem } from '@chakra-ui/react'
import { NavBar, GamesGrid, GenreList } from '@components/index'

export const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX='10px'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}
