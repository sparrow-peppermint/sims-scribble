import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pass from './Pass'
import { renderWithRedux } from '../test-utils'

describe('Testing the Pass component', () => {
  test.todo(
    'If the next player with correct id renders on the NextPlayer page'
  ),
    test('If the next player with correct id renders on the FinalPass page', () => {
      renderWithRedux(<Pass />, {
        initialEntries: ['/5'],
        route: '/:id',
        initialState: { players: 4 },
      })

      const message = screen.getByText(/View the masterpiece/i)

      expect(message.innerHTML).toContain('View the Masterpiece')
    })
})
