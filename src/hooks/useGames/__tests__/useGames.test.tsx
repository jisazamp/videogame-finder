import { describe, expect, test, vi, Mock } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { apiClient } from '@services/index'
import { useGames } from '../useGames'

vi.mock('@services/index', async () => {
  const mod = await vi.importActual('@services/index')
  return {
    ...(mod as Record<string, unknown>),
    apiClient: {
      get: vi.fn(),
    },
  }
})

describe('useGames', () => {
  test('should return games', async () => {
    ;(apiClient.get as Mock).mockResolvedValueOnce({
      data: {
        results: [
          {
            id: 1,
            name: 'Game 1',
          },
          {
            id: 2,
            name: 'Game 2',
          },
        ],
      },
    })

    const { result } = await act(async () => renderHook(() => useGames()))
    expect(result.current.games).toHaveLength(2)
  })

  test('should return an error', async () => {
    ;(apiClient.get as Mock).mockRejectedValueOnce(new Error('Error'))

    const { result } = await act(async () => renderHook(() => useGames()))
    expect(result.current.error).toBe('Error')
  })
})
