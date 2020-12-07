let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname  + '/index.html');
});


http.listen(3000, () => {
  console.log('listening on *:3000, Conntetd done');
});


io.on('connection',(socket)=>{
  console.log('there is a connetion!');
  socket.on('disconnect', ()=>{
    console.log('user disconnnnnnnnect!');
  })

  socket.on('Created', (data)=>{
    socket.broadcast.emit('Created', (data) )
  })
  socket.on('chat-messange', (data)=>{
    socket.broadcast.emit('chat-messange', (data) )
  })

  socket.on('typing', (data)=>{
    socket.broadcast.emit('typing', (data) )
  })
  socket.on('stopTyping', (data)=>{
    socket.broadcast.emit('stopTyping', (data) )
  })
  socket.on('joined', (data)=>{
    socket.broadcast.emit('joined', (data) )
  })
  socket.on('leaved', (data)=>{
    socket.broadcast.emit('leaved', (data) )
  })
})
