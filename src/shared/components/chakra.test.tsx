import { render, screen } from '@testing-library/react'

import Chakra from './chakra'

describe('Chakra', () => {
  it('should render correctly', () => {
    render(<Chakra>Under Chakra Provider</Chakra>)
    expect(screen.getByText('Under Chakra Provider')).toBeInTheDocument()
  })
})
