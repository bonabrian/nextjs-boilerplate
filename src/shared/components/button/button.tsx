import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { forwardRef } from '@chakra-ui/react'
import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {}

const Button = forwardRef<ButtonProps, 'button'>(
  ({ colorScheme = 'brand', ...rest }, ref) => {
    return <ChakraButton colorScheme={colorScheme} {...rest} ref={ref} />
  },
)

export default Button
