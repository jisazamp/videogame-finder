import { Grid, Show, GridItem } from '@chakra-ui/react'
import { NavBar, GamesGrid } from '@components/index'

export const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}
