import { useEffect, useState } from 'react'
import { getData, resetPlayers, softResetPlayers } from '../../client/apis/api'
import { useNavigate } from 'react-router-dom'

function Display() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => err.message)
  }, [])

  async function handleReset() {
    await resetPlayers()
    navigate('/start')
  }

  async function handleSoftReset() {
    await softResetPlayers()
    navigate('/')
  }

  return (
    <>
      <div className="mb-10">
        {data.map((turn) => {
          const { id, name, file, caption } = turn

          if (id % 2 == 0) {
            return (
              <>
                <div className="window flex justify-center flex-col">
                  <div className="window-body">
                    <img key={id} src={file} alt="players drawing" />
                  </div>
                  <div className="m-8">
                    <ul key={id} className="tree-view">
                      caption
                    </ul>
                  </div>
                </div>
              </>
            )
          } else {
            return (
              <>
                <div className="window">
                  <div className="title-bar">
                    <p className="title-bar-text" key={id}>
                      {caption}
                    </p>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        })}
      </div>
      <button onClick={handleSoftReset}>Play Again?</button>
      <button onClick={handleReset}>Play Again With New Players?</button>
    </>
  )
}

export default Display
