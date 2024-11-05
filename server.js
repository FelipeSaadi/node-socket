const express = require("express")
const paht = require("path")
const http = require("http")
const path = require("path")

const app = express()
const server = http.createServer(app)

server.listen(3000)

app.use(express.static(path.join(__dirname, 'public')))
