import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialState = {
  players: number
}

const gameSlice = createSlice({
  name: 'startSlice',
  initialState: 0,
  reducers: {
    players: (_, { payload }: PayloadAction<number>) => {
      return payload
    },
  },
})

export const { players } = gameSlice.actions
export default gameSlice.reducer
