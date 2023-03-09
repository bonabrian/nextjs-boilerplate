import { render, screen } from '@testing-library/react'

import AuthLayout from './auth-layout'

describe('AuthLayout', () => {
  it('should render correctly', () => {
    render(<AuthLayout>children</AuthLayout>)
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
