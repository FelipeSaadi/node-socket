const express = require("express")
const http = require("http")
const path = require("path")
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
  console.log("Conexão detecada...")
})