import {
  CardBody,
  Container,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { CardContainer, GameCard } from '@components/index'
import { useGames } from '@hooks/index'

export const GamesGrid = () => {
  const { data: games, error, isError, isLoading } = useGames()

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
          <CardContainer key={skeleton} testId='skeleton-card'>
            <Skeleton height='200px' />
            <CardBody>
              <SkeletonText />
            </CardBody>
          </CardContainer>
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
        spacing={3}
        paddingX={2}
        marginBottom={8}
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
