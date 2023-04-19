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
    navigate('/')
  }

  async function handleSoftReset() {
    await softResetPlayers()
    navigate('/start')
  }

  return (
    <>
      <div className="mb-10 min-h-screen font-semibold parent">
        {data.map((turn, index) => {
          const { id, name, file, caption } = turn
          const delay = index * 2000
          if (id % 2 == 0) {
            return (
              <div
                key={id}
                className="container flex justify-center drawings"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="window w-2/3">
                  <div className="window-body flex justify-center flex-col">
                    <img
                      key={id}
                      src={file}
                      alt="players drawing"
                      className="object-right"
                    />
                    <h4 className="text-center">{name}</h4>
                  </div>
                  <div className="m-8">
                    {/* <ul key={id} className="tree-view"></ul> */}
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={id}
                className="container flex justify-center drawings"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="window w-2/3">
                  <div className="title-bar h-10">
                    <p className="title-bar-text text-lg" key={id}>
                      {caption} - {name}
                    </p>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
        <div className="flex justify-center mt-10">
          <button className="generalButton h-10 " onClick={handleSoftReset}>
            Play Again?
          </button>
          <button className="generalButton h-10 " onClick={handleReset}>
            Play Again With New Players?
          </button>
        </div>
      </div>
    </>
  )
}

export default Display
