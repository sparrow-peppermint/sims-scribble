import { configureStore, combineReducers } from '@reduxjs/toolkit'

import gameSlice from './slices/game'

export const reducers = combineReducers({
  players: gameSlice,
})

const store = configureStore({
  reducer: reducers,
})

export default store
export const dispatch: AppDispatch = store.dispatch.bind(store)
export const getState: () => RootState = store.getState.bind(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
