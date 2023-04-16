import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialState = {
  players: number
}

const initialState = 4

const gameSlice = createSlice({
  name: 'startSlice',
  initialState: initialState,
  reducers: {
    players: (_, { payload }: PayloadAction<number>) => {
      return payload
    },
  },
})

export const { players } = gameSlice.actions
export default gameSlice.reducer
