import { describe, test, expect, vi, Mock } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { GamesGrid, Game } from '../GamesGrid'
import { apiClient } from '@services/index'

vi.mock('@services/index', async () => {
  const mod = await vi.importActual('@services/index')
  return {
    ...(mod as Record<string, unknown>),
    apiClient: {
      get: vi.fn(),
    },
  }
})

describe('<GamesGrid />', () => {
  test('should show a message when there is an error', async () => {
    ;(apiClient.get as Mock).mockRejectedValueOnce(new Error('Error'))

    await act(async () => {
      render(<GamesGrid />)
    })

    const errorMessage = screen.getByTestId('error-message')
    expect(errorMessage).toBeTruthy()
  })

  test('should show a list of games', async () => {
    const games: Game[] = [
      {
        id: 1,
        name: 'Game 1',
      },
      {
        id: 2,
        name: 'Game 2',
      },
    ]

    ;(apiClient.get as Mock).mockResolvedValueOnce({
      data: {
        results: games,
      },
    })

    await act(async () => {
      render(<GamesGrid />)
    })

    const gamesList = await screen.findByTestId('games-list')
    expect(gamesList).toBeTruthy()
    expect(gamesList.children.length).toBe(2)
  })
})
