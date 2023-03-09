import type { BoxProps as ChakraBoxProps } from '@chakra-ui/react'
import { Box as ChakraBox, forwardRef } from '@chakra-ui/react'

interface BoxProps extends ChakraBoxProps {}

const Box = forwardRef<BoxProps, 'div'>((props, ref) => {
  return <ChakraBox {...props} ref={ref} />
})

export default Box
