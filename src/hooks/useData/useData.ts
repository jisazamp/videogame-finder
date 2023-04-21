import { apiClient } from '@services/index'
import { useQuery } from 'react-query'

interface FetchResponse<T> {
  count: number
  results: T[]
}

export const useData = <T>(endpoint: string, queryKey: string) => {
  const { data, error, isError, isLoading } = useQuery<T[], Error>(
    queryKey,
    async () => {
      return apiClient
        .get<FetchResponse<T>>(endpoint)
        .then((response) => response.data.results)
    }
  )

  return { data, error, isLoading, isError }
}
