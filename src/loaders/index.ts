import Logger from './logger'
import expressLoader from './express'
import mongooseLoader from './mongoose'
import { Application } from 'express'

export default async ({ expressApp }: { expressApp: Application }) => {
  await mongooseLoader()
  Logger.info('✌️ DB loaded and connected')

  expressLoader({ app: expressApp })
  Logger.info('✌️ Experss loaded')
}
