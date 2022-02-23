import 'reflect-metadata' // We need this in order to use @Decoractors
import 'dotenv/config'
import express from 'express'
import Logger from './loaders/logger'
import config from '@/config'
// import { HttpException } from './common/http-exception'

async function startServer() {
  const app = express()

  // test Error
  // app.use((_req: any, res: any, next: any) => {
  //   const err = new HttpException(404, 'Not Found')
  //   next(err)
  // })

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('./loaders').default({ expressApp: app })

  const { port, host } = config

  app.listen(port, host, () => {
    Logger.info(`Server listening at http://${host}:${port}`)
  })
}

startServer()
