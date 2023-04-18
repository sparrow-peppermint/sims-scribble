import request from 'superagent'
import { Input, Data } from '../../models/Data'

const rootUrl = '/api/v1/game'

export async function getData() {
  const response = await request.get(rootUrl)
  return response.body
}

export async function getDataById(id: number) {
  const response = await request.get(rootUrl + `/${id}`)
  return response.body
}

export async function addData(data: Input) {
  await request.post(rootUrl).send(data)
}

export async function resetPlayers() {
  await request.delete(rootUrl)
}

export async function softResetPlayers() {
  await request.delete(`${rootUrl}/reset`)
}

export async function updateDataById(id: number, data: object) {
  try {
    const response = await request.patch(rootUrl + `/${id}`).send(data)
    console.log('Data updated:', response.body)
  } catch (error) {
    console.error('Error updating Data:', error)
  }
}
