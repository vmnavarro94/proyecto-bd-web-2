import express from 'express'
import { Category } from '../types/category.type'
import CategoryService from '../services/category.service'

const router = express.Router()
const service = new CategoryService()

router.post('/', async (req, res) => {
  const category: Category = req.body
  const newCategory = await service.create(category)

  res.status(201).json(newCategory)
})

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.findAll()
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
})

export default router
