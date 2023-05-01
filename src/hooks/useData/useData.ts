import { apiClient } from '@services/index'
import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'

interface FetchResponse<T> {
  count: number
  results: T[]
}

export const useData = <T>(
  endpoint: string,
  queryKey: string,
  requestConfig?: AxiosRequestConfig
) => {
  const { data, error, isError, isLoading } = useQuery<T[], Error>(
    [queryKey, requestConfig],
    async () => {
      return apiClient
        .get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((response) => response.data.results)
    }
  )

  return { data, error, isLoading, isError }
}
