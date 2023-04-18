import { useEffect, useState } from 'react'
import { getDataById } from '../apis/api'
import { useParams } from 'react-router-dom'
import SubmitButton from './SubmitButton'
import { Input } from '../../models/Data'

function Start() {
  const [input, setInput] = useState('')
  const [player, setPlayer] = useState({} as Input)

  useEffect(() => {
    getDataById(2)
      .then((res) => setPlayer(res))
      .catch((err) => console.error(err.message))
  }, [])

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
                <p> Write a wacky prompt for {player.name} to draw</p>
                <div className="flex justify-center py-8">
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

                  <div className="ml-10">
                    <SubmitButton
                      data={{ file: null, caption: input }}
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
