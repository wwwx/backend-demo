import { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Container from 'typedi'
import ItemsService from './items.service'

const route = Router()

export default (app: Router) => {
  app.use('/items', route)

  route.get('/', (req: Request, res: Response) => {
    const itemsService = Container.get(ItemsService)
    const item = itemsService.getItemById()
    res.status(StatusCodes.OK).json(item)
  })
}
