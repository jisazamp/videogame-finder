import { describe, test, expect, vi, Mock } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useGenres } from '@hooks/index'
import { GenreList } from '../GenreList'

vi.mock('@hooks/index', async () => {
  const mod = await vi.importActual('@hooks/index')
  return {
    ...(mod as Record<string, unknown>),
    useGenres: vi.fn(),
  }
})

const queryClient = new QueryClient()
const onSelectedGenre = vi.fn()

describe('Tests on <GenreList />', () => {
  test('should render the list of genres fetches', async () => {
    ;(useGenres as Mock).mockReturnValue({
      data: [
        { id: 1, name: 'Genre 1', image_background: 'imageurl' },
        { id: 2, name: 'Genre 2', image_background: 'imageurl' },
      ],
      error: null,
      isError: false,
      isLoading: false,
    })

    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <GenreList onGenreSelect={onSelectedGenre} />
        </QueryClientProvider>
      )
    })

    const genresList = screen.getAllByTestId('genre-list-item')
    expect(genresList.length).toBe(3)
  })

  test('should render a spinner when loading genres', async () => {
    ;(useGenres as Mock).mockReturnValue({
      isLoading: true,
    })

    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <GenreList onGenreSelect={onSelectedGenre} />
        </QueryClientProvider>
      )
    })

    const spinner = screen.getByTestId('genre-skeleton-container')
    expect(spinner).toBeDefined()
  })
})
