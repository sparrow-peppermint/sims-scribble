import { useState } from 'react'
import { useAppDispatch } from '../hooks'

function Start() {
  // const dispatch = useAppDispatch()
  const [input, setInput] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInput(() => value)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    // dispatch()
    setInput(() => '')
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
