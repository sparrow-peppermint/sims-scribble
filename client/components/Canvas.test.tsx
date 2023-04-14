import { screen, render } from '@testing-library/react'
import Canvas from './Canvas'

test('Canvas renders a canvas element', () => {
  render(<Canvas width={700} height={500} />)
  const canvas = screen.getByRole('canvas')
  expect(canvas).toBeInTheDocumnet()
})
