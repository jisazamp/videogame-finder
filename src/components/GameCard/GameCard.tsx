import { CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { CardContainer, PlatformIconList, CriticScore } from '@components/index'
import { Game, getCroppedImageUrl } from '@services/index'

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <CardContainer testId='game-card'>
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
    </CardContainer>
  )
}
