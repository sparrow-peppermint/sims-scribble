import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/game'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: gameSlice,
})

export default store
