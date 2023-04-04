import { describe, expect, test, vi, Mock } from 'vitest'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { apiClient } from '@services/index'
import { renderHook, act } from '@testing-library/react'
import { useGames } from '../useGames'

vi.mock('react-query', async () => {
  const mod = await vi.importActual('react-query')
  return {
    ...(mod as Record<string, unknown>),
    useQuery: vi.fn(),
  }
})

vi.mock('@services/index', async () => {
  const mod = await vi.importActual('@services/index')
  return {
    ...(mod as Record<string, unknown>),
    apiClient: {
      get: vi.fn(),
    },
  }
})

const queryClient = new QueryClient()

describe('useGames', () => {
  test('should return games', async () => {
    ;(useQuery as Mock).mockReturnValueOnce({
      data: [
        { id: 1, name: 'Game 1' },
        { id: 2, name: 'Game 2' },
      ],
      isLoading: false,
      error: null,
    })

    const { result } = await act(async () =>
      renderHook(() => useGames(), {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      })
    )

    expect(result.current.games).toHaveLength(2)
  })

  test('should return an error', async () => {
    ;(useQuery as Mock).mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: new Error('Error'),
    })

    const { result } = await act(async () =>
      renderHook(() => useGames(), {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      })
    )

    expect(result.current.error?.message).toBe('Error')
  })
})
