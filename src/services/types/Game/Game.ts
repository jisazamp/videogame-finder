import type { Genre } from '../Genre/Genre'

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  background_image: string
  genres: Genre[]
  id: number
  metacritic: number
  name: string
  parent_platforms: { platform: Platform }[]
}
