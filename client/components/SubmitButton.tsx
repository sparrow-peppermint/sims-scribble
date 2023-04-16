import { addData } from '../apis/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Data, PropsData } from '../../models/Data'

function SubmitButton(props: PropsData) {
  const navigate = useNavigate()

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    addData(props.data)
    navigate(`/pass/${props.id + 1}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" aria-label="submit" className="text-base">
          Submit
        </button>
      </form>
    </>
  )
}
export default SubmitButton

//redirect to pass
//adds input to db
