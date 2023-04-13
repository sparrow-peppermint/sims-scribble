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
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/pass/:id" element={<Pass />} />
        <Route path="/draw/:id" element={<Draw />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  )
}

export default App
