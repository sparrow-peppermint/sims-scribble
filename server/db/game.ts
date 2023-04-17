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

export function updateData(id: number, data: Input, db = connection) {
  return db('data').where('id', id).update(data)
}
