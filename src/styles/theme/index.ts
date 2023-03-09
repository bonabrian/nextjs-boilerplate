import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { config } from './config'
import { fonts } from './fonts'

const overrides = {
  colors,
  config,
  fonts,
}

export default extendTheme(overrides)
