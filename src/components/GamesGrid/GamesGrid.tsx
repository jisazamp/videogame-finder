import { Container, SimpleGrid, Text } from '@chakra-ui/react'
import { GameCard } from '@components/index'
import { useGames } from '@hooks/index'

export const GamesGrid = () => {
  const { games, error, isError, isLoading } = useGames()

  if (isLoading) {
    return (
      <Container
        data-testid='loading-container'
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        height='100vh'
      >
        <Text>Loading...</Text>
      </Container>
    )
  }

  if (isError) {
    return (
      <Container
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        height='100vh'
      >
        <Text>{error?.message}</Text>
      </Container>
    )
  }

  return (
    <>
      <SimpleGrid data-testid='games-list'>
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}
