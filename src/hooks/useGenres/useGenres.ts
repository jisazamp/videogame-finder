import { useData } from '..'
import type { Genre } from '@services/index'

const API_KEY = 'genres'

export const useGenres = () => useData<Genre>('/' + API_KEY, API_KEY)
