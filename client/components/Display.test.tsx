import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'
import { getData } from '../apis/api'

jest.mock('../apis/api', () => ({
  getData: jest.fn(() =>
    Promise.resolve([
      { id: 1, name: null, file: null, caption: 'first prompt' },
      {
        id: 2,
        name: null,
        file: 'https://example.com/file2.png',
        caption: null,
      },
    ])
  ),
}))

describe('Testing Display component', () => {
  test('If captions are rendering on page', async () => {
    render(<Display />)
    const caption = await screen.findByText('first prompt')
    expect(caption).toBeInTheDocument()
  })

  test('if the image is rendering on the page', async () => {
    render(<Display />)
    const image = await screen.findByRole('img')
    expect(image).toBeInTheDocument()
  })
})
