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
  }, [])

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value
    setInput(() => value)
  }

  return (
    <div className="h-screen">
      <div className="container flex justify-center pt-10">
        <div className="window w-2/3">
          <div className="title-bar">
            <div className="title-bar-text text-base">What a cool artwork!</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body font-semibold p-2">
            <div className="flex flex-col justify-center py-8">
              {image.file && (
                <img
                  aria-label="image from previous player"
                  src={image.file}
                  alt="previous players drawing"
                  className=""
                />
              )}
              <h4>Caption this drawing</h4>
              <input
                onChange={handleChange}
                placeholder="frog smoking a pipe..."
              ></input>

              <SubmitButton
                data={{ name: null, file: null, caption: input }}
                id={Number(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>

    //
    // </>
  )
}

export default Write
