import request from 'supertest'
import * as db from '../db/game'
import server from '../server'

jest.mock('../db/game')

afterEach(() => {
  return jest.resetAllMocks()
})

it('GET / should return data from the database', async () => {
  const mockData = [
    {
      id: 1,
      name: null,
      file: null,
      caption: 'first prompt',
    },
    {
      id: 2,
      name: 'test',
      file: 'theFile',
      caption: '',
    },
  ]

  jest.mocked(db.getData).mockResolvedValue(mockData)

  const response = await request(server).get('/api/v1/game')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(mockData)
})
