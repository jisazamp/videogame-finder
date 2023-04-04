import { Text } from '@chakra-ui/react'
import { useGames } from '@hooks/index'

export const GamesGrid = () => {
  const { games, error } = useGames()

  return (
    <>
      {error && <Text data-testid='error-message'>{error}</Text>}
      <ul data-testid='games-list'>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}
