import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/styles/theme'

interface ChakraProps {
  children: React.ReactNode
}

const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Chakra
