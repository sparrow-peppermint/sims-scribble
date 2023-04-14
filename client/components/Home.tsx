import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [input, setInput] = useState(0)
  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)
    setInput(() => value)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    // dispatch()
    // send number to db
    setInput(() => 0)
    navigate('/start')
  }

  return (
    <div className="h-screen">
      <div className="bg-white container h-1/4 w-1/2 p-10 flex justify-center rounded-lg">
        <p className="m-30">Draw what you read and caption what you see</p>
      </div>
      <div className="bg-white container h-1/4 w-1/2 p-10 flex justify-center rounded-lg">
        <form>
          <p>Enter the number of players</p>
          <input
            className="border-2"
            type="number"
            min="4"
            max="12"
            onChange={handleChange}
            // value={input}
          />

          <button onClick={handleSubmit} type="submit" aria-label="submit">
            Start
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
