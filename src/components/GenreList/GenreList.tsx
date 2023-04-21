import { HStack, List, ListItem, Image, Text, Skeleton } from '@chakra-ui/react'
import { useGenres } from '@hooks/index'
import { getCroppedImageUrl } from '@services/index'

export const GenreList = () => {
  const { data: genres, isLoading } = useGenres()

  if (isLoading) {
    const skeletons = Array.from({ length: 10 }, (v, k) => k)

    return (
      <List data-testid="genre-skeleton-container">
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY='5px'>
            <Skeleton height='32px' />
          </ListItem>
        ))}
      </List>
    )
  }

  return (
    <List>
      {genres?.map((genre) => (
        <ListItem
          paddingY='5px'
          key={genre.id}
          data-testid='genre-list-item'
          style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <HStack>
            <Image
              borderRadius={8}
              boxSize='32px'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
