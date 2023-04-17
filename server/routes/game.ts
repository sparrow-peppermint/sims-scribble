import express from 'express'
import * as db from '../db/game'
const router = express.Router()

// api/v1/game
router.get('/', async (req, res) => {
  try {
    const data = await db.getData()
    res.json(data)
  } catch (error) {
    if (error instanceof Error) res.status(500).send('DataBase Error')
  }
})

router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const data = await db.getDataById(id)
    res.json(data)
  } catch (error) {
    if (error instanceof Error) res.status(500).send('DataBase Error')
  }
})

router.post('/', async (req, res) => {
  const input = req.body
  try {
    await db.addData(input)
    res.status(201).send('Okay')
  } catch (error) {
    if (error instanceof Error) res.status(500).send('DataBase Error')
  }
})

router.delete('/', async (req, res) => {
  try {
    await db.resetData()
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send('DataBase Error')
  }
})

export default router
