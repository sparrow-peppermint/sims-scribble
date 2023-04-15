import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pass from './Pass'
import { renderWithRedux } from '../test-utils'

describe('Testing the Pass component', () => {
  test('If the next player with correct id renders on the NextPlayer page', () => {
    renderWithRedux(<Pass />, {
      initialEntries: ['/2'],
      route: '/:id',
      initialState: { players: 4 },
    })

    const message = screen.getByText('Now pass device to Player 2')

    expect(message).toBeInTheDocument()
  })
  test('If the next player with correct id renders on the FinalPass page', () => {
    renderWithRedux(<Pass />, {
      initialEntries: ['/5'],
      route: '/:id',
      initialState: { players: 4 },
    })

    const message = screen.getByText('This is the end of the game')

    expect(message).toBeInTheDocument()
  })
})
