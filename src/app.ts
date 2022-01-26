import * as http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("OK");
});

server.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
