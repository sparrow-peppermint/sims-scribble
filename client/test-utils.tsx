import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'
import storeFromRoot, { reducers } from './store'

export function renderWithRouter(
  ui: ReactNode,
  { initialEntries = ['/'], route = '/' } = {}
) {
  return render(
    <Router initialEntries={initialEntries} initialIndex={0}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </Router>
  )
}

// initialState value -> redux
export function renderWithRedux(
  ui: ReactNode,
  {
    initialEntries = ['/'],
    route = '/',
    initialState = undefined,
    store = configureStore({ reducer: reducers, preloadedState: initialState }),
  }: {
    initialEntries?: string[]
    route?: string
    initialState?: PreloadedState<
      ReturnType<(typeof storeFromRoot)['getState']>
    >
    store?: typeof storeFromRoot | undefined
  } = {}
) {
  return render(
    <Provider store={store}>
      <Router initialEntries={initialEntries} initialIndex={0}>
        <Routes>
          <Route path={route} element={ui} />
        </Routes>
      </Router>
    </Provider>
  )
}
