import { useOnDraw } from './Hooks'

interface Props {
  width: number
  height: number
}

interface Point {
  x: number
  y: number
}

function Canvas({ width, height }: Props) {
  const setCanvasRef = useOnDraw(onDraw)

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

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  )
}

export default Canvas

const canvasStyle = {
  border: '1px solid black',
}
