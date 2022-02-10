import http, { IncomingMessage, ServerResponse } from 'http'
import 'dotenv/config'

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT, 10)
const HOST = '0.0.0.0'

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.end('200 ok')
})

server.listen(PORT, HOST, () => {
  console.log('Server listening at http://localhost:' + PORT)
})

console.warn('Warning')
