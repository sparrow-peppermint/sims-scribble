import { screen, render } from '@testing-library/react'
import Header from './Header'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('logo renders in header', () => {
  render(
    <>
      <Router>
        <Header />
      </Router>
    </>
  )
  const logo = screen.getByAltText('logo')
  expect(logo).toBeInTheDocument()
})
