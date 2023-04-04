import { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { apiClient } from '@services/index'

export interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message))
  }, [])

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
