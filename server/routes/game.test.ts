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

it('GET /:id should return the correct', async () => {
  jest.mocked(db.getDataById(2))
  const response = await request(server).get('/api/v1/game/2')

  expect(response.status).toBe(200)
})

it('Post / should reply with a status of 201', async () => {
  const data = {
    name: null,
    file: null,
    caption: 'test',
  }

  jest.mocked(db.addData(data))
  const response = await request(server).post('/api/v1/game/').send({ data })

  expect(response.status).toBe(201)
})


it('Patch / should reply with a status of 201', async () => {
  const data = {
    name: null,
    file: null,
    caption: 'Update Test',
  }

  jest.mocked(db.updateData(3, data))
  const response = await request(server).patch('/api/v1/game/3').send({ data })

  expect(response.status).toBe(201)
  expect(response.body).toMatchObject({})

it('Delete / should reply with a status of 200', async () => {
  jest.mocked(db.resetData())
  const response = await request(server).delete('/api/v1/game/')

  expect(response.status).toBe(200)

})
