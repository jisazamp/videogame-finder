import { describe, test, expect, vi, Mock } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useGames } from '@hooks/index'
import { GamesGrid } from '../GamesGrid'

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

describe('<GamesGrid />', () => {
  test('should show a message when there is an error', async () => {
    ;(useGames as Mock).mockReturnValue({
      data: [],
      error: { message: 'Error' },
      isError: true,
      isLoading: false,
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const errorMessage = screen.getByText('Error')
    expect(errorMessage).toBeTruthy()
  })

  test('should show a list of games', async () => {
    ;(useGames as Mock).mockReturnValue({
      data: [
        {
          id: 1,
          name: 'Game 1',
          background_image: 'image1',
          parent_platforms: [{ platform: { id: 1, name: 'PC', slug: 'pc' } }],
        },
        {
          id: 2,
          name: 'Game 2',
          background_image: 'image2',
          parent_platforms: [{ platform: { id: 1, name: 'PC', slug: 'pc' } }],
        },
      ],
      error: null,
      isLoading: false,
      isError: false,
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const gamesList = await screen.findByTestId('games-list')
    expect(gamesList).toBeTruthy()
    expect(gamesList.children.length).toBe(2)
  })

  test('should show skeleton cards when loading', async () => {
    ;(useGames as Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      error: null,
      data: [],
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const skeletonCards = screen.getAllByTestId('skeleton-card')
    expect(skeletonCards.length).toBe(6)
  })
})
