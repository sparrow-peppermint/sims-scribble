import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import NextPlayer from './NextPlayer'

describe('Testing the NextPlayer component', () => {
  test.todo('If the correct player renders on the page')

  test('If the button text is rendering', () => {
    render(
      <>
        <Router>
          <NextPlayer id={2} />
        </Router>
      </>
    )

    const text = screen.getByText('Ready!')

    expect(text).toBeInTheDocument()
  })
})
