import { useData } from '..'
import type { Game, Genre } from '@services/index'

const API_KEY = 'games'

export const useGames = (selectedGenre: Genre | null) =>
  useData<Game>('/' + API_KEY, API_KEY, {
    params: { genres: selectedGenre?.id },
  })
