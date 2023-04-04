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

describe('<GamesGrid />', () => {
  test('should show a message when there is an error', async () => {
    ;(useGames as Mock).mockReturnValueOnce({
      games: [],
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
    ;(useGames as Mock).mockReturnValueOnce({
      games: [
        { id: 1, name: 'Game 1' },
        { id: 2, name: 'Game 2' },
      ],
      error: null,
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const gamesList = await screen.findByTestId('games-list')
    expect(gamesList).toBeTruthy()
    expect(gamesList.children.length).toBe(2)
  })

  test('should show a loading message when loading', async () => {
    ;(useGames as Mock).mockReturnValueOnce({
      games: [],
      error: null,
      isLoading: true,
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const loadingMessage = screen.getByText('Loading...')
    expect(loadingMessage).toBeTruthy()
  })
})
