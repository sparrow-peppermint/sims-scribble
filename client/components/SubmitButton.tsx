import { useNavigate, useParams } from 'react-router-dom'
import { PropsData } from '../../models/Data'
import { updateDataById } from '../apis/api'

function SubmitButton(props: PropsData) {
  const navigate = useNavigate()

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    updateDataById(props.id, props.data)
    navigate(`/pass/${props.id + 1}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          aria-label="submit"
          className="generalButton h-10 "
        >
          Submit
        </button>
      </form>
    </>
  )
}
export default SubmitButton

//redirect to pass
//adds input to db
