import 'dotenv/config'
import express from 'express'
import Logger from './loaders/logger'
import config from '@/config'
// import { HttpException } from './common/http-exception'

// if (process.env.NODE_ENV === 'development') {
//   app.use(logger('dev'))
// }

// test Error
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const err = new HttpException(404, 'Not Found')
//   next(err)
// })

async function startServer() {
  const app = express()

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('./loaders').default({ expressApp: app })

  const { port, host } = config

  app.listen(port, host, () => {
    Logger.info(`Server listening at http://${host}:${port}`)
  })
}

startServer()
