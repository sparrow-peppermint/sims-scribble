import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { players } from '../slices/game'

function Home() {
  const slice = useAppSelector((state) => state.players)
  console.log(slice)
  const [input, setInput] = useState(slice)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const noOfPlayers = Number(event.target.value)
    setInput(noOfPlayers)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setInput(input)
    dispatch(players(input))
    console.log(input)

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
          <div className="window-body font-semibold text-base">
            <ul>
              <li className="text-xl">
                Player One writes a whacky prompt (secretly)
              </li>
              <li className="text-xl">
                Player Two draws their interpretation of the caption (secretly)
              </li>
              <li className="text-xl">
                Player Three secretly writes their interpretation of the drawing
                (secretly)
              </li>
              <li className="text-xl">
                ... continuing until all the players have made their
                contribution
              </li>
              <li className="text-xl">Enjoy your collective masterpiece!</li>
            </ul>
            <div className="container flex justify-center pt-5">
              <form>
                <h5>Enter the number of players</h5>
                <div className="flex justify-center p-5 gap-x-10">
                  <select
                    onChange={handleChange}
                    className="scale-150 text-end"
                  >
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>

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
