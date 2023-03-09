import type { DeepPartial, Theme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/react'

export const fonts: DeepPartial<Theme['fonts']> = {
  ...theme.fonts,
  body: 'system-ui, sans-serif',
  heading: 'system-ui, sans-serif',
}
