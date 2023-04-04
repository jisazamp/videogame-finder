import logo from '@assets/Images/logo.webp'
import { HStack, Image } from '@chakra-ui/react'
import { ColorModeSwitch } from '@components/index'

export const NavBar = () => {
  return (
    <HStack alignItems='center' justifyContent='space-between' padding='10px'>
      <Image src={logo} alt='Logo' boxSize='60px' objectFit='cover' />
      <ColorModeSwitch />
    </HStack>
  )
}
