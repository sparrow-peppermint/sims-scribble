import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Write from './Write'

describe('Testing the Write component', () => {
  test('If the h2 is rendering on the page', () => {
    render(<Write />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  }),
    test('if the image is rendering on the page', () => {
      render(<Write />)
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
    }),
    test('if the input is rendering on the page', () => {
      render(<Write />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })
})
