import { useEffect, useRef } from 'react'

export function useOnDraw(onDraw: any) {
  const canvasRef = useRef(null) as React.MutableRefObject<any>

  const isDrawingRef = useRef(false)

  const mouseMoveListenerRef = useRef(null) as React.MutableRefObject<any>
  const mouseDownListenerRef = useRef(null) as React.MutableRefObject<any>
  const mouseUpListenerRef = useRef(null) as React.MutableRefObject<any>

  const prevPointRef = useRef(null) as React.MutableRefObject<any>

  useEffect(() => {
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener('mousemove', mouseMoveListenerRef.current)
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener('mouseup', mouseUpListenerRef.current)
      }
    }
  }, [])

  function setCanvasRef(ref: any) {
    if (!ref) return
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(
        'mousedown',
        mouseDownListenerRef.current
      )
    }
    canvasRef.current = ref
    initMouseMoveListener()
    initMouseDownListener()
    initMouseUpListener()
  }

  function initMouseMoveListener() {
    const mouseMoveListener = (e: any) => {
      if (isDrawingRef.current) {
        const point = computePointInCavas(e.clientX, e.clientY)
        const ctx = canvasRef.current.getContext('2d')
        if (onDraw) onDraw(ctx, point, prevPointRef.current)
        prevPointRef.current = point
      }
    }
    mouseMoveListenerRef.current = mouseMoveListener
    window.addEventListener('mousemove', mouseMoveListener)
  }

  function initMouseDownListener() {
    if (!canvasRef.current) return
    const listener = () => {
      isDrawingRef.current = true
    }
    mouseDownListenerRef.current = listener
    canvasRef.current.addEventListener('mousedown', listener)
  }

  function initMouseUpListener() {
    const listener = () => {
      isDrawingRef.current = false
      prevPointRef.current = null
    }
    mouseUpListenerRef.current = listener
    window.addEventListener('mouseup', listener)
  }

  function computePointInCavas(clientX: any, clientY: any) {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect()
      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      }
    } else {
      return null
    }
  }

  return setCanvasRef
}
