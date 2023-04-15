import { useParams } from 'react-router-dom'
import FinalPass from './FinalPass'
import NextPlayer from './NextPlayer'
import { useAppSelector } from '../hooks'

function Pass() {
  const { id } = useParams()
  const totalPlayers = useAppSelector((state) => state.players)

  return (
    <>
      {Number(id) <= totalPlayers ? (
        <NextPlayer id={Number(id)} />
      ) : (
        <FinalPass />
      )}
    </>
  )
}

export default Pass
