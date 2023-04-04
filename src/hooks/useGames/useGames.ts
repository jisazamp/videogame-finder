import { useState, useEffect } from 'react'
import { apiClient, Game } from '@services/index'

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message))

    return () => controller.abort()
  }, [])

  return { games, error }
}
