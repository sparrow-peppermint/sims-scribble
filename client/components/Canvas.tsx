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

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null
    if (canvas) {
      const ctx = canvas.getContext('2d') as any
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setCanvasCTX(ctx)
    }
  }, [canvasRef])

  const SetPos = (e: any) => {
    const position = computePointInCavas(e.clientX, e.clientY)
    if (position) setMouseData(position)
  }

  const Draw = (e: any) => {
    SetPos(e)
    if (e.buttons !== 1) return
    const ctx = canvasCTX as any
    const position = computePointInCavas(e.clientX, e.clientY)
    console.log(position)
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

  function computePointInCavas(clientX: number, clientY: number) {
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

  return (
    <>
      <div className="container">
        <div className="item item-1" style={{}}>
          <input type="range" value={size} max={40} onChange={handleSize} />
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button
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
        </div>
        <div className="item item-2 flex justify-center relative">
          <img src="/images/paint.jpg" alt="paintImg" className=" w-9/12 " />
          <canvas
            className="absolute left-80 top-28 w-7/12 h-4/6"
            data-testid="canvas"
            id="canvas"
            ref={canvasRef}
            onMouseEnter={(e) => SetPos(e)}
            onMouseDown={(e) => SetPos(e)}
            onMouseMove={(e) => Draw(e)}
            onMouseUp={handleMouseUp}
          ></canvas>
        </div>
      </div>
      <SubmitButton
        data={{ name: null, file: drawing, caption: null }}
        id={id}
      />
    </>
  )
}

export default Canvas
