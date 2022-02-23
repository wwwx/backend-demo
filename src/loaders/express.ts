import express, { Application, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import logger from 'morgan'
import config from '@/config'
import routes from '@/api'
import { errorHandler } from '@/middleware/error.middleware'
import { NotFoundHandler } from '@/middleware/not-found.middleware'

export default ({ app }: { app: Application }) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
  }

  app.use(express.json())

  /**
   * Health check
   */
  app.get('/health', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send({ hello: 123 })
  })

  /**
   * Load API routes
   */
  app.use(config.api.prefix, routes())

  /**
   * Error handler
   */
  app.use(errorHandler)

  /**
   * 404
   */
  app.use(NotFoundHandler)
}
