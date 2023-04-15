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

  if (data.length > 0) {
    console.log(data)

    console.log(data[5].file)

    return (
      <>
        <img src={`${data[1].file}`} />{' '}
      </>
    )
  }
}

export default Display
