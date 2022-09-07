'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes(socket) {
  const quotes = tickers.map(ticker => ({
    ticker,
    exchange: 'NASDAQ',
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  socket.emit('ticker', quotes);
}

function trackTickers(socket, interval = FETCH_INTERVAL) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timer = setInterval(function() {
    getQuotes(socket);
  }, interval);

  socket.on('disconnect', function() {
    clearInterval(timer);
  });

  socket.once('clear_interval', () => {
    clearInterval(timer);
    console.log('interval cleared');
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
  socket.on('add_ticker', (data) => {
    const check = tickers.some(ticker => ticker === data);

    if (check) {
      console.log('this ticker already exists');
    } else {
      tickers.push(data);
    }
  });

  socket.on('remove_ticker', (data) => {
    const index = tickers.findIndex(ticker => ticker === data);

    if (index > -1) {
      tickers.splice(index, 1);
    }
  });

  socket.on('start', (interval) => {
    trackTickers(socket, interval);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
