import { addData } from '../apis/api'
import { useNavigate } from 'react-router-dom'
import { Data, PropsData } from '../../models/Data'
import { useState } from 'react'

interface Props {
  onNamesChange: (newNames: string[]) => void
}

function PlayerNames(props: Props) {
  const [input, setInput] = useState('')
  const [names, setNames] = useState<string[]>([])

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value
    setInput(() => value)
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const newNames = [...names, input]
    setNames(newNames)
    props.onNamesChange(newNames)
    addData({ name: input, file: null, caption: null })
    setInput(() => '')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange}></input>
          <button type="submit">Add Player</button>
        </form>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default PlayerNames

//redirect to pass
//adds input to db
