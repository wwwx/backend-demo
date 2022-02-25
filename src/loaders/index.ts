import Logger from './logger'
import expressLoader from './express'
import mongooseLoader from './mongoose'
import { Application } from 'express'
import dependencyInjectorLoader from './dependencyInjector'

export default async ({ expressApp }: { expressApp: Application }) => {
  await mongooseLoader()
  Logger.info('✌️  DB loaded and connected')

  const itemsModel = { name: 'itemsModel', model: require('../api/items/items.model').default }

  await dependencyInjectorLoader({ models: [itemsModel] })
  Logger.info('✌️  Dependency Injector loaded')

  await expressLoader({ app: expressApp })
  Logger.info('✌️  Experss loaded')
}
