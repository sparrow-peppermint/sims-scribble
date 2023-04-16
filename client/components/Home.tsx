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
      <div className="container flex justify-center">
        <div className="window w-2/3">
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
              <li>Player One writes a whacky prompt (secretly)</li>
              <li>
                Player Two draws their interpretation of the caption (secretly)
              </li>
              <li>
                Player Three secretly writes their interpretation of the drawing
                (secretly)
              </li>
              <li>
                ... continuing until all the players have made their
                contribution
              </li>
              <li>Enjoy your collective masterpiece!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex justify-center">
        <form>
          <h3>Enter the number of players</h3>
          <select onChange={handleChange}>
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
        </form>
      </div>
    </div>
  )
}

export default Home
