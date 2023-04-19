import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'

describe('Testing the PlayerNames component', () => {
  test('If Add Player button renders on the home route', () => {
    render(
      <Router>
        <Home />
      </Router>
    )
    const button = screen.getByRole('button')
    expect(button.innerHTML).toBe('Add Player')
  })
})
