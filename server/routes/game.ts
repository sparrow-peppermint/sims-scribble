import express from 'express'
import * as db from '../db/game'
const router = express.Router()

// api/v1/game
router.get('/', async (req, res) => {
  const data = await db.getData()
  res.json(data)
})

// router.get('/:id', async (req, res) => {
//   const id = +req.params.id
// })

// router.post('/', async (req, res) => {
//   //db function
//   const input = req.body
// })

export default router
