import { Input } from '../../models/Data'
import connection from './connection'

export function getData(db = connection) {
  return db('data').select()
}

export function getDataById(id: number, db = connection) {
  return db('data').where('id', id).select().first()
}

export function addData(data: Input, db = connection) {
  return db('data').insert(data)
}

export function updateData(id: number, data: object, db = connection) {
  return db('data').where('id', id).update(data)
}

export async function resetData(db = connection) {
  await db('data').del()

  await db('sqlite_sequence').where('name', 'data').update({ seq: 0 })
}

export async function softReset(db = connection) {
  await db('data').update({ caption: null, file: null })
}
