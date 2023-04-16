import { Routes, Route } from 'react-router-dom'
import Display from './Display'
import Draw from './Draw'
import Header from './Header'
import Home from './Home'
import Start from './Start'
import Pass from './Pass'
import Write from './Write'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-cover bg-teal">
      <Header />

      <div className="containter flex flex-col mx-48">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/pass/:id" element={<Pass />} />

          <Route path="/write/:id" element={<Write />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/draw/:id" element={<Draw />} />
      </Routes>
    </div>
  )
}

export default App
