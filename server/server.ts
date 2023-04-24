import express from 'express'
import { join } from 'node:path'
import http from 'http'
import { Server } from 'socket.io'
import gameRoutes from './routes/game'

const server = express()
const httpServer = http.createServer(server)
const io = new Server(httpServer)

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/game', gameRoutes)

server.get('*', (_, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

io.on('connection', (socket) => {
  console.log(`a user connected on socket: ${socket}`)
})

export default server
