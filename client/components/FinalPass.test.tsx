import { screen, render } from '@testing-library/react'

import FinalPass from './FinalPass'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

test('Paragraph renders and has the correct text', () => {
  render(
    <BrowserRouter>
      <FinalPass />
    </BrowserRouter>
  )
  expect(screen.getByText('Game Complete!')).toBeInTheDocument()
})

test('Button renders and has the correct text', () => {
  render(
    <BrowserRouter>
      <FinalPass />
    </BrowserRouter>
  )
  const button = screen.getByRole('button', { name: /view the masterpiece/i })
  expect(button.innerHTML).toMatch(/View the Masterpiece/i)
})
