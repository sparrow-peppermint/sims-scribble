import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Draw from './Draw'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing the Draw component', () => {
  test('If the canvas renders on page', () => {
    render(
      <Router>
        <Draw />
      </Router>
    )
    const canvas = screen.getByTestId('canvas')
    expect(canvas).toBeInTheDocument()
  })
})
