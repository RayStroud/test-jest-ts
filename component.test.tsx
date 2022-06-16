import { render, screen } from '@testing-library/react'
import { SomeComponent } from './component'

describe('SomeComponent', () => {
  it('renders correctly', () => {
    render(<SomeComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.getByText('Some Content')).toBeInTheDocument()
  })
})
