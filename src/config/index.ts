if (!process.env.PORT) {
  process.exit(1)
}

export default {
  port: parseInt(process.env.PORT as string, 10),
  host: '0.0.0.0',

  databaseURL: process.env.DB_URL,

  /**
   * used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info'
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api'
  }
}
