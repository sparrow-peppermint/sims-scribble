import reducer from '../slices/game'

test('add players will return number of players set', () => {
  const noOfPlayers = 4
  const state = reducer(
    { players: 0 },
    { type: Number, payload: { players: noOfPlayers } }
  )
  expect(state).toEqual({ players: 0 })
})
