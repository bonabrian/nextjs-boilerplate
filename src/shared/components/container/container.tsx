import type { ContainerProps as ChakraContainerProps } from '@chakra-ui/react'
import { Container as ChakraContainer, forwardRef } from '@chakra-ui/react'

const Container = forwardRef<ChakraContainerProps, 'div'>(
  ({ maxW = '5xl', ...rest }, ref) => {
    return <ChakraContainer maxW={maxW} {...rest} ref={ref} />
  },
)

export default Container
