import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialState = {
  players: number
}

const gameSlice = createSlice({
  name: 'startSlice',
  initialState: { players: 4 } as InitialState,
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
