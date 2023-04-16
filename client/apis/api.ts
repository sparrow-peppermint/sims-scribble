import request from 'superagent'
import { Input, Data } from '../../models/Data'

const rootUrl = 'http://localhost:3000/api/v1/game'

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

