import { useNavigate } from 'react-router-dom'
import { Id } from '../../models/Type'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { getDataById } from '../apis/api'
import { Input } from '../../models/Data'

function NextPlayer(props: Id) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [player, setPlayer] = useState({} as Input)

  function handleSubmit() {
    if (props.id % 2 === 0) {
      navigate(`/draw/${props.id}`)
    } else navigate(`/write/${props.id}`)
  }

  useEffect(() => {
    getDataById(Number(id))
      .then((res) => setPlayer(res))
      .catch((err) => console.error(err.message))
  }, [])

  return (
    <div className="h-screen">
      <div className="container flex justify-center pt-10">
        <div className="window w-2/3">
          <div className="title-bar">
            <div className="title-bar-text text-base">
              Your Turn {player.name}
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body font-semibold text-base p-2">
            <div className="flex flex-row justify-center py-8">
              <button
                className="generalButton scale-150"
                onClick={handleSubmit}
              >
                Ready!{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <>

    //   <p>Now pass device to Player {props.id}</p>
    //
    // </>
  )
}

export default NextPlayer
