import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PlayerNames from './PlayerNames'

describe('Testing the PlayerNames component', () => {
  test('If Add Player button renders on the home route', () => {
    render(
      <Router>
        <PlayerNames
          onNamesChange={function (mockPlayers: string[]): void {
            throw new Error('Function not implemented.')
          }}
        />
      </Router>
    )
    const button = screen.getByRole('button')
    expect(button.innerHTML).toBe('Add Player')
  })
})
