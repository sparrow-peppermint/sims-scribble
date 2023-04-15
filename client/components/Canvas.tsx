import { useOnDraw } from './Hooks'
import SubmitButton from './SubmitButton'
import { useState } from 'react'

interface Props {
  width: number
  height: number
  id: number
}

interface Point {
  x: number
  y: number
}

function Canvas({ width, height, id }: Props) {
  const setCanvasRef = useOnDraw(onDraw)
  const [drawing, setDrawing] = useState('')

  function onDraw(ctx: any, point: Point, prevPoint: any) {
    drawLine(prevPoint, point, ctx, '#000000', 5)
  }

  function drawLine(
    start: Point,
    end: Point,
    ctx: any,
    color: string,
    width: number
  ) {
    start = start ?? end
    ctx.beginPath()
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
  }

  function handleClick() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const image = new Image()
    if (canvas) {
      image.src = canvas.toDataURL()
      setDrawing(() => image.src)
    }
  }

  return (
    <>
      <canvas
        data-testid="canvas"
        id="canvas"
        width={width}
        height={height}
        style={canvasStyle}
        ref={setCanvasRef}
      />
      <button onClick={handleClick}>Finish drawing</button>
      <SubmitButton
        data={{ name: null, file: drawing, caption: null }}
        id={id}
      />
    </>
  )
}

export default Canvas

const canvasStyle = {
  border: '1px solid black',
}
