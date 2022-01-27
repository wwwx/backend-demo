import * as http from 'http'
import 'dotenv/config'

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT, 10)

const server = http.createServer((req, res) => {
  res.end('OK')
})

server.listen(PORT, () => {
  console.log('server listening at http://localhost:' + PORT)
})
