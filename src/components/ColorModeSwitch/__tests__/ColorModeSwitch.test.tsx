import { describe, test, expect, vi, Mock } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorModeSwitch } from '../ColorModeSwitch'
import { useColorMode } from '@chakra-ui/react'

vi.mock('@chakra-ui/react', async () => {
  const mod = await vi.importActual('@chakra-ui/react')
  return {
    ...(mod as Record<string, unknown>),
    useColorMode: vi.fn(),
  }
})

describe('<ColorModeSwitch />', () => {
  test('should render a sun icon if the color mode is dark', () => {
    ;(useColorMode as Mock).mockReturnValue({
      colorMode: 'dark',
      toggleColorMode: () => {},
    })
    render(<ColorModeSwitch />)

    const sunIcon = screen.getByTestId('sun-icon')
    expect(sunIcon).toBeTruthy()
  })

  test('should render a moon icon if the color mode is light', () => {
    ;(useColorMode as Mock).mockReturnValue({
      colorMode: 'light',
      toggleColorMode: () => {},
    })

    render(<ColorModeSwitch />)

    const moonIcon = screen.getByTestId('moon-icon')
    expect(moonIcon).toBeTruthy()
  })

  test('should toggle the color mode when the button is clicked', () => {
    const toggleColorMode = vi.fn()
    ;(useColorMode as Mock).mockReturnValue({
      colorMode: 'dark',
      toggleColorMode,
    })

    render(<ColorModeSwitch />)

    const button = screen.getByTestId('color-mode-switch')
    button.click()

    expect(toggleColorMode).toHaveBeenCalled()
  })
})
