import express from 'express'
import CategoryRouter from './category.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
}

export default routerApi
