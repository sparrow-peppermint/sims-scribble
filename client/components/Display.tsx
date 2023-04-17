import { useEffect, useState } from 'react'
import { getData } from '../../client/apis/api'
import { useAppDispatch, useAppSelector } from '../hooks'

function Display() {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => err.message)
  }, [])

  // const noOfPlayers = useAppSelector((state) => state.players)
  // console.log(noOfPlayers)

  // const nextCaption = data.forEach((turn) => {
  //   if (turn.caption != null) {
  //     console.log(turn.caption)
  //   }
  // })

  return (
    <div className="mb-10">
      {data.map((turn) => {
        const { id, name, file, caption } = turn
        // data[turn[id +1].caption]

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
  )
}

export default Display
