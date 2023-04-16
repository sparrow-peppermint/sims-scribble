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
      <p>{state.caption}</p>
      <Canvas width={510} height={480} id={Number(id)} />
    </>
  )
}

export default Draw
