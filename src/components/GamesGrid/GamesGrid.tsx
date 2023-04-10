import { Container, SimpleGrid, Text } from '@chakra-ui/react'
import { GameCard } from '@components/index'
import { useGames } from '@hooks/index'

export const GamesGrid = () => {
  const { games, error, isError, isLoading } = useGames()

  if (isLoading) {
    return (
      <Container
        alignItems='flex-start'
        data-testid='loading-container'
        display='flex'
        height='100vh'
        justifyContent='center'
      >
        <Text>Loading...</Text>
      </Container>
    )
  }

  if (isError) {
    return (
      <Container
        alignItems='flex-start'
        display='flex'
        height='100vh'
        justifyContent='center'
      >
        <Text>{error?.message}</Text>
      </Container>
    )
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={10}
        data-testid='games-list'
        justifyItems='center'
      >
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}
