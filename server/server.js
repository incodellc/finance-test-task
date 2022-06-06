'use strict'
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const http = require('http')
const io = require('socket.io')
const cors = require('cors')
const server = http.createServer(app)

app.use(cors())

const socketServer = io(server, { cors: { origin: '*' } })

const PORT = process.env.PORT || 4000

const tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA']

const randomValue = (min = 0, max = 1, precision = 0) => {
   const random = Math.random() * (max - min) + min
   return random.toFixed(precision)
}
const utcDate = () => {
   const now = new Date()

   return new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
   )
}
const getQuotes = socket => {
   const quotes = tickers.map(ticker => ({
      ticker,
      exchange: 'NASDAQ',
      price: randomValue(100, 300, 2),
      change: randomValue(0, 200, 2),
      change_percent: randomValue(0, 3, 2),
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
   }))

   socket.emit('ticker', quotes)
}
const trackTickers = (socket, interval) => {
   getQuotes(socket)

   const timer = setInterval(() => {
      getQuotes(socket)
   }, interval)

   socket.on('disconnect', () => clearInterval(timer))
}

socketServer.on('connection', socket => {
   socket.on('start', interval => trackTickers(socket, interval))
})

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.resolve(__dirname, '../client/build')))
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
   })
}

server.listen(PORT, () => {
   console.log(`Streaming service is running on http://localhost:${PORT}`)
})
