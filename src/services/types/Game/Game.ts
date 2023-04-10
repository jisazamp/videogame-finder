export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  background_image: string
  id: number
  name: string
  parent_platforms: { platform: Platform }[]
}
