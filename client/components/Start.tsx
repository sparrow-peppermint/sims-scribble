import { useState } from 'react'
import { useDispatch } from 'react-redux'

function Start() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInput(() => value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
        <form onSubmit={handleSubmit}>
          <label>
            What to draw:
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter prompt for user to draw"
              value={input}
            />
          </label>

          <button type="submit" aria-label="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Start
