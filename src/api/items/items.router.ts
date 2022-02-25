import { NextFunction, Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Container from 'typedi'
import ItemsService from './items.service'
import Logger from '@/loaders/logger'

const route = Router()

export default (app: Router) => {
  app.use('/items', route)

  /**
   * Get items
   */
  route.get('/', async (req: Request, res: Response) => {
    const itemsServiceInstance = Container.get(ItemsService)
    const data = await itemsServiceInstance.getAll()

    Logger.info('Number of item records: %s', data.length)

    return res.status(StatusCodes.OK).json(data)
  })

  /**
   * Get items by name
   */
  route.get('/:name', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.params
      const itemsServiceInstance = Container.get(ItemsService)
      const data = await itemsServiceInstance.getByName(name)

      return res.status(StatusCodes.OK).send(data)
    } catch (e) {
      Logger.error(e)
      return next(e)
    }
  })

  /**
   * Create items
   */
  route.post('/create', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemsServiceInstance = Container.get(ItemsService)
      const data = await itemsServiceInstance.create(req.body)

      Logger.info(data)

      return res.status(StatusCodes.OK).json(data)
    } catch (e) {
      Logger.error(e)
      return next(e)
    }
  })

  /**
   * Update items
   */
  route.put('/:name', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.params
      const itemsServiceInstance = Container.get(ItemsService)

      // check if existing
      const existingItem = await itemsServiceInstance.getByName(name)
      Logger.debug('existing item: %o', existingItem)

      // existing and then updating
      if (existingItem.length) {
        const data = await itemsServiceInstance.update(name, req.body)
        return res.status(StatusCodes.OK).send(data)
      }

      // if it's not exist, then create it
      const data = await itemsServiceInstance.create(req.body)
      return res.status(StatusCodes.OK).send(data)
    } catch (e) {
      Logger.error(e)
      return next(e)
    }
  })

  /**
   * Delete one item
   */
  route.delete('/:name', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.params
      const itemsServiceInstance = Container.get(ItemsService)
      await itemsServiceInstance.remove(name)
      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (e) {
      Logger.error(e)
      return next(e)
    }
  })
}
