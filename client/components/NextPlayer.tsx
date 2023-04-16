import { useNavigate } from 'react-router-dom'
import { Id } from '../../models/Type'

function NextPlayer(props: Id) {
  const navigate = useNavigate()

  function handleSubmit() {
    if (props.id % 2 === 0) {
      navigate(`/draw/${props.id}`)
    } else navigate(`/write/${props.id}`)
  }

  return (
    <>
      <p>Now pass device to Player {props.id}</p>
      <button onClick={handleSubmit}>
        Player {props.id}, click this when you are ready!
      </button>
    </>
  )
}

export default NextPlayer
