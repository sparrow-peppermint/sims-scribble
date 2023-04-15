import reducer from '../slices/game'

test('add players will return number of players set', () => {
  const noOfPlayers = 4
  const state = reducer(0, { type: Number, payload: noOfPlayers })
  expect(state).toBe(0)
})
