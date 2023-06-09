import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'
import { getData } from '../apis/api'
import { BrowserRouter } from 'react-router-dom'

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
    render(
      <BrowserRouter>
        <Display />
      </BrowserRouter>
    )
    const caption = await screen.findByText(/-/)
    expect(caption).toBeInTheDocument()
  })

  test('if the image is rendering on the page', async () => {
    render(
      <BrowserRouter>
        <Display />
      </BrowserRouter>
    )
    //the test doesn't like this as the findByRole should also include a src or alt attribute to reference - need to check this
    const image = await screen.findByRole('img')
    expect(image).toBeInTheDocument()
  })
})
