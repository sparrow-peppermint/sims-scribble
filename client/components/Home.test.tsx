import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

describe('Testing the Home component', () => {
  test('If the first <li> renders on page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    )
    const description = screen.getAllByRole('listitem')
    expect(description[0].innerHTML).toBe(
      'Player One writes a wacky prompt (secretly)'
    )
  }),
    test('If add player instructions render', () => {
      render(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      )
      const actual = screen.getByText(
        /enter the names of your players \(min 4\)/i
      )

      expect(actual.innerHTML).toMatch(
        'Enter the names of your players (min 4)'
      )
    })
})
