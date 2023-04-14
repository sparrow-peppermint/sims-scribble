import { screen, render } from '@testing-library/react'
import Start from './Start'
import '@testing-library/jest-dom'

describe('Testing the Start component', () => {
  test('If the paragraph is rendering on the page', () => {
    // ARRANGE
    render(<Start />)
    // ACT
    const text = screen.getByText(
      /enter a description as to what you want P2 to draw/
    )
    // ASSERT
    expect(text).toBeInTheDocument()
  })
})

// test('After the submit button is being clicked, page redirects',()=>{})

// test('Test if user input updates state',()=>{})
