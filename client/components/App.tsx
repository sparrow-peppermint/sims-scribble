import { Routes, Route } from 'react-router-dom'
import Display from './Display'
import Draw from './Draw'
import Header from './Header'
import Home from './Home'
import Start from './Start'
import Pass from './Pass'
import Write from './Write'

function App() {
  return (
    <>
        <h1>Its HAPPENING!!!!!!!!!!!</h1>
      <Routes>
        <Header />
        <Home />
        <Start />
        <Pass />
        <Draw />
        <Write />
        <Display />
      </Routes>
    </>
  )
}

export default App
