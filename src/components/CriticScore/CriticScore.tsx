import { Badge, Tooltip } from '@chakra-ui/react'

interface Props {
  score: number
}

export const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Tooltip role='tooltip' label='Critic score'>
      <Badge
        borderRadius='md'
        colorScheme={color}
        data-testid='game-score'
        fontSize='md'
        paddingX={2}
      >
        {score}
      </Badge>
    </Tooltip>
  )
}
