import {
  HStack,
  List,
  ListItem,
  Image,
  Skeleton,
  Button,
} from '@chakra-ui/react'
import { useGenres } from '@hooks/index'
import { getCroppedImageUrl } from '@services/index'
import type { Genre } from '@services/index'

interface Props {
  onGenreSelect: (genre: Genre | null) => void
}

export const GenreList = ({ onGenreSelect }: Props) => {
  const { data: genres, isLoading } = useGenres()

  if (isLoading) {
    const skeletons = Array.from({ length: 14 }, (v, k) => k)

    return (
      <List data-testid='genre-skeleton-container'>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY='5px'>
            <HStack>
              <Skeleton width='32px' height='32px' borderRadius={8} />
              <Skeleton height='16px' width='100px' borderRadius={4} />
            </HStack>
          </ListItem>
        ))}
      </List>
    )
  }

  return (
    <List>
      <ListItem paddingY='5px' data-testid='genre-list-item'>
        <HStack>
          <Image
            borderRadius={8}
            boxSize='32px'
            src={getCroppedImageUrl(
              'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg'
            )}
          />
          <Button
            variant='link'
            style={{ left: -8 }}
            onClick={() => onGenreSelect(null)}
          >
            All
          </Button>
        </HStack>
      </ListItem>
      {genres?.map((genre) => (
        <ListItem paddingY='5px' key={genre.id} data-testid='genre-list-item'>
          <HStack>
            <Image
              borderRadius={8}
              boxSize='32px'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button variant='link' onClick={() => onGenreSelect(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
