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
    drawLine(prevPoint, point, ctx, '#ff0000', 5)
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
      console.log(image)
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
      <button onClick={handleClick}>Save as Image Test</button>
    </>
  )
}

export default Canvas

const canvasStyle = {
  border: '1px solid black',
}
