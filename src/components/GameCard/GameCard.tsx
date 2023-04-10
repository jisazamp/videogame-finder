import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { PlatformIconList, CriticScore } from '@components/index'
import { Game, getCroppedImageUrl } from '@services/index'

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
      width='300px'
      _hover={{
        boxShadow: 'xl',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Image alt={game.name} src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading size='lg'>{game.name}</Heading>
        <HStack alignItems='center' justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
