import connection from './connection'

export function getData(db = connection) {
  return db('data').select()
}
