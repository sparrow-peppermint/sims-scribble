import { useEffect, useState } from 'react'
import { getData } from '../../client/apis/api'
import { useAppDispatch } from '../hooks'

function Display() {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => err.message)
  }, [])

  return (
    <div>
      {data.map(({ id, name, file, caption }) => {
        if (id % 2 == 0) {
          return <img key={id} src={file} alt="" />
        } else {
          return <p key={id}>{caption}</p>
        }
      })}
    </div>
  )
}

export default Display
