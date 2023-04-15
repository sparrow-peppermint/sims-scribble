import request from 'superagent'

const rootUrl = '/api/v1/game'

export async function getData() {
  const response = await request.get(rootUrl)
  return response.body
}

export async function getDataById(id: number) {
  const response = await request.get(rootUrl + `/${id}`)
  return response.body
}
