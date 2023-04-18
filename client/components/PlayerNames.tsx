import { addData } from '../apis/api'
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
      <div className="flex justify-center p-5 gap-x-10">
        <form onSubmit={handleSubmit}>
          <input
            className="h-20"
            type="text"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="generalButton" type="submit">
            Add Player
          </button>
        </form>
        <ul className="text-lg">
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default PlayerNames
