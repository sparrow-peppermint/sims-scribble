import connection from './connection'

interface Data {
  name: string | null
  file: string | null
  caption: string | null
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

export async function resetData(db = connection) {
  await db('data').del()

  await db('sqlite_sequence').where('name', 'data').update({ seq: 0 })
}
