import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { HttpException } from '../common/http-exception'

export const errorHandler = (err: HttpException, req: Request, res: Response) => {
  const status = err.statusCode || err.status || StatusCodes.INTERNAL_SERVER_ERROR
  res.status(status).send(err)
}
