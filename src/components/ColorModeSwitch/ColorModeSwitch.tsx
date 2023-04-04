import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      aria-label='Toggle color mode'
      data-testid='color-mode-switch'
      display='block'
      variant='ghost'
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? (
        <BsFillMoonFill data-testid='moon-icon' size={20} />
      ) : (
        <BsFillSunFill data-testid='sun-icon' size={20} />
      )}
    </Button>
  )
}
