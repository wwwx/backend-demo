import { Router } from 'express'
import itemsRouter from './items/items.router'

export default () => {
  const app = Router()
  itemsRouter(app)
  return app
}
