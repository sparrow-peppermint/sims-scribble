import express from 'express'
import { join } from 'node:path'
import gameRoutes from './routes/game'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/game', gameRoutes)

export default server
