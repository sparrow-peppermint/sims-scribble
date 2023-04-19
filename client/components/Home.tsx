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
    if (numberOfPlayers > 3) {
      dispatch(players(numberOfPlayers))
    }
    console.log(numberOfPlayers)
    // setInput(input)

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
          <div className="window-body font-semibold text-base p-5">
            <ul className="tree-view">
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
            <br />
            <div>
              <p className="flex justify-center font-windows pt-10">
                Enter the names of your players (min 4)
              </p>
            </div>
            <div className="container flex flex-col">
              <div className="flex pr-20">
                <PlayerNames onNamesChange={handleNamesChange} />
              </div>
              <form>
                <div className="w-full flex justify-end p-5">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    aria-label="submit"
                    className="generalButton h-10"
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
