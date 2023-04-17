import { useEffect, useState } from 'react'
import { getData, resetPlayers } from '../../client/apis/api'
import { useAppDispatch } from '../hooks'
import { useNavigate } from 'react-router-dom'

function Display() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => err.message)
  }, [])

  async function handleReset() {
    await resetPlayers()
    navigate('/start')
  }

  return (
    <>
      <div>
        {data.map(({ id, name, file, caption }) => {
          if (id % 2 == 0) {
            return <img key={id} src={file} alt="" />
          } else {
            return <p key={id}>{caption}</p>
          }
        })}
      </div>
      <button onClick={handleReset}>Play Again?</button>
    </>
  )
}

export default Display
