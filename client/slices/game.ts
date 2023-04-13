import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialState = {
  players: 0
}

const gameSlice = createSlice({
  name: 'startSlice',
  initialState: { players: 0 },
  reducers: {
    players: (_, { payload }: PayloadAction<number>) => {
      return {
        players: payload,
      }
    },
  },
})

export const { players } = gameSlice.actions
export default gameSlice.reducer
