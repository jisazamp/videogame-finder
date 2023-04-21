import { Card } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
  testId?: string
}

export const CardContainer = ({ children, testId = 'container' }: Props) => {
  return (
    <Card
      borderRadius='lg'
      data-testid={testId}
      height='100%'
      margin={2}
      overflow='hidden'
      width='100%'
      _hover={{
        boxShadow: 'xl',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {children}
    </Card>
  )
}
