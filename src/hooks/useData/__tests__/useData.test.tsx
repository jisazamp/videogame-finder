import { vi, describe, expect, test, Mock } from 'vitest'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { act, renderHook } from '@testing-library/react'
import { useData } from '../useData'
import type { Genre } from '@services/index'

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
const mockGenres: Genre[] = [
  { id: 1, name: 'Genre 1' },
  { id: 2, name: 'Genre 2' },
]
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('Tests on the useData hook', () => {
  test('should return genres', async () => {
    ;(useQuery as Mock).mockReturnValue({
      data: mockGenres,
      error: null,
      isLoading: false,
    })

    const { result } = await act(async () =>
      renderHook(() => useData('/games', 'games'), { wrapper })
    )

    expect(result.current.data).toHaveLength(2)
  })
})
