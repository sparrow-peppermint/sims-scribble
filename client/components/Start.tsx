import { useState } from 'react'
import SubmitButton from './SubmitButton'

function Start() {
  const [input, setInput] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInput(() => value)
  }

  return (
    <>
      <div>
        <p>
          Heres where you enter a description as to what you want P2 to draw
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
        </form>
        <SubmitButton
          data={{ name: null, file: null, caption: input }}
          id={1}
        />
      </div>
    </>
  )
}

export default Start
