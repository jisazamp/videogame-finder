import { describe, test, expect, vi, Mock } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useGames } from '@hooks/index'
import { GamesGrid } from '../GamesGrid'
import type { Genre } from '@services/index'

vi.mock('@hooks/index', async () => {
  const mod = await vi.importActual('@hooks/index')
  return {
    ...(mod as Record<string, unknown>),
    useGames: vi.fn(),
  }
})

vi.mock('@chakra-ui/react', async () => {
  const mod = await vi.importActual('@chakra-ui/react')
  return {
    ...(mod as Record<string, unknown>),
    Skeleton: vi.fn(),
    SkeletonText: vi.fn(),
  }
})

const mockGames = [
  {
    id: 1,
    name: 'Game 1',
    background_image: 'image1',
    parent_platforms: [{ platform: { id: 1, name: 'PC', slug: 'pc' } }],
    genres: [{ id: 1, name: 'Action', slug: 'action' }],
  },
  {
    id: 2,
    name: 'Game 2',
    background_image: 'image2',
    parent_platforms: [{ platform: { id: 1, name: 'PC', slug: 'pc' } }],
    genres: [{ id: 1, name: 'RPG', slug: 'rpg' }],
  },
]

describe('<GamesGrid />', () => {
  test('should show a message when there is an error', async () => {
    ;(useGames as Mock).mockReturnValue({
      data: [],
      error: { message: 'Error' },
      isError: true,
      isLoading: false,
    })

    await act(async () => {
      render(<GamesGrid selectedGenre={null} />)
    })

    const errorMessage = screen.getByText('Error')
    expect(errorMessage).toBeTruthy()
  })

  test('should show a list of games', async () => {
    ;(useGames as Mock).mockReturnValue({
      data: mockGames,
      error: null,
      isLoading: false,
      isError: false,
    })

    await act(async () => {
      render(<GamesGrid selectedGenre={null} />)
    })

    const gamesList = screen.getAllByTestId('game-card')
    expect(gamesList.length).toBe(2)
  })

  test('should show skeleton cards when loading', async () => {
    ;(useGames as Mock).mockReturnValue({
      data: [],
      error: null,
      isError: false,
      isLoading: true,
    })

    await act(async () => {
      render(<GamesGrid selectedGenre={null} />)
    })

    const skeletonCards = screen.getAllByTestId('skeleton-card')
    expect(skeletonCards.length).toBe(6)
  })
})
