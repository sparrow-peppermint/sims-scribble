import knex from 'knex'
import config from './knexfile'

const testdb = knex(config.test)
import * as db from './game'

beforeAll(() => {
  return testdb.migrate.latest()
})

beforeEach(() => {
  return testdb.seed.run()
})

test('Db function should return a list of images and text', async () => {
  const data = await db.getData(testdb)

  expect(data).toHaveLength(4)
  expect(data[0]).toMatchObject({
    id: 1,
    name: null,
    file: null,
    caption: 'first prompt',
  })
})

test('Db function should return a selected object of images and text', async () => {
  const data = await db.getDataById(3, testdb)

  expect(data).not.toBeFalsy()
  expect(data).toMatchObject({
    id: 3,
    name: null,
    file: null,
    caption: 'second caption',
  })
})

test('Db function can add to the db return a new selected object of images and text', async () => {
  const obj = {
    name: null,
    file: null,
    caption: 'testing AddData',
  }
  await db.addData(obj, testdb)

  const data = await db.getData(testdb)

  expect(data).toHaveLength(5)
  expect(data[4]).toMatchObject({
    id: 5,
    name: null,
    file: null,
    caption: 'testing AddData',
  })
})

test('Db function can reset the data', async () => {
  await db.resetData(testdb)

  const data = await db.getData(testdb)

  expect(data).toHaveLength(0)
})

test('Db function can reset the data and the id is reset', async () => {
  await db.resetData(testdb)

  const obj = {
    name: null,
    file: null,
    caption: 'reset data',
  }
  await db.addData(obj, testdb)

  const data = await db.getData(testdb)

  expect(data).toHaveLength(1)
  expect(data[0]).toMatchObject({
    id: 1,
    name: null,
    file: null,
    caption: 'reset data',
  })
})
