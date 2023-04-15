import connection from './connection'

interface Data {
  name: string
  file: string
  caption: string
}

export function getData(db = connection) {
  return db('data').select()
}

export function getDataById(id: number, db = connection) {
  return db('data').where('id', id).select().first()
}

export function addData(data: Data, db = connection) {
  return db('data').insert(data)
}
