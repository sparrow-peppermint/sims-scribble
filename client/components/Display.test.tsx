import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

describe('Testing Display component', () => {
  test('If captions are rendering on page', () => {
    render(<Display />)
    const caption = screen.getByText('first prompt')
    expect(caption).toBeInTheDocument()
  }),
    test('if the image is rendering on the page', () => {
      render(<Display />)
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
    })
})
