import 'reflect-metadata' // We need this in order to use @Decoractors
import 'dotenv/config'
import express from 'express'
import Logger from './loaders/logger'
import config from '@/config'

async function startServer() {
  const app = express()

  await require('./loaders').default({ expressApp: app })

  const { port, host } = config

  app.listen(port, host, () => {
    Logger.info(`Server listening at http://${host}:${port}`)
  })
}

startServer()
