import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon, Text, Tooltip } from '@chakra-ui/react'

import type { Platform } from '@services/index'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

export const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Tooltip
          data-testid='platform-tooltip'
          role='tooltip'
          key={platform.id}
          label={platform.name}
        >
          <span>
            <Icon
              as={iconsMap[platform.slug]}
              color='gray.500'
              data-testid='platform-icon'
            />
          </span>
        </Tooltip>
      ))}
    </HStack>
  )
}
