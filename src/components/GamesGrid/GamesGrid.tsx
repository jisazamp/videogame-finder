import {
  Card,
  CardBody,
  Container,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { GameCard } from '@components/index'
import { useGames } from '@hooks/index'

export const GamesGrid = () => {
  const { games, error, isError, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        justifyItems='center'
        spacing={10}
        margin={2}
      >
        {skeletons.map((skeleton) => (
          <Card
            borderRadius='lg'
            data-testid='skeleton-card'
            height='100%'
            key={skeleton}
            margin={2}
            width='300px'
          >
            <Skeleton height='200px' />
            <CardBody>
              <SkeletonText />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
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
