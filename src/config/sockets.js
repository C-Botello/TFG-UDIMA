const io = require('./server').io;

//SOCKETS SERVIDOR
io.on('connection', socket => {
  socket.on('message', body => {
    socket.broadcast.emit('message', {
      body
    })
  })
})
