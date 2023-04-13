/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('data').del()
  await knex('data').insert([
    { id: 1, name: null, file: null, caption: 'first prompt' },
    { id: 2, name: 'test', file: 'theFile', caption: '' },
    { id: 3, name: null, file: null, caption: 'second caption' },
  ])
}
