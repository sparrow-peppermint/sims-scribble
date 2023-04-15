import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing the Home component', () => {
  test('If the description is rendering on page', () => {
    render(
      <Router>
        <Home />
      </Router>
    )
    const description = screen.getByText(
      'Draw what you read and caption what you see'
    )
    expect(description).toBeInTheDocument()
  }),
    test('If player number input is rendering on page', () => {
      render(
        <Router>
          <Home />
        </Router>
      )
      const input = screen.getByRole('spinbutton')
      expect(input).toBeInTheDocument()
    })
})
