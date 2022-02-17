import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const itemsRouter = express.Router()

itemsRouter.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('items')
})
