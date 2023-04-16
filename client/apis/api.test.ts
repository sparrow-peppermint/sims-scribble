import nock from 'nock'
import { getData } from './api'

nock.disableNetConnect()
nock.enableNetConnect('localhost')

describe('getData', () => {

  it('returns a list of data', async () => {
    const expected = [
      {
        id: 1,
        name: 'test'
      }
    ]

    nock('http://localhost:3000').get('/api/v1/game').reply(200, expected)

    const result = await getData()
    expect(result).toEqual(expected)
  })
})
