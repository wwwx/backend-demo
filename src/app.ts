// import http, { IncomingMessage, ServerResponse } from 'http'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import logger from 'morgan'
import { errorHandler } from './middleware/error.middleware'
import { NotFoundHandler } from './middleware/not-found.middleware'
import { itemsRouter } from './items/items.router'
// import { HttpException } from './common/http-exception'

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT, 10)
const HOST = '0.0.0.0'

const app = express()

app.use(logger('dev'))

app.get('/', (req: Request, res: Response) => {
  res.send('OOK')
})

app.use('/api/items', itemsRouter)

// test Error
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const err = new HttpException(404, 'Not Found')
//   next(err)
// })

app.use(errorHandler)
app.use(NotFoundHandler)

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`)
})

// const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
//   res.end('200 ok')
// })

// server.listen(PORT, HOST, () => {
//   console.log('Server listening at http://localhost:' + PORT)
// })

// test warning
console.warn('Warning')
