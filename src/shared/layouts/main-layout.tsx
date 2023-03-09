import { Box, Container } from '../components'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container>{children}</Container>
    </Box>
  )
}

export default MainLayout
