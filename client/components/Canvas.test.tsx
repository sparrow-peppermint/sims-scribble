import { screen, render } from '@testing-library/react'
import Canvas from './Canvas'
import '@testing-library/jest-dom'

test('Canvas renders a canvas element', () => {
  render(<Canvas width={700} height={500} />)
  const canvas = screen.getByTestId('canvas')
  expect(canvas).toBeInTheDocument()
})
