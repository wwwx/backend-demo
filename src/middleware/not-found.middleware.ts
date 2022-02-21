import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
export const NotFoundHandler = (req: Request, res: Response) => {
  const message = 'Resource not found'
  res.status(StatusCodes.NOT_FOUND).send(message)
}
