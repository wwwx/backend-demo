import { NextFunction, Request, Response } from 'express'
import Logger from '@/loaders/logger'
export const requestInterceptor = (req: Request, _res: Response, next: NextFunction) => {
  Logger.debug('Calling endpoint with params %o', req.params)
  Logger.debug('Calling endpoint with body %o', req.body)
  next()
}
