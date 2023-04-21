import { useData } from '..'
import type { Game } from '@services/index'

const API_KEY = 'games'

export const useGames = () => useData<Game>('/' + API_KEY, API_KEY)
