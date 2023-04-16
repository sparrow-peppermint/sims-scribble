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
        <div className="h-screen">
          <div className="container flex justify-center pt-10">
            <div className="window w-2/3">
              <div className="title-bar">
                <div className="title-bar-text text-base">
                  Enter prompt for Player 2
                </div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body font-semibold text-base">
                <p>
                  Heres where you enter a description as to what you want P2 to
                  draw
                </p>
              </div>
            </div>
          </div>
          <div className="container flex justify-center field-row">
            <form>
              <label>
                <h4 className="font-['Arial'] p-4 font-semibold">
                  What to draw:
                </h4>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter prompt for user to draw"
                  value={input}
                />
              </label>
            </form>
            <div className="flex items-center h-auto ps-10 ">
              <SubmitButton
                data={{ name: null, file: null, caption: input }}
                id={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
