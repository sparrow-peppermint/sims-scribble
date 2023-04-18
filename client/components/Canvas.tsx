import { useEffect, useRef, useState } from 'react'
import SubmitButton from './SubmitButton'
import { Id } from '../../models/Type'

function Canvas({ id }: Id) {
  const [mouseData, setMouseData] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null) as any
  const [canvasCTX, setCanvasCTX] = useState(null)
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState(10)
  const [drawing, setDrawing] = useState('')

  const colors = [
    { color: 'black', hash: '#000000' },
    { color: 'darkgrey', hash: '#5c5c5c' },
    { color: 'red', hash: '#ff0000' },
    { color: 'blue', hash: '#0000ff' },
    { color: 'green', hash: '#00ff00' },
    { color: 'orange', hash: '#ff9238' },
    { color: 'purple', hash: '#ae00ff' },
    { color: 'pink', hash: '#ff24f8' },
    { color: 'skyblue', hash: '#00aaff' },
    { color: 'darkgreen', hash: '#096902' },
  ]

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null
    if (canvas) {
      const ctx = canvas.getContext('2d') as any
      // canvas.width = window.innerWidth - 350
      // canvas.height = window.innerHeight - 200
      setCanvasCTX(ctx)
    }
  }, [canvasRef])

  const SetPos = (e: any) => {
    const position = computePointInCanvas(e.clientX, e.clientY)
    if (position) setMouseData(position)
  }

  const Draw = (e: any) => {
    SetPos(e)
    if (e.buttons !== 1) return
    const ctx = canvasCTX as any
    const position = computePointInCanvas(e.clientX, e.clientY)
    if (position) setMouseData(position)
    if (ctx && position) {
      ctx.beginPath()
      ctx.moveTo(mouseData.x, mouseData.y)
      setMouseData(position)
      ctx.lineTo(position.x, position.y)
      ctx.strokeStyle = color
      ctx.lineWidth = size
      ctx.lineCap = 'round'
      ctx.stroke()
    }
  }

  function computePointInCanvas(clientX: number, clientY: number) {
    if (canvasRef.current && clientX && clientY) {
      const boundingRect = canvasRef.current.getBoundingClientRect()

      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      }
    } else {
      return null
    }
  }

  function handleMouseUp() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const image = new Image()
    if (canvas) {
      image.src = canvas.toDataURL()
      setDrawing(() => image.src)
    }
  }

  function handleSize(evnt: React.ChangeEvent<HTMLInputElement>) {
    evnt.preventDefault()
    setSize(() => +evnt.target.value)
  }

  function handleColor(color: string) {
    setColor(() => color)
  }

  return (
    <div style={{ backgroundColor: '#008080' }}>
      <div className="container grid grid-cols-8 max-w-5xl ">
        <img
          src="/images/top-part.png"
          alt=""
          className="col-span-8 w-full selector"
        />
        <img src="/images/left-part.png" alt="" className="w-full selector" />
        <canvas
          style={{ backgroundColor: 'white' }}
          className="col-span-6"
          height={578}
          width={890}
          data-testid="canvas"
          id="canvas"
          ref={canvasRef}
          onMouseEnter={(e) => SetPos(e)}
          onMouseDown={(e) => SetPos(e)}
          onMouseMove={(e) => Draw(e)}
          onMouseUp={handleMouseUp}
        ></canvas>
        <img
          src="/images/right-part.jpeg"
          alt=""
          className="col-span-1 h-full w-6 justify-self-end selector"
        />
        <div
          className="col-span-8 p-5"
          style={{
            backgroundColor: '#bdbdbd',
            border: '2px solid white',
            borderTop: 'none',
          }}
        >
          <div className="flex  mb-2">
            <input
              className="hover:cursor-pointer"
              style={{ height: '55px', marginRight: '5px' }}
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <div className="grid grid-cols-5 gap-1">
              {colors.map((color) => (
                <div
                  className="hover: cursor-pointer"
                  aria-label={color.color}
                  style={{
                    backgroundColor: color.hash,
                    width: '25px',
                    height: '25px',
                    border: '2px outset whitesmoke',
                  }}
                  onClick={() => handleColor(color.hash)}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex gap-6">
            <button
              className="generalButton"
              onClick={() => {
                const ctx: any = canvasCTX
                if (ctx && canvasRef.current) {
                  ctx.clearRect(
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                  )
                }
              }}
            >
              Clear
            </button>
            <SubmitButton data={{ file: drawing, caption: null }} id={id} />
          </div>
          <input
            className="hover:cursor-pointer"
            type="range"
            value={size}
            max={40}
            onChange={handleSize}
          />
          <div className="flex justify-between items-center">
            <div
              style={{
                width: '15px',
                height: '15px',
                backgroundColor: 'black',
                borderRadius: '8px',
              }}
            ></div>
            <div
              style={{
                width: '35px',
                height: '35px',
                backgroundColor: 'black',
                borderRadius: '18px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canvas
