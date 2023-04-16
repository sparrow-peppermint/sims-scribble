import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Write from './Write'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing the Write component', () => {
  test('If the h2 is rendering on the page', () => {
    render(
      <Router>
        <Write />
      </Router>
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  }),
    test('if the input is rendering on the page', () => {
      render(
        <>
          <Router>
            <Write />
          </Router>
        </>
      )
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    }),
    test('if input can have text added', () => {
      render(
        <>
          <Router>
            <Write />
          </Router>
        </>
      )
      const input = screen.getByPlaceholderText(
        'frog smoking a pipe...'
      ) as HTMLInputElement
      fireEvent.change(input, { target: { value: 'Test is working' } })
      expect(input.value).toBe('Test is working')
    })
  test('if the SubmitButton renders on the page', () => {
    render(
      <Router>
        <Write />
      </Router>
    )

    const button = screen.getByText('Submit')
    expect(button).toBeInTheDocument()
  })
})
