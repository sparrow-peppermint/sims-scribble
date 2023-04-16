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
    <>
      <div className="container flex flex-col items-center space-y-8">
        <div>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Draw the caption</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <menu role="tablist">
                <li role="tab" aria-selected="true">
                  <a href="#tabs">Caption</a>
                </li>
              </menu>
              <div className="window" role="tabpanel">
                <div className="window-body">
                  <h2>{state.caption}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Canvas width={510} height={480} id={Number(id)} />
      </div>
    </>
  )
}

export default Draw
