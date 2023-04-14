import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { useNavigate } from 'react-router-dom'

function Start() {
  // const dispatch = useAppDispatch()
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInput(() => value)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    // dispatch()
    setInput(() => '')
    navigate('/pass/2')
  }

  return (
    <>
      <div>
        <p>
          Here's where you enter a description as to what you want P2 to draw
        </p>
      </div>
      <div>
        <form>
          <label>
            What to draw:
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter prompt for user to draw"
              value={input}
            />
          </label>

          <button onClick={handleSubmit} type="submit" aria-label="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Start
