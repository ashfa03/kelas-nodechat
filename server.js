const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// permission file assets
app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', socket => {
  // mengirim pesan
  socket.on('newMessage', (msg) => {
    io.emit('newMessage', msg)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000')
});