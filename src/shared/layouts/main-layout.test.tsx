import { render, screen } from '@testing-library/react'

import MainLayout from './main-layout'

describe('MainLayout', () => {
  it('should render correctly', () => {
    render(<MainLayout>children</MainLayout>)
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
