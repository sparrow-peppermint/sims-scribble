import { screen, render, fireEvent } from '@testing-library/react'
import Start from './Start'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing the Start component', () => {
  test('If the paragraph is rendering on the page', () => {
    // ARRANGE
    render(
      <Router>
        <Start />
      </Router>
    )
    // ACT
    const text = screen.getByText(
      /enter a description as to what you want P2 to draw/
    )
    // ASSERT
    expect(text).toBeInTheDocument()
  }),
    test('if the SubmitButton renders on the page', () => {
      render(
        <Router>
          <Start />
        </Router>
      )

      const button = screen.getByText('Submit')
      expect(button).toBeInTheDocument()
    }),
    test('if user input updates state', () => {
      render(
        <>
          <Router>
            <Start />
          </Router>
        </>
      )
      const input = screen.getByRole('textbox') as HTMLInputElement
      fireEvent.change(input, { target: { value: 'Testing testing 123' } })
      expect(input.value).toBe('Testing testing 123')
    })

  test('If placeholder is displaying', () => {
    render(
      <>
        <Router>
          <Start />
        </Router>
      </>
    )
    const input = screen.getByPlaceholderText(
      'Enter prompt for user to draw'
    ) as HTMLInputElement

    expect(input.placeholder).toBe('Enter prompt for user to draw')
  })
})
