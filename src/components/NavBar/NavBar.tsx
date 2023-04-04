import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '@assets/Images/logo.webp'

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt='Logo' boxSize='60px' objectFit='cover' />
      <Text>NavBar</Text>
    </HStack>
  )
}
