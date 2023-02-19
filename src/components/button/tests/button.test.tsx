import { render, screen } from '@testing-library/react'

import Button from '../button'

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
