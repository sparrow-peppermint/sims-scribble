import { useEffect, useState } from 'react'
import { getDataById } from '../apis/api'
import { useParams } from 'react-router-dom'
import SubmitButton from './SubmitButton'
import { Input } from '../../models/Data'

function Write() {
  const [input, setInput] = useState('')
  const { id } = useParams()
  const [image, setImage] = useState({} as Input)

  useEffect(() => {
    getDataById(Number(id) - 1)
      .then((res) => setImage(res))
      .catch((err) => console.error(err.message))
  })

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value
    setInput(() => value)
  }

  return (
    <>
      {image.file && (
        <img
          aria-label="image from previous player"
          src={image.file}
          alt="previous players drawing"
        />
      )}
      <h2>Add a caption for this drawing</h2>
      <input
        onChange={handleChange}
        placeholder="frog smoking a pipe..."
      ></input>
      <p>Then hit submit</p>

      <SubmitButton
        data={{ name: null, file: null, caption: input }}
        id={Number(id)}
      />
    </>
  )
}

export default Write
