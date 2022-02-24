import express, { Application, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import logger from 'morgan'
import config from '@/config'
import routes from '@/api'
import { errorHandler } from '@/middleware/error.middleware'
import { NotFoundHandler } from '@/middleware/not-found.middleware'
import { requestInterceptor } from '@/middleware/request.middleware'

export default ({ app }: { app: Application }) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
  }

  app.use(express.json())

  app.use(requestInterceptor)

  /**
   * Health check
   */
  app.get('/health', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('200, OK')
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
