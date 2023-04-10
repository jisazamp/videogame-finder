import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { PlatformIconList } from '@components/index'
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
      _hover={{
        boxShadow: 'xl',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading size='lg'>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  )
}
