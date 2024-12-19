
import http from "http"
const hostname = "127.0.0.1"
const port = "3000"

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain")
    res.end(`This server is/was listening to ${hostname}:${port}.`)
})

server.listen(port, hostname, () => {
    console.log(`The server is listening to https://${hostname}:${port}`);
    
})