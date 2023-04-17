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
                  Your Wacky Prompt
                </div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body font-semibold text-base p-2">
                <p> Write a wacky prompt for Player 2 to draw</p>
                <div className="flex flex-row justify-center p-8">
                  <form>
                    <label>
                      <input
                        type="text"
                        className="textInput"
                        onChange={handleChange}
                        placeholder="Enter prompt"
                        value={input}
                      />
                    </label>
                  </form>

                  <div className="ml-20">
                    <SubmitButton
                      data={{ name: null, file: null, caption: input }}
                      id={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
