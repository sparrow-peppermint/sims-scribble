import { useParams } from 'react-router-dom'
import Canvas from './Canvas'

import { getDataById } from '../apis/api'
import { useEffect, useState } from 'react'
import { Input } from '../../models/Data'

function Draw() {
  const [state, setState] = useState({} as Input)
  const { id } = useParams()

  useEffect(() => {
    getDataById(Number(id) - 1)
      .then((res) => setState(res))
      .catch((err) => err.message)
  }, [])

  return (
    <div className="h-screen">
      <div className="container flex justify-center pt-8">
        <div>
          <div className="window ">
            <div className="title-bar">
              <div className="title-bar-text">
                Draw {state.name}&apos;s caption
              </div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body font-semibold text-base p-5">
              <p className="text-xl">{state.caption}</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Canvas id={Number(id)} />
    </div>
  )
}

export default Draw
