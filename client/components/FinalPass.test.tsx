import { screen, render } from '@testing-library/react'

import FinalPass from './FinalPass'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

test('Paragraph renders and has the correct text', () => {
  render(
    <>
      <BrowserRouter>
        <FinalPass />
      </BrowserRouter>
    </>
  )

  expect(screen.getByText('This is the end of the game')).toBeInTheDocument()
})

test('Button renders and has the correct text', () => {
  render(
    <>
      <BrowserRouter>
        <FinalPass />
      </BrowserRouter>
    </>
  )

  const button = screen.getByRole('button')

  expect(button.innerHTML).toMatch(/masterpeice/i)
})
