import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { players } from '../slices/game'
import PlayerNames from './PlayerNames'

function Home() {
  // const slice = useAppSelector((state) => state.players)
  // console.log(slice)
  // const [input, setInput] = useState(slice)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [names, setNames] = useState<string[]>([])
  function handleNamesChange(newNames: string[]) {
    setNames(newNames)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const numberOfPlayers = names.length
    console.log(numberOfPlayers)
    // setInput(input)
    dispatch(players(numberOfPlayers))

    navigate('/start')
  }

  return (
    <div className="h-screen">
      <div className="container flex justify-center pt-8">
        <div className="window w-8/10">
          <div className="title-bar">
            <div className="title-bar-text text-base">How To Play</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body font-semibold text-base pl-5 pt-5">
            <ul>
              <li className="text-xl">
                Player One writes a wacky prompt (secretly)
              </li>
              <li className="text-xl">
                Player Two draws their interpretation of the caption (secretly)
              </li>
              <li className="text-xl">
                Player Three writes their interpretation of the drawing
                (secretly)
              </li>
              <li className="text-xl">
                ... continuing until all the players have made their
                contribution
              </li>
              <li className="text-xl">Enjoy your collective masterpiece!</li>
            </ul>
            <div className="container flex flex-col pt-5">
              <PlayerNames onNamesChange={handleNamesChange} />
              <form>
                <div className="flex justify-center p-5 gap-x-10">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    aria-label="submit"
                    className="generalButton"
                  >
                    Start
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Home
