import { screen, render } from '@testing-library/react'
import Canvas from './Canvas'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('Canvas renders a canvas element', () => {
  render(
    <>
      <Router>
        <Canvas id={1} />
      </Router>
    </>
  )
  const canvas = screen.getByTestId('canvas')
  expect(canvas).toBeInTheDocument()
})
