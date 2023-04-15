import { useEffect, useState } from 'react'
import { getDataById } from '../apis/api'
import { useParams } from 'react-router-dom'

function Write() {
  const [image, setImage] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getDataById(Number(id) - 1)
      .then((res) => setImage(res))
      .catch((err) => console.error(err.message))
  })

  return (
    <>
      <img src={image.file} alt="previous players drawing" />
      <h2>Add a caption for this drawing</h2>
      <input placeholder="frog smoking a pipe..."></input>
      <p>Then hit submit</p>
      {/* <SubmitButton /> */}
    </>
  )
}

export default Write
