import express from 'express'
import { User } from '../types/user.type'
import UserService from '../services/user.service'
import boom from '@hapi/boom'

const router = express.Router()
const service = new UserService()

router.post('/', async (req, res, next) => {
  try {
    //TODO: Validate user data coming from the request
    const user: User = req.body
    const newUser = await service.create(user)
    res.status(201).json({ user: newUser })
  } catch (error) {
    next(error)
  }
})

export default router
