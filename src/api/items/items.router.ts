import { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const route = Router()

export default (app: Router) => {
  app.use('/items', route)

  route.get('/', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ items: 123 })
  })
}
// export const itemsRouter = express.Router()
