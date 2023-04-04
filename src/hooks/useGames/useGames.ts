import { apiClient, Game } from '@services/index'
import { useQuery } from 'react-query'

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export const useGames = () => {
  const {
    data: games,
    error,
    isError,
    isLoading,
  } = useQuery<Game[], Error>('games', async () => {
    return apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => response.data.results)
  })

  return { games, error, isLoading, isError }
}
