import { addData } from '../apis/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Data, PropsData } from '../../models/Data'
import { useAppSelector } from '../hooks'

function SubmitButton(props: PropsData) {
  const slice = useAppSelector((state) => state.players)
  const navigate = useNavigate()
  console.log(slice)

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    console.log(slice)
    addData(props.data)
    navigate(`/pass/${props.id + 1}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </>
  )
}
export default SubmitButton

//redirect to pass
//adds input to db
