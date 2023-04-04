import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '@services/index'

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card
      borderRadius='lg'
      boxShadow='lg'
      data-testid='game-card'
      margin={2}
      maxW='sm'
      overflow='hidden'
      _hover={{ boxShadow: 'xl', cursor: 'pointer' }}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
