import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

describe('Testing the Home component', () => {
  test('If the description is rendering on page', () => {
    render(<Home />)
    const description = screen.getByText(
      'Draw what you read and caption what you see'
    )
    expect(description).toBeInTheDocument()
  }),
    test('If player number input is rendering on page', () => {
      render(<Home />)
      const input = screen.getByRole('spinbutton')
      expect(input).toBeInTheDocument()
    })
})
