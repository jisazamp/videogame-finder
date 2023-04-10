import { expect, test, describe } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { PlatformIconList } from '../PlatformIconList'
import userEvent from '@testing-library/user-event'
import type { Platform } from '@services/index'

const mockPlatforms: Platform[] = [
  { id: 1, name: 'PC', slug: 'pc' },
  { id: 2, name: 'PlayStation', slug: 'playstation' },
]

describe('PlatformIconList', () => {
  test('renders PlatformIconList', () => {
    render(<PlatformIconList platforms={mockPlatforms} />)
    expect(screen).toMatchSnapshot()
  })

  test('should render the icons of the platforms provided as prop', () => {
    render(<PlatformIconList platforms={mockPlatforms} />)

    const icons = screen.getAllByTestId('platform-icon')
    expect(icons.length).toBe(2)
  })

  test('should show the tooltip with the platform name on hover', async () => {
    render(<PlatformIconList platforms={mockPlatforms} />)

    const icons = screen.getAllByTestId('platform-icon')
    userEvent.hover(icons[0])

    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip')
      expect(tooltip).toBeDefined()
    })
  })
})
