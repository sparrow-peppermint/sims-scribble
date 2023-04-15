import { useParams } from 'react-router-dom'
import SubmitButton from './SubmitButton'
import { useState } from 'react'

function Write() {
  const [input, setInput] = useState('')
  const { id } = useParams()

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value
    setInput(() => value)
  }

  return (
    <>
      <img src={'#'} alt="previous players drawing" />
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
