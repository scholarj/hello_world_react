'use strict'
import express from 'express'
import path from 'path'
import morgan from 'morgan'

let hostname = '0.0.0.0'  // Dont use localhost.
let port = parseInt(process.env.PORT || 80)
let homepage = path.join(__dirname, '/static/index.html')
let staticDir = path.join(__dirname, '/static')

let app = express()

app.use(morgan('combined'))  // Generates access log to stdout.

app.get('/', function (req, res) {
  res.sendFile(homepage)
})

app.use(express.static(staticDir))  // Handles loading static files.

app.listen(port, hostname, function () {
  console.log(`Running server at http://${hostname}:${port}`)
  console.log(`Base app directory is ${__dirname}`)
  console.log(`Serving static files from ${staticDir}\n\n`)
})
