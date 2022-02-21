import winston, { format } from 'winston'
import config from '@/config'

const { combine, timestamp, splat, cli, json } = format

const loggerInstance = winston.createLogger({
  level: config.logs.level,
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), splat(), json()),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  loggerInstance.add(
    new winston.transports.Console({
      format: combine(cli(), splat())
    })
  )
}

export default loggerInstance
